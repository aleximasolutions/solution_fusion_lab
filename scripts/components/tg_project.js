
const tgProject = document.querySelector('.tg__project');
if(tgProject) {
    const tgTriangle = tgProject.querySelector('.tg__project-triangle'),
        tgCheck = tgProject.querySelectorAll('.tg__project-radio'),
        tgImages = tgProject.querySelectorAll('.tg__project-item img'),
        tgSelected = tgProject.querySelector('.tg__project-selected');
    tgCheck.forEach(item => {
        item.addEventListener('click', function(){
            let attr = this.getAttribute('data-select');
            tgTriangle.classList.remove('active');
            tgCheck.forEach((elem, i) => {
                if(attr == tgImages[i].getAttribute('data-select')){
                    tgSelected.src = tgImages[i].src;
                }
            })
            setTimeout(() => {
                tgTriangle.classList.add('active');
            }, 50);
        })
    })
}
