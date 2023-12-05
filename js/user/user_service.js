import {createCards} from "../module.js";

const serviceUrl = process.env.URL + "/ydelser";

document.addEventListener('DOMContentLoaded', () => { createCards(serviceUrl); } );