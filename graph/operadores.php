<?php
function rango_grafica_x($max, $min)
{
	$rango = $max - $min;
	return $rango;
}

function zero($max, $min)
{
	$rango = $max - $min;
	$zero = $rango - $max;
	return $zero;
}

function minimo($valores, $cant)//modificar
{
	$min = 0;
	for($i = 0; $i<$cant; $i++)
	{
		if($min > $valores[$i])
		{
			$min = $valores[$i];
		}
	}
	return $min;
}

function maximo($valores, $cant)//modificar
{
	$max = 0;
	for($i = 0; $i<$cant; $i++)
	{
		if($max < $valores[$i])
		{
			$max = $valores[$i];
		}
	}
	return $max;
}

function maximo_multi($valores, $cant, $m)
{
	$max = 0;
	for($i = 0; $i<$cant; $i++)
	{
		for($j=0; $j<$m; $j++)
		{
			if($max < $valores[$i][$j])
			{
				$max = $valores[$i][$j];
			}
		}
	}
	return $max;
}

function minimo_multi($valores, $cant, $m)
{
	$min = 0;
	for($i = 0; $i<$cant; $i++)
	{
		for($j=0; $j<$m; $j++)
		{
			if($min > $valores[$i][$j])
			{
				$min = $valores[$i][$j];
			}
		}
	}
	return $min;
}

function maximo_apilada($valores, $cant, $m)
{
	$max = 0;
	for($i = 0; $i<$cant; $i++)
	{
		$suma = 0;
		for($j=0; $j<$m; $j++)
		{
			$suma = $suma + $valores[$i][$j];
		}
		if($max < $suma)
		{
			$max = $suma;
		}
	}
	return $max;
}

function minimo_apilada($valores, $cant, $m)
{
	$min = 0;
	for($i = 0; $i<$cant; $i++)
	{
		$suma = 0;
		for($j=0; $j<$m; $j++)
		{
			$suma = $suma + $valores[$i][$j];
		}
		if($min > $suma)
		{
			$min = $suma;
		}
	}
	return $min;
}

function maximo_($valores, $cant, $m)
{
	$max = 0;
	for($i = 0; $i<$cant; $i++)
	{
		$suma = 0;
		for($j=0; $j<$m; $j++)
		{
			$suma = $suma + $valores[$i][$j];
		}
		if($max < $suma)
		{
			$max = $suma;
		}
	}
	return $max;
}

function minimo_($valores, $cant, $m)
{
	$min = 0;
	for($i = 0; $i<$cant; $i++)
	{
		$suma = 0;
		for($j=0; $j<$m; $j++)
		{
			$suma = $suma + $valores[$i][$j];
		}
		if($min > $suma)
		{
			$min = $suma;
		}
	}
	return $min;
}

function porcentaje_apilada($valores, $m)
{
	$percent = [];
	for($i = 0; $i<$cant; $i++)
	{
		for($j=0; $j<$m; $j++)
		{

		}
	}
	return $percent;
}

function linea_tendencia($valores)
{
	
}

function escala($min, $max)
{
	echo "";
	$step = ($max - $min) / 5;
	for($i=0; $i<5; $i++)
	{
		
	}
}

function xzero_line($zero, $largo)
{
	echo "<line x1='$zero' y1='0' x2='$zero' y2='$largo' style='stroke:black; stroke-width:2;'></line>";
}

function yzero_line($zero, $ancho)
{
	echo "<line x1='0' y1='$zero' x2='$ancho' y2='$zero' style='stroke:black; stroke-width:2;'></line>";
}

function marco_grafica($ancho, $largo)
{
	echo "<polyline points='0,0  0,$ancho  $largo,$ancho  $largo,0' style='stroke:black; stroke-width:2; fill:none;'></polyline>";
}

function leyenda($ancho, $largo, $valores, $colores)
{
	$m = count($valores);
	for($i=0; $i<$m; $i++)
	{
		
	}
}

function colores($cantidad)
{
	$colores = [];
	$limit = 255;
	$step = (int)($limit / $cantidad);
	for($i=0; $i<$cantidad; $i++)
	{
		$red = $step * $i;
		$green = $step * $i;
		$blue = $step * $i;
		$colores[$i] = "rgb($red, $green, $blue)";
	}
	return $colores;
}

function svg($largo, $ancho)
{
	echo "<svg width='$ancho' height='$largo'>";
}
?>