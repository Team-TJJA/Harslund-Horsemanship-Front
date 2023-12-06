import {} from "../module.js";

var editor1 = new RichTextEditor("#div_editor1");

function createSaveButton(editorSelector) {
    var button_save = document.createElement("button");
    button_save.textContent = "Save HTML";
    button_save.addEventListener("click", function () {
        var editor = document.querySelector(editorSelector + ' iframe.rte-editable');

        // Get the inner content from the RichTextEditor's editable div
        var innerContent = editor.contentDocument.body.innerHTML;

        // Preserve the existing image HTML
        var existingImage = document.querySelector(".services-column .servicecard-img img");
        var imageHTML = existingImage ? existingImage.outerHTML : "";

        // Create a temporary div to hold the inner content
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = innerContent;

        // Extract the content from the temporary div (removing the unnecessary wrapper)
        var textContent = tempDiv.querySelector('.services-column').innerHTML;

        // Replace the existing content in the servicecard-text div with new text content
        var existingContentText = document.querySelector(".services-column .servicecard-text");
        existingContentText.innerHTML = textContent;

        // Replace the existing content in the servicecard-img div with the preserved image HTML
        var existingContentImg = document.querySelector(".services-column .servicecard-img");
        existingContentImg.innerHTML = imageHTML;
    });
    document.body.appendChild(button_save);
}

createSaveButton("#div_editor1");