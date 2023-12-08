import {setAdminData, createFormEventListener} from "../modules/module.js";

//const aboutUrl = "https://harslundhorsemanship.azurewebsites.net/om_mig";
//const aboutUrl = "https://harslundbackend.azurewebsites.net/om_mig";
const aboutUrl = "http://localhost:8080/om_mig";

new RichTextEditor("#about-me-editor"   , {editorResizeMode: "none"});
document.addEventListener('DOMContentLoaded',() => { setAdminData('about', aboutUrl, "#about-me-editor", "admin-about-me"); });


