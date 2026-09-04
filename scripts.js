const sections = document.querySelectorAll('main > div');
const navLinks = document.querySelectorAll('.menu a');
const projectsToShow = [1,5,6]

const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -100px 0px', 
    threshold: 0.3 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            navLinks.forEach(link => link.classList.remove('active-link'));
            
            const activeId = entry.target.getAttribute('id');
            
            const activeLink = document.querySelector(`.menu a[href="#${activeId}"]`);
            
            if (activeLink) {
                activeLink.classList.add('active-link');
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});


const projectsGrid = document.getElementById("projects-grid");
const allProjectsBtn = document.getElementById("all-projects-btn");

function renderProjects() {
    let htmlContent = "";
    
    projectsToShow.forEach((projectId) => {
        
        const project = projects[projectId];

        htmlContent += `
            <div class="project-card" 
                 onclick="openProject(${projectId})" 
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

allProjectsBtn.addEventListener("click", () => {
    
    window.location.href = `allprojects.html`;
});

renderProjects();

function openProject(index) {
    window.location.href = `project.html?id=${index}`;
}

