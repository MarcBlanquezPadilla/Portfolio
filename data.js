const projects = [
  {
    title: "Son of Ithaca",
    videoSrc: "resources/videos/SonOfIthaca.mp4",
    posterSrc: "resources/posters/sonofithaca.png",
    description: "Son of Ithaca is an action-adventure game based on The Odyssey, where you play as Telemachus searching for his lost father, Odysseus. With the help of Athena, goddess of wisdom, travel to a mysterious island and explore it to obtain new powers from the almighty gods in the form of equippable masks, then open the portal to the Underworld and face the final challenges.",
    contributions: [
      "Graphics Programmer: Developed custom visual effects and shaders for the custom engine, most notably designing and implementing a dynamic water shader.",
      "Engineered the core scene management architecture, ensuring seamless flow, loading, and transitions between UI menus and gameplay states.",
      "Programmed a robust data persistence and save-game system to accurately track, serialize, and store player progress across sessions."
    ],
    teamSize: 31,
    duration: "5 months",
    tools: "WaveEngine (Own Engine)",
    githubLink: "https://github.com/NobodyGamesStudio/WaveEngine",
    buildLink: "https://github.com/NobodyGamesStudio/WaveEngine/releases/tag/v1.0",
    projectType: 1
  },
  {
    title: "Paraules màgiques",
    videoSrc: "resources/videos/ParaulesMagiques.mp4",
    posterSrc: "resources/posters/paraulesmagiques.jpg",
    description: "Paraules Màgiques is an educational children's game created by Torrats Games where you help the Bruixa Avorrida find her lost mice. Drag the correct letters to form words, use the owl's hints if you get stuck, and beat three difficulty levels. Furthermore, you can unlock a time trial mode to test your mental agility and vocabulary.",
    contributions: [
      "Sole programmer: Designed and developed the complete code architecture from scratch.",
    ],
    teamSize: 3,
    duration: "1 month",
    tools: "Unity (C#)",
    githubLink: "https://github.com/MarcBlanquezPadilla/Paraules-Magiques",
    buildLink: "https://github.com/NobodyGamesStudio/WaveEngine/releases/tag/v1.0",
    projectType: 1
  },
  {
    title: "Odossea",
    videoSrc: "resources/videos/Odossea.mp4",
    posterSrc: "resources/posters/odossea.jpg",
    description: "Odossea is a chaotic co-op puzzle-platformer where you control soft-body characters through a unique mechanic: mass sharing. Work as a team to transfer weight between each other, alter your shapes, and overcome obstacles that are physically impossible to beat solo. Coordinate, tackle unpredictable physics, and survive hilarious disasters to reach the end of each level.",
    contributions: [
      "Developed the complete player controller.",
      "Implemented the soft-body physics system and the core mass-sharing mechanic.",
      "Programmed all other in-game entities."
    ],
    award: "Socialpoint Best Technology Award - 9th CITM Game Jam",
    teamSize: 5,
    duration: "1 week",
    tools: "Unity (C#)",
    githubLink: "https://github.com/oscaralonsoo/Odossea",
    buildLink: "https://torratsgames.itch.io/odossea",
    projectType: 1
  },
  {
    title: "VOXLAND",
    videoSrc: "resources/videos/Voxland.mp4",
    posterSrc: "resources/posters/voxland.jpg",
    description: "Voxland is a charming 3D adventure game that combines exploration, crafting, and puzzles within a stylized voxel world. After being shipwrecked, the player's goal is to repair their boat to escape the island by gathering resources and making tools through an intuitive crafting system. Progression is driven by interacting with charismatic NPCs who offer quests and challenges that test the player's logic and memory. <br><br>Fully developed by a team of two, this project cohesively integrates dialogue, inventory, quests, and varied puzzle systems, creating a rewarding gameplay experience.",
    contributions: [
      "Co-creator: Fully co-developed the entire project from scratch in a two-person team, sharing responsibilities across code, art, and game design.",
      "Co-programmed all core gameplay systems, including the inventory, crafting mechanics, and NPC logic.",
      "Contributed to the creation of 3D voxel assets, level design, and the implementation of puzzle mechanics."
    ],
    teamSize: 2,
    duration: "3 months",
    tools: "Unity (C#)",
    githubLink: "https://github.com/MarcBlanquezPadilla/Voxland",
    buildLink: "https://github.com/MarcBlanquezPadilla/Voxland/releases/tag/v.0.1.0",
    projectType: 1
  },
  {
    title: "NIX - The Eternal Night",
    videoSrc: "resources/videos/NixTheEternalNight.mp4",
    posterSrc: "resources/posters/nixtheeternalnight.jpg",
    description: "Ambientado en un futuro postapocalíptico, NIX - The Eternal Night es un shooter de terror en tercera persona que arrastra al jugador a un opresivo mundo subterráneo. La jugabilidad combina exploración de instalaciones industriales, puzles y tensos combates contra criaturas. Una mecánica central es la fusión con una criatura para desbloquear habilidades. El jugador debe gestionar recursos como munición y jeringas de vida para sobrevivir a los enfrentamientos, haciendo uso tanto del sigilo como del combate directo. <br><br>Este proyecto fue desarrollado desde cero por un equipo de 7 personas, compuesto por 4 programadores y 3 artistas.",
    contributions: [
        "Gameplay Programmer: Developed the main third-person character controller, movement, aiming mechanics, and inventory management.",
        "Implemented the core 'Fusion' mechanic, programming complex state transition logic and the dynamic activation of special abilities during combat.",
        "Designed and programmed the enemy Artificial Intelligence (AI) from the ground up, creating detection systems, pursuit behaviors, and aggressive attack patterns to build tension during gameplay."
    ],
    teamSize: 7,
    duration: "3 months",
    tools: "Unity (C#)",
    githubLink: "https://github.com/MarcBlanquezPadilla/NIX-TheEternalNight",
    buildLink: "https://github.com/MarcBlanquezPadilla/NIX-TheEternalNight/releases/tag/v.0.1.0",
    projectType: 1
  },
  {
    title: "Kim's Underworld",
    videoSrc: "resources/videos/KimsUnderworld.mp4",
    posterSrc: "resources/posters/kimsunderworld.jpg",
    description: "Kim's Underworld is a 2D Metroidvania platformer with a detailed pixel art aesthetic. The story follows Kim, a young climber who descends into the underworld to find her lost father. The game focuses on exploring a cavernous world, using a unique pickaxe climbing mechanic to navigate its challenging levels. Throughout her journey, Kim will confront creatures and bosses while uncovering an emotional narrative about loss and overcoming the different stages of grief. <br><br>This project was developed by a team of 17 people (7 programmers and 10 artists), where I held the role of Lead Programmer.",
    contributions: [
      "Lead Programmer: Managed and coordinated a team of 7 programmers, overseeing task delegation, code architecture, and version control integration.",
      "Developed the foundational 2D custom engine in C++ utilizing SDL2 and Raylib, establishing the core game loop and underlying systems.",
      "Engineered a robust level-loading system that parses XML data from Tiled to dynamically construct the game's expansive Metroidvania maps and collision layers.",
      "Programmed the custom rendering pipeline to efficiently display complex pixel-art environments, layered parallax backgrounds, and UI overlays."
    ],
    teamSize: 8,
    duration: "4 months",
    tools: "SDL 2 & raylib(C++), XML",
    githubLink: "https://github.com/XaviFast05/Kims-Underworld",
    buildLink: "https://github.com/XaviFast05/Kims-Underworld/releases/tag/GOLD",
    projectType: 1
  },
  {
    title: "Spooky's Candy Quest",
    videoSrc: "resources/videos/Spookys.mp4",
    posterSrc: "resources/posters/spookys.jpg",
    description: "Spooky's Candy Quest is a fast-paced 2D platformer with a charming Halloween pixel art aesthetic. The objective is to guide a character through challenging levels to collect all the candies in each stage, while facing themed enemies. Gameplay centers on a strategic transformation mechanic: the ghost form prioritizes agility, while the pumpkin form grants attacking capabilities at the cost of reduced mobility, forcing players to switch between forms. <br><br>The programming for this project was handled by a team of two, using art assets from online libraries to focus on gameplay development.",
    contributions: [
      "Co-creator: Fully co-developed the entire project from scratch in a two-person team, sharing responsibilities across code, art, and game design.",
    ],
    teamSize: 2,
    duration: "3 months",
    tools: "SDL 2 & raylib(C++), XML",
    githubLink: "https://github.com/MarcBlanquezPadilla/PlatformGame",
    buildLink: "https://github.com/MarcBlanquezPadilla/PlatformGame/releases/tag/v.0.3.0",
    projectType: 1
  },
  {
    title: "CityRun",
    videoSrc: "resources/videos/CityRun.mp4",
    posterSrc: "resources/posters/cityrun.jpg",
    description: "City Run is a dynamic 3D runner game with a vibrant low-poly aesthetic. The main objective is to reach the end of the course with the highest number of followers possible. The player controls the lead runner, who must recruit pedestrians to create a massive following crowd. Gameplay focuses on maneuvering this growing group through chaotic streets, dodging obstacles like police cars, barriers, and hydrants. Losing followers penalizes the score, so the challenge is to protect the crowd while jumping over vehicles to maintain momentum. <br><br>This project was programmed entirely by me, using assets from online libraries.",
    contributions: [
      "Sole programmer: Designed and developed the complete code architecture from scratch.",
    ],
    teamSize: 1,
    duration: "3 months",
    tools: "Unity (C#)",
    githubLink: "https://github.com/MarcBlanquezPadilla/CityRun",
    buildLink: "https://github.com/MarcBlanquezPadilla/CityRun/releases/tag/v.0.1.0",
    projectType: 1
  },
  {
    title: "VVVVVV",
    videoSrc: "resources/videos/VVVVVV.mp4",
    posterSrc: "resources/posters/vvvvvv.jpg",
    description: "This project is a recreation of the acclaimed puzzle-platformer 'VVVVVV', focused on faithfully replicating its gameplay. The core mechanic is gravity inversion: instead of jumping, the player flips between the floor and ceiling to navigate mazes that demand quick reflexes and precision. The goal is to clear each room by dodging spikes and reaching the exit, cloning the frantic pace and difficulty of the original title. The experience constantly tests the player's skills, requiring a complete mastery of its unique movement mechanic. <br><br>The project was programmed entirely by me, using the original game's assets.",
    contributions: [
      "Sole Programmer: Developed the entire game logic and code architecture from scratch, using the original visual and audio assets.",
      "Engineered a progress-saving system utilizing SQL databases (SQLite) to efficiently store and retrieve player data.",
    ],
    teamSize: 1,
    duration: "3 months",
    tools: "Unity (C#)",
    githubLink: "https://github.com/MarcBlanquezPadilla/VVVVVV",
    buildLink: "https://github.com/MarcBlanquezPadilla/VVVVVV/releases/tag/v.0.1.0",
    projectType: 1
  },
  {
    title: "Pac-man",
    videoSrc: "resources/videos/Pac-Man.mp4",
    posterSrc: "resources/posters/pacman.jpg",
    description: "This project is a tribute to and a faithful recreation of the iconic arcade classic, Pac-Man. The objective is to guide the character through the maze, eating all the dots while avoiding capture by four ghosts. The gameplay replicates original mechanics, including the Power Pellets that allow the player to temporarily hunt the enemies. Special attention was given to recreating each ghost's unique AI and the scoring system, offering an authentic and nostalgic experience that tests the player's reflexes. <br><br>This project was programmed entirely by me, using art assets from online libraries.",
    contributions: [
      "Sole Programmer: Developed the entire game logic and C++ architecture from scratch utilizing Raylib and Box2D.",
      "Engineered a custom pathfinding system from the ground up to handle precise grid-based maze navigation.",
      "Faithfully recreated the original, complex Ghost AI, implementing exact target-tile logic and distinct behavioral states (Chase, Scatter, and Frightened) for each individual enemy.",
    ],
    teamSize: 1,
    duration: "3 months",
    tools: "Box2d & raylib (C++)",
    githubLink: "https://github.com/MarcBlanquezPadilla/Pac-Man",
    buildLink: "https://github.com/MarcBlanquezPadilla/Pac-Man/releases/tag/v1.0",
    projectType: 1
  },
  {
    title: "Racing-Game",
    videoSrc: "resources/videos/Racing-Game.mp4",
    posterSrc: "resources/posters/racinggame.jpg",
    description: "Racing Game is a top-down 2D racing game that parodies the world of Formula 1 with humor and a retro pixel art style. Choose from a roster of comically named drivers and compete on various circuits against opponents controlled by their own unique AI that reacts to the player's actions. The objective is to master the track, execute precise overtakes, and be the first to cross the finish line. Gameplay is focused on pure arcade competition, rewarding skill in cornering and speed management in fast-paced, addictive races. <br><br>This project was developed by a team of 4 people (1 programmers and 3 artists).",
    contributions: [
      "Sole Programmer: Developed the entire game logic and C++ architecture from scratch utilizing Raylib and Box2D.",
      "Engineered the custom AI for opponent vehicles, implementing distinct steering behaviors and pathfinding for track navigation.",
    ],
    teamSize: 4,
    duration: "3 months",
    tools: "Box2d & raylib (C++)",
    githubLink: "https://github.com/algars15/Racing-game",
    buildLink: "https://github.com/algars15/Racing-game/releases/tag/v1.0",
    projectType: 1
  },
  {
    title: "W16 Engine",
    videoSrc: "resources/videos/W16Engine.mp4",
    posterSrc: "resources/posters/w16.jpg",
    description: "W16 ENGINE is a custom 3D game engine developed in C++ from scratch, focused on modularity, performance optimization, and providing a user-friendly interface. Built on a robust component-based architecture, it features an advanced resource management system, full scene serialization, and precise object selection. Its standout features include a high-level Skeletal Animation System (combining CPU bone calculations with GPU vertex skinning) and a comprehensive high-level Physics System powered by PhysX, complete with full joint support.",
    contributions: [
      "Sole Developer: Architected and programmed the entire engine core, component-based structure, and base subsystems from scratch in C++.",
      "Built the custom graphics pipeline leveraging OpenGL 4.6 for 3D rendering.",
      "Successfully integrated industry third-party APIs for specialized tasks: NVIDIA PhysX (physics), ImGui (UI), DevIL (image loading), and Assimp (3D model parsing).",
      "Developed advanced features including a complete skeletal animation system (CPU logic and GPU skinning) and full scene serialization."
    ],
    teamSize: 1,
    duration: "3 months",
    tools: "SDL (C++) | OpenGL 4.6 | ImGui | Assimp | DevIL | PhysX",
    githubLink: "https://github.com/MarcBlanquezPadilla/W16Engine",
    buildLink: "https://github.com/MarcBlanquezPadilla/W16Engine/releases/tag/v_3.0",
    projectType: 0
  },
  {
    title: "Wave Engine",
    videoSrc: "resources/videos/WaveEngine.mp4",
    posterSrc: "resources/posters/waveengine.jpg",
    description: "Wave Engine is a feature-rich game engine developed as part of the Project 3 course at CITM-UPC. This project integrates several external libraries including Assimp (model loading), DevIL (textures), ImGui (UI), Lua (scripting), and NVIDIA PhysX (physics). The engine focuses on modularity and high-performance rendering, featuring a complete shader pipeline (Blinn-Phong, Gerstner waves), a robust resource management system, and a Lua scripting system for runtime behavior.",
    contributions: [
      "Core Engine Programmer: Developed the base rendering architecture, including custom shaders and a complete Physically Based Rendering (PBR) material system.",
      "Engineered the Resource Management System to efficiently load, handle, and store engine assets.",
      "Programmed a complete 3D skeletal animation system entirely from scratch.",
      "Successfully integrated NVIDIA PhysX to drive the engine's robust physics, rigidbodies, and collision systems.",
      "Led codebase profiling and optimization, along with extensive bug fixing to ensure a stable, high-performance engine."
    ],
    teamSize: 11,
    duration: "5 months",
    tools: "SDL (C++) | OpenGL 4.6 | GLSL 330 | ImGui | Assimp | DevIL | Lua | PhysX | tracy",
    githubLink: "https://github.com/NobodyGamesStudio/WaveEngine",
    buildLink: "https://github.com/NobodyGamesStudio/WaveEngine/releases/tag/v1.0",
    projectType: 0
  }
];