document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const weightInput = document.querySelector('#bmi-form input[name="weight"]');
    const heightInput = document.querySelector('#bmi-form input[name="height"]');
    const weightUnit = document.getElementById('weightUnit');
    const heightUnit = document.getElementById('heightUnit');
    const bmiOutput = document.getElementById('bmi');
    const descOutput = document.getElementById('desc');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        console.log('form submitted');

        let weight = weightInput.value;
        let height = heightInput.value;
        
        
        if (weightUnit.value === 'pounds') {
            weight = weight * 0.453592; 
        }
        
        
        if (heightUnit.value === 'inches') {
            height = height * 0.0254; 
        }
        
        let bmi = weight / (height * height);
        bmiOutput.textContent = bmi.toFixed(1);

        
        if (bmi < 18.5) {
            descOutput.textContent = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            descOutput.textContent = 'Normal';
        } else if (bmi >= 25 && bmi < 30) {
            descOutput.textContent = 'Overweight';
        } else {
            descOutput.textContent = 'Obese';
        }
    });

    
    document.querySelector('.reset_button button').addEventListener('click', function() {
        form.reset();
        bmiOutput.textContent = '0';
        descOutput.textContent = 'N/A';
    });
});

