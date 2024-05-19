const bmiText= document.getElementById('bmi');
const descText = document.getElementById('desc');
const form = document.querySelector('form');


form.addEventListener('submit',onFormSubmit)

function onFormSubmit(e){
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);


    if(isNaN(weight) || isNaN(height) || weight <=0 || height <=0){
        alert('Please enter a valid weight and height')
        return;
    }
    // const heightInMeters= height/100;
    // const bmi = weight / Math.pow(heightInMeters,2);

    let heightInMeters;
    let weightInKg;

    if(heightUnit==='cm'){
        heightInMeters=height/100;
    }
    else{
        heightInMeters= height* 0.0254
    }

    if( weightUnit==='kg'){
        weightInKg=weight;
    }
    else{
        weightInKg=weight*0.453592;
    }


    const bmi= weightInKg/(heightInMeters*heightInMeters);
    const result = document.getElementById('result');

    result.textContent= bmi.toFixed(2);
    //result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

}
