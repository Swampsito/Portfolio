document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.sidebar__button');
    const profilePic = document.querySelector('.profile__pic');
    const infoSections = {
        bio: document.getElementById('bio-info'),
        skills: document.getElementById('skills-info'),
        projects: document.getElementById('projects-info'),
        contact: document.getElementById('contact-info'), 
    };

    if (Math.random() < 0.1) {
        profilePic.src = 'assets/imgs/profile-pic-2.png';
    }

    function displaySection(sectionKey) {
        Object.values(infoSections).forEach(section => section.style.display = 'none');
        const selectedSection = infoSections[sectionKey];
        if (selectedSection) {
            selectedSection.style.display = 'block';
            const pages = selectedSection.querySelectorAll('.bio-section, .skills-section, .projects-section');
            pages.forEach(page => page.style.display = 'none');
            if (pages.length > 0) pages[0].style.display = 'block';

            const [nextIcon, prevIcon] = selectedSection.querySelectorAll('.next-ico, .prev-ico');
            if (nextIcon && prevIcon) {
                nextIcon.style.display = pages.length > 1 ? 'block' : 'none';
                prevIcon.style.display = 'none';
            }
        }
    }

    buttons[0].addEventListener('click', () => displaySection('bio'));
    buttons[1].addEventListener('click', () => displaySection('skills'));
    buttons[2].addEventListener('click', () => displaySection('projects'));
    buttons[3].addEventListener('click', () => displaySection('contact')); 
});

function closeContainer(containerId) {
    document.getElementById(containerId).style.display = 'none';
}

function changePage(containerId, direction) {
    const container = document.getElementById(containerId);
    const pages = container.querySelectorAll('.bio-section, .skills-section, .projects-section');
    let currentIndex = Array.from(pages).findIndex(page => page.style.display === 'block');

    if (currentIndex === -1) return;

    pages[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + direction + pages.length) % pages.length;
    pages[currentIndex].style.display = 'block';

    const [nextIcon, prevIcon] = container.querySelectorAll('.next-ico, .prev-ico');
    nextIcon.style.display = (currentIndex === pages.length - 1) ? 'none' : 'block';
    prevIcon.style.display = (currentIndex === 0) ? 'none' : 'block';
    prevIcon.classList.toggle('flipped', currentIndex !== 0);
}

function goToNext(containerId) {
    changePage(containerId, 1);
}

function goToPrevious(containerId) {
    changePage(containerId, -1);
}
