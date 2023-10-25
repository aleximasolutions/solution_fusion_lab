let hasStart = false;

addEventListener('scroll', () => {
    if (scrollY > 100 && !hasStart) {
        hasStart = true;
        startCounters();
    }
});


function startCounters() {
    let counters = document.querySelectorAll('[data-counter]');

    if (counters) {

        counters.forEach(item => {

            let maxValue = item.getAttribute('data-counter').split(',')[0];
            let interval = item.getAttribute('data-counter').split(',')[1];
            let index = 0;



            let cuonter = setInterval(function () {
                if (index != maxValue) {
                    index++;
                    item.innerHTML = index;
                } else {
                    clearInterval(cuonter);
                }
            }, interval);
        });

    }
}