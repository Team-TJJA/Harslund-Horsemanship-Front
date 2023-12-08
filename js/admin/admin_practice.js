import {createAdminCards} from "../modules/admin_card_module.js";

//const practiceUrl = "https://harslundhorsemanship.azurewebsites.net/teknikker";
//const practiceUrl = "https://harslundbackend.azurewebsites.net/teknikker";
const practiceUrl = "http://localhost:8080/teknikker";

document.addEventListener('DOMContentLoaded', () => { createAdminCards(practiceUrl, "practice"); });