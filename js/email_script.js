const form = document.querySelector('form');
const display = document.querySelector('.display_message');
const urlMime = 'http://localhost:8080/send-mail';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    console.log(data.get(''))
    const entries= Object.fromEntries(data.entries());
    console.table(entries);

    insertDisplayContent('processing'); //visual representation of message being submitted.

    postMessageHandler(urlMime, entries);

});

function postMessageHandler(url, payload){
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(payload)

    })
        .then(res => {
            if(res.ok) {
                insertDisplayContent('confirm');
            }
        })
        .catch(err => {
            if (err) {
                insertDisplayContent('error');
            }
        })
}

function insertDisplayContent(cssClass) {
    if(cssClass === 'processing') {
        display.classList.add('processing');
        display.textContent = 'Sender besked...';

    } else if(cssClass ==='confirm') {
        display.classList.add(cssClass);
        display.textContent = 'Besked sendt.';
        display.style.animation = 'fate_away 4.5s ease-in-out';
        removeDisplayContent(cssClass);

    } else {
        display.classList.add(cssClass);
        display.textContent = 'Besked ikke afsendt. Prøv igen.';
        display.style.animation = 'fate_away 4.5s ease-in-out';
        removeDisplayContent(cssClass)
    }
}

function removeDisplayContent(cssClass) {
    display.classList.remove('processing');

    setTimeout(() => {
        display.classList.remove(cssClass);
        display.style.animation = '';
        display.textContent = '';
    },4000);

}