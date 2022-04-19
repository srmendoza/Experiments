//operadores
function zero($max, $min)
{
	var rango = $max - $min;
}

function minimo(valores, cant)
{
	var min = 0;
	for(let i = 0; $i<$cant; $i++)
	{
		if($min > $valores[$i])
		{
			$min = $valores[$i];
		}
	}
	return $min;
}

function maximo(valores, cant)
{
	var max = 0;
	for(let i = 0; $i<$cant; $i++)
	{
		if($max < $valores[$i])
		{
			$max = $valores[$i];
		}
	}
	return $max;
}

function maximo_multi(valores, cant)
{
	var max = 0;
	for(let i = 0; $i<$cant; $i++)
	{
		for($j=0; $j<$m; $j++)
		{
			if($max < $valores[$i])
			{
				$max = $valores[$i];
			}
		}
	}
	return $max;
}

function minimo_multi(valores, cant)
{
	var min = 0;
	for(let i = 0; $i<$cant; $i++)
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

function maximo_agrupada(valores)
{
	var max = 0;
	for(let i = 0; $i<$cant; $i++)
	{
		for($j=0; $j<$m; $j++)
		{
			if($max < $valores[$i])
			{
				$max = $valores[$i];
			}
		}
	}
	return $max;
}

function minimo_agrupada(valores)
{
	var min = 0;
	for(let i = 0; $i<$cant; $i++)
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

function maximo_apilada(valores)
{
	var max = 0;
	for(let i = 0; $i<$cant; $i++)
	{
		for($j=0; $j<$m; $j++)
		{
			if($max < $valores[$i])
			{
				$max = $valores[$i];
			}
		}
	}
	return $max;
}

function minimo_apilada(valores)
{
	var min = 0;
	for(let i = 0; $i<$cant; $i++)
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

function porcentaje_apilada($valores, $m)
{
	$valores = [];
	for(let i = 0; $i<$cant; $i++)
	{
		for($j=0; $j<$m; $j++)
		{
			//exito
		}
	}
	return $valores;
}

function escala($min, $max)
{
	echo "";
	$step = ($max - $min) / 5;
	for($i=0; $i<5; $i++)
	{
		//exito
	}
}

function marco($ancho, $largo)
{
	echo "<polyline points='0,0";
	echo " 0,$ancho ";
	echo " $largo,$ancho ";
	echo " $largo,0 ";
	echo "' style='stroke:black; stroke-width:2; fill:none;'></polyline>";
}

function leyenda($ancho, $largo, $valores)
{
	$m = count(valores);
	for($i=0; $i<$m; $i++)
	{
		//exito
	}
}

function colores($cantidad)
{
	$color = ['#000000', '#ffffff', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];
	//return
}

//verticales
function verticales_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo(valores, m);

	var altura_columna = (largo * 9/10)/ rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	var y1 = largo - 0;//inicial
	$lista_color = ['yellow', 'blue'];//colores($m);
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y1 - (($valores[$i-1])*$altura_columna);
		$color = $lista_color[$i%2];
		echo "<polygon points='$x1,$y1 $x1,$y2 $x2,$y2 $x2,$y1' style='stroke:black; stroke-width:2; fill:$color'></polygon>";
		$x1 = $x2;
	}
	echo "</svg>";
}

function verticales_agrupada_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo_multi(valores, m);
	var altura_columna = (largo * 9/10)/ rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	var y1 = largo - 0;//inicial
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y1 - (($valores[$i-1])*$altura_columna);
		echo "<polygon points='$x1,$y1 $x1,$y2 $x2,$y2 $x2,$y1' style='stroke:black; stroke-width:2; fill:black'></polygon>";
		$x1 = $x2;
	}
	echo "</svg>";
}

function verticales_apilada_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo_multi(valores, m);
	var altura_columna = (largo * 9/10)/ rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	var y1 = largo - 0;//inicial
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y1 - (($valores[$i-1])*$altura_columna);
		echo "<polygon points='$x1,$y1 $x1,$y2 $x2,$y2 $x2,$y1' style='stroke:black; stroke-width:2; fill:black'></polygon>";
		$x1 = $x2;
	}
	echo "</svg>";
}

function verticales_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script> ";
	echo "var canvas = document.getElementById('barras_verticales'); ";
	echo "var ctx = canvas.getContext('2d'); ";
	echo "ctx.fillStyle = '#FF0000'; ";
	var x1 = 0;//inicial
	$y1 = $largo - 0;
	for($i=1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna + $x1;
		$y2 = $y1 - ($valores[$i-1]*$ancho_columna);
		echo "ctx.fillRect($x1,$y1,$x2,$y2); ";
		$x1 = $x2;
	}
	echo "</script>";
}

