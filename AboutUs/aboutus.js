const teamMembers = [
    { name: 'Ankita Bandyopadhyay', role: '' },
    { name: 'Sagnik Das', role: '' },
    { name: 'Debarun Das', role: '' },
    { name: 'Arkapriya Sinha', role: '' },
    { name: 'Trisha Kabiraj', role: '' },
    { name: 'Arghyadeep Karmakar', role: '' }
];

const teamMembersContainer = document.querySelector('.team-members');

teamMembers.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.classList.add('team-member-card');
    memberCard.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p>`;
    teamMembersContainer.appendChild(memberCard);
});
