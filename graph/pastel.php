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
	// Calcular ángulos
	$cx = $ancho / 2;//centro
	$cy = $largo / 2;//centro
	$radio = ($largo - $cy)*9/10;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$x1 = $cx + $radio;
	$y1 = $cy;
	$angulo = 0;
	$lista_color = colores($m);
	for($i=0; $i<$m; $i++)
	{
		$control = $angulo + (($valores[$i] / 2) / $total) * (2 * $pi);
		$angulo = $angulo + ($valores[$i] / $total) * (2 * $pi);
		$qx = $cx + $radio * coseno($control);
		$qy = $cy + $radio * seno($control);
		$x2 = $cx + $radio * coseno($angulo);
		$y2 = $cy + $radio * seno($angulo);
		//M $x2,$y2 L $cx,$cy
		$color = $lista_color[$i%$m];
		echo "<path d='M $cx,$cy L $x1,$y1 L $x2,$y2 L $cx,$cy Z' style='stroke:$color; stroke-width:0; fill:$color'></path>";
		echo "<path d='M $cx,$cy L $x1,$y1 M $x1,$y1 A $radio,$radio 0 0,1 $qx,$qy A $radio,$radio 0 0,1 $x2,$y2 M $x2,$y2 L $cx,$cy Z' style='stroke:black; stroke-width:2; fill:$color'></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$cx' cy='$cy' r='$radio' style='stroke:black; stroke-width:2; fill:none'></circle>";
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
	// Calcular ángulos
	$cx = $ancho / 2;//centro
	$cy = $largo / 2;//centro
	$inner_radio = ($largo - $cy)*8/10;
	$outter_radio = ($largo - $cy)*9/10;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$x1 = $cx + $radio;
	$y1 = $cy;
	$angulo = 0;
	$lista_color = colores($m);
	for($i=0; $i<$m; $i++)
	{
		$control = $angulo + (($valores[$i] / 2) / $total) * (2 * $pi);
		$angulo = $angulo + ($valores[$i] / $total) * (2 * $pi);
		$qx = $cx + $inner_radio * coseno($control);
		$qy = $cy + $inner_radio * seno($control);
		$x2 = $cx + $inner_radio * coseno($angulo);
		$y2 = $cy + $inner_radio * seno($angulo);
		//M $x2,$y2 L $cx,$cy
		$color = $lista_color[$i%$m];
		echo "<path d='M $cx,$cy L $x1,$y1 L $x2,$y2 L $cx,$cy Z' style='stroke:$color; stroke-width:0; fill:$color'></path>";
		echo "<path d='M $cx,$cy L $x1,$y1 M $x1,$y1 A $radio,$radio 0 0,1 $qx,$qy A $radio,$radio 0 0,1 $x2,$y2 M $x2,$y2 L $cx,$cy Z' style='stroke:black; stroke-width:2; fill:$color'></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$cx' cy='$cy' r='$radio' style='stroke:black; stroke-width:2; fill:none'></circle>";
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
	// Calcular ángulos
	$cx1 = $ancho / 4;//centro
	$cy1 = 3 * $largo / 4;//centro
	$radio1 = ($largo - $cx1)*1/2;
	$cx2 = 3 * $ancho / 4;//centro
	$cy2 = $largo / 4;//centro
	$radio2 = ($largo - $cx2)*1/4;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$x1 = $cx1 + $radio1;
	$y1 = $cy1;
	$angulo = 0;
	$lista_color = colores($m1);
	for($i=0; $i<$m1; $i++)
	{
		$control = $angulo + (($valores[$i] / 2) / $total1) * (2 * $pi);
		$angulo = $angulo + ($valores[$i] / $total1) * (2 * $pi);
		$qx = $cx1 + $radio1 * coseno($control);
		$qy = $cy1 + $radio1 * seno($control);
		$x2 = $cx1 + $radio1 * coseno($angulo);
		$y2 = $cy1 + $radio1 * seno($angulo);
		//M $x2,$y2 L $cx,$cy
		$color = $lista_color[$i%$m1];
		echo "<path d='M $cx1,$cy1 L $x1,$y1 L $x2,$y2 L $cx,$cy Z' style='stroke:$color; stroke-width:0; fill:$color'></path>";
		echo "<path d='M $cx1,$cy1 L $x1,$y1 M $x1,$y1 A $radio1,$radio1 0 0,1 $qx,$qy A $radio1,$radio1 0 0,1 $x2,$y2 M $x2,$y2 L $cx1,$cy1 Z' style='stroke:black; stroke-width:2; fill:$color'></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$cx1' cy='$cy1' r='$radio1' style='stroke:black; stroke-width:2; fill:none'></circle>";
	$x1 = $cx2 + $radio2;
	$y1 = $cy2;
	$angulo = 0;
	$lista_color = colores($m1);
	for($i=$m1; $i<$m; $i++)
	{
		$control = $angulo + (($valores[$i] / 2) / $total2) * (2 * $pi);
		$angulo = $angulo + ($valores[$i] / $total2) * (2 * $pi);
		$qx = $cx2 + $radio2 * coseno($control);
		$qy = $cy2 + $radio2 * seno($control);
		$x2 = $cx2 + $radio2 * coseno($angulo);
		$y2 = $cy2 + $radio2 * seno($angulo);
		//M $x2,$y2 L $cx,$cy
		$color = $lista_color[$i%$m1];
		echo "<path d='M $cx2,$cy2 L $x1,$y1 L $x2,$y2 L $cx,$cy Z' style='stroke:$color; stroke-width:0; fill:$color'></path>";
		echo "<path d='M $cx2,$cy2 L $x1,$y1 M $x1,$y1 A $radio2,$radio2 0 0,1 $qx,$qy A $radio2,$radio2 0 0,1 $x2,$y2 M $x2,$y2 L $cx2,$cy2 Z' style='stroke:black; stroke-width:2; fill:$color'></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$cx2' cy='$cy2' r='$radio2' style='stroke:black; stroke-width:2; fill:none'></circle>";
	echo "</svg>";
}
?>