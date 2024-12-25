document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const bmi = document.querySelector('#bmi');

        if( height < 0 || weight < 0 || isNaN(height) || isNaN(weight) ) {
            bmi.innerHTML = 'Please Enter valid Values';
        } else {
            const bmiResult = (weight / ((height * height)/10000)).toFixed(2);
            
            if(bmiResult < 18.6) {
                bmi.innerHTML = `<span>${bmiResult} UnderWeight</span>`;
            } else if (bmiResult < 24.9 && bmiResult > 18.6) {
                bmi.innerHTML = `<span>${bmiResult} Healthy Range</span>`;
            } else {
                bmi.innerHTML = `<span>${bmiResult} OverWeight</span>`;
            }
        }
    });

});