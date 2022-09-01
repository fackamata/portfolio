
const nav_about = document.getElementById("nav_about");
const nav_skills = document.getElementById("nav_skills");
const nav_project = document.getElementById("nav_project");
const nav_contact = document.getElementById("nav_contact");

const title =document.getElementById("title");
const myName =document.getElementById("name");
const welcome =document.getElementById("welcome");
const downloadCV =document.getElementById("downloadCV");

const farewell =document.getElementById("farewell");
const email =document.getElementById("email");
const number =document.getElementById("number");

function setLanguage(param) {
    fetch(`./language/${param}.json`, {
       headers : { 
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       }
    })
   .then( res => res.json())
   .then((data) => populateHtml(data));
 }

function populateNavbar(translation){
    nav_about.innerHTML=translation["navbar"].about;
    nav_contact.innerHTML=translation["navbar"].contact;
    nav_project.innerHTML=translation["navbar"].project;
    nav_skills.innerHTML=translation["navbar"].skills;
}

function populateMain(translation){
    title.innerHTML=translation["main"].title;
    myName.innerHTML=translation["main"].name;
    welcome.innerHTML=translation["main"].welcome;
    downloadCV.innerHTML=translation["main"].downloadCV;
}

function populateFooter(translation){
    farewell.innerHTML=translation["footer"].farewell;
    email.innerHTML=translation["footer"].email;
    number.innerHTML=translation["footer"].number;
}

 function populateHtml(translate){
    populateNavbar(translate);
    populateMain(translate);
    populateFooter(translate);
    // console.log(translation["navbar"])
 }
setLanguage('fr');