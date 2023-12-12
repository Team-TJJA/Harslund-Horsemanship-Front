import {createCards} from "../modules/user_card_module.js";

//const serviceUrl = "https://harslundbackend.azurewebsites.net/ydelser";
const serviceUrl = "http://localhost:8080/ydelser";

document.addEventListener('DOMContentLoaded', () => { createCards(serviceUrl, "services"); } );