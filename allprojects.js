const engineProjectsGrid = document.getElementById("engine-projects-grid");
const gameProjectsGrid = document.getElementById("game-projects-grid");

function renderAllProjects() {

    let gameHtml = "";
    let engineHtml = "";

    projects.forEach((project, index) => {

        let cardHtml = `
            <div class="project-card" 
                 onclick="openProject(${index})"
                 onmouseenter="playVideo(this)" 
                 onmouseleave="pauseVideo(this)">
                
                <div class="media-container">
                    <img src="${project.posterSrc}" class="card-poster" alt="${project.title}">
                    <video class="project-card-video" muted loop playsinline>
                        <source src="${project.videoSrc}" type="video/mp4">
                    </video>
                </div>
                
                <div class="project-card-info">
                    <h3>${project.title}</h3>
                    <p><i class="fa-solid fa-screwdriver-wrench"></i> ${project.tools}</p>
                </div>
            </div>
        `;

        if (project.projectType === 0) {
            engineHtml += cardHtml;
        } else if (project.projectType === 1) {
            gameHtml += cardHtml;
        }
    });

    if (engineProjectsGrid) {
        engineProjectsGrid.innerHTML = engineHtml;
    }
    
    if (gameProjectsGrid) {
        gameProjectsGrid.innerHTML = gameHtml;
    }
}

function playVideo(cardElement) {
    const video = cardElement.querySelector('video');
    const poster = cardElement.querySelector('.card-poster');
    
    if (video && poster) {
        poster.style.opacity = '0';
        video.play().catch(() => console.log("Carga cancelada"));
    }
}

function pauseVideo(cardElement) {
    const video = cardElement.querySelector('video');
    const poster = cardElement.querySelector('.card-poster');
    
    if (video && poster) {
        video.pause();
        poster.style.opacity = '1';
    }
}

function openProject(index) {
    window.location.href = `project.html?id=${index}`;
}

renderAllProjects();