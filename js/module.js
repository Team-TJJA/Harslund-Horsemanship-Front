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

async function createCards(Url, dataType) {
    const dataObjectList = await fetchAnyData(Url);
    const dataCards = document.querySelector('.row');
    while (dataCards.firstChild) {
        dataCards.removeChild(dataCards.firstChild);
    }
    dataObjectList.forEach(element => {
        const dataContainer = document.createElement('div');
        dataContainer.classList.add(dataType+"-column");
        if (element.priority % 2 === 1) {
            //Create Info
            const dataInfo = document.createElement('div');
            dataInfo.innerText = element.text;
            /*const seeMoreBtn = document.createElement('button');
            seeMoreBtn.classList.add("banner-btn blue-btn");
            seeMoreBtn.setAttribute('href', '#');
            seeMoreBtn.textContent("Læs Mere");
            dataInfo.appendChild(seeMoreBtn);*/

            //Create img and append it
            const imageDiv = document.createElement('div')
            const dataImage = document.createElement('img');
            dataImage.setAttribute('src', element.image);
            dataImage.setAttribute('alt', 'No photo');
            imageDiv.appendChild(dataImage);
            dataContainer.appendChild(dataInfo);
            dataContainer.appendChild(imageDiv);
        } else {
            //Create img and append it
            const imageDiv = document.createElement('div')
            const dataImage = document.createElement('img');
            dataImage.setAttribute('src', element.image);
            dataImage.setAttribute('alt', 'No photo');
            dataContainer.appendChild(dataImage);


            //Create Info
            const dataInfo = document.createElement('div');
            dataInfo.innerText = element.text;
            /*const seeMoreBtn = document.createElement('button');
            seeMoreBtn.classList.add("banner-btn blue-btn");
            seeMoreBtn.setAttribute('href', '#');
            seeMoreBtn.textContent("Læs Mere");
            dataInfo.appendChild(seeMoreBtn);*/
            imageDiv.appendChild(dataImage);
            dataContainer.appendChild(imageDiv);
            dataContainer.appendChild(dataInfo);
        }
        dataCards.appendChild(dataContainer);
    })
}

async function createAdminCards(Url, dataType) {
    const dataObjectList = await fetchAnyData(Url);
    const dataCards = document.querySelector('.row');
    while (dataCards.firstChild) {
        dataCards.removeChild(dataCards.firstChild);
    }
    dataObjectList.forEach(element => {
        const dataContainer = document.createElement('div');
        dataContainer.classList.add(dataType+"s-column");
        dataContainer.classList.add("admin-editor");
        if (element.priority % 2 === 1) {
            //Create Info
            const div = document.createElement('div');
            const dataInfo = document.createElement('div');
            dataInfo.classList.add(dataType+"-editor");
            dataInfo.innerText = element.text;
            const br1 = document.createElement('br');
            const priority = document.createElement('input')
            priority.setAttribute('type', 'number');
            priority.innerText=element.priority;
            dataContainer.appendChild(div);
            div.appendChild(dataInfo);
            div.appendChild(br1);
            div.appendChild(priority);



            //Create img and append it
            const imageDiv = document.createElement('div')
            const dataImage = document.createElement('img');
            dataImage.setAttribute('src', element.image);
            dataImage.setAttribute('alt', 'No photo');
            const br2 = document.createElement('br');
            const imageLink = document.createElement('input')
            dataContainer.appendChild(imageDiv)
            imageDiv.appendChild(dataImage);
            imageDiv.appendChild(br2);
            imageDiv.appendChild(imageLink);

        } else {

            //Create img and append it
            const imageDiv = document.createElement('div')
            const dataImage = document.createElement('img');
            dataImage.setAttribute('src', element.image);
            dataImage.setAttribute('alt', 'No photo');
            const br2 = document.createElement('br');
            const imageLink = document.createElement('input')
            dataContainer.appendChild(imageDiv)
            imageDiv.appendChild(dataImage);
            imageDiv.appendChild(br2);
            imageDiv.appendChild(imageLink);

            //Create Info
            const div = document.createElement('div');
            const dataInfo = document.createElement('div');
            dataInfo.classList.add(dataType+"-editor");
            dataInfo.innerText = element.text;
            const br1 = document.createElement('br');
            const priority = document.createElement('input')
            priority.setAttribute('type', 'number');
            priority.innerText=element.priority;
            dataContainer.appendChild(div);
            div.appendChild(dataInfo);
            div.appendChild(br1);
            div.appendChild(priority);
        }
        dataCards.appendChild(dataContainer);
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