import {createCards} from "../module.js";

const practiceUrl = "https://harslundbackend.azurewebsites.net/teknikker";

document.addEventListener('DOMContentLoaded', () => { createCards(practiceUrl, "practices"); } );