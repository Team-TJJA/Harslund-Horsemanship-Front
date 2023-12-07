import {fetchAnyData, restDelete} from "./module.js"

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
            createCardInfo(dataContainer, element, dataType);
            //Create img and append it
            createCardImg(dataContainer, element)
            //create submit and delete buttons
            createSubmitButton(dataContainer);
            createDeleteButton(dataContainer, Url);
        } else {
            //Create img and append it
            createCardImg(dataContainer, element);
            //Create Info
            createCardInfo(dataContainer, element, dataType);
            //create submit and delete buttons
            createSubmitButton(dataContainer);
            createDeleteButton(dataContainer, Url);
        }
        dataCards.appendChild(dataContainer);
    })
}


function createSubmitButton(Container) {
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add("blue-btn")
    submitButton.classList.add("submit")
    submitButton.setAttribute("type", "submit")
    Container.appendChild(submitButton)
}

function createDeleteButton (container, dataObject, Url) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteObjectById(dataObject.id, Url);
        container.remove();
    });
    deleteButton.classList.add("blue-btn")
    deleteButton.classList.add("delete")
    container.appendChild(deleteButton)
}

async function deleteObjectById(objectId, Url) {
    try {
        const response = await restDelete(Url + "/" + objectId)
        const data = await response.text();
        alert(data);
    } catch(error) {
        alert(error.message);
    }
}

function createCardInfo(container, element, dataType) {
    const div = document.createElement('div');
    const dataInfo = document.createElement('div');
    dataInfo.classList.add(dataType+"-editor");
    dataInfo.innerText = element.text;
    const br1 = document.createElement('br');
    const priority = document.createElement('input')
    priority.setAttribute('type', 'number');
    priority.innerText=element.priority;
    container.appendChild(div);
    div.appendChild(dataInfo);
    div.appendChild(br1);
    div.appendChild(priority);
}

function createCardImg(container, element) {
    const imageDiv = document.createElement('div')
    const dataImage = document.createElement('img');
    dataImage.setAttribute('src', element.image);
    dataImage.setAttribute('alt', 'No photo');
    const br2 = document.createElement('br');
    const imageLink = document.createElement('input')
    container.appendChild(imageDiv)
    imageDiv.appendChild(dataImage);
    imageDiv.appendChild(br2);
    imageDiv.appendChild(imageLink);
}

export {createAdminCards}