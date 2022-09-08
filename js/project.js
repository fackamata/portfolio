const projects = document.getElementById('projectSection');

(async () => {
    const res = await fetch('https://fackamata.github.io/portfolio/json/projects.json', {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json();
    let projectsArray = []
    Object.entries(json).forEach(([key, value]) => {
        console.log(key)
        projectsArray.push(
            {
                html : `<div id="${key}" class="cardProject">
                            <h3 id="${key}_name"></h3>
                            <a href="${value.url}">
                                <img src="${value.image}" alt="${key}">
                            </a>
                            <div class="cardProjectContent">
                                <p id="${key}_description"></p>
                                <div class="link">
                                    <a href="${value.github}">
                                        <i class="fa fa-github fa-2x"></i>
                                        <p>Github</p>
                                    </a>
                                    <a href="${value.url}">
                                        <i class="fa fa-light fa-globe fa-2x"></i>
                                        <p>www</p>
                                    </a>
                                </div>
                            </div>
                        </div>`
            }
            // <p><a id="${key}_link" href="${value.github}"><img class="icon" src="./img/GitHub-Mark.png" alt="github"></a></p>
            // <p><a id="${key}_link" href="${value.url}"><img class="icon" src="./img/web-icon.webp" alt="github"></a></p>
        )    
    });
    projectsArray.forEach(function(project){
        projects.innerHTML += project.html
    })
})();
