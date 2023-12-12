import {fetchAnyData, setupImage} from "./module.js";

async function createCards(Url, dataType) {
    const dataObjectList = await fetchAnyData(Url);
    const dataCards = document.querySelector('.row');
    while (dataCards.firstChild) {
        dataCards.removeChild(dataCards.firstChild);
    }
    dataObjectList.forEach(element => {
        const dataContainer = document.createElement('div');
        dataContainer.classList.add(dataType+"-column");
        console.log("id: " +element.id)
        if (element.priority % 2 === 1) {
            //Create Info
           createCardInfo(dataContainer, element);
           createCardImg(dataContainer, element);
        } else {
            //Create img and append it
            createCardImg(dataContainer, element);
            createCardInfo(dataContainer, element);
        }
        dataCards.appendChild(dataContainer);
    })
}

function createCardInfo(container, element) {
    const dataInfo = document.createElement('div');
    dataInfo.innerText = element.text;
    /*const seeMoreBtn = document.createElement('button');
    seeMoreBtn.classList.add("banner-btn blue-btn");
    seeMoreBtn.setAttribute('href', '#');
    seeMoreBtn.textContent("Læs Mere");
    dataInfo.appendChild(seeMoreBtn);*/
    container.appendChild(dataInfo);
}

function createCardImg(container, element) {
    //Create img and append it
    const imageDiv = document.createElement('div')
    imageDiv.classList.add("img-div");
    const dataImage = document.createElement('img');
    setupImage(dataImage, element);
    imageDiv.appendChild(dataImage);
    container.appendChild(imageDiv);
}


export {createCards}