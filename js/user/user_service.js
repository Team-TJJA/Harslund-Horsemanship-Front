import {createCards} from "../module.js";

const serviceUrl = window._env_.URL + "/ydelser";

document.addEventListener('DOMContentLoaded', () => { createCards(serviceUrl); } );