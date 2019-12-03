const project = document.getElementById('project');
const buttonMobile = document.getElementById('buttonMobile');


if(window.innerWidth <= 375) {
    buttonMobile.style.display = 'none';
}


buttonMobile.addEventListener('click', () => {
    if(buttonMobile.innerHTML === 'Mobile') {
        if(project.src.slice(-19) === "theyalow/index.html") {
            project.src = "./theyalow/mobile.html";
            project.width = '640px';
        } else {
            project.width = '375px';
        }
        buttonMobile.innerHTML = 'Desktop';
    }
    else {
        if(project.src.slice(-20) === "theyalow/mobile.html") {
            project.src = "./theyalow/index.html";
        }
        project.width = '100%';
        buttonMobile.innerHTML = 'Mobile';
    }
});

function switchButtonText() {
    if(buttonMobile.innerHTML === 'Mobile') {
        buttonMobile.innerHTML = 'Desktop';
    } else {
        buttonMobile.innerHTML = 'Mobile';
    }
}