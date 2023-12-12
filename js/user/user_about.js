import {setupPage} from "../modules/module.js";

//const aboutUrl = "https://harslundbackend.azurewebsites.net/om_mig";
const aboutUrl = "http://localhost:8080/om_mig";

document.addEventListener('DOMContentLoaded',() => { setupPage('about', aboutUrl); });