const projectsGrid = document.getElementById("projects-grid");

function renderAllProjects() {
    let htmlContent = "";
    
    projects.forEach((project, index) => {
        htmlContent += `
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
    });
    
    projectsGrid.innerHTML = htmlContent;
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

// Al hacer clic, nos lleva a la página individual
function openProject(index) {
    window.location.href = `project.html?id=${index}`;
}

// ¡Lanzamos la función al cargar la página!
renderAllProjects();