import {fetchAnyData} from "./module.js";

async function createCards(Url, dataType) {
    const dataObjectList = await fetchAnyData(Url);
    console.log(dataObjectList);
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

export {createCards}