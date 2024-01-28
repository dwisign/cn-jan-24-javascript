function bmiCalc(){

    var bmiCalcCount
    const weight = parseInt(document.getElementById('inputWeight').value)
    const height = parseInt(document.getElementById('inputHeight').value)

    bmiCalcCount = (weight / Math.pow((height/100),2)).toFixed(2)
    document.getElementById('resultBmi').textContent = bmiCalcCount
    
}