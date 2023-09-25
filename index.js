const goodbye = (name) => {
    const elClosing = document.querySelector('.email__closing');
    if (elClosing) {
        elClosing.innerHTML = `Na shledanou <br> S pozdravem ${name}`;
    }
};
goodbye('Pavel Ovesný');