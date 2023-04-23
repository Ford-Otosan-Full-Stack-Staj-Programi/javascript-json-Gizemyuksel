
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const groups = {}
    data.forEach(member => {
      if (!groups[member.group]) {
        groups[member.group] = {
          assistants: [],
          members: []
        }
      }
      if (member.assistant) {
        groups[member.group].assistants.push(member)
      } else {
        groups[member.group].members.push(member)
      }
    })

    const groupTableBody = document.getElementById('group-table-body')

    Object.entries(groups).forEach(([groupName, group]) => {
      const assistantNames = group.assistants.map(assistant => assistant.name).join(', ')
      const memberNames = group.members.map(member => member.name).join(', ')
      
      const row = document.createElement('tr')
      const groupNameCell = document.createElement('td')
      const assistantCell = document.createElement('td')
      const memberCell = document.createElement('td')
      
      groupNameCell.textContent = groupName
      assistantCell.textContent = assistantNames
      memberCell.textContent = memberNames
      
      row.appendChild(groupNameCell)
      row.appendChild(assistantCell)
      row.appendChild(memberCell)
      
      groupTableBody.appendChild(row)
    })
  })
  .catch(error => {
    console.error('error occurred: ', error)
  })




