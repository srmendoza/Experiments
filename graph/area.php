<?php
function area_svg($valores, $ancho, $largo)
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
	$x1 = 0;//inicial
	$y1 = $y_zero;//inicial
	echo "<polygon points='$x1,$y1";
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y_zero - $valores[$i-1]*$altura_columna;
		echo " $x2,$y2 ";
		$x1 = $x2;
	}
	echo "$x2,$y1' style='stroke:black; stroke-width:2; fill:black'></polygon>";
	echo "</svg>";
}

function area_apilada_svg($valores, $ancho, $largo)
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
	$x1 = 0;//inicial
	$y1 = $y_zero;//inicial
	echo "<polygon points='$x1,$y1";
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y_zero - $valores[$i-1]*$altura_columna;
		echo " $x2,$y2 ";
		$x1 = $x2;
	}
	echo "$x2,$y1' style='stroke:black; stroke-width:2; fill:black'></polygon>";
	echo "</svg>";
}

function area__svg($valores, $ancho, $largo)
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
	$x1 = 0;//inicial
	$y1 = $y_zero;//inicial
	echo "<polygon points='$x1,$y1";
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y_zero - $valores[$i-1]*$altura_columna;
		echo " $x2,$y2 ";
		$x1 = $x2;
	}
	echo "$x2,$y1' style='stroke:black; stroke-width:2; fill:black'></polygon>";
	echo "</svg>";
}
?>