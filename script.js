//spoiler
const controlEducation = document.getElementById('control-education');
const controlAbout = document.getElementById('control-about');

controlEducation.addEventListener('click', (event) => {
    getSpoilerControl(event);
});
controlAbout.addEventListener('click', (event) => {
    getSpoilerControl(event);
});

function getSpoilerControl(event) {
    let target = event.target;
    while (target != this) {
        if (target.className == 'control') {
            spoilerToggle(target);
            return;
        }
        target = target.parentNode;
    }
}

function spoilerToggle(element) {
    const parent = element.parentNode;
    const height = parent.clientHeight;
    const spoilerL = element.children[1].children[0];
    const spoilerR = element.children[1].children[1];

    if (height === 75) {
        parent.style.height = `${parent.scrollHeight}px`;
        spoilerL.className = 'control__spoiler--left-close';
        spoilerR.className = 'control__spoiler--right-close';

    } else if (height > 75) {
        parent.style.height = '75px';
        spoilerL.className = 'control__spoiler--left';
        spoilerR.className = 'control__spoiler--right';
    }
}


//slider
const sliderWrapper = document.getElementById('slider-wrapper');
const sliderDots = document.getElementById('slider-dots');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let projectsArray = [];
let currentIndex = 0;

function createSlide(slideObj) {
    let project = document.createElement('div');
    project.className = 'project';
    project.innerHTML = `<div class="project__description-wrapper">
                            <h2>${slideObj.title}</h2>
                            <p>Technology stack: ${slideObj.stack}</p>
                            <p class="project__description">${slideObj.description}</p>
                            <p>Click <a href="${slideObj.deployLink}" target="_blank">here</a> to see 
                                the deploy project or 
                                <a href="${slideObj.githubLink}" target="_blank">here</a> to 
                                see GitHub repository.
                            </p>
                        </div>
                        <a class="project__preview-wrapper" href="${slideObj.deployLink}" target="_blank">
                            <img class="project__preview" src="${slideObj.preview}">
                        </a>`
    return project;
}

function createDot(index) {
    let dot = document.createElement('div');
    if(index === 0) {
        dot.className = 'dot dot-selected';
    } else {
        dot.className = 'dot';
    }

    return dot;
}

async function generateSlides() {
    await fetch('./projects/projects.json')
        .then((res) => res.json())
        .then((data) => {
            projectsArray = data.projects;

            let sliderFragment = new DocumentFragment();
            let dotsFragment = new DocumentFragment();
            for(let i = 0; i < projectsArray.length; i++) {
                sliderFragment.append(createSlide(projectsArray[i]));
                dotsFragment.append(createDot(i));
            }
            sliderWrapper.append(sliderFragment);
            sliderDots.append(dotsFragment);
        })
}

generateSlides();

function moveSlide(side = 0) {
    const step = sliderWrapper.scrollWidth / projectsArray.length;

    currentIndex += side;
    if(currentIndex > projectsArray.length - 1) {
        currentIndex = 0;
    }
    if(currentIndex < 0) {
        currentIndex = projectsArray.length - 1;
    }

    sliderWrapper.style.left = `${step * -currentIndex}px`;

    selectDot(currentIndex);
}

function selectDot(index) {
    let dotsArray = document.querySelectorAll('.dot');
    dotsArray.forEach((dot) => dot.className = 'dot');
    dotsArray[index].classList.add('dot-selected');
}

prev.addEventListener('click', () => {
    moveSlide(-1);
})

next.addEventListener('click', () => {
    moveSlide(1);
})


//показ инфы в мобильном виде
const showBtn = document.getElementById('show');
let description;
let isShowDescription = true;

showBtn.addEventListener('click', () => {
    description = document.querySelectorAll('.project__description-wrapper');

    description.forEach((node) => {
        if(isShowDescription) {
            node.style.display = 'none';
            showBtn.innerHTML = 'Show info';
        } else {
            node.style.display = 'block';
            showBtn.innerHTML = 'Hide info';
        }
    });

    isShowDescription = !isShowDescription;
});


//swiper
// const swiper = document.getElementById('swiper');
// const theyalowMobile = document.getElementById('theyalowMobile');
// const repairMobile = document.getElementById('repairMobile');

// let positionOnStart;
// let positionOnEnd;

// function swipeDetect(e) {
//     let touchobj = e.changedTouches[0];
//     let x = touchobj.pageX;
//     return x;
// }

// swiper.addEventListener('touchstart', () => {
//     positionOnStart = Math.floor(swipeDetect(event));
// });
// swiper.addEventListener('touchend', () => {
//     positionOnEnd = Math.floor(swipeDetect(event));
//     let swipe = positionOnStart - positionOnEnd;
//     if(swipe > 100 || swipe < -100) {
//         if (theyalowMobile.className === "projects__swiper__project mobile-active") {
//             theyalowMobile.className="projects__swiper__project";
//             repairMobile.className="projects__swiper__project mobile-active";
//         } else {
//             repairMobile.className="projects__swiper__project";
//             theyalowMobile.className="projects__swiper__project mobile-active";
//         }
//     }
// });