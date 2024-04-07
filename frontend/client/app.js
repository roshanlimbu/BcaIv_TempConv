function submitForm() {
  const inputTemp = parseFloat(document.getElementById("input-temp").value);
  const inputUnit = document.querySelector('input[name="unit"]:checked').value;
  const outputUnit = document.querySelector(
    'input[name="output-unit"]:checked',
  ).value;

  if (isNaN(inputTemp)) {
    document.getElementById("result").textContent =
      "Please enter a valid number.";
    return;
  }

  const dataToSend = {
    inputUnit: inputUnit,
    inputTemp: inputTemp,
    outputUnit: outputUnit,
  };

  fetch("convert.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        document.getElementById("result").textContent =
          `Converted temperature: ${data.convertedTemp.toFixed(2)} ${outputUnit}`;
      } else {
        document.getElementById("result").textContent = "Error: " + data.error;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").textContent =
        "Error: Conversion failed.";
    });
}
