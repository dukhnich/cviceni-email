const goodbye = (name = '') => {
    return `Na shledanou <br> ${name}`;
};
const formalGoodbye = (name = '') => {
    return `S uctivou poklonou <br> ${name}`;
};
const rudeGoodbye = (name = '') => {
    return `Se měj <br> ${name}`;
};
const fillSubject = (subject = '') => {
    const elSubject = document.querySelector('.email__subject');
    if (elSubject && subject) {
        elSubject.textContent = subject;
    }
};
const fillBody = (body = '', name = '', goodbyeFunction) => {
    const elBody = document.querySelector('.email__body');
    if (elBody && body) {
        elBody.textContent = body;
    }
    if (typeof goodbyeFunction !== 'function') {
        return;
    }
    const elClosing = document.querySelector('.email__closing');
    if (elClosing && name) {
        elClosing.innerHTML = goodbyeFunction(name);
    }
};

fillSubject('Obchodní sdělení');
fillBody(
  'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.',
  'Jan Čistý',
  formalGoodbye
);
fillSubject('Pozvánka na oslavu narozenin');
fillBody('Zítra oslava. 18:00 ve Starý hospodě.', 'Patrik Veselý', rudeGoodbye);

