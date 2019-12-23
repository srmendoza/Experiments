<?php
function verticales_svg($valores, $ancho, $largo)
{
	$altura = 80;
	// Crear imagen
	$m = count($valores);

	$ancho_columna = ($ancho * 9/10) / ($m);
	// buscar la escala
	$max = maximo($valores, $m);
	$min = minimo($valores, $m);
	$rango = rango_grafica_x($max, $min);
	$zero = zero($max, $min);
	$altura_columna = ($largo / $rango) * (9/10);
	$y_zero = $largo - ($altura_columna*$zero);//inicial

	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	yzero_line($y_zero, $ancho);
	$x1 = 0;//inicial
	$y1 = $y_zero;
	$lista_color = colores($m);
	for($i = 0; $i<$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y_zero -$valores[$i]*$altura_columna;
		$color = $lista_color[$i];
		echo "<polygon points='$x1, $y1 $x1, $y2 $x2, $y2 $x2, $y1' style='stroke:$color; stroke-width:2; fill:$color'></polygon>";
		$x1 = $x2;
	}
	echo "</svg>";
}

function verticales_agrupada_svg($valores, $ancho, $largo)
{
	$altura = 80;
	// Crear imagen
	$cant = count($valores);
	$m = count($valores[0]);
	// buscar la escala
	$max = maximo_multi($valores, $cant, $m);
	$min = minimo_multi($valores, $cant, $m);
	$rango = rango_grafica_x($max, $min);
	$zero = zero($max, $min);
	$altura_columna = ($largo / $rango) * (9/10);
	$y_zero = $largo - ($altura_columna*$zero);//inicial

	$altura_columna = ($largo * 9/10) / $rango;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	yzero_line($y_zero, $ancho);
	$ancho_columna = ($ancho * 9/10) / ($cant*($m+1));
	$x1 = 0;//inicial
	$y1 = $largo - 0;//inicial
	$lista_color = colores($m);
	for($i = 0; $i<$cant; $i++)
	{
		for($j=0; $j<$m; $j++)
		{
			$color = $lista_color[$j%$m];
			$x2 = $ancho_columna+$x1;
			$y2 = $y1 - (($valores[$i][$j])*$altura_columna);
			echo "<polygon points='$x1, $y1 $x1, $y2 $x2, $y2 $x2, $y1' style='stroke:black; stroke-width:2; fill:$color'></polygon>";
			$x1 = $x2;
		}
		$x1 = $x1 + $ancho_columna;
	}
	echo "</svg>";
}

function verticales_apilada_svg($valores, $ancho, $largo)
{
	$altura = 80;
	// Crear imagen
	$cant = count($valores);
	$m = count($valores[0]);
	// buscar la escala
	$max = maximo_apilada($valores, $cant);
	$min = minimo_apilada($valores, $cant);
	$rango = $max - $min;

	$altura_columna = ($largo * 9/10)/ $rango;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	yzero_line($y_zero, $ancho);

	$ancho_columna = ($ancho * 9/10) / ($cant*($m+1));

	$x1 = 0;//inicial
	$y1 = $largo - 0;//inicial
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y1 - (($valores[$i-1])*$altura_columna);
		echo "<polygon points='$x1, $y1 $x1, $y2 $x2, $y2 $x2, $y1' style='stroke:black; stroke-width:2; fill:black'></polygon>";
		$x1 = $x2;
	}
	echo "</svg>";
}

function verticales__svg($valores, $ancho, $largo)
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
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y1 - (($valores[$i-1])*$altura_columna);
		echo "<polygon points='$x1, $y1 $x1, $y2 $x2, $y2 $x2, $y1' style='stroke:black; stroke-width:2; fill:black'></polygon>";
		$x1 = $x2;
	}
	echo "</svg>";
}

function horizontales_svg($valores, $ancho, $largo)
{
	$altura = 80;
	// Crear imagen
	$m = count($valores);

	$ancho_columna = ($ancho * 9/10) / ($m);
	// buscar la escala
	$max = maximo($valores, $m);
	$min = minimo($valores, $m);
	$rango = $max - $min;
	$zero = zero($max, $min);
	$altura_columna = ($ancho / $rango) * (9/10);
	$x_zero = ($altura_columna*$zero);

	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	xzero_line($x_zero, $ancho);
	$y1 = 0;//inicial
	$x1 = $x_zero;//inicial
	$lista_color = colores($m);
	echo "<line x1='$x_zero' y1='0' x2='$x_zero' y2='$largo' style='stroke:black; stroke-width:2;'></line>";
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = $x_zero + $valores[$i-1]*$altura_columna;
		$y2 = $ancho_columna + $y1;
		$color = $lista_color[$i-1];
		echo "<polygon points='$x1, $y1 $x2, $y1 $x2, $y2 $x1, $y2' style='stroke:$color; stroke-width:2; fill:$color'></polygon>";
		$y1 = $y2;
	}
	echo "</svg>";
}

function horizontales_agrupada_svg($valores, $ancho, $largo)
{
	$altura = 80;
	// Crear imagen
	$cant = count($valores);
	$m = count($valores[0]);

	$ancho_columna = ($ancho * 9/10) / ($m);
	// buscar la escala
	$max = maximo_multi($valores, $m);
	$min = minimo_multi($valores, $m);
	$rango = $max - $min;

	$altura_columna = ($largo * 9/10) / $rango;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	xzero_line($x_zero, $ancho);
	$x1 = 0;//inicial
	$y1 = 0;//inicial
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = ($valores[$i-1])*$altura_columna + $x1;
		$y2 = $ancho_columna + $y1;
		echo "<polygon points='$x1, $y1 $x2, $y1 $x2, $y2 $x1, $y2' style='stroke:black; stroke-width:2; fill:black'></polygon>";
		$y1 = $y2;
	}
	echo "</svg>";
}

function horizontales_apilada_svg($valores, $ancho, $largo)
{
	$altura = 80;
	// Crear imagen
	$cant = count($valores);
	$m = count($valores[0]);

	$ancho_columna = ($ancho * 9/10) / ($m);
	// buscar la escala
	$max = maximo_apilada($valores, $m);
	$min = minimo_apilada($valores, $m);
	$rango = $max - $min;

	$altura_columna = ($largo * 9/10) / $rango;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	xzero_line($x_zero, $ancho);
	$x1 = 0;//inicial
	$y1 = 0;//inicial
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = ($valores[$i-1])*$altura_columna + $x1;
		$y2 = $ancho_columna + $y1;
		echo "<polygon points='$x1, $y1 $x2, $y1 $x2, $y2 $x1, $y2' style='stroke:black; stroke-width:2; fill:black'></polygon>";
		$y1 = $y2;
	}
	echo "</svg>";
}

function horizontales__svg($valores, $ancho, $largo)
{
	$altura = 80;
	// Crear imagen
	$m = count($valores);

	$ancho_columna = ($ancho * 9/10) / ($m);
	// buscar la escala
	$max = maximo_multi($valores, $m);
	$min = minimo_multi($valores, $m);
	$rango = $max - $min;

	$altura_columna = ($largo * 9/10) / $rango;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	xzero_line($x_zero, $ancho);
	$x1 = 0;//inicial
	$y1 = 0;//inicial
	for($i = 1; $i<=$m; $i++)
	{
		$x2 = ($valores[$i-1])*$altura_columna + $x1;
		$y2 = $ancho_columna + $y1;
		echo "<polygon points='$x1, $y1 $x2, $y1 $x2, $y2 $x1, $y2' style='stroke:black; stroke-width:2; fill:black'></polygon>";
		$y1 = $y2;
	}
	echo "</svg>";
}
?>