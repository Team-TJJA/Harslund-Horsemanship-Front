import {createAdminCards} from "../modules/admin_card_module.js";

//const serviceUrl = "https://harslundhorsemanship.azurewebsites.net/ydelser";
const serviceUrl = "https://harslundbackend.azurewebsites.net/ydelser";
const editors = document.querySelectorAll(".service-editor");
document.addEventListener('DOMContentLoaded', () => { createAdminCards(serviceUrl, "service"); });
document.addEventListener('DOMContentLoaded', () => { initiateEditors(); });

function initiateEditors() {
    editors.forEach(editor => {
        const editor1 = new RichTextEditor(editor, {editorResizeMode: "none"});
        const button = document.getElementById("test");

        //TODO put/post
        button.addEventListener("click", function () {
            const editor = document.querySelector(editorSelector + ' iframe.rte-editable');
            // Get the inner content from the RichTextEditor's editable div-
            const innerContent = editor.contentDocument.body.innerHTML;
            console.log(innerContent)
        });
    });
}

//test();

function test() {
    const test = "vuhgipofdå <h1>dsfadsgshdtjyukyretrgsf</h1> skæjlhbvm nsdfjoipuyghv"
    console.log(editors.item(0))
    editors.item(0).contentDocument.body.innerHTML = test;
}