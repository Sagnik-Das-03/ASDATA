const teamMembers = [
    { name: 'Member 1', role: 'Role 1' },
    { name: 'Member 2', role: 'Role 2' },
    { name: 'Member 3', role: 'Role 3' },
    { name: 'Member 4', role: 'Role 4' },
    { name: 'Member 5', role: 'Role 5' },
    { name: 'Member 6', role: 'Role 6' }
];

const teamMembersContainer = document.querySelector('.team-members');

teamMembers.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.classList.add('team-member-card');
    memberCard.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p>`;
    teamMembersContainer.appendChild(memberCard);
});