function verticales_agrupada_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);

	var max = maximo_multi(valores, m);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
	echo "</script>";
}

function verticales_apliada_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
	echo "</script>";
}

//puntos
function puntos_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo(valores, m);
	var altura_columna = (largo * 9/10)/ rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	var y1 = largo - 0;//inicial
	$radio = 5;
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y1 - (($valores[$i-1])*$altura_columna);
		echo "<circle cx='$x2' cy='$y2' r='$radio' style='stroke:black; stroke-width:2; fill:black'></circle>";
		$x1 = $x2;
	}
	echo "</svg>";
}

function puntos_multi_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = 0;
	for(let i = 0; $i<$m; $i++)
	{
		if($max < $valores[$i])
		{
			$max = $valores[$i];
		}
	}
	var altura_columna = (largo * 9/10)/ rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	var y1 = largo - 0;//inicial
	$radio = 5;
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y1 - (($valores[$i-1])*$altura_columna);
		echo "<circle cx='$x2' cy='$y2' r='$radio' style='stroke:black; stroke-width:2; fill:black'></circle>";
		$x1 = $x2;
	}
	echo "</svg>";
}

function puntos_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
	echo "</script>";
}

function puntos_multi_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
	echo "</script>";
}

//pastel
function pastel_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	//Crear imagen
	$total = 0;
	$m = count(valores);
	for(let i = 0; $i<$m; $i++)
	{
		$total = $total + $valores[$i];
	}
	//Calcular ángulos
	$cx = $ancho / 2;//centro
	$cy = $largo / 2;//centro
	$radio = ($largo - $cy)*9/10;
	echo "<svg width='$ancho' height='$largo'>";
	$x1 = $cx + $radio;
	$y1 = $cy;
	$angulo = 0;
	$lista_color = ['yellow', 'blue'];
	for($i=0; $i<$m; $i++)
	{
		$control = $angulo + (($valores[$i] / 2) / $total) * (2 * $pi);
		$angulo = $angulo + ($valores[$i] / $total) * (2 * $pi);
		$qx = $cx + $radio * coseno($control);
		$qy = $cy + $radio * seno($control);
		$x2 = $cx + $radio * coseno($angulo);
		$y2 = $cy + $radio * seno($angulo);
		//M $x2,$y2 L $cx,$cy
		$color = $lista_color[$i%2];
		echo "<path d='M $cx,$cy L $x1,$y1 L $x2,$y2 L $cx,$cy Z' style='stroke:$color; stroke-width:0; fill:$color'></path>";
		echo "<path d='M $cx,$cy L $x1,$y1 M $x1,$y1 A $radio,$radio 0 0,1 $qx,$qy A $radio,$radio 0 0,1 $x2,$y2 M $x2,$y2 L $cx,$cy Z' style='stroke:black; stroke-width:2; fill:$color'></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$cx' cy='$cy' r='$radio' style='stroke:black; stroke-width:2; fill:none'></circle>";
	echo "</svg>";
}

function pastel_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	echo "<canvas id='pastel' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('pastel');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.arc($cx, $cy, $radio, $angulo1, $angulo2);";
		$x1 = $x2;
	}
	echo "</script>";
}

//lineas
function lineas_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);
	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	$min = minimo($valores, $m);
	var max = maximo(valores, m);
	$rango = $max - $min;

	var altura_columna = (largo * 9/10)/ rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	$y1 = $largo - abs((($valores[0])*$altura_columna));//inicial
	echo "<polyline points='$x1,$y1";
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $largo - ((($max-$valores[$i-1]))*$altura_columna);
		echo " $x2,$y2 ";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "' style='stroke:black; stroke-width:2; fill:none;'></polyline>";
	echo "</svg>";
}

function lineas_marcas_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo(valores, m);

	var altura_columna = (largo * 9/10)/ rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	$y1 = $largo - (($valores[0])*$altura_columna);//inicial
	$radio = 5;
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $largo - (($valores[$i-1])*$altura_columna);
		echo "<line x1='$x1' y1='$y1' x2='$x2' y2='$y2' style='stroke:black; stroke-width:2;'></line>";
		echo "<circle cx='$x2' cy='$y2' r='$radio' style='stroke:black; stroke-width:2; fill:black'></circle>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "</svg>";
}

