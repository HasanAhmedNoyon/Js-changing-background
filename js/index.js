function makeRed(){
    const redBg = document.body.style.backgroundColor = '#bd2130';
    const heading = document.getElementById('heading');
    heading.style.color = 'white'; 
    heading.innerText = "Designer"
}

function makeYellow(){
    const redBg = document.body.style.backgroundColor = '#ffc107';
    const heading = document.getElementById('heading');
    heading.style.color = 'black'; 
    heading.innerText = "Freelancer"
}

function makeBlack(){
    const redBg = document.body.style.backgroundColor = '#343a40';
    const heading = document.getElementById('heading');
    heading.style.color = 'white'; 
    heading.innerText = "Programmer"
}

function makeDefault(){
    const redBg = document.body.style.backgroundColor = 'white';
    const heading = document.getElementById('heading');
    heading.style.color = 'black'; 
    heading.innerText = "Developer"
}