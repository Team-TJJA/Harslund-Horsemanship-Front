import {createAdminCards} from "../modules/admin_card_module.js";

//const serviceUrl = "https://harslundhorsemanship.azurewebsites.net/ydelser";
//const serviceUrl = "https://harslundbackend.azurewebsites.net/ydelser";
const serviceUrl = "http://localhost:8080/ydelser";

document.addEventListener('DOMContentLoaded', () => { createAdminCards(serviceUrl, "service"); });