function lineas_multi_svg($valores, $ancho, $largo)
{
	$altura=0.8;

	$m = count(valores);
	for($i=0; $i< $m; $i++)
	{
		if($max < $valores[$i])
		{
			$max = $valores[$i];
		}
	}
	$x1=0;
	$y1=0;

	echo "<svg width='$ancho' height='$largo'>";

	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		//<line x1='$x1' y1='$y1' x2='x2' y2='$y2' style='stroke:red;stroke-width:2'></line>
		$x1=$x2;
		$y1=$y2;
	}
	echo "</svg>";
}

function lineas_marcas_multi_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo(valores);

	var altura_columna = (largo * 9/10)/ rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	$y1 = $largo - (($valores[0])*$altura_columna);//inicial
	$radio = 5;
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $largo - (($valores[$i-1])*$altura_columna);
		echo "<line x1='$x1' y1='$y1' x2='$x2' y2='$y2' style='stroke:black; stroke-width:2;'></line>";
		echo "<circle cx='$x2' cy='$y2' r='$radio' style='stroke:black; stroke-width:2; fill:black'></circle>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "</svg>";
}

function lineas_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.moveTo($x1,$y1);";
		echo "ctx.lineTo($x2,$y2);";
		echo "ctx.stroke();";
		$x1 = $x2;
	}
	echo "</script>";
}

function lineas_marcas_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.moveTo($x1,$y1);";
		echo "ctx.lineTo($x2,$y2);";
		echo "ctx.stroke();";
		$x1 = $x2;
	}
	echo "</script>";
}

function lineas_multi_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.moveTo($x1,$y1);";
		echo "ctx.lineTo($x2,$y2);";
		echo "ctx.stroke();";
		$x1 = $x2;
	}
	echo "</script>";
}

function lineas_marcas_multi_canvas($valores, $ancho, $largo)
{
	var altura = 80;
	$m = count(valores);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo'
	style='border:1px solid #000000;'>
	</canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.moveTo($x1,$y1);";
		echo "ctx.lineTo($x2,$y2);";
		echo "ctx.stroke();";
		$x1 = $x2;
	}
	echo "</script>";
}

//horizontales
function horizontales_svg($valores, $ancho, $largo)
{
//header('Content-type: image/svg+xml');
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo(valores, m);
	$min = minimo($valroes, $m);
	$rango = $max - $min;

	$altura_columna = ($largo * 9/10) / $rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	var y1 = 0;//inicial
	$lista_color = ['yellow', 'blue', 'red'];
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = ($valores[$i-1])*$altura_columna + $x1;
		$y2 = $ancho_columna + $y1;
		$color = $lista_color[$i%3];
		echo "<polygon points='$x1,$y1 $x2,$y1 $x2,$y2 $x1,$y2' style='stroke:black; stroke-width:2; fill:$color'></polygon>";
		$y1 = $y2;
	}
	echo "</svg>";
}

function horizontales_agrupada_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo_multi(valores, m);
	$min = minimo_multi($valores, $m);
	$rango = $max - $min;
	$altura_columna = ($largo * 9/10) / $rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	var y1 = 0;//inicial
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = ($valores[$i-1])*$altura_columna + $x1;
		$y2 = $ancho_columna + $y1;
		echo "<polygon points='$x1,$y1 $x2,$y1 $x2,$y2 $x1,$y2' style='stroke:black; stroke-width:2; fill:black'></polygon>";
		$y1 = $y2;
	}
	echo "</svg>";
}

function horizontales_apilada_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo_multi(valores, m);
	$min = minimo_multi($valores, $m);
	$rango = $max - $min;
	$altura_columna = ($largo * 9/10) / $rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	var y1 = 0;//inicial
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = ($valores[$i-1])*$altura_columna + $x1;
		$y2 = $ancho_columna + $y1;
		echo "<polygon points='$x1,$y1 $x2,$y1 $x2,$y2 $x1,$y2' style='stroke:black; stroke-width:2; fill:black'></polygon>";
		$y1 = $y2;
	}
	echo "</svg>";
}

function horizontales_canvas($valores, $ancho, $largo)
{
	//header("content-type: application/x-javascript");

	var altura = 80;
	$m = count(valores);
	var ancho_columna = (ancho * 9/10) / (m);
	var max = maximo(valores, m);
	$altura_columna = ($largo * 9/10) / $max;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script> ";
	echo "var canvas = document.getElementById('barras_verticales'); ";
	echo "var ctx = canvas.getContext('2d'); ";
	echo "ctx.fillStyle = '#FF0000'; ";
	var x1 = 0;//inicial
	var y1 = 0;//inicial
	for($i=1; $i<=$m; $i++)
	{
		$x2 = ($valores[$i-1]*$altura_columna) + $x1;
		$y2 = $ancho_columna + $y1;
		echo "ctx.fillRect($x1,$y1,$y2,$x2); ";
		$y1 = $y2;
	}
	echo "</script>";
}

function horizontales_apilada_canvas( $valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	var ancho_columna = (ancho * 9/10) / (m);

	$altura_columna = ($largo * 9/10) / $max;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$y1 = $y2;
	}
	echo "</script>";
}

function horizontales_agrupada_canvas( $valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	var ancho_columna = (ancho * 9/10) / (m);

	$altura_columna = ($largo * 9/10) / $max;
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$y1 = $y2;
	}
	echo "</script>";
}

//estrella
function estrella_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	//Crear imagen
	$total = 0;
	$m = count(valores);
	for(let i = 0; $i<$m; $i++)
	{
		$total = $total + $valores[$i];
	}
	//Calcular ángulos
	$cx = $ancho / 2;//centro
	$cy = $largo / 2;//centro
	$radio = ($largo - $cy)*9/10;
	echo "<svg width='$ancho' height='$largo'>";
	$x1 = $cx + $valores[0];
	$y1 = $cy;
	$angulo = 0;
	for($i=0; $i<$m; $i++)
	{
		echo "<path d=' ' style='stroke:$color; stroke-width:0;></path>";
		echo "<path d=' ' style='stroke:black; stroke-width:2;></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$cx' cy='$cy' r='$radio' style='stroke:black; stroke-width:2; fill:none'></circle>";
	echo "</svg>";
}

function estrella_puntos_svg($valores, $ancho, $largo)
{
	$altura = 0.8;
	$pi = 3.14159;
	//Crear imagen
	$total = 0;
	$m = count(valores);
	for(let i = 0; $i<$m; $i++)
	{
		$total = $total + $valores[$i];
	}
	//Calcular ángulos
	$cx = $ancho / 2;//centro
	$cy = $largo / 2;//centro
	$radio = ($largo - $cy)*9/10;
	echo "<svg width='$ancho' height='$largo'>";
	$x1 = $cx + $valores[0];
	$y1 = $cy;
	$angulo = 0;
	for($i=0; $i<$m; $i++)
	{
		echo "<path d=' ' style='stroke:$color; stroke-width:0;></path>";
		echo "<path d=' ' style='stroke:black; stroke-width:2;></path>";
		$x1 = $x2;
		$y1 = $y2;
	}
	echo "<circle cx='$cx' cy='$cy' r='$radio' style='stroke:black; stroke-width:2; fill:none'></circle>";
	echo "</svg>";
}

function estrella_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	echo "<canvas id='pastel' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('pastel');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.arc($cx, $cy, $radio, $angulo1, $angulo2);";
		$x1 = $x2;
	}
	echo "</script>";
}

//area
function area_svg($valores, $ancho, $largo)
{
	var altura = 80;
	//Crear imagen
	$m = count(valores);

	var ancho_columna = (ancho * 9/10) / (m);
	//buscar la escala
	var max = maximo(valores, m);
	var altura_columna = (largo * 9/10)/ rango;
	echo "<svg width='$ancho' height='$largo'>";
	var x1 = 0;//inicial
	var y1 = largo - 0;//inicial
	echo "<polygon points='$x1,$y1";
	for(let i = 1; $i<=$m; $i++)
	{
		$x2 = $ancho_columna+$x1;
		$y2 = $y1 - (($valores[$i-1])*$altura_columna);
		echo " $x2,$y2 ";
		$x1 = $x2;
	}
	echo "$x2,$y1' style='stroke:black; stroke-width:2; fill:black'></polygon>";
	echo "</svg>";
}

function area_canvas($valores, $ancho, $largo)
{
	//header('content-type: application/x-javascript');
	var altura = 80;
	$m = count(valores);
	echo "<canvas id='barras_verticales' width='$ancho' height='$largo' style='border:1px solid #000000;'></canvas>";

	echo "<script>";
	echo "var canvas = document.getElementById('barras_verticales');";
	echo "var ctx = canvas.getContext('2d');";
	echo "ctx.fillStyle = '#FF0000';";
	$x1;
	$y1;
	for($i=0; $i<$m; $i++)
	{
		$x2;
		$y2;
		echo "ctx.fillRect($x1,$y1,$x2,$y2);";
		$x1 = $x2;
	}
	echo "</script>";
}