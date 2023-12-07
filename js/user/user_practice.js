import {createCards} from "../modules/user_card_module.js";

const practiceUrl = "https://harslundbackend.azurewebsites.net/teknikker";

document.addEventListener('DOMContentLoaded', () => { createCards(practiceUrl, "practices"); } );