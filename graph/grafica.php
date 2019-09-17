<?php
include('operadores.php');
include('pastel.php');
include('lineas.php');
include('horizontales.php');
include('verticales.php');
include('area.php');
include('puntos.php');

$valores = [24,10,13,29];
$valores2 = array(
array(4,5),
array(2,4),
array(1,6),
array(8,7));
?>
<!DOCtype html>
<html>
<head>
<title>
grafica prueba
</title>
</head>
<body>
<?php verticales_svg($valores, 300, 300); ?>

<?php horizontales_svg($valores, 300, 300); ?>

<?php puntos_svg($valores, 300, 300); ?>

<?php lineas_svg($valores, 300, 300); ?>

<?php lineas_marcas_svg($valores, 300, 300); ?>

<?php area_svg($valores, 300, 300); ?>

<?php pastel_svg($valores, 500, 500); ?>
</body>
</html>