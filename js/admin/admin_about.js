import {postOrPutObjectAsJson, saveAsString, setAdminData} from "../modules/module.js";

const aboutUrl = "https://harslundbackend.azurewebsites.net/om_mig";
const editor1 = new RichTextEditor("#about-me-editor", {editorResizeMode: "none"});
//document.addEventListener('DOMContentLoaded',() => { setAdminData('price', aboutUrl, "#about-me-editor"); });
document.addEventListener('DOMContentLoaded', createFormEventListener);

function createFormEventListener() {
    const form = document.getElementById('admin-about-me');
    form.addEventListener('submit', handleSubmitForm);
}

async function handleSubmitForm(event) {
    event.preventDefault();
    const form = saveAsString("#about-me-editor");
    console.log(form)
    let response;
    response = await postOrPutObjectAsJson(aboutUrl, form, 'PUT');
    if(response.ok) {
        alert('SHOWING UPDATED');
    }
}

