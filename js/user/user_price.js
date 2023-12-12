import {setupPage} from "../modules/module.js";

//const priceUrl = "https://harslundbackend.azurewebsites.net/priser";
const priceUrl = "http://localhost:8080/priser";

document.addEventListener('DOMContentLoaded',() => { setupPage('price', priceUrl); });