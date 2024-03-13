<?php

if (isset($_POST['temperature']) && isset($_POST['input-unit']) && isset($_POST['output-unit'])) {
  $inputTemp = floatval($_POST['temperature']);
  $inputUnit = $_POST['input-unit'];
  $outputUnit = $_POST['output-unit'];

?>
