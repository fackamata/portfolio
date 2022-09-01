const skills = document.getElementById('skillsSection');

(async () => {
    const res = await fetch('./skills.json', {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json();
    let skillArray = []
    Object.entries(json).forEach(([key, value]) => {
        skillArray.push(
            {
                html : `<div id=${key} class="skill">
                            <div>${value}</div>
                            <p>${key}</p>
                        </div>`
            }
        )
        
    
    });
    skillArray.forEach(function(skill){
        // console.log(skill.html)
        skills.innerHTML += skill.html
    })
  })();