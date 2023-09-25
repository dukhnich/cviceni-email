const goodbye = (name = '') => {
    const elClosing = document.querySelector('.email__closing');
    if (elClosing && name) {
        elClosing.innerHTML = `Na shledanou <br> S pozdravem ${name}`;
    }
};
const fillSubject = (subject = '') => {
    const elSubject = document.querySelector('.email__subject');
    if (elSubject && subject) {
        elSubject.textContent = subject;
    }
};
const fillBody = (body = '', name = '') => {
    const elBody = document.querySelector('.email__body');
    if (elBody && body) {
        elBody.textContent = body;
    }
    goodbye(name);
};

fillSubject('Korporatní novinky');
fillBody('Nic nového.', 'Pavel Ovesný')