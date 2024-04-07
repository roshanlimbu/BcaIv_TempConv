<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $requestData = json_decode(file_get_contents("php://input"), true);
  //asigning the data to variables
  $inputTemp = $requestData['inputTemp'];
  $inputUnit = $requestData['inputUnit'];
  $outputUnit = $requestData['outputUnit'];

  if($inputUnit===$outputUnit){
    $convertedTemp = $inputTemp;
    $response = [
      'success' => true,
      'convertedTemp' => $convertedTemp
    ];

  } else if ($inputUnit === 'celsius' && $outputUnit === 'fahrenheit') {
    $convertedTemp = ($inputTemp * 9/5) + 32;

    $response = [
      'success' => true,
      'convertedTemp' => $convertedTemp
    ];
  } else if($inputUnit === 'fahrenheit' && $outputUnit === 'celsius'){
    $convertedTemp = ($inputTemp - 32) * 5/9;
    $response = [
      'success' => true,
      'convertedTemp' => $convertedTemp
    ];
  } else {
    $response = [
      'success' => false,
      'error' => 'Conversion not supported'
    ];
  }

  header('Content-Type: application/json');
  echo json_encode($response);
} else {
  http_response_code(405);
  echo json_encode(['error' => 'Method Not Allowed']);
}
?>
