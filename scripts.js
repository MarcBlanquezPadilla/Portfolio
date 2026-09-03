const sections = document.querySelectorAll('main > div');
const navLinks = document.querySelectorAll('.menu a');

// 2. Configuramos nuestro "radar"
const observerOptions = {
    root: null,
    // El margen superior compensa la altura de tu header para que no detecte mal
    rootMargin: '-100px 0px -100px 0px', 
    // Se activará cuando al menos el 30% de la sección sea visible
    threshold: 0.3 
};

// 3. Creamos la función que decide qué iluminar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quitamos la iluminación de todos los enlaces primero
            navLinks.forEach(link => link.classList.remove('active-link'));
            
            // Cogemos el ID de la sección que está en pantalla (ej: "projects")
            const activeId = entry.target.getAttribute('id');
            
            // Buscamos el enlace en el menú que tenga ese href (ej: "#projects")
            const activeLink = document.querySelector(`.menu a[href="#${activeId}"]`);
            
            // Si existe, lo iluminamos
            if (activeLink) {
                activeLink.classList.add('active-link');
            }
        }
    });
}, observerOptions);

// 4. Le decimos al radar que empiece a vigilar cada sección
sections.forEach(section => {
    observer.observe(section);
});


const projectsGrid = document.getElementById("projects-grid");
const loadMoreBtn = document.getElementById("load-more-btn");

let visibleProjects = 6; 

function renderProjects() {
    let htmlContent = "";
    
    const projectsToShow = projects.slice(0, visibleProjects);
    
    projectsToShow.forEach((project, index) => {
        htmlContent += `
            <div class="project-card" 
                 onclick="openProject(${index})"
                 onmouseenter="playVideo(this)" 
                 onmouseleave="pauseVideo(this)">
                
                <!-- NUEVO CONTENEDOR DE MEDIOS -->
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

    if (visibleProjects >= projects.length) {
        loadMoreBtn.style.display = 'none';
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

loadMoreBtn.addEventListener("click", () => {
    visibleProjects += visibleProjects;
    renderProjects();
});

renderProjects();

function openProject(index) {

    window.location.href = `project.html?id=${index}`;
}

