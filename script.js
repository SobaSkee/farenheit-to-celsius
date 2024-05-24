

function convertToCelsius() {
    // get the farenheit element from html
    const farenheitElem = document.getElementById("farenheit");
    // this grabs the result p tag element from the html
    const resultElem = document.getElementById("result");
    const farenheitVal = parseFloat(farenheitElem.value);
    if (isNaN(farenheitVal)) {
        // set the content of the p tag to nothing if invalid number is entered
        resultElem.textContent = "Please enter a valid number";
        return;
    }

    // otherwise do math to get the celsius value
    const celsiusVal = (farenheitVal - 32) * (5 / 9);
    
    resultElem.textContent = farenheitVal + "°F is approximately " + celsiusVal.toFixed(2) + "°C";
}