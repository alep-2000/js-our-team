"use strict"

// ARRAY
let team = [
    // OGGETTI
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    },
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    }
]

const team_container=document.getElementById('team');
for(let i=0; i<team.length; i++){
    let team_group= team[i];

    for(let key in team_group){
        console.log(`${key}  ${team_group[key]}`);
    }
    console.log('---->');

    let team_information= `<div class="team">
        <p>${team_group.name}</p>
        <p>${team_group.role}</p>
        ${team_group.image}
    </div>`

    team_container.innerHTML += team_information
}



