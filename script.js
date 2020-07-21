//spoiler
const controls = document.getElementById('control');
const education = document.getElementById('education');
const spoilerL = document.getElementById('spoilerLeft');
const spoilerR = document.getElementById('spoilerRight');
const educationStyle = getComputedStyle(education);

function spoiler(element) {
    if (educationStyle.height === '75px') {
        education.style.height = 'auto';
        spoilerL.className = 'control__spoiler--left-close';
        spoilerR.className = 'control__spoiler--right-close';

    } else if (+(educationStyle.height.slice(0, -2)) > 75) {
        education.style.height = '75px';
        spoilerL.className = 'control__spoiler--left';
        spoilerR.className = 'control__spoiler--right';
    }
}
controls.addEventListener('click', spoiler);


//slider
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const theyalow = document.getElementById('theyalow');
const repair = document.getElementById('repair');

prev.addEventListener('click', () => {
    if (theyalow.className === "projects__slider__container__project active") {
        theyalow.className="projects__slider__container__project";
        repair.className="projects__slider__container__project active";
    } else {
        repair.className="projects__slider__container__project";
        theyalow.className="projects__slider__container__project active";
    }
})

next.addEventListener('click', () => {
    if (theyalow.className === "projects__slider__container__project active") {
        theyalow.className="projects__slider__container__project";
        repair.className="projects--slider--container--project active";
    } else {
        repair.className="projects__slider__container__project";
        theyalow.className="projects__slider__container__project active";
    }
})


//показ инфы в мобильном виде
const showBtn = document.getElementById('show');
const info = document.querySelectorAll('.projects__swiper__project__info');

showBtn.addEventListener('click', () => {
    if (getComputedStyle(info[0]).display === 'none') {
        info[0].style.display = 'block';

    } else if (getComputedStyle(info[0]).display === 'block') {
        info[0].style.display = 'none';
    }

    if (getComputedStyle(info[1]).display === 'none') {
        info[1].style.display = 'block';

    } else if (getComputedStyle(info[1]).display === 'block') {
        info[1].style.display = 'none';
    }
});


//swiper
const swiper = document.getElementById('swiper');
const theyalowMobile = document.getElementById('theyalowMobile');
const repairMobile = document.getElementById('repairMobile');

let positionOnStart;
let positionOnEnd;

function swipeDetect(e) {
    let touchobj = e.changedTouches[0];
    let x = touchobj.pageX;
    return x;
}

swiper.addEventListener('touchstart', () => {
    positionOnStart = Math.floor(swipeDetect(event));
});
swiper.addEventListener('touchend', () => {
    positionOnEnd = Math.floor(swipeDetect(event));
    let swipe = positionOnStart - positionOnEnd;
    if(swipe > 100 || swipe < -100) {
        if (theyalowMobile.className === "projects__swiper__project mobile-active") {
            theyalowMobile.className="projects__swiper__project";
            repairMobile.className="projects__swiper__project mobile-active";
        } else {
            repairMobile.className="projects__swiper__project";
            theyalowMobile.className="projects__swiper__project mobile-active";
        }
    }
});