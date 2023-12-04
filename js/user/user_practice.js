import {createCards} from "../module.js";

const practiceUrl = process.env.URL + "/teknikker";

document.addEventListener('DOMContentLoaded', () => { createCards(practiceUrl); } );