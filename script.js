//спойлер
let controls = document.getElementById('control');
let education = document.getElementById('education');
let spoilerL = document.getElementById('spoilerLeft');
let spoilerR = document.getElementById('spoilerRight');
const educationStyle = getComputedStyle(education);

function spoiler() {
    if (educationStyle.height === '75px') {
        education.style.height = '350px';
        spoilerL.className = 'education--control--spoiler__left-close';
        spoilerR.className = 'education--control--spoiler__right-close';

    } else if (educationStyle.height === '350px') {
        education.style.height = '75px';
        spoilerL.className = 'education--control--spoiler__left';
        spoilerR.className = 'education--control--spoiler__right';
    }
}
controls.addEventListener('click', spoiler);

//слайдер
let containerWidth = document.querySelector('.projects--slider--container').offsetWidth;
console.log(containerWidth);

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let project1 = document.getElementById('project-1');
let project2 = document.getElementById('project-2');

prev.addEventListener('click', () => {
    if (project1.className === "projects--slider--container--project") {
    project2.className="projects--slider--container--project";
    project1.className="projects--slider--container--project active";
    } else {
        project1.className="projects--slider--container--project";
        project2.className="projects--slider--container--project active";
    }
})

next.addEventListener('click', () => {
    if (project2.className === "projects--slider--container--project") {
        project1.className="projects--slider--container--project";
        project2.className="projects--slider--container--project active";
    } else {
        project2.className="projects--slider--container--project";
        project1.className="projects--slider--container--project active";
    }
})