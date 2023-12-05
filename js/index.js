import {fetchAnyData} from "../module.js";

document.addEventListener('DOMContentLoaded', () => { pageSetup(); } );

function pageSetup() {
    generatePractices();
    generateServices();
}


// LAV til at lave pictures
function createPictures(dataObjectList, container) {
    dataObjectList.forEach(element => {
        const pictureDiv = document.createElement('div');
        pictureDiv.classList.add('service-column');

        const picture = document.createElement('img');
        picture.setAttribute('src', element.image.image);
        picture.setAttribute('alt', 'movie photo');
        pictureDiv.appendChild(picture);

        const layerDiv = document.createElement('div');
        layerDiv.classList.add('layer');
        picture.appendChild(layerDiv);

        const header = document.createElement('h1');
        header.innerText = element.text.split("</h1>")[0];
        layerDiv.appendChild(header);

        container.appendChild(pictureDiv);
    })
}


async function generatePractices() {
    const URL = process.env.URL + "/teknikker";
    const practiceContainer = document.getElementById('practices-row');
    while (practiceContainer.firstChild) {
        practiceContainer.removeChild(practiceContainer.firstChild);
    }
    const practices = await fetchAnyData(URL);
    const practiceArray = await JSON.parse(practices)
    createPictures(practiceArray, practiceContainer);
}

async function generateServices() {
    const URL = process.env.URL + "/ydelser";
    const serviceContainer = document.getElementById('services-row');
    while (serviceContainer.firstChild) {
        serviceContainer.removeChild(serviceContainer.firstChild);
    }
    const services = await fetchAnyData(URL);
    const serviceArray = await JSON.parse(services)
    createPictures(serviceArray, serviceContainer);
}
