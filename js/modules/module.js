async function fetchAnyData(url) {
    const response = await fetch(url);
    const jsonFormat = await response.json();
    console.log(jsonFormat)
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
    const dataContainer = document.querySelector('.row');
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

async function setAdminData(dataName, Url, editorSelector) {
    const data = await fetchAnyData(Url);
    const editor = document.querySelector(editorSelector + ' iframe.rte-editable');
    editor.contentDocument.body.innerHTML = data[0].text;
}

export {postOrPutObjectAsJson, restDelete, setupPage, saveAsString, setAdminData, fetchAnyData}