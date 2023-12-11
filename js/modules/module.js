async function fetchAnyData(url) {
    const response = await fetch(url);
    const jsonFormat = await response.json();
    return jsonFormat;
}

async function postOrPutObjectAsJson(url, object, HttpVerb) {
    const objectToJsonString = JSON.stringify(object);
    const fetchOption = {
        method: HttpVerb,
        headers: {'Content-type' : 'application/json'},
        body: objectToJsonString
    }
    const response = await fetch(url, fetchOption);
    return response;
}

async function restDelete(object, url) {
    const fetchOption = {
        method: "DELETE",
        body: JSON.stringify(object),
        headers: {'Content-type' : 'application/json'},
    }
    const response = await fetch(url,fetchOption);
    return response;
}

async function setupPage(dataName, Url) {
    const data = await fetchAnyData(Url);
    const dataContainer = document.getElementById(dataName+'-row');
    while (dataContainer.firstChild) {
        dataContainer.removeChild(dataContainer.firstChild);
    }
    const dataText = document.createElement('div');
    dataText.classList.add(dataName + '-column');
    dataText.innerHTML = data[0].text;
    dataContainer.appendChild(dataText);
}

function saveAsString(editorSelector) {
    const editor = "#"+editorSelector;
    const editorWindow = document.querySelector(editor + ' iframe.rte-editable');
    // Get the inner content from the RichTextEditor's editable div
    const innerContent = editorWindow.contentDocument.body.innerHTML;
    return innerContent;
}

async function setAdminData(dataName, Url, editorSelector, elementID) {
    const data = await fetchAnyData(Url);
    const editor = document.querySelector(editorSelector + ' iframe.rte-editable');
    editor.contentDocument.body.innerHTML = data[0].text;
    createFormEventListener(dataName, elementID, Url, data[0].id);
}

function createFormEventListener(dataName, elementID, url, id) {
    const form = document.getElementById(elementID);
    form.addEventListener('submit', (event) => {
        handleSubmitForm(event, dataName, elementID, url, id, null, null, 'PUT', true);
    });
}

async function handleSubmitForm(event, dataName, elementID, url, id, image, priority, httpVerb, doAlert) {
    event.preventDefault();
    const text = saveAsString(elementID);
    const form = createObject(text, id, dataName, image, priority);
    let response;
    response = await postOrPutObjectAsJson(url, form, httpVerb);
    if(response.ok && doAlert === true) {
        alert(dataName + ' updated');
    }
}

function setupImage(dataImage, element) {
    if (element !== null) {
        dataImage.setAttribute('src', element.image);
    } else {
        dataImage.setAttribute('src', '../../img/noImage.png');
    }
    dataImage.setAttribute('alt', 'Intet billede');
    dataImage.onerror = function () {
        this.onerror = null; // Avoid potential infinite loops
        this.src = '../../img/noImage.png'; // Set backup image source
    };
}

function createObject(text, id, dataName, image, priority) {
    if (priority === null) {
        return {id: id, text: text};
    } else {
        return {id: id, text: text, image: image, priority: priority};
    }
}

export {postOrPutObjectAsJson, restDelete, setupPage, saveAsString, setAdminData, fetchAnyData, handleSubmitForm, createFormEventListener, setupImage}