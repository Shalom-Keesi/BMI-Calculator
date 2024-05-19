// const bmiText= document.getElementById('bmi');
// const descText = document.getElementById('desc');
// const form = document.querySelector('form');


// form.addEventListener('click',onFormSubmit);

// function onFormSubmit(e){
//     e.preventDefault();

//     const weight = parseFloat(form.weight.value);
//     const height = parseFloat(form.height.value);


//     if(isNaN(weight) || isNaN(height) || weight <=0 || height <=0){
//         alert('Please enter a valid weight and height')
//         return;
//     }
//     // const heightInMeters= height/100;
//     // const bmi = weight / Math.pow(heightInMeters,2);

//     let heightInMeters;
//     let weightInKg;

//     if(heightUnit==='cm'){
//         heightInMeters=height/100;
//     }
//     else{
//         heightInMeters= height* 0.0254;
//     }

//     if( weightUnit==='kg'){
//         weightInKg=weight;
//     }
//     else{
//         weightInKg=weight*0.453592;
//     }


//     const bmi= weightInKg/(heightInMeters*heightInMeters);
//     const result = document.getElementsByClassName('output');
//     const desc = interpretBMI(result);

//     result.textContent= bmi.toFixed(2);
//     // result= document.querySelector('.output')
//     result.className = desc;

//     desc.innerHTML = `Your BMI is <strong>${desc}</strong>`;

// }


// function interpretBMI(result){
//     if(result<18.5){
//         return 'underweight';
//     }
//     else if(result <25){
//         return 'healthy';
//     }
//     else if(result <30){
//         return 'overweight';
//     }
//     else{
//         return 'obese';
//     }
// }

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
        
        // Convert weight to kg if in pounds
        if (weightUnit.value === 'pounds') {
            weight = weight * 0.453592; // 1 pound is approximately 0.453592 kg
        }
        
        // Convert height to meters if in inches
        if (heightUnit.value === 'inches') {
            height = height * 0.0254; // 1 inch is approximately 0.0254 meters
        }
        
        let bmi = weight / (height * height);
        bmiOutput.textContent = bmi.toFixed(1);

        // Determine BMI category
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

    // Reset form on button click
    document.querySelector('.reset_button button').addEventListener('click', function() {
        form.reset();
        bmiOutput.textContent = '0';
        descOutput.textContent = 'N/A';
    });
});

