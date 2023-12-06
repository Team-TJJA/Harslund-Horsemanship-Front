import {} from "../module.js";

const editors = document.querySelectorAll(".service-editor");

function initiateEditors() {
    editors.forEach(editor => {
        const editor1 = new RichTextEditor(editor, {editorResizeMode: "none"});

        //TODO put/post
        const button_save = document.createElement("button");
        button_save.textContent = "Save HTML";
        button_save.addEventListener("click", function () {
            const editor = document.querySelector(editorSelector + ' iframe.rte-editable');
            // Get the inner content from the RichTextEditor's editable div-
            const innerContent = editor.contentDocument.body.innerHTML;
            console.log(innerContent)
        });
        document.body.appendChild(button_save);
    });
}

initiateEditors();

import {createCards} from "../module.js";

const serviceUrl = "https://harslundbackend.azurewebsites.net/ydelser";

document.addEventListener('DOMContentLoaded', () => { createCards(serviceUrl, "service"); } );