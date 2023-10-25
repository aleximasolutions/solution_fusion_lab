let btnLinks = [...document.querySelectorAll('[data-tabs]')];
let tabs = [...document.querySelectorAll('[data-tabs-content]')];

changeProductsTitle();
addEventListener('resize', changeProductsTitle);

function changeProductsTitle() {
    let productsTitle = document.querySelector('.products__title');
    if (innerWidth <= 768) {
        productsTitle.innerHTML = 'Our products';
    } else {
        productsTitle.innerHTML = 'Our products';
    }
}

btnLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        let linkAtr = link.getAttribute('data-tabs');
        tabs.forEach((tab) => {
            let tabAtr = tab.getAttribute('data-tabs-content');
            if (linkAtr == tabAtr) {
                tab.classList.add('active');
                btnLinks.forEach((item) => item.classList.remove('active'));
                link.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    });
});