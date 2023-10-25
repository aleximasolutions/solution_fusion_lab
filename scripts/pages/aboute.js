let workStepsItems = [...document.querySelectorAll('.works__steps-item')];

if(workStepsItems) {
    let lastItem =  workStepsItems[workStepsItems.length - 1];

    if(workStepsItems.length % 2 == 0) {
        lastItem.classList.add('_honest');
    } else {
        lastItem.classList.remove('_honest');
    }
}