function setLanguage(param) {
    fetch(`./languages/${param}.json`, {
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
 }

setLanguage('fr');