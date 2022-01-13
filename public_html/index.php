<?php
include("../../mathcrypto/matematicas/bigcalculator.php");
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

$p = [0, 0, 1];
$q = [0, 0, 2];

//$sum = $calc->add($p, $q);
//echo $calc->imprimir();
$res = $calc->restar($p, $q);
echo $calc->imprimir();
//$mul = $calc->multiplicar($p, $q);
//echo $calc->imprimir();
//$div = $calc->dividir($p, $q);
//echo $calc->imprimir();
//$pot = $calc->potenciar($q, 2);
//echo $calc->imprimir();
?>
</body>
</html>