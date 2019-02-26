<?php

$content = file_get_contents("https://raw.githubusercontent.com/integrall/collector/master/collector.min.js?token=AfUWIRGacWxIbfx5Ek7nIt_29UtdsNnGks5cdQcywA%3D%3D");
var_dump($content);
file_put_contents("collector.min.js", $content);