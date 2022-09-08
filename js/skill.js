const skills = document.getElementById('skillsSection');

(async () => {
    const res = await fetch('../json/skills.json', {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json();
    let skillsArray = []
    Object.entries(json).forEach(([key, value]) => {
        skillsArray.push(
            {
                html : `<div class="card-skill">
                            ${value}
                            <p>${key}</p>
                        </div>`
            }
        )    
    });
    skillsArray.forEach(function(skill){
        skills.innerHTML += skill.html
    })
})();