import {createCards} from "../module.js";

const serviceUrl = "https://harslundbackend.azurewebsites.net/ydelser";

document.addEventListener('DOMContentLoaded', () => { createCards(serviceUrl, "services"); } );