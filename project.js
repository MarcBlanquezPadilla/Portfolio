const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

if (projectId !== null && projects[projectId]) {
    
    const project = projects[projectId];
    const container = document.getElementById('single-project-container');
    
    let contributionsHtml = "";
    if (project.contributions && project.contributions.length > 0) {
        contributionsHtml = `
            <div class="sp-contributions">
                <h3>🔧 My Contributions</h3>
                <ul>
                    ${project.contributions.map(item => `
                        <li><i class="fa-solid fa-check"></i> ${item}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    let awardHtml = "";
    if (project.award) {
        awardHtml = `
            <div class="sp-award">
                <i class="fa-solid fa-trophy"></i>
                <span>${project.award}</span>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="sp-wrapper">
            
            <div class="sp-container">
                <h1 class="sp-title">${project.title}</h1>
                <!-- Inyectamos el trofeo justo debajo del título -->
                ${awardHtml}
            </div>

            <div class="sp-container">
                <video class="sp-video" loop autoplay muted controls playsinline poster="${project.posterSrc}">
                    <source src="${project.videoSrc}" type="video/mp4">
                </video>
            </div>

            <div class="sp-container">
                <div class="sp-pills">
                    <span><i class="fa-solid fa-users"></i> ${project.teamSize}</span>
                    <span><i class="fa-solid fa-clock"></i> ${project.duration}</span>
                    <span><i class="fa-solid fa-screwdriver-wrench"></i> ${project.tools}</span>
                </div>

                <p class="sp-description">
                    ${project.description}
                </p>
                
                ${contributionsHtml}
                
                <div class="sp-buttons">
                    <a href="${project.githubLink}" target="_blank" class="sp-btn">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href="${project.buildLink}" target="_blank" class="sp-btn">
                        <i class="fa fa-code"></i> Build
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