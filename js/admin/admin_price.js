import {setAdminData} from "../modules/module.js";

//const priceUrl = "https://harslundhorsemanship.azurewebsites.net/priser";
//const priceUrl = "https://harslundbackend.azurewebsites.net/priser";
const priceUrl = "http://localhost:8080/priser";
new RichTextEditor("#price-editor", {editorResizeMode: "none"});
document.addEventListener('DOMContentLoaded',() => { setAdminData('price', priceUrl, "#price-editor", "admin-price"); });