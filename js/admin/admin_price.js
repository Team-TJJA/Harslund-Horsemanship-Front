import {} from "../module.js";

const editor1 = new RichTextEditor("#price-editor", {editorResizeMode: "none"});

function saveAsString(editorSelector) {

    //TODO put/post
    const button_save = document.createElement("button");
    button_save.textContent = "Save HTML";
    button_save.addEventListener("click", function () {
        const editor = document.querySelector(editorSelector + ' iframe.rte-editable');


        // Get the inner content from the RichTextEditor's editable div
        const innerContent = editor.contentDocument.body.innerHTML;
        console.log(innerContent)
    });
    document.body.appendChild(button_save);
}

saveAsString("#price-editor");