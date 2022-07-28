const viewport = document.querySelector('.viewport');
const viewportWidth = viewport.clientWidth;
const clouds = Array.from(viewport.querySelectorAll('.entry'));
const breakpoints = document.querySelector('.breakpoints');
const pages = document.querySelector('.pages');
const frames = Array.from(pages.children);
const scroller = document.querySelector('.helper');

const welcomeFrame = pages.querySelector('.logo-frame');
const welcomeFrameLength = Number(welcomeFrame.getAttribute('r')) * Math.PI * 2;
const welcomeFrameDashOffset = Number(welcomeFrame.getAttribute('stroke-dashoffset') || 0);
const welcomeFrameMultiplier = welcomeFrameLength / viewportWidth * 2;

const commonFrame = pages.querySelector('.common-frame');
const commonFrameLength =  Number((commonFrame.width.baseVal.value + commonFrame.height.baseVal.value) * 2);
const commonFrameDashOffset =  Number(commonFrame.getAttribute('stroke-dashoffset') || 0);
const commonFrameMultiplier =  commonFrameLength / viewportWidth * 2

const dateFrame1 = pages.querySelector('.date-frame-1');
const dateFrame2 = pages.querySelector('.date-frame-2');
const dateOfficial = pages.querySelector('.page-date .date-official');
const dateRest = pages.querySelector('.page-date .date-rest');
const dateFrameLength = 960;
const dateFrameDashOffset = Number(dateFrame1.getAttribute('stroke-dashoffset') || 0);
const dateFrameMultiplier = dateFrameLength / viewportWidth * 2;
const contactsFrame = pages.querySelector('.contacts-frame');
const rulesGifts = pages.querySelector('.page-contacts .gifts');
const rulesChild = pages.querySelector('.page-contacts .child');
const rulesCall = pages.querySelector('.page-contacts .call');
const contactsFrameLength = Number((contactsFrame.width.baseVal.value + contactsFrame.height.baseVal.value) * 2);
const contactsFrameDashOffset = Number(contactsFrame.getAttribute('stroke-dashoffset') || 0);
const contactsFrameMultiplier = contactsFrameLength / viewportWidth * 2;
const modal = document.querySelector('.contacts-list');
let activeIndex = 0;


let isOfficial = false;
let count = "Дорогой";
let person = "тебя";
let meet = "тобой";
let names = 'Друг';
let gift = 'ты подаришь';
let call = 'ты можешь';
const { search } = window.location;
const entries = Array.from(document.querySelectorAll('.pages .box'));

if (search) {
    const query = search.replace(/\?g=|\?q=/, '');
    switch (query) {
        case 'fCNuQzJ0':
            names = 'Мама и Папа';
            isOfficial = true;
            count = 'Дорогие';
            person ='вас';
            meet ='вами';
            call='вы можете';
            gift = 'вы подарите';
            break;
        case 'SCNuQDJ0':
            names = 'Бабуля и Дедуля';
            isOfficial = true;
            count = 'Дорогие';
            person ='вас';
            meet ='вами';
            call='вы можете';
            gift = 'вы подарите';
            break;
        case 'YCNuQDK0':
            names = 'Ирина и Роман';
            count = 'Дорогие';
            person ='вас';
            meet ='вами';
            call='вы можете';
            gift = 'вы подарите';
            break;
        case 'cCNuQvJ0':
            names = 'Марина и Алексей';
            isOfficial = true;
            count = 'Дорогие';
            person ='вас';
            meet ='вами';
            call='вы можете';
            gift = 'вы подарите';
            break;
        case 'QCNuQHJ0':
            names = 'Анна и Булат';
            isOfficial = true;
            count = 'Дорогие';
            person ='вас';
            meet ='вами';
            call='вы можете';
            gift = 'вы подарите';
            break;
        case 'UCNuQHK0':
            names = 'Дина и Александр';
            isOfficial = false;
            count = 'Дорогие';
            person ='вас';
            meet ='вами';
            call='вы можете';
            gift = 'вы подарите';
            break;
        case 'WCNuQLK0':
            names = 'Евгения и Анатолий';
            isOfficial = false;
            count = 'Дорогие';
            person ='вас';
            meet ='вами';
            call='вы можете';
            gift = 'вы подарите';
            break;
        case 'QCNuQDJ0':
            names = 'Айя и Арслан';
            isOfficial = false;
            count = 'Дорогие';
            person ='вас';
            meet ='вами';
            call='вы можете';
            gift = 'вы подарите';
            break;
        case 'BGNsQ3J0':
            names = 'Анастасия';
            isOfficial = true;
            count = 'Дорогая';
            person ='тебя';
            meet ='тобой';
            call='ты можешь';
            gift = 'ты подаришь';
            break;
        case 'IGNsQHK0':
            names = 'Александр';
            isOfficial = false;
            count = 'Дорогой';
            person ='тебя';
            meet ='тобой';
            call='ты можешь';
            gift = 'ты подаришь';
            break;
        case '0CdvQDJ0':
            names = 'Андрей';
            isOfficial = false;
            count = 'Дорогой';
            person ='тебя';
            meet ='тобой';
            call='ты можешь';
            gift = 'ты подаришь';
            break;
        case '0CgfGHS0':
            names = 'Анна';
            isOfficial = false;
            count = 'Дорогая';
            person ='тебя';
            meet ='тобой';
            call='ты можешь';
            gift = 'ты подаришь';
            break;
        case 'zCduQDJ0':
            names = 'Айгуль';
            isOfficial = false;
            count = 'Дорогая';
            person ='тебя';
            meet ='тобой';
            call='ты можешь';
            gift = 'ты подаришь';
            break;
        default:
            names = 'Друг';
            isOfficial = true;
            count = 'Дорогой';
            person ='тебя';
            meet ='тобой';
            call='ты можешь';
            gift = 'ты подаришь';
    }
}

entries[0].innerHTML = count;
entries[1].innerHTML = names;
entries[2].innerHTML = person;
entries[3].innerHTML = meet;
entries[4].innerHTML = gift;
entries[5].innerHTML = call;

const setActivePage = (index) => {
    if(frames[index].classList.contains('_active')) {
        return;
    }
    activeIndex = index;
    frames.forEach(item => {
        item.classList.remove('_active');
    });
    frames[index].classList.add('_active');
}

const invertScroll = (event) => {
    if (!event.deltaY) {
        return;
    }

    breakpoints.scrollLeft -= event.deltaY + event.deltaX;
    // start -= event.deltaY + event.deltaX;

    event.preventDefault();
    // handler()
}

const handler = () => {
    const value = breakpoints.scrollLeft;
    modal.classList.remove('_active');
    clouds.forEach((cloud, index) => {
        const {left, width} = cloud.getBoundingClientRect();
        let multiplier = 0;

        switch (index) {
            case 0:
                multiplier = 0;
                break;
            case 1:
                multiplier = -.02;
                break;
            case 2:
                multiplier = .11;
                break;
            case 3:
                multiplier = .18;
                break;
            case 4:
                multiplier = -.04;
                break;
            case 5:
                multiplier = .03;
                break;
            case 6:
                multiplier = .15;
                break;
            case 7:
                multiplier = -.05;
                break;
            case 8:
                multiplier = -.02;
                break;
            case 9:
                multiplier = .17;
                break;
            case 10:
                multiplier = .23;
                break;
            case 11:
                multiplier = .15;
                break;
            case 12:
                multiplier = .45;
                break;
            case 13:
                multiplier = 1.05;
                break;
            case 14:
                multiplier = .57;
                break;
            case 15:
                multiplier = .74;
                break;
            case 16:
                multiplier = .33;
                break;
            case 17:
                multiplier = .15;
                break;
            case 18:
                multiplier = .07;
                break;
            case 19:
                multiplier = .1;
                break;
            case 20:
                multiplier = .12;
                break;
            case 21:
                multiplier = .015;
                break;
            default:
                multiplier = .09;
                break;
        }
        cloud.style.transform =`translateX(${-1 * value * multiplier}px)`;
    });

    if (value > viewportWidth/2 && value < viewportWidth) {
        setActivePage(0);
        welcomeFrame.setAttribute('stroke-dashoffset', `${welcomeFrameDashOffset +  (value-viewportWidth/2) * welcomeFrameMultiplier}`);
    }

    if (value >= viewportWidth && value < viewportWidth * 1.5) {
        setActivePage(1);
        if ((value - viewportWidth) * commonFrameMultiplier < commonFrameDashOffset) {
            commonFrame.setAttribute('stroke-dashoffset', `${commonFrameDashOffset + (value - viewportWidth) * commonFrameMultiplier}`);
            commonFrame.setAttribute('stroke-dasharray', `${(value - viewportWidth) * commonFrameMultiplier} ${commonFrameLength}`);
        } else {
            commonFrame.setAttribute('stroke-dashoffset', 0);
            commonFrame.setAttribute('stroke-dasharray', `${commonFrameLength}`);
        }
    }

    if (value >= viewportWidth * 1.5 && value < viewportWidth * 2) {
        commonFrame.setAttribute('stroke-dashoffset', `${-1 * (value - viewportWidth * 1.5) * commonFrameMultiplier}`);
    }

    if (value >= viewportWidth * 2 && value < viewportWidth * 3) {
        setActivePage(2);
        if(isOfficial) {
            dateRest.classList.remove('_active');
            dateOfficial.classList.add('_active');
        } else {
            dateOfficial.classList.remove('_active');
            dateRest.classList.add('_active');
        }

        dateFrame1.setAttribute('stroke-dashoffset', `${dateFrameDashOffset + (value - viewportWidth * 2) * dateFrameMultiplier}`);
        if (value >= viewportWidth * 2.1) {
            dateFrame2.setAttribute('stroke-dashoffset', `${dateFrameDashOffset + (value - viewportWidth * 2.1) * dateFrameMultiplier}`);
        }
    }

    if (value >= viewportWidth * 3) {
        setActivePage(3);
        rulesGifts.classList.add('_active');
        rulesChild.classList.remove('_active');
        rulesCall.classList.remove('_active');

        if(value < Math.round(viewportWidth * 4.5)) {
            contactsFrame.setAttribute('stroke-dashoffset', `${contactsFrameDashOffset + (value - viewportWidth * 4) * contactsFrameMultiplier}`);
        }

        if (value >= viewportWidth * 4) {
            rulesChild.classList.add('_active');
            rulesGifts.classList.remove('_active');
            rulesCall.classList.remove('_active');
        }
        if (value >= viewportWidth * 5) {
            activeIndex = 5;
            rulesGifts.classList.remove('_active');
            rulesChild.classList.remove('_active');
            rulesCall.classList.add('_active');
        }
        if (value >= viewportWidth * 6) {
            setActivePage(2);
        }
    }
}


breakpoints.addEventListener('wheel', invertScroll);
breakpoints.addEventListener('mousewheel', invertScroll);
breakpoints.addEventListener('scroll', handler);

document.addEventListener('click', () => {
    if(activeIndex === 2) {
        if(isOfficial) {
            window.open('https://yandex.ru/maps/43/kazan/?ll=49.107951%2C55.812090&mode=routes&rtext=~55.812880%2C49.108288&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D5902021407&z=16.77', '_blank')
        } else {
            window.open('https://yandex.ru/maps/43/kazan/?ll=49.116130%2C55.788570&mode=routes&rtext=~55.787574%2C49.108678&rtt=auto&ruri=~&z=15.27', '_blank')
        }
    }

    if (activeIndex === 5 ) {
        if(!modal.classList.contains('_active')) {
            modal.classList.add('_active');
        } else {
            modal.classList.remove('_active');
        }
    }
})
