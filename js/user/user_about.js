import {setupPage} from "../modules/module.js";

const aboutUrl = "https://harslundbackend.azurewebsites.net/om_mig";

document.addEventListener('DOMContentLoaded',() => { setupPage('about', aboutUrl); });