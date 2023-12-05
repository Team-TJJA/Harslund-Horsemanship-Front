import {setupPage} from "../module.js";

const priceUrl = process.env.URL + "/priser";

document.addEventListener('DOMContentLoaded',() => { setupPage('price', priceUrl); });