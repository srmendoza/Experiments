<?php
function estrella_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	// Crear imagen
	$m = count($valores);
	// Calcular ángulos
	$ct->x = $ancho / 2;//centro
	$ct->y = $largo / 2;//centro
	$radio = ($largo - $ct->y)*9/10;
	$min = minimo($valores, $m);
	$max = maximo($valores, $m);
	$rango = $max - $min;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$angulo = 0;
	$radio_valor = ($valores[0] / $rango)*$radio;
	$x1 = $ct->x + $radio_valor*seno($angulo);
	$y1 = $ct->y + $radio_valor*coseno($angulo);
	for($i=1; $i<=$m; $i++)
	{
		$angulo = ($i%$m)*2*$pi/$m;
		$radio_valor = ($valores[$i % $m] / $rango)*$radio;
		$x2 = $ct->x +  $radio_valor*seno($angulo);
		$y2 = $ct->y + $radio_valor*coseno($angulo);
		$rx = $ct->x + $radio*seno($angulo);
		$ry = $ct->y + $radio*coseno($angulo);
		echo "<line x1='$x1' y1='$y1' x2='$x2' y2='$y2' style='stroke:black; stroke-width:2;'></line>";
		echo "<line x1='$ct->x' y1='$ct->y' x2='$rx' y2='$ry' style='stroke:black; stroke-width:2;'></line>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "</svg>";
}

function estrella_marcas_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	// Crear imagen
	$m = count($valores);
	// Calcular ángulos
	$ct->x = $ancho / 2;//centro
	$ct->y = $largo / 2;//centro
	$radio = ($largo - $ct->y)*9/10;
	$min = minimo($valores, $m);
	$max = maximo($valores, $m);
	$rango = $max - $min;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$angulo = 0;
	$radio_valor = ($valores[0] / $rango)*$radio;
	$x1 = $ct->x + $radio_valor*seno($angulo);
	$y1 = $ct->y + $radio_valor*coseno($angulo);
	$radio_marca = 5;
	for($i=1; $i<=$m; $i++)
	{
		$angulo = ($i%$m)*2*$pi/$m;
		$radio_valor = ($valores[$i % $m] / $rango)*$radio;
		$x2 = $ct->x +  $radio_valor*seno($angulo);
		$y2 = $ct->y + $radio_valor*coseno($angulo);
		$rx = $ct->x + $radio*seno($angulo);
		$ry = $ct->y + $radio*coseno($angulo);
		echo "<line x1='$x1' y1='$y1' x2='$x2' y2='$y2' style='stroke:black; stroke-width:2;'></line>";
		echo "<line x1='$ct->x' y1='$ct->y' x2='$rx' y2='$ry' style='stroke:black; stroke-width:2;'></line>";
		echo "<circle cx='$x2' cy='$y2' r='$radio_marca' style='stroke:black; stroke-width:2; fill:black'></circle>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "</svg>";
}

function estrella_multi_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	// Crear imagen
	$cant = count($valores);
	// Calcular ángulos
	$ct->x = $ancho / 2;//centro
	$ct->y = $largo / 2;//centro
	$radio = ($largo - $ct->y)*9/10;
	$min = minimo($valores, $cant);
	$max = maximo($valores, $cant);
	$rango = $max - $min;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$m = count($valores[0]);
	$cant = $cant / $m;
	$lista_color = colores($m);
	for($j=0; $j<$m; $j++)
	{
		$angulo = 0;
		$radio_valor = ($valores[0][$j] / $rango)*$radio;
		$x1 = $ct->x + $radio_valor*seno($angulo);
		$y1 = $ct->y + $radio_valor*coseno($angulo);
		$color = $lista_color[$j%$m];
		for($i=1; $i<=$cant; $i++)
		{
			$angulo = ($i%$cant)*2*$pi/$m;
			$radio_valor = ($valores[$i % $cant][$j] / $rango)*$radio;
			$x2 = $ct->x +  $radio_valor*seno($angulo);
			$y2 = $ct->y + $radio_valor*coseno($angulo);
			$rx = $ct->x + $radio*seno($angulo);
			$ry = $ct->y + $radio*coseno($angulo);
			echo "<line x1='$x1' y1='$y1' x2='$x2' y2='$y2' style='stroke:$color; stroke-width:2;'></line>";
			echo "<line x1='$ct->x' y1='$ct->y' x2='$rx' y2='$ry' style='stroke:$color; stroke-width:2;'></line>";
			$x1 = $x2;
			$y1 = $y2;
		}
	}
	echo "</svg>";
}

function estrella_marcas_multi_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	// Crear imagen
	$total = 0;
	$m = count($valores);

	// Calcular ángulos
	$ct->x = $ancho / 2;//centro
	$ct->y = $largo / 2;//centro
	$radio = ($largo - $ct->y)*9/10;
	svg($ancho, $largo);
	marco_grafica($ancho, $largo);
	$m = count($valores[0]);
	$cant = $cant / $m;
	$lista_color = colores($m);
	$radio_marca = 5;
	for($j=0; $j<$m; $j++)
	{
		$angulo = 0;
		$radio_valor = ($valores[0][$j] / $rango)*$radio;
		$x1 = $ct->x + $radio_valor*seno($angulo);
		$y1 = $ct->y + $radio_valor*coseno($angulo);
		$color = $lista_color[$j%$m];
		for($i=1; $i<=$cant; $i++)
		{
			$angulo = ($i%$cant)*2*$pi/$m;
			$radio_valor = ($valores[$i % $cant][$j] / $rango)*$radio;
			$x2 = $ct->x +  $radio_valor*seno($angulo);
			$y2 = $ct->y + $radio_valor*coseno($angulo);
			$rx = $ct->x + $radio*seno($angulo);
			$ry = $ct->y + $radio*coseno($angulo);
			echo "<line x1='$x1' y1='$y1' x2='$x2' y2='$y2' style='stroke:$color; stroke-width:2;'></line>";
			echo "<line x1='$ct->x' y1='$ct->y' x2='$rx' y2='$ry' style='stroke:$color; stroke-width:2;'></line>";
			echo "<circle cx='$x2' cy='$y2' r='$radio_marca' style='stroke:black; stroke-width:2; fill:$color'></circle>";
			$x1 = $x2;
			$y1 = $y2;
		}
	}
	echo "</svg>";
}
?>