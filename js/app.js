

// populate HTML with translation
function setLanguage(param) {
    fetch(`../json/languages/${param}.json`, {
       headers : { 
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       }
    })
   .then( res => res.json())
   .then((data) => populateHtml(data));


 }

function populateNavbar(navbarContent){
   for (const [navKey, navValue] of Object.entries(navbarContent)) {
      document.getElementById(navKey).innerHTML = navValue
   }
}

function populateProject(projectContent){
   for (const [proKey, proValue] of Object.entries(projectContent)) {
      document.getElementById(proKey + '_description').innerHTML = proValue.description
      document.getElementById(proKey + '_name').innerHTML = proValue.name
      // document.getElementById(proKey + '_link').innerHTML = proValue.link
   }
}

function populateMain(mainContent){
   for (const [mainkey, mainvalue] of Object.entries(mainContent)) {
      document.getElementById(mainkey).innerHTML = mainvalue
 }
}

function populateFooter(footerContent){
   for (const [footerkey, footervalue] of Object.entries(footerContent)) {
      document.getElementById(footerkey).innerHTML = footervalue
 }
}

 function populateHtml(translate){
    populateNavbar(translate['navbar']);
    populateMain(translate["main"]);
    populateFooter(translate["footer"]);
    populateProject(translate["project"]);
 }

setLanguage('fr');


// burger button to display navbar

const burger = document.getElementById('burgerBtn');
const navigationItem = document.querySelectorAll(".nav_item");

function displayNavbar(){
   document.getElementById('navList').classList.toggle('burger-clicked')
   document.getElementById('navList').classList.toggle('burger-unclicked')
   console.log('clicker');
}