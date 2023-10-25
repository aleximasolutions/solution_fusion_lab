let crmContentImg = document.querySelector('.header__crm .header__crm-img');
let crmTxt = document.querySelector('.header__crm-txt');

// if(crmContentImg && crmTxt) {
    adaptiveImg();
    addEventListener('resize', adaptiveImg);
// }

function adaptiveImg() {
    if(innerWidth > 850) {
        crmTxt.after(crmContentImg);
    } else {
        crmTxt.append(crmContentImg);
    }
}
