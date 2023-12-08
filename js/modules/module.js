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

async function restDelete(url) {
    const fetchOption = {
        method: "DELETE",
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
    const editor = document.querySelector(editorSelector + ' iframe.rte-editable');
    // Get the inner content from the RichTextEditor's editable div
    const innerContent = editor.contentDocument.body.innerHTML;
    return innerContent;
}

async function setAdminData(dataName, Url, editorSelector, elementID) {
    const data = await fetchAnyData(Url);
    const editor = document.querySelector(editorSelector + ' iframe.rte-editable');
    editor.contentDocument.body.innerHTML = data[0].text
    createFormEventListener(dataName, elementID, Url);
}

function createFormEventListener(dataName, elementID, url) {
    const form = document.getElementById(elementID);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        handleSubmitForm(dataName, elementID, url);
    });
}

async function handleSubmitForm(dataName, elementID, url) {
    const form = {id: 1, text: saveAsString("#"+elementID)}
    let response;
    response = await postOrPutObjectAsJson(url, form, 'PUT');
    if(response.ok) {
        alert(dataName + ' updated');
    }
}

export {postOrPutObjectAsJson, restDelete, setupPage, saveAsString, setAdminData, fetchAnyData, handleSubmitForm}