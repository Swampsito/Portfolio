const translations = {
    en: {
        bio: "Bio",
        bioText: "I was born on September 17, 2003, and since I was young, I've had a great passion for video games and software development. I am currently a Multimedia Engineering student at Universidad San Buenaventura Bogotá, in my eighth semester. I have a deep interest in technology, programming, and creating interactive experiences.",
        educationAndCareer: "Education and Career",
        highSchool: "High School",
        highSchoolName: "Colegio Pedagógico Dulce María",
        technicalDegree: "Technical Degree in Software Programming",
        sena: "SENA (2019-2020)",
        multimediaEngineering: "Multimedia Engineering",
        universidad: "Universidad San Buenaventura Bogotá (2021-2025)",
        downloadCV: "Download CV",
        skills: "Skills",
        programmingLanguages: "Programming Languages:",
        skillsList: ["C#", "JavaScript", "Python", "Java", "SQL", "PHP"],
        gameEngines: "Game Engine:",
        enginesList: ["Unity", "Godot 4", "Phaser 3", "Construct"],
        otherTools: "Other tools:",
        toolsList: ["Photoshop", "Gimp", "Aseprite", "Davinci Resolve", "Audacity", "Figma", "Git", "Linux"],
        projects: "Projects",
        projectDescription: "A NES-inspired platformer where an otherworldly creature ventures through a chaotic abyss to restore peace. This game combines classic pixel art with intense, atmospheric levels, challenging players to overcome perilous obstacles and powerful foes.",
        projectPastelDescription: "Project Pastel is a 2D isometric simulation game with a pastel visual style, where players customize their home, engage in mini-games, and enjoy a relaxing day-night cycle to create a unique and decorative space.",
        projectChessmonDescription: "Chessmon Ver Phaser is a tactical RPG prototype inspired by Final Fantasy Tactics. Players collect unique creatures with distinct abilities and engage in strategic, grid-based combat. Built with Phaser, this demo showcases early battle mechanics and evolving tactical gameplay, with ongoing development to expand its features.",
        contact: "Contact",
        contactText: "If you would like to get in touch, feel free to reach out through one of the following methods:",
        email: "Email:",
        phone: "Phone:",
        github: "GitHub",
        itchio: "Itch.io"
    },
    es: {
        bio: "Sobre mí",
        educationAndCareer: "Educación y carrera",
        highSchool: "Bachillerato",
        highSchoolName: "Colegio Pedagógico Dulce María",
        technicalDegree: "Título Técnico en Programación de Software",
        sena: "SENA (2019-2020)",
        multimediaEngineering: "Ingeniería Multimedia",
        universidad: "Universidad San Buenaventura Bogotá (2021-2025)",
        downloadCV: "Descargar CV",
        bioText: "Nací el 17 de septiembre de 2003 y desde pequeño he tenido una gran pasión por los videojuegos y el desarrollo de software. Actualmente, soy estudiante de Ingeniería Multimedia en la Universidad San Buenaventura Bogotá, cursando mi octavo semestre. Me interesa profundamente la tecnología, la programación y la creación de experiencias interactivas.",
        skills: "Habilidades",
        programmingLanguages: "Lenguajes de Programación:",
        skillsList: ["C#", "JavaScript", "Python", "Java", "SQL", "PHP"],
        gameEngines: "Motores de Juego:",
        enginesList: ["Unity", "Godot 4", "Phaser 3", "Construct"],
        otherTools: "Otras herramientas:",
        toolsList: ["Photoshop", "Gimp", "Aseprite", "Davinci Resolve", "Audacity", "Figma", "Git", "Linux"],
        projects: "Proyectos",
        projectDescription: "Un juego de plataformas inspirado en NES, donde una criatura de otro mundo atraviesa un abismo caótico para restaurar la paz. Este juego combina arte pixelado clásico con niveles intensos y atmosféricos, desafiando a los jugadores a superar obstáculos peligrosos y poderosos enemigos.",
        projectPastelDescription: "Project Pastel es un juego de simulación 2D isométrico con un estilo visual pastel, donde los jugadores personalizan su hogar, participan en minijuegos y disfrutan de un ciclo día-noche relajante para crear un espacio único y decorativo.",
        projectChessmonDescription: "Chessmon Ver Phaser es un prototipo de RPG táctico inspirado en Final Fantasy Tactics. Los jugadores coleccionan criaturas únicas con habilidades distintas y participan en combates estratégicos basados en cuadrícula. Desarrollado con Phaser, esta demo muestra mecánicas tempranas de batalla y jugabilidad táctica en evolución.",
        contact: "Contacto",
        contactText: "Si deseas ponerte en contacto, no dudes en hacerlo a través de alguno de los siguientes métodos:",
        email: "Correo:",
        phone: "Teléfono:",
        github: "GitHub",
        itchio: "Itch.io"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.querySelector('.lang-icon');
    const languageMenu = document.getElementById('languageMenu');
    const volumeMenu = document.getElementById('volumeMenu'); 
    const volumeButton = document.querySelector('.sound-icon');

    if (languageMenu) languageMenu.style.display = 'none'; 
    if (volumeMenu) volumeMenu.style.display = 'none'; 

    if (languageButton) {
        languageButton.addEventListener('click', (event) => {
            event.stopPropagation();
            if (volumeMenu) closeMenu(volumeMenu);
            if (languageMenu) toggleMenu(languageMenu);
        });
    }

    if (volumeButton) {
        volumeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            if (languageMenu) closeMenu(languageMenu);
            if (volumeMenu) toggleMenu(volumeMenu);
        });
    }

    document.addEventListener('click', (event) => {
        if (languageMenu && !languageMenu.contains(event.target) && !languageButton.contains(event.target)) {
            languageMenu.style.display = 'none';
        }
        if (volumeMenu && !volumeMenu.contains(event.target) && !volumeButton.contains(event.target)) {
            volumeMenu.style.display = 'none';
        }
    });

    function toggleMenu(menu) {
        if (menu) {
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
            playSound('assets/sounds/icon_option_menu_sfx.wav');
        }
    }

    function closeMenu(menu) {
        if (menu) menu.style.display = 'none';
    }

    window.changeLanguage = (language) => {
        if (languageMenu) languageMenu.style.display = 'none'; 
        updateContent(language);
    };

    function updateContent(language) {
        const langData = translations[language];
        
       // Secciones del perfil
        const profileName = document.querySelector('.profile__name');
        if (profileName) profileName.textContent = 'SEBASTIAN AMAYA';

        const profileRole = document.querySelector('.profile__role');
        if (profileRole) profileRole.textContent = language === 'en' ? 'DEVELOPER' : 'DESARROLLADOR';

        // Sección "About Me"
        const bioTitle = document.querySelector('#bio-info h3');
        if (bioTitle) bioTitle.textContent = langData.bio;

        const bioText = document.querySelector('#bio-info p');
        if (bioText) bioText.textContent = langData.bioText;

        // Actualización del contenido de la sección de educación y carrera
        const educationTitle = document.querySelector('#bio-page-2 h3');
        if (educationTitle) educationTitle.textContent = langData.educationAndCareer;

        const highSchoolItem = document.querySelector('#bio-page-2 ul li:first-child');
        if (highSchoolItem) highSchoolItem.innerHTML = `<strong>${langData.highSchool}:</strong> ${langData.highSchoolName}`;

        const technicalDegreeItem = document.querySelector('#bio-page-2 ul li:nth-child(2)');
        if (technicalDegreeItem) technicalDegreeItem.innerHTML = `<strong>${langData.technicalDegree}:</strong> ${langData.sena}`;

        const multimediaEngineeringItem = document.querySelector('#bio-page-2 ul li:nth-child(3)');
        if (multimediaEngineeringItem) multimediaEngineeringItem.innerHTML = `<strong>${langData.multimediaEngineering}:</strong> ${langData.universidad}`;
        
        const downloadCVButton = document.querySelector('.download-cv-button a');
        if (downloadCVButton) downloadCVButton.textContent = langData.downloadCV;

        
        // Sección "Skills"
        const skillsTitle = document.querySelector('#skills-info h3');
        if (skillsTitle) skillsTitle.textContent = langData.skills;
    
        const programmingLanguages = document.querySelector('#skills-info .programming-languages');
        if (programmingLanguages) programmingLanguages.textContent = langData.programmingLanguages;
    
        const gameEngines = document.querySelector('#skills-info .game-engines');
        if (gameEngines) gameEngines.textContent = langData.gameEngines;
    
        const otherTools = document.querySelector('#skills-info .other-tools');
        if (otherTools) otherTools.textContent = langData.otherTools;
        
        // Sección "Projects"
        const projectsTitle = document.querySelector('#projects-info h3');
        if (projectsTitle) projectsTitle.textContent = langData.projects;
    
        const projectDescription = document.querySelector('#projects-info p');
        if (projectDescription) projectDescription.textContent = langData.projectDescription;
        
        document.querySelectorAll('.projects-section').forEach((section, index) => {
            const projectDescriptions = [
                langData.projectDescription,
                langData.projectPastelDescription,
                langData.projectChessmonDescription
            ];
        
            const projectDescParagraph = section.querySelector('p');
            if (projectDescParagraph) {
                projectDescParagraph.textContent = projectDescriptions[index];
            }
        });
        

        // Actualizar listas
        updateList('#skills-info .skills-list', langData.skillsList);
        updateList('#skills-info .game-engines-list', langData.enginesList);
        updateList('#skills-info .other-tools-list', langData.toolsList);
    
        // Botones de la barra lateral
        const sidebarButtons = document.querySelectorAll('.sidebar__button');
        if (sidebarButtons.length > 0) sidebarButtons[0].querySelector('.sidebar__label').textContent = langData.bio;
        if (sidebarButtons.length > 1) sidebarButtons[1].querySelector('.sidebar__label').textContent = langData.skills;
        if (sidebarButtons.length > 2) sidebarButtons[2].querySelector('.sidebar__label').textContent = langData.projects;
        if (sidebarButtons.length > 3) sidebarButtons[3].querySelector('.sidebar__label').textContent = langData.contact;

        // Sección "Contact"
        const contactTitle = document.querySelector('#contact-info h3');
        if (contactTitle) contactTitle.textContent = langData.contact;

        const contactText = document.querySelector('#contact-info p');
        if (contactText) contactText.textContent = langData.contactText;

        const emailLabel = document.querySelector('#contact-info #email-label');
        if (emailLabel) emailLabel.textContent = langData.email; 

        const phoneValue = document.querySelector('#contact-info #phone-value');
        if (phoneValue) phoneValue.textContent = langData.phone;

        const githubLink = document.querySelector('#contact-info #github-link');
        if (githubLink) githubLink.textContent = langData.github;

        const itchioLink = document.querySelector('#contact-info #itchio-link');
        if (itchioLink) itchioLink.textContent = langData.itchio;
    }

    function updateList(selector, list) {
        const listContainer = document.querySelector(selector);
        if (listContainer) {
            listContainer.innerHTML = list.map(item => `<li>${item}</li>`).join('');
        }
    }
});
