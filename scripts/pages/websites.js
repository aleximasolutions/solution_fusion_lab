let allInput = document.querySelectorAll('.our__products-list-top');
allInput.forEach((input) => {
    input.addEventListener('click', () => {
        allInput.forEach(element => {
            element.classList.remove('active');
        });
        input.classList.add('active');
    });
});

let allInputDown = document.querySelectorAll('.our__products-list-down');
allInputDown.forEach((input) => {
    input.addEventListener('click', () => {
        allInputDown.forEach(element => {
            element.classList.remove('active');
        });
        input.classList.add('active');
    });
});


const headerBtn = document.querySelector('.content-left__btn');
const headerContentLeft = document.querySelector('.header__content-left');

headerBtnChangePosition();
addEventListener('resize', headerBtnChangePosition);
function headerBtnChangePosition() {
    if (innerWidth <= 768) {
        headerContentLeft.after(headerBtn);
    } else {
        headerContentLeft.append(headerBtn);
    }
}