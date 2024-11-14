const translations = {
    en: {
        bio: "About Me",
        bioText: "I was born on September 17, 2003. I have always been passionate about video games and game development, with a strong interest in technology and programming in general.",
        skills: "Skills",
        programmingLanguages: "Programming Languages:",
        skillsList: ["C#", "JavaScript", "Python", "Java", "SQL", "PHP"],
        gameEngines: "Game Engine:",
        enginesList: ["Unity", "Godot 4", "Phaser 3", "Construct"],
        otherTools: "Other tools:",
        toolsList: ["Photoshop", "Gimp", "Aseprite", "Davinci Resolve", "Audacity", "Figma", "Git", "Linux"],
        projects: "Projects",
        projectDescription: "A NES-inspired platformer where an otherworldly creature ventures through a chaotic abyss to restore peace. This game combines classic pixel art with intense, atmospheric levels, challenging players to overcome perilous obstacles and powerful foes."
    },
    es: {
        bio: "Sobre mí",
        bioText: "Nací el 17 de septiembre de 2003. Siempre he sido un apasionado de los videojuegos y el desarrollo de juegos, con un gran interés en la tecnología y la programación en general.",
        skills: "Habilidades",
        programmingLanguages: "Lenguajes de Programación:",
        skillsList: ["C#", "JavaScript", "Python", "Java", "SQL", "PHP"],
        gameEngines: "Motores de Juego:",
        enginesList: ["Unity", "Godot 4", "Phaser 3", "Construct"],
        otherTools: "Otras herramientas:",
        toolsList: ["Photoshop", "Gimp", "Aseprite", "Davinci Resolve", "Audacity", "Figma", "Git", "Linux"],
        projects: "Proyectos",
        projectDescription: "Un juego de plataformas inspirado en NES, donde una criatura de otro mundo atraviesa un abismo caótico para restaurar la paz. Este juego combina arte pixelado clásico con niveles intensos y atmosféricos, desafiando a los jugadores a superar obstáculos peligrosos y poderosos enemigos."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.querySelector('.lang-icon');
    const languageMenu = document.getElementById('languageMenu');
    const volumeMenu = document.getElementById('volumeMenu'); 
    const volumeButton = document.querySelector('.sound-icon');

    languageMenu.style.display = 'none'; 
    volumeMenu.style.display = 'none'; 

    if (languageButton) {
        languageButton.addEventListener('click', (event) => {
            event.stopPropagation();
            closeMenu(volumeMenu);
            toggleMenu(languageMenu);
        });
    }

    if (volumeButton) {
        volumeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            closeMenu(languageMenu);
            toggleMenu(volumeMenu);
        });
    }

    document.addEventListener('click', (event) => {
        if (!languageMenu.contains(event.target) && !languageButton.contains(event.target)) {
            languageMenu.style.display = 'none';
        }
        if (!volumeMenu.contains(event.target) && !volumeButton.contains(event.target)) {
            volumeMenu.style.display = 'none';
        }
    });

    function toggleMenu(menu) {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        playSound('assets/sounds/icon_option_menu_sfx.wav');
    }

    function closeMenu(menu) {
        menu.style.display = 'none';
    }

    window.changeLanguage = (language) => {
        languageMenu.style.display = 'none'; 
        updateContent(language);
    };

    function updateContent(language) {
        const langData = translations[language];
        document.querySelector('.profile__name').textContent = 'SEBASTIAN AMAYA';
        document.querySelector('.profile__role').textContent = language === 'en' ? 'DEVELOPER' : 'DESARROLLADOR';
        document.querySelector('#bio-info h3').textContent = langData.bio;
        document.querySelector('#bio-info p').textContent = langData.bioText;
        document.querySelector('#skills-info h3').textContent = langData.skills;
        document.querySelector('#projects-info h3').textContent = langData.projects;
        document.querySelector('#projects-info p').textContent = langData.projectDescription;

        updateList('#skills-info .skills-list', langData.skillsList);
        updateList('#skills-info .game-engines-list', langData.enginesList);
        updateList('#skills-info .other-tools-list', langData.toolsList);

        document.querySelector('#skills-info .programming-languages').textContent = langData.programmingLanguages;
        document.querySelector('#skills-info .game-engines').textContent = langData.gameEngines;
        document.querySelector('#skills-info .other-tools').textContent = langData.otherTools;
    }

    function updateList(selector, list) {
        document.querySelector(selector).innerHTML = list.map(item => `<li>${item}</li>`).join('');
    }
});

function playSound(src) {
    const sound = new Audio(src);
    const volumeSlider = document.getElementById('volumeRange');
    sound.volume = volumeSlider ? volumeSlider.value / 100 : 1;
    sound.play();
}
