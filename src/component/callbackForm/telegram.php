<?php

$name = $_POST['user_name'];

$token = "1711830255:AAGAbO6wvsViubA42P5Npx9UA3drSVxCJm0";
$chat_id = "-597478907";
$arr = array(
  'Имя: ' => $name,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>