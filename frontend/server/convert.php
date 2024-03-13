<?php

if (isset($_POST['temperature']) && isset($_POST['input-unit']) && isset($_POST['output-unit'])) {
  $inputTemp = floatval($_POST['temperature']);
  $inputUnit = $_POST['input-unit'];
  $outputUnit = $_POST['output-unit'];
        if ($inputUnit === "celsius" && $outputUnit === "fahrenheit") {
    $convertedTemp = ($inputTemp * 9/5) + 32;
  } else if ($inputUnit === "fahrenheit" && $outputUnit === "celsius") {
    $convertedTemp = ($inputTemp - 32) * 5/9;
  } else {
    $convertedTemp = $inputTemp; 
  } 
  echo json_encode(array('convertedTemp' => $convertedTemp));
  } else {
  echo "Error: Invalid data received.";
}
?>
