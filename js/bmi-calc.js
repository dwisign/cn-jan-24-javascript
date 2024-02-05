function bmiCalc(){

    var bmiCalcCount
    const weight = parseInt(document.getElementById('inputWeight').value)
    const height = parseInt(document.getElementById('inputHeight').value)

    bmiCalcCount = (weight / Math.pow((height/100),2)).toFixed(2)
    document.getElementById('resultBmi').textContent = bmiCalcCount

    if(bmiCalcCount < 18.5){
        indicator = "Underweight"
    }else if(bmiCalcCount >= 18.5 && bmiCalcCount <= 24.9){
        indicator = "Normal Weight"
    }else if(bmiCalcCount >= 25 && bmiCalcCount <= 29.9){
        indicator = "Over Weight"
    }else{
        indicator = "Obese"
    }
    
    console.log('TEST', indicator)
    document.getElementById('resultIndicator').textContent = indicator
    
}