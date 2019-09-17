<?php
function lineas_svg($valores, $ancho, $largo)
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
	echo "<polyline points='$x1,$y1";
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y_zero - $valores[$i-1]*$altura_columna;
		echo " $x2,$y2";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "' style='stroke:black; stroke-width:2; fill:none;'></polyline>";
	echo "</svg>";
}

function lineas_marcas_svg($valores, $ancho, $largo)
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
	$altura_columna = ($largo * 9/10) / $rango;
	$y_zero = $altura_columna*$zero;

	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	yzero_line($y_zero, $ancho);
	$x1 = 0;//inicial
	$y1 = $valores[0]*$altura_columna+$y_zero;//inicial
	$radio = 5;
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $valores[$i-1]*$altura_columna+$y_zero;

		echo "<line x1='$x1' y1='$y1' x2='$x2' y2='$y2' style='stroke:black; stroke-width:2;'></line>";
		echo "<circle cx='$x2' cy='$y2' r='$radio' style='stroke:black; stroke-width:2; fill:black'></circle>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "</svg>";
}

function lineas_agrupada_svg($valores, $ancho, $largo)
{
	$altura=0.8;
	$m = count($valores);

	$max = maximo_multi($valores, $m);
	$min = minimo_multi($valores, $m);
	$rango = $max - $min;

	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	yzero_line($y_zero, $ancho);
	$lista_color = colores($m);
	$n = count($valores[0]);
	$m = $m / $n;

	for($i=0; $i<$m; $i++)
	{
		$x1 = 0;//inicial
		$y1 = $valores[$i][0]*$altura_columna+$y_zero;//inicial
		$color = $lista_color[$i%$m];
		echo "<polyline points='$x1,$y1";
		for($j = 0; $j<$n; $j++)
		{
			$x2 = $ancho_columna+$x1;
			$y2 = $y_zero - $valores[$i][$j]*$altura_columna;
			echo " $x2,$y2";
			$x1 = $x2;
			$y1 = $y2;
		}
		echo "' style='stroke:$color; stroke-width:2; fill:none;'></polyline>";
	}
	echo "</svg>";
}

function lineas_marcas_agrupada_svg($valores, $ancho, $largo)
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
	$radio = 5;
	for($i=0; $i<$m; $i++)
	{
		$x1 = 0;//inicial
		$y1 = $valores[$i][0]*$altura_columna+$y_zero;//inicial
		$color = $lista_color[$i%$m];
		for($j = 0; $j<$n; $j++)
		{
			$x2 = $ancho_columna+$x1;
			$y2 = $y_zero - $valores[$i][$j]*$altura_columna;
			echo "<line x1='$x1' y1='$y1' x2='$x2' y2='$y2' style='stroke:$color; stroke-width:2;'></line>";
			echo "<circle cx='$x2' cy='$y2' r='$radio' style='stroke:black; stroke-width:2; fill:$color'></circle>";
			$x1 = $x2;
			$y1 = $y2;
		}
	}
	echo "</svg>";
}

function lineas__svg($valores, $ancho, $largo)
{
	$altura=0.8;
	$m = count($valores);

	$max = maximo_multi($valores, $m);
	$min = minimo_multi($valores, $m);
	$rango = $max - $min;

	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	yzero_line($y_zero, $ancho);
	$lista_color = colores($m);
	$n = count($valores[0]);
	$m = $m / $n;

	for($i=0; $i<$m; $i++)
	{
		$x1 = 0;//inicial
		$y1 = $valores[$i][0]*$altura_columna+$y_zero;//inicial
		$color = $lista_color[$i%$m];
		echo "<polyline points='$x1,$y1";
		for($j = 0; $j<$n; $j++)
		{
			$x2 = $ancho_columna+$x1;
			$y2 = $y_zero - $valores[$i][$j]*$altura_columna;
			echo " $x2,$y2";
			$x1 = $x2;
			$y1 = $y2;
		}
		echo "' style='stroke:$color; stroke-width:2; fill:none;'></polyline>";
	}
	echo "</svg>";
}

function lineas_marcas__svg($valores, $ancho, $largo)
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
	$radio = 5;
	for($i=0; $i<$m; $i++)
	{
		$x1 = 0;//inicial
		$y1 = $valores[$i][0]*$altura_columna+$y_zero;//inicial
		$color = $lista_color[$i%$m];
		for($j = 0; $j<$n; $j++)
		{
			$x2 = $ancho_columna+$x1;
			$y2 = $y_zero - $valores[$i][$j]*$altura_columna;
			echo "<line x1='$x1' y1='$y1' x2='$x2' y2='$y2' style='stroke:$color; stroke-width:2;'></line>";
			echo "<circle cx='$x2' cy='$y2' r='$radio' style='stroke:black; stroke-width:2; fill:$color'></circle>";
			$x1 = $x2;
			$y1 = $y2;
		}
	}
	echo "</svg>";
}
?>