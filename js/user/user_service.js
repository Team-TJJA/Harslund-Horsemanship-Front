import {createCards} from "../modules/user_card_module.js";

const serviceUrl = "https://harslundbackend.azurewebsites.net/ydelser";

document.addEventListener('DOMContentLoaded', () => { createCards(serviceUrl, "services"); } );