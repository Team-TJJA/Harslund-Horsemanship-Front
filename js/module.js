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

async function createCards(Url) {
    const dataObjectList = await fetchAnyData(Url);
    const dataCards = document.querySelector('.row');
    while (dataCards.firstChild) {
        dataCards.removeChild(dataCards.firstChild);
    }
    dataObjectList.forEach(element => {
        const dataContainer = document.createElement('div');

        if (element.priority % 2 === 0) {
            //Create Info
            const dataInfo = document.createElement('div');
            dataInfo.innerHTML = element.text;

            //Create img and append it
            const dataImage = document.createElement('img');
            dataImage.setAttribute('src', element.image.image);
            dataImage.setAttribute('alt', 'No photo');
            dataContainer.appendChild(dataImage);
        } else {
            //Create img and append it
            const dataImage = document.createElement('img');
            dataImage.setAttribute('src', element.image.image);
            dataImage.setAttribute('alt', 'No photo');
            dataContainer.appendChild(dataImage);

            //Create Info
            const dataInfo = document.createElement('div');
            dataInfo.innerHTML = element.text;
        }
    })
}

async function setupPage(dataName, Url) {
    const data = await fetchAnyData(Url);
    const dataContainer = document.querySelector('.row');
    while (dataContainer.firstChild) {
        dataContainer.removeChild(dataContainer.firstChild);
    }
    const dataText = document.createElement('div');
    dataText.classList.add(dataName + '-column');
    dataText.innerHTML = data.text;
    dataContainer.appendChild(dataText);
}

export {postOrPutObjectAsJson, restDelete, createCards, setupPage}