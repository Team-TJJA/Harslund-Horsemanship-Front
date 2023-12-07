import {postOrPutObjectAsJson, saveAsString, setAdminData} from "../modules/module.js";

const priceUrl = "https://harslundbackend.azurewebsites.net/priser";
const editor1 = new RichTextEditor("#price-editor", {editorResizeMode: "none"});
document.addEventListener('DOMContentLoaded',() => { setAdminData('price', priceUrl, "#price-editor"); });
document.addEventListener('DOMContentLoaded', createFormEventListener);

function createFormEventListener() {
    const form = document.getElementById('admin-price');
    form.addEventListener('submit', handleSubmitForm);
}

async function handleSubmitForm(event) {
    event.preventDefault();
    const form = saveAsString("#price-editor");
    let response;
    response = await postOrPutObjectAsJson(priceUrl, form, 'PUT');
    if(response.ok) {
        alert('SHOWING UPDATED');
    }
}