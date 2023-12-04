import {setupPage} from "../module.js";

const aboutUrl = process.env.URL + "/om_mig";

document.addEventListener('DOMContentLoaded',() => { setupPage('about', aboutUrl); });