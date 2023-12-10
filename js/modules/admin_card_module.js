import {fetchAnyData, restDelete, setupImage, handleSubmitForm} from "./module.js"

async function createAdminCards(url, dataType) {
    const dataObjectList = await fetchAnyData(url);
    const dataCards = document.querySelector('.row');
    while (dataCards.firstChild) {
        dataCards.removeChild(dataCards.firstChild);
    }
    dataObjectList.forEach(element => {
        const dataContainer = createCard(element, dataType);
        if (element.priority % 2 === 1) {
            //Create Info
            createCardInfo(dataContainer, element, dataType, null);
            //Create img and append it
            createCardImg(dataContainer, element);
            //create submit and delete buttons
            createSubmitButton(dataContainer);
            createDeleteButton(dataContainer, element, url);
        } else {
            //Create img and append it
            createCardImg(dataContainer, element);
            //Create Info
            createCardInfo(dataContainer, element, dataType, null);
            //create submit and delete buttons
            createSubmitButton(dataContainer);
            createDeleteButton(dataContainer, element, url);
        }
        dataCards.appendChild(dataContainer);
        const editor = dataType+"-editor"+element.priority
        initiateEditor(editor, element.text);
        initializeEvent(dataContainer, element, dataType, editor, url, 'PUT')
    });
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.classList.add("blue-btn");
    addButton.setAttribute("id", "add-element");
    addButton.addEventListener('click', () => {
        addCard(dataCards, dataType, addButton, url);
    });
    dataCards.appendChild(addButton);
}

function createSubmitButton(container) {
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add("blue-btn");
    submitButton.classList.add("submit");
    submitButton.setAttribute("type", "submit");
    container.appendChild(submitButton);
}

function createDeleteButton (container, dataObject, url) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteObjectById(dataObject, url);
        container.remove();
        updatePriorities(dataObject.priority, null, "delete");
    });
    deleteButton.classList.add("blue-btn");
    deleteButton.classList.add("delete");
    container.appendChild(deleteButton);
}

async function deleteObjectById(object, url) {
    try {
        const response = await restDelete(object, url);
        const data = await response.text();
        alert(data);
    } catch(error) {
        alert(error.message);
    }
}

function createCardInfo(container, element, dataType, createPriority) {
    const div = document.createElement('div');
    const dataInfo = document.createElement('div');
    const editorSelector = dataType + "-editor";
    let editorSelector1
    const priority = document.createElement('input');
    if (element !== null) {
        priority.value = element.priority.toString();
        editorSelector1 = editorSelector + element.priority;
    } else {
        priority.value = createPriority;
        editorSelector1 = editorSelector + createPriority;
    }
    dataInfo.classList.add(editorSelector);
    dataInfo.setAttribute("id", editorSelector1);
    dataInfo.setAttribute("required", "true");
    priority.setAttribute('type', 'number');
    priority.classList.add('priority');
    container.appendChild(div);
    div.appendChild(dataInfo);
    div.appendChild(priority);
}

function createCardImg(container, element) {
    const imageDiv = document.createElement('div')
    imageDiv.classList.add("admin-img-div");
    const dataImage = document.createElement('img');
    dataImage.classList.add("image-link");
    setupImage(dataImage, element);
    const br2 = document.createElement('br');
    const imageLink = document.createElement('input')
    imageLink.setAttribute("placeholder", "Billede link");
    imageLink.setAttribute("type", "text");
    imageLink.classList.add("link");
    container.appendChild(imageDiv);
    imageDiv.appendChild(dataImage);
    imageDiv.appendChild(br2);
    imageDiv.appendChild(imageLink);
}

function initiateEditor(editorSelector, text) {
    const editor = document.getElementById(editorSelector);
    new RichTextEditor(editor, {editorResizeMode: "none"});

    const editorElement = document.querySelector("#"+editorSelector + ' iframe.rte-editable');
    editorElement.contentDocument.body.innerHTML = text;
}

function getImage(form) {
    const image = form.querySelector(".link")
    let imageLink;
    if (image.value === null || image.value === "") {
       imageLink = form.querySelector(".image-link");
       return imageLink.src;
    }
    return image.value;
}

function getPriority(form) {
    const priority = form.querySelector(".priority")
    return priority.value;
}

function updatePriorities(updatedPriority, oldPriority, reasonToUpdate) {
    const forms = Array.from(document.getElementsByClassName('admin-editor'));
    if (oldPriority !== updatedPriority) {
        forms.forEach(form => {
            const priority = form.querySelector(".priority");
            if (reasonToUpdate === "delete" && priority.value > updatedPriority) {
                form.querySelector(".priority").value = priority.value-1;
            } else if (reasonToUpdate !== "delete" && priority.value > updatedPriority) {
                form.querySelector(".priority").value = priority.value - 1;
            }
            form.dispatchEvent(new Event('submit'));
        });
    }
}

function createCard(element, dataType) {
    const dataContainer = document.createElement('form');
    dataContainer.classList.add(dataType+"s-column");
    dataContainer.classList.add("admin-editor");
    dataContainer.setAttribute("id", "admin-editor"+element.priority);
    return dataContainer;
}

function addCard(container, dataType, button, url) {
    const forms = Array.from(document.getElementsByClassName('admin-editor'));
    const size = forms.length+1;
    const cardContainer = createCard({priority: size}, dataType);
    if ((forms.length+1) % 2 === 1) {
        createCardInfo(cardContainer, null, dataType, size);
        createCardImg(cardContainer, null);
        createSubmitButton(cardContainer);
        createDeleteButton(cardContainer, null, url);
    } else {
        createCardImg(cardContainer, null);
        createCardInfo(cardContainer, null, dataType, size);
        createSubmitButton(cardContainer);
        createDeleteButton(cardContainer, null, url);
    }
    const editor = dataType+"-editor"+size;
    container.appendChild(cardContainer);
    initiateEditor(editor, "");
    initializeEvent(container, {priority: size}, dataType, editor, url, cardContainer, 'POST')
    container.appendChild(button);
}

function initializeEvent(dataContainer, element, dataType, editor, url, container, httpVerb) {
    const savedPriority = element.priority;
    dataContainer.addEventListener('submit', (event) => {
        event.preventDefault();
        updatePriorities(element.priority, savedPriority, "update");
        handleSubmitForm(event, dataType, editor, url, element.id, getImage(container), getPriority(container), httpVerb);
    });
}

export {createAdminCards}