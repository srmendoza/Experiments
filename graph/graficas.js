function rango_grafica(max, min)
{
	var rango = max - min;
	return rango;
}

function zero(max, min, rango)
{
	var zero = rango - max;
	return zero;
}

function minimo(valores, cant)
{
	var min = 0;
	for(var i = 0; i<cant; i++)
	{
		if(min > valores[i])
		{
			min = valores[i];
		}
	}
	return min;
}

function maximo(valores, cant)
{
	var max = 0;
	for(var i = 0; i<cant; i++)
	{
		if(max < valores[i])
		{
			max = valores[i];
		}
	}
	return max;
}

function maximo_multi(valores, mx, my)
{
	var max = 0;
	for(var i = 0; i<mx; i++)
	{
		for(var j=0; j<my; j++)
		{
			if(max < valores[i][j])
			{
				max = valores[i][j];
			}
		}
	}
	return $max;
}

function minimo_multi(valores, mx, my)
{
	var min = 0;
	for(var i = 0; i<mx; i++)
	{
		var m = valores[i].size;
		for(var j=0; j<my; j++)
		{
			if(min < valores[i][j])
			{
				min = valores[i][j];
			}
		}
	}
	return $min;
}

function maximo_agrupada(valores)
{
	var max = 0;
	for(var i = 0; i<cant; i++)
	{
		for(var j=0; j<my; j++)
		{
			if(max < valores[i][j])
			{
				max = valores[i][j];
			}
		}
	}
	return $max;
}

function minimo_agrupada(valores)
{
	var min = 0;
	for(var i = 0; i<cant; i++)
	{
		var m = valores[i].size;
		for(var j=0; j<my; j++)
		{
			if(min < valores[i][j])
			{
				min = valores[i][j];
			}
		}
	}
	return $min;
}

function maximo_apilada(valores)
{
	var max = 0;
	for(var i = 0; i<cant; i++)
	{
		for(var j=0; j<my; j++)
		{
			if(max < valores[i][j])
			{
				max = valores[i][j];
			}
		}
	}
	return $max;
}

function minimo_apilada(valores)
{
	var min = 0;
	for(var i = 0; i<cant; i++)
	{
		for(var j=0; j<my; j++)
		{
			if(min < valores[i][j])
			{
				min = valores[i][j];
			}
		}
	}
	return $min;
}

function porcentaje_apilada(valores, m)
{
	var valores = [];
	for(var i = 0; i<cant; i++)
	{
		for(var j=0; j<my; j++)
		{
			
		}
	}
	return $valores;
}

function escala(rango)
{
	step = rango / 5;
	for($i=0; $i<5; $i++)
	{
		
	}
}

function marco(ancho, largo)
{
	echo "<polyline points='0,0";
	echo " 0,$ancho ";
	echo " $largo,$ancho ";
	echo " $largo,0 ";
	echo "' style='stroke:black; stroke-width:2; fill:none;'></polyline>";
}

function leyenda(valores, ancho, largo)
{
	var m = valores.size;
	for(var i=0; i<m; i++)
	{
		
	}
}

function colores(cantidad)
{
	var colores = [];
	var limit = 255;
	step = (int)(limit / cantidad);
	for(var i=0; i<cantidad; i++)
	{
		var red = step * i;
		var green = step * i;
		var blue = step * i;
		colores[i] = "rgb(red, green, blue)";
	}
	return $colores;
}



function verticales_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales'); ";
	echo "var ctx = canvas.getContext('2d'); ";
	echo "ctx.fillStyle = '#FF0000'; ";
	var x1 = 0;
	var y1 = largo - 0;
	for(var i=1; i<=m; i++)
	{
		var x2 = $ancho_columna + x1;
		var y2 = $y1 - ($valores[$i-1]*$ancho_columna);
		echo "ctx.fillRect($x1,$y1,$x2,$y2); ";
		x1 = x2;
	}
}

function verticales_agrupada_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;

	var max = maximo_multi(valores, m);
	$min = minimo_multi($valores, $m);
	var rango = rango_grafica(max, min);

	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
}

function verticales_apliada_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
}

function pastel_canvas(valores, ancho, largo)
{
	echo "<canvas id='pastel' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('pastel');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.arc($cx, $cy, $radio, $angulo1, $angulo2);";
		$x1 = $x2;
	}
}

function puntos_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
}

function puntos_multi_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
}

function lineas_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.moveTo($x1,$y1);";
		echo "ctx.lineTo($x2,$y2);";
		echo "ctx.stroke();";
		$x1 = $x2;
	}
}

function lineas_marcas_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.moveTo($x1,$y1);";
		echo "ctx.lineTo($x2,$y2);";
		echo "ctx.stroke();";
		$x1 = $x2;
	}
}

function lineas_multi_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.moveTo($x1,$y1);";
		echo "ctx.lineTo($x2,$y2);";
		echo "ctx.stroke();";
		$x1 = $x2;
	}
}

function lineas_marcas_multi_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' 
	style='border:1px solid #000000;'>
	</canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.moveTo($x1,$y1);";
		echo "ctx.lineTo($x2,$y2);";
		echo "ctx.stroke();";
		$x1 = $x2;
	}
}

function horizontales_canvas(valores, ancho, largo)
{
	// header("content-type: application/x-javascript");

	var altura = 80;
	var m = valores.size;
	$ancho_columna = ($ancho * 9/10) / ($m);
	var max = maximo(valores, m);
	var min = minimo(valores, m);
	var rango = rango_grafica(max, min);

	$altura_columna = ($largo * 9/10) / $max;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales'); ";
	echo "var ctx = canvas.getContext('2d'); ";
	echo "ctx.fillStyle = '#FF0000'; ";
	var x1 = 0;
	var y1 = 0;
	for(var i=1; i<=m; i++)
	{
		$x2 = ($valores[$i-1]*$altura_columna) + x1;
		$y2 = $ancho_columna + var y1 = 0;
		echo "ctx.fillRect($x1,$y1,$y2,$x2); ";
		$y1 = $y2;
	}
}

function horizontales_apilada_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	$ancho_columna = ($ancho * 9/10) / ($m);

	$altura_columna = ($largo * 9/10) / $max;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$y1 = $y2;
	}
}

function horizontales_agrupada_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	$ancho_columna = ($ancho * 9/10) / ($m);

	$altura_columna = ($largo * 9/10) / $max;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$y1 = $y2;
	}
}

function estrella_canvas(valores, ancho, largo)
{
	echo "<canvas id='pastel' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('pastel');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.arc($cx, $cy, $radio, $angulo1, $angulo2);";
		$x1 = $x2;
	}
	
}

function estrella_puntos_canvas(valores, ancho, largo)
{
	echo "<canvas id='pastel' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('pastel');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.arc($cx, $cy, $radio, $angulo1, $angulo2);";
		$x1 = $x2;
	}
}

function area_canvas(valores, ancho, largo)
{
	var altura = 80;
	var m = valores.size;
	var max = maximo(valores, m);

	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	var x1 = 0;
	var y1 = 0;
	for(var i=0; i<m; i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
}
