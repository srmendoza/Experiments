<?php
function pastel_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	// Crear imagen
	$total = 0;
	$m = count($valores);
	for($i = 0; $i<$m; $i++)
	{
		$total = $total + $valores[$i];
	}
	// Calcular �ngulos
	$ct->x = $ancho / 2;//centro
	$ct->y = $largo / 2;//centro
	$radio = ($largo - $ct->y)*9/10;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$x1 = $ct->x + $radio;
	$y1 = $ct->y;
	$angulo = 0;
	$lista_color = colores($m);
	for($i=0; $i<$m; $i++)
	{
		$control = $angulo + (($valores[$i] / 2) / $total) * (2 * $pi);
		$angulo = $angulo + ($valores[$i] / $total) * (2 * $pi);
		$qx = $ct->x + $radio * coseno($control);
		$qy = $ct->y + $radio * seno($control);
		$x2 = $ct->x + $radio * coseno($angulo);
		$y2 = $ct->y + $radio * seno($angulo);
		//M $x2, $y2 L $ct->x, $ct->y
		$color = $lista_color[$i%$m];
		echo "<path d='M $ct->x, $ct->y L $x1, $y1 L $x2, $y2 L $ct->x, $ct->y Z' style='stroke:$color; stroke-width:0; fill:$color'></path>";
		echo "<path d='M $ct->x, $ct->y L $x1, $y1 M $x1, $y1 A $radio, $radio 0 0,1 $qx, $qy A $radio, $radio 0 0,1 $x2, $y2 M $x2, $y2 L $ct->x, $ct->y Z' style='stroke:black; stroke-width:2; fill:$color'></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$ct->x' cy='$ct->y' r='$radio' style='stroke:black; stroke-width:2; fill:none'></circle>";
	echo "</svg>";
}

function anillo_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	// Crear imagen
	$total = 0;
	$m = count($valores);
	for($i = 0; $i<$m; $i++)
	{
		$total = $total + $valores[$i];
	}
	// Calcular �ngulos
	$ct->x = $ancho / 2;//centro
	$ct->y = $largo / 2;//centro
	$inner_radio = ($largo - $ct->y)*8/10;
	$outter_radio = ($largo - $ct->y)*9/10;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$x1 = $ct->x + $radio;
	$y1 = $ct->y;
	$angulo = 0;
	$lista_color = colores($m);
	for($i=0; $i<$m; $i++)
	{
		$control = $angulo + (($valores[$i] / 2) / $total) * (2 * $pi);
		$angulo = $angulo + ($valores[$i] / $total) * (2 * $pi);
		$qx = $ct->x + $inner_radio * coseno($control);
		$qy = $ct->y + $inner_radio * seno($control);
		$x2 = $ct->x + $inner_radio * coseno($angulo);
		$y2 = $ct->y + $inner_radio * seno($angulo);
		//M $x2, $y2 L $ct->x, $ct->y
		$color = $lista_color[$i%$m];
		echo "<path d='M $ct->x, $ct->y L $x1, $y1 L $x2, $y2 L $ct->x, $ct->y Z' style='stroke:$color; stroke-width:0; fill:$color'></path>";
		echo "<path d='M $ct->x, $ct->y L $x1, $y1 M $x1, $y1 A $radio, $radio 0 0,1 $qx, $qy A $radio, $radio 0 0,1 $x2, $y2 M $x2, $y2 L $ct->x, $ct->y Z' style='stroke:black; stroke-width:2; fill:$color'></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$ct->x' cy='$ct->y' r='$radio' style='stroke:black; stroke-width:2; fill:none'></circle>";
	echo "</svg>";
}

function pastel_sub_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	// Crear imagen
	$total = 0;
	$m = count($valores);
	//ordenar de mayor a menor
	$m1 = $m / 2;
	for($i=0; $i<$m1; $i++)
	{
		$total1 = $total1 + $valores[$i];
	}
	for($i=$m1; $i<$m; $i++)
	{
		$total2 = $total2 + $valores[$i];
	}
	// Calcular �ngulos
	$ct->x1 = $ancho / 4;//centro
	$ct->y1 = 3 * $largo / 4;//centro
	$radio1 = ($largo - $ct->x1)*1/2;
	$ct->x2 = 3 * $ancho / 4;//centro
	$ct->y2 = $largo / 4;//centro
	$radio2 = ($largo - $ct->x2)*1/4;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$x1 = $ct->x1 + $radio1;
	$y1 = $ct->y1;
	$angulo = 0;
	$lista_color = colores($m1);
	for($i=0; $i<$m1; $i++)
	{
		$control = $angulo + (($valores[$i] / 2) / $total1) * (2 * $pi);
		$angulo = $angulo + ($valores[$i] / $total1) * (2 * $pi);
		$qx = $ct->x1 + $radio1 * coseno($control);
		$qy = $ct->y1 + $radio1 * seno($control);
		$x2 = $ct->x1 + $radio1 * coseno($angulo);
		$y2 = $ct->y1 + $radio1 * seno($angulo);
		//M $x2, $y2 L $ct->x, $ct->y
		$color = $lista_color[$i%$m1];
		echo "<path d='M $ct->x1, $ct->y1 L $x1, $y1 L $x2, $y2 L $ct->x, $ct->y Z' style='stroke:$color; stroke-width:0; fill:$color'></path>";
		echo "<path d='M $ct->x1, $ct->y1 L $x1, $y1 M $x1, $y1 A $radio1, $radio1 0 0,1 $qx, $qy A $radio1, $radio1 0 0,1 $x2, $y2 M $x2, $y2 L $ct->x1, $ct->y1 Z' style='stroke:black; stroke-width:2; fill:$color'></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$ct->x1' cy='$ct->y1' r='$radio1' style='stroke:black; stroke-width:2; fill:none'></circle>";
	$x1 = $ct->x2 + $radio2;
	$y1 = $ct->y2;
	$angulo = 0;
	$lista_color = colores($m1);
	for($i=$m1; $i<$m; $i++)
	{
		$control = $angulo + (($valores[$i] / 2) / $total2) * (2 * $pi);
		$angulo = $angulo + ($valores[$i] / $total2) * (2 * $pi);
		$qx = $ct->x2 + $radio2 * coseno($control);
		$qy = $ct->y2 + $radio2 * seno($control);
		$x2 = $ct->x2 + $radio2 * coseno($angulo);
		$y2 = $ct->y2 + $radio2 * seno($angulo);
		//M $x2, $y2 L $ct->x, $ct->y
		$color = $lista_color[$i%$m1];
		echo "<path d='M $ct->x2, $ct->y2 L $x1, $y1 L $x2, $y2 L $ct->x, $ct->y Z' style='stroke:$color; stroke-width:0; fill:$color'></path>";
		echo "<path d='M $ct->x2, $ct->y2 L $x1, $y1 M $x1, $y1 A $radio2, $radio2 0 0,1 $qx, $qy A $radio2, $radio2 0 0,1 $x2, $y2 M $x2, $y2 L $ct->x2, $ct->y2 Z' style='stroke:black; stroke-width:2; fill:$color'></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$ct->x2' cy='$ct->y2' r='$radio2' style='stroke:black; stroke-width:2; fill:none'></circle>";
	echo "</svg>";
}
?>