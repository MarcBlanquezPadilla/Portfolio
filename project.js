// 1. Leer el ID que viene en la URL (ej: project.html?id=3)
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

// 2. Comprobar que el ID existe y es válido
if (projectId !== null && projects[projectId]) {
    
    // Obtenemos el proyecto exacto
    const project = projects[projectId];
    const container = document.getElementById('single-project-container');

    // 3. Dibujamos el diseño detallado (muy parecido a tu carrusel original)
    container.innerHTML = `
        <div style="display: flex; flex-direction: row; gap: 4rem; align-items: flex-start; flex-wrap: wrap;">
            
            <div style="flex: 1; min-width: 30rem;">
                <video style="width: 100%; border: 0.3rem solid aqua; border-radius: 1rem;" loop autoplay muted controls playsinline poster="${project.posterSrc}">
                    <source src="${project.videoSrc}" type="video/mp4">
                </video>
            </div>

            <div style="flex: 1; min-width: 30rem; display: flex; flex-direction: column; gap: 2rem;">
                <h1 style="font-size: 5rem; color: aqua;">${project.title}</h1>
                <p style="font-size: 2rem; text-align: justify; line-height: 1.5;">${project.description}</p>
                
                <div style="display: flex; gap: 3rem; font-size: 2rem; background-color: #333; padding: 1.5rem; border-radius: 1rem;">
                    <span><i class="fa-solid fa-users" style="color:aqua;"></i> ${project.teamSize}</span>
                    <span><i class="fa-solid fa-clock" style="color:aqua;"></i> ${project.duration}</span>
                    <span><i class="fa-solid fa-screwdriver-wrench" style="color:aqua;"></i> ${project.tools}</span>
                </div>

                <div style="display: flex; gap: 2rem; margin-top: 2rem;">
                    <a href="${project.githubLink}" target="_blank" style="padding: 1rem 3rem; border: 0.3rem solid aqua; color: white; font-size: 2.5rem; border-radius: 1rem; transition: 0.3s;" onmouseover="this.style.backgroundColor='aqua'; this.style.color='#222'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='white'">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href="${project.codeLink}" target="_blank" style="padding: 1rem 3rem; border: 0.3rem solid aqua; color: white; font-size: 2.5rem; border-radius: 1rem; transition: 0.3s;" onmouseover="this.style.backgroundColor='aqua'; this.style.color='#222'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='white'">
                        <i class="fa fa-code"></i> Code
                    </a>
                </div>
            </div>

        </div>
    `;

    // Cambiamos el título de la pestaña del navegador
    document.title = `${project.title} - Portfolio`;

} else {
    // Si alguien entra sin ID o pone un ID falso, le avisamos
    document.getElementById('single-project-container').innerHTML = `
        <h1 style="font-size: 5rem; color: aqua; text-align: center;">Project not found :(</h1>
        <div style="text-align: center; margin-top: 2rem;">
            <a href="index.html" style="font-size: 2rem; color: white; text-decoration: underline;">Go back home</a>
        </div>
    `;
}