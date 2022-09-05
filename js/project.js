const projects = document.getElementById('projectSection');

(async () => {
    const res = await fetch('../json/projects.json', {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json();
    let projectsArray = []
    Object.entries(json).forEach(([key, value]) => {
        console.log(key)
        projectsArray.push(
            {
                html : `<div id="${key}" class="card-project">
                            <h3 id="${key}_name"></h3>
                            <p id="${key}_description"></p>
                            <button><a id="${key}_link" href="${value.url}"></a></button>
                        </div>`
            }
        )    
    });
    projectsArray.forEach(function(project){
        projects.innerHTML += project.html
    })
})();
