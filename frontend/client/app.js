function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("input-temp").value);
  const inputUnit = document.querySelector('input[name="unit"]:checked').value;
  const outputUnit = document.querySelector(
    'input[name="output-unit"]:checked',
  ).value;

  fetch("convert.php", {
    method: "POST",
    body: JSON.stringify({
      temperature: inputTemp,
      "input-unit": inputUnit,
      "output-unit": outputUnit,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.convertedTemp) {
        document.getElementById("result").textContent = Converted;
        temperature: $;
        {
          data.convertedTemp.toFixed(2);
        }
        $;
        {
          outputUnit;
        }
      } else {
        document.getElementById("result").textContent =
          "Error: Conversion failed.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").textContent =
        "Error: Conversion failed.";
    });
}
