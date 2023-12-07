import {setupPage} from "../module.js";

const priceUrl = "https://harslundbackend.azurewebsites.net/priser";

document.addEventListener('DOMContentLoaded',() => { setupPage('price', priceUrl); });