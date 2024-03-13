function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById('input-temp').value);
  const inputUnit = document.querySelector('input[name="unit"]:checked').value;
  const outputUnit = document.querySelector('input[name="output-unit"]:checked').value;

  // Error handling for non-numeric input
  if (isNaN(inputTemp)) {
    document.getElementById('result').textContent = "Please enter a valid number.";
    return;
  }

  let convertedTemp;
  if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
    convertedTemp = (inputTemp * 9/5) + 32;
  } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
    convertedTemp = (inputTemp - 32) * 5/9;
  } else {
    // Handle cases where input and output units are the same (no conversion needed)
    convertedTemp = inputTemp;
  }

  document.getElementById('result').textContent = Converted temperature: ${convertedTemp.toFixed(2)} ${outputUnit};
}
