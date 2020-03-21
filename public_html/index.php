<?php
include("../matematicas/bigcalculator.php");
$calc = new big_calculator();
?>
<!DOCtype html>
<html>
<head>
<title>Index</title>
</head>
<body>
Bienvenido

<?php

$p = array(0, 0, 1);
$q = array(2);

//$sum = $calc->sumar($p, $q);
$res = $calc->restar($p, $q);
//$mul = $calc->multiplicar($p, $p);
//$div = $calc->dividir($p, $q);
$pot = $calc->potenciar($q, 200);

//print_r($sum);
print_r($res);
//print_r($mul);
//print_r($div);
print_r($pot);
?>
</body>
</html>