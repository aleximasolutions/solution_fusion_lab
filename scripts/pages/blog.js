let panigationBtns = [...document.querySelectorAll('.panigation__list-link[data-blog-pagination]')];
let panigationCards = [...document.querySelectorAll('.headings__content-card[data-blog-pagination-tag]')];

if (panigationCards) {
    panigationCards.forEach((card) => {
        card.classList.add('active');
    });
}

panigationBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        panigationBtns.forEach((item) => {
            item.classList.remove('active');
        });
        btn.classList.add('active');
        let btnTag = btn.getAttribute('data-blog-pagination');
        if (panigationCards) {
            panigationCards.forEach(card => {
                let cardTag = card.getAttribute('data-blog-pagination-tag');

                if (cardTag.toLowerCase() == btnTag.toLocaleLowerCase() || btnTag.toLowerCase() == 'all') {
                    card.classList.add('active');
                }
                else {
                    card.classList.remove('active');
                }
            });
        }
    });
});


