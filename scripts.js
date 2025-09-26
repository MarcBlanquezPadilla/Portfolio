const projects = [
  {
    title: "VOXLAND",
    videoSrc: "resources/Voxland.mp4",
    description: "VOXLAND is a graphic adventure and point & click game in which our protagonist becomes stranded on an island after losing control of their boat and crashing against the shore, leaving it wrecked. Once on the island, we can gather resources either by picking them up from the ground or by using tools. We will also encounter other characters who live on the island, and they will help us in our adventure to repair the boat and escape the island.",
    teamSize: 2,
    duration: "3 months",
    tools: "Unity (C++)",
    githubLink: "https://github.com/MarcBlanquezPadilla/Voxland/releases/tag/v.0.1.0",
    codeLink: "https://github.com/MarcBlanquezPadilla/Voxland/tree/v.0.1.0/Assets/Scripts"
  },
  {
    title: "NIX - The Eternal Night",
    videoSrc: "resources/NixTheEternalNight.mp4",
    description: "NIX is a third-person shooter with a survival horror aesthetic. The game tells a linear story while allowing freedom to explore different levels. Players will face terrifying enemies and eerie environments, experiencing suspense and fear while also having the chance to fight back using limited powers and weapons. A key feature of the game is the presence of a companion, Brownie, who helps solve puzzles, traverse the map more easily, and attack enemies. Each enemy type is linked to a specific element, requiring players to carefully choose their strategies and abilities in combat.",
    teamSize: 7,
    duration: "3 months",
    tools: "Unity (C#)",
    githubLink: "https://github.com/MarcBlanquezPadilla/NIX-TheEternalNight/releases/tag/v.0.1.0",
    codeLink: "https://github.com/MarcBlanquezPadilla/NIX-TheEternalNight/tree/main/Assets/Scripts"
  },
  {
    title: "Kim's Underorld",
    videoSrc: "resources/KimsUnderworld.mp4",
    description: "Kim’s Underworld is a 2D pixel art Metroidvania focused on combat, climbing, and narrative. The player embarks on a journey into the underworld to confront the death of a loved one, with the goal of sparking reflection and emotional resonance. Kim, the protagonist, must use her climbing tools and skills — such as her ice axes — to traverse the different layers of the underworld, defeat enemies and bosses, and acquire new abilities for her soul. This emotional journey is structured around the five stages of grief, which Kim must face and overcome in order to finally accept the death of her father.",
    teamSize: 8,
    duration: "4 months",
    tools: "SDL 2 & raylib(C++), XML",
    githubLink: "https://github.com/XaviFast05/Kims-Underworld/releases/tag/GOLD",
    codeLink: "https://github.com/XaviFast05/Kims-Underworld/tree/main/Juegos_de_desarrollo/Marc/src"
  },
  {
    title: "Spooky's Candy Quest",
    videoSrc: "resources/KimsUnderworld.mp4",
    description: "Spooky's Candy Quest is a brief Halloween-themed platformer where you're a little ghost that goes trick or treating, while avoiding the dangers of the world around them. Transform back and forth between a ghost to move around, and a pumpkin to attack.",
    teamSize: 2,
    duration: "3 months",
    tools: "SDL 2 & raylib(C++), XML",
    githubLink: "https://github.com/MarcBlanquezPadilla/PlatformGame/releases/tag/v.0.3.0",
    codeLink: "https://github.com/MarcBlanquezPadilla/PlatformGame/tree/main/src"
  },
  {
    title: "CityRun",
    videoSrc: "resources/CityRun.mp4",
    description: "City Run is a fast-paced runner game inspired by the style of Subway Surfers, but structured by levels. Players race through a bustling city, dodging obstacles such as pedestrians, cars, and other urban hazards. Each level brings new challenges, tighter spaces, and increasing speed, pushing the player’s reflexes and timing to the limit as they progress through the city streets.",
    teamSize: 1,
    duration: "3 months",
    tools: "Unity (C#)",
    githubLink: "https://github.com/MarcBlanquezPadilla/CityRun/releases/tag/v.0.1.0",
    codeLink: "https://github.com/MarcBlanquezPadilla/CityRun/tree/main/Assets/Scripts"
  },
  {
    title: "VVVVVV",
    videoSrc: "resources/VVVVVV.mp4",
    description: "VVVVVV is a retro-style 2D platformer recreated as a personal project. Just like the original, it focuses on gravity-flipping mechanics instead of traditional jumping, challenging players to navigate tricky levels filled with spikes, hazards, and precise timing puzzles.",
    teamSize: 1,
    duration: "3 months",
    tools: "Unity (C#)",
    githubLink: "https://github.com/MarcBlanquezPadilla/VVVVVV/releases/tag/v.0.1.0",
    codeLink: "https://github.com/MarcBlanquezPadilla/VVVVVV/tree/main/Assets/Scripts"
  },
  {
    title: "Pac-man",
    videoSrc: "resources/Pac-Man.mp4",
    description: "VVVVVV is a retro-style 2D platformer recreated as a personal project. Just like the original, it focuses on gravity-flipping mechanics instead of traditional jumping, challenging players to navigate tricky levels filled with spikes, hazards, and precise timing puzzles.",
    teamSize: 2,
    duration: "3 months",
    tools: "Box2d & raylib (C++)",
    githubLink: "https://github.com/MarcBlanquezPadilla/VVVVVV/releases/tag/v.0.1.0",
    codeLink: "https://github.com/MarcBlanquezPadilla/VVVVVV/tree/main/Assets/Scripts"
  }

];

const projectDisplay = document.getElementById("project-display");
let currentProjectIndex = 0;

function renderProject(index) {
    const project = projects[index];

    if (projectDisplay.classList.contains('active'))
    {
        projectDisplay.classList.remove('active');
        projectDisplay.classList.add('hidden');
    }
    

    setTimeout(() => {
        projectDisplay.innerHTML = `
        <video class="project-video" loop autoplay muted controls>
            <source src="${project.videoSrc}" type="video/mp4">
        </video>
        <div class="project-text">
            <div class="project-title"><h2>${project.title}</h2></div>
            <div class="project-text-container"><p>${project.description}</p></div>
            <div class="project-info">
            <i class="fa-solid fa-users"> ${project.teamSize}</i>
            <i class="fa-solid fa-clock"> ${project.duration}</i>
            <i class="fa-solid fa-screwdriver-wrench"> ${project.tools}</i>
            </div>
            <div class="project-icons">
            <a href="${project.githubLink}" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="${project.codeLink}" target="_blank"><i class="fa fa-code"></i></a>
            </div>
        </div>
        `;
        
        projectDisplay.classList.remove('hidden');
        projectDisplay.classList.add('active');

    }, projectDisplay.classList.contains('active') ? 300 : 0);
}

renderProject(0);

const leftArrow = document.querySelector('.project-left-arrow');
const rightArrow = document.querySelector('.project-right-arrow');

leftArrow.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    renderProject(currentProjectIndex);
});

rightArrow.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    renderProject(currentProjectIndex);
});

renderProject(currentProjectIndex);