const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

if (projectId !== null && projects[projectId]) {
    
    const project = projects[projectId];
    const container = document.getElementById('single-project-container');

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 4rem; align-items: center; padding-bottom: 5rem;">
            
            <div style="width: 100%; max-width: 95rem; display: flex; flex-direction: column; gap: 3rem;">
                
                <h1 style="font-size: 6rem; color: aqua; margin: 0; text-align: center; text-transform: uppercase; letter-spacing: 0.2rem;">
                    ${project.title}
                </h1>
            </div>

            <div style="width: 100%; max-width: 95rem;">
                <video style="width: 100%; border: 0.3rem solid aqua; border-radius: 1rem; box-shadow: 0 1rem 3rem rgba(0, 255, 255, 0.1);" loop autoplay muted controls playsinline poster="${project.posterSrc}">
                    <source src="${project.videoSrc}" type="video/mp4">
                </video>
            </div>


            <div style="width: 100%; max-width: 95rem; display: flex; flex-direction: column; gap: 3rem;">
                
                <div style="display: flex; gap: 3rem; font-size: 2.2rem; background-color: #333; padding: 2rem; border-radius: 1rem; justify-content: center; flex-wrap: wrap;">
                    <span><i class="fa-solid fa-users" style="color:aqua;"></i> ${project.teamSize}</span>
                    <span><i class="fa-solid fa-clock" style="color:aqua;"></i> ${project.duration}</span>
                    <span><i class="fa-solid fa-screwdriver-wrench" style="color:aqua;"></i> ${project.tools}</span>
                </div>

                <!-- Descripción del proyecto -->
                <p style="font-size: 2.5rem; text-align: justify; line-height: 1.6; color: #ddd;">
                    ${project.description}
                </p>
                
                <!-- Botones centrados abajo del todo -->
                <div style="display: flex; gap: 2rem; margin-top: 2rem; justify-content: center;">
                    <a href="${project.githubLink}" target="_blank" style="padding: 1rem 4rem; border: 0.3rem solid aqua; color: white; font-size: 2.5rem; border-radius: 1rem; transition: 0.3s; text-align: center; min-width: 20rem;" onmouseover="this.style.backgroundColor='aqua'; this.style.color='#222'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='white'">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href="${project.codeLink}" target="_blank" style="padding: 1rem 4rem; border: 0.3rem solid aqua; color: white; font-size: 2.5rem; border-radius: 1rem; transition: 0.3s; text-align: center; min-width: 20rem;" onmouseover="this.style.backgroundColor='aqua'; this.style.color='#222'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='white'">
                        <i class="fa fa-code"></i> Code
                    </a>
                </div>
            </div>

        </div>
    `;

    document.title = `${project.title} - Portfolio`;

} else {
    document.getElementById('single-project-container').innerHTML = `
        <h1 style="font-size: 5rem; color: aqua; text-align: center;">Project not found :(</h1>
        <div style="text-align: center; margin-top: 2rem;">
            <a href="index.html" style="font-size: 2rem; color: white; text-decoration: underline;">Go back home</a>
        </div>
    `;
}