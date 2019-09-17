<?php
function puntos_svg($valores, $ancho, $largo)
{
	$altura = 80;
	// Crear imagen
	$m = count($valores);

	$ancho_columna = ($ancho * 9/10) / ($m);
	// buscar la escala
	$min = minimo($valores, $m);
	$max = maximo($valores, $m);
	$rango = $max - $min;
	$zero = zero($max, $min);
	$altura_columna = ($largo / $rango) * (9/10);
	$y_zero = $largo - $altura_columna*$zero;

	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	yzero_line($y_zero, $ancho);
	$radio = 5;
	$x1 = 0;
	for($i = 0; $i<$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y_zero - $valores[$i]*$altura_columna;
		echo "<circle cx='$x2' cy='$y2' r='$radio' style='stroke:black; stroke-width:2; fill:black'></circle>";
		$x1 = $x2;
	}
	echo "</svg>";
}

function puntos_multi_svg($valores, $ancho, $largo)
{
	$altura = 80;
	// Crear imagen
	$m = count($valores);

	$ancho_columna = ($ancho * 9/10) / ($m);
	// buscar la escala

	$max = maximo_multi($valores, $m);
	$min = minimo_multi($valores, $m);
	$rango = $max - $min;

	$altura_columna = ($largo * 9/10)/ $rango;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	yzero_line($y_zero, $ancho);
	$x1 = 0;//inicial
	$y1 = $largo - 0;//inicial
	$radio = 5;
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y1 - (($valores[$i-1])*$altura_columna);
		echo "<circle cx='$x2' cy='$y2' r='$radio' style='stroke:black; stroke-width:2; fill:black'></circle>";
		$x1 = $x2;
	}
	echo "</svg>";
}
?>