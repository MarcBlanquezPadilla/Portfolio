const projectSlides = document.querySelectorAll('.project');
const leftArrow = document.querySelector('.project-left-arrow');
const rightArrow = document.querySelector('.project-right-arrow');

let currentProjectIndex = 0;

function showProject(indexToShow) {
    
    const activeProject = document.querySelector('.project.active');
    if (activeProject) {
        
        activeProject.classList.remove('active');
        
        setTimeout(() => {
            activeProject.classList.add('hidden');

            const newProject = projectSlides[indexToShow];
            if (newProject) {
                
                newProject.classList.remove('hidden');

                setTimeout(() => {
                    
                    newProject.classList.add('active');
                }, 300); 
            }
        }, activeProject ? 300 : 10); 
    }

    currentProjectIndex = indexToShow;
}

projectSlides.forEach((project, index) => {
    if (index !== 0) {
        project.classList.add('hidden');
    } else {
        project.classList.add('active');
    }
});

rightArrow.addEventListener('click', () => {
    let nextIndex = (currentProjectIndex + 1) % projectSlides.length;
    showProject(nextIndex);
});

leftArrow.addEventListener('click', () => {
    let prevIndex = (currentProjectIndex - 1 + projectSlides.length) % projectSlides.length;
    showProject(prevIndex);
});