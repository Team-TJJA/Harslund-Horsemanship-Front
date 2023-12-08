import {fetchAnyData} from "./module.js";

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
            dataImage.setAttribute('alt', 'Intet billede');
            dataImage.onerror = function() {
                this.onerror = null; // Avoid potential infinite loops
                this.src = '../../img/noImage.png'; // Set backup image source
            };
            imageDiv.appendChild(dataImage);
            dataContainer.appendChild(dataInfo);
            dataContainer.appendChild(imageDiv);
        } else {
            //Create img and append it
            const imageDiv = document.createElement('div')
            const dataImage = document.createElement('img');
            dataImage.setAttribute('src', element.image);
            dataImage.setAttribute('alt', 'Intet billede');
            dataImage.onerror = function() {
                this.onerror = null; // Avoid potential infinite loops
                this.src = '../../img/noImage.png'; // Set backup image source
            };
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