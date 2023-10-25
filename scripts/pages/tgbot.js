// tg fucking creation block

const tgCreation = document.querySelector('.tg__creation');
if(tgCreation){
    const progressClasses = ['null', 'half', 'full'];
    const tgCards = [...document.querySelectorAll('.tg__creation-card')],
          tgInfo = document.querySelectorAll('.tg__creation-announce'),
          tgProcess = [...document.querySelectorAll('.tg__creation-elem')],
          tgProgress = document.querySelector('.tg__creation-progress'),
          tgSeparate = document.querySelector('.tg__creation-sep'),
          tgPrev = document.querySelector('.tg__creation-prev'),
          tgNext = document.querySelector('.tg__creation-next'),
          tgNextText = document.querySelector('.tg__creation-next span'),
          tgFinal = document.querySelector('.tg__creation-final'),
          tgCheckLabels = document.querySelectorAll('.tg__creation-check .tg__creation-label'),
          tgSubmit = document.querySelector('.tg__creation-form'),
          tgReset = document.querySelector('.tg__creation-reset'),
          tgInput = [...tgSubmit.querySelectorAll('.tg__creation-input input')],
          tgInputText = tgSubmit.querySelectorAll('.tg__creation-input span');
        let index = 0;
        function toggleCreation(){
            let activePoint = tgCards.findIndex(item => item.classList.contains('active'));
            let elems = tgCards[activePoint].querySelectorAll('input:checked');
            if(elems){
                for (let i = 0; i < tgCards.length; i++) {
                    tgCards[i].classList.remove('active');
                    tgInfo[i].classList.remove('active');
                    tgProgress.classList.remove(progressClasses[i]);
                }
                if(index == tgCards.length - 1) tgNextText.textContent = 'Завершить';
                else tgNextText.textContent = 'Следующий шаг';
                tgCheckRadio = tgCards[0].querySelector('input[type=radio]:checked ~ span');
                tgCheckLabels[0].innerHTML = `<p>${tgCheckRadio.textContent}</p>`;
                    let some = index > 0 ? index-1 : 0; 
                    let data = tgCards[0].querySelectorAll('input[type=checkbox]:checked ~ span');
                    let data1 = tgCards[1].querySelectorAll('input[type=checkbox]:checked ~ span');
                    let block = '';
                    if(data){
                        data.forEach(item => block += `<p>${item.textContent}</p>`);
                        tgCheckLabels[1].innerHTML = block;
                    }
                    block = '';
                    if(data1){
                        data1.forEach(item => block += `<p>${item.textContent}</p>`);
                        tgCheckLabels[2].innerHTML = block;
                    }
                tgCards[index].classList.add('active');
                tgInfo[index].classList.add('active');
                tgProcess[index].classList.add('active');
                tgProgress.classList.add(progressClasses[index]);
            }
            else alert('Вы ничего не выбрали');
        }
        tgPrev.addEventListener('click', function(e){
                e.preventDefault();
                tgProcess[index].classList.remove('active');
                if(index > 0) index--;
                toggleCreation();
        })
        tgNext.addEventListener('click', function(e){
            e.preventDefault();
                if(index < tgCards.length -1) {
                    index++;
                    toggleCreation();
                    tgProcess[index].classList.add('active');
                }
                else if(index == tgCards.length-1){
                    tgCards.forEach(item => item.classList.remove('active'));
                    tgFinal.classList.add('active');
                    tgSeparate.style.display = 'none';
                    tgInfo[tgInfo.length - 1].classList.remove('active');
                }
        });
        tgReset.addEventListener('click', function(e){
            e.preventDefault();
            let ask = confirm('Вы уверены, все введенные до этого данные будут стерты?');
            if(ask) {
                tgSubmit.reset();
                index = 0;
                toggleCreation();
                tgProcess.forEach((item, i) => i > 0 ? item.classList.remove('active') : '');
            }
        })
        toggleCreation();
        
        tgSubmit.addEventListener('submit', function(e){
            e.preventDefault();
            alert('Ваша заявка отправлена, скоро с вами свяжутся');
            window.location.reload();    
        })
        tgInput.forEach(item => {
            item.addEventListener('focus', function(){
                let active = tgInput.indexOf(this);
                tgInputText[active].classList.add('active');
            })
            item.addEventListener('blur', function(){
                let active = tgInput.indexOf(this);
                if(this.value == '') tgInputText[active].classList.remove('active');
            })
        })
}
