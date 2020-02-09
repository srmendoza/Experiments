<?php
//gausseuler //namespace GaussEuler;
declare(strict_types=1);

class stats
{
	public static function median(array $valores)//pendiente
	{
		$tam = count($valores);
		$mediana = $valores[0];
		if($tam > 1)
		{

		}
		return $mediana;
	}

	public static function mode(array $valores)//pendiente
	{
		$tam = count($valores);
		$moda = $valores[0];
		if($tam > 1)
		{

		}
		return $moda;
	}
	
	public static function aritmetic_geometric_mean($x, $y)//pendiente
	{
		$g = $y;
		$a = $x;
		for($i=0; $i<10; $i++)
		{
			$a_n = ($a + $g)/2;
			$g_n = math::root($a*$g);
			$a = $a_n;
			$g = $g_n;
		}
	}

	public static function geometric_harmonic_mean($x, $y)//pendiente
	{
		$g = $x;
		$h = $y;
		for($i=0; $i<10; $i++)
		{
			$g_n = math::root($g*$h);
			$h_n = 2/(1/$g+1/h);
			$g = $g_n;
			$h = $h_n;
		}
	}
	
	public static function harmonic_mean(array $valores)
	{
		$prom = $valores[0];
		$tam = count($valores);
		if($tam>1)
		{
			for($i=1; $i<$tam; $i++)
			{
				$prom = $prom+1/$valores[$i];
			}
			$prom = ($tam/$prom);
		}
		return $prom;
	}

	public static function contrarmonic_mean(array $valores)
	{
		$numerador = $valores[0]**2;
		$denominador = $valores[0];
		$tam = count($valores);
		for($i=1; $i<$tam; $i++)
		{
			$numerador = $numerador + $valores[$i]**2;
			$denominador = $denominador + $valores[$i];
		}
		return $numerador / $denominador;
	}
	
	public static function geomtric_standard_deviation(array $valores)
	{
		$result = 0;
		$promedio = self::geometric_mean($valores);
		$tam = count($valores);
		$desviacion = 0;
		for($i=0; $i<$tam; $i++)
		{
			$desviacion = $desviacion + math::logaritmo_natural($valores[$i] / $promedio)**2;
		}
		$desviacion = $desviacion / $tam;
		$desviacion = math::root($desviacion);
		$desviacion = math::exponentes($desviacion);
		return $desviacion;
	}
	
	public static function least_squares($valores)//pendiente
	{
		$pendiente = 0;
		$b = 0;
		for($i=0; $i<$tam; $i++)
		{

		}
	}

	public static function regresion_lineal(array $valores)//pendiente
	{

	}

	public static function kmeans(array $valores)//pendiente
	{

	}

	public static function cokurtosis($valores1, $valores2)//pendiente
	{
		
	}

	public static function coskewness($valores1, $valores2)//pendiente
	{
		
	}

	public static function aritmetic_mean($valores)//promedio aritmetico
	{
		$prom = $valores[0];
		$tam = count($valores);
		if($tam>1)
		{
			for($i=1; $i<$tam; $i++)
			{
				$prom = $prom+$valores[$i];
			}
			$prom = ($prom / $tam);
		}
		return $prom;
	}

	public static function skewness(array $valores)//mejorar
	{
		$valor = 0;
		$numerador = self::momentos_centrales($valores, 3);
		$denominador = self::desviacion_standard($valores)**3;
		if($denominador != 0)
		{
			$valor = $numerador / $denominador;
		}
		return $valor;

	}

	public static function kurtosis(array $valores)//mejorar
	{
		$valor = 0;
		$numerador = self::momentos_centrales($valores, 4);
		$denominador = self::desviacion_standard($valores)**4;
		if($denominador != 0)
		{
			$valor = $numerador / $denominador;
		}
		return $valor;
	}

	public static function geometric_mean(array $valores)//promedio geometrico
	{
		$prom = $valores[0];
		$tam = count($valores);
		if($tam>1)
		{
			for($i=1; $i<$tam; $i++)
			{
				$prom = $prom*$valores[$i];
			}
			$prom = math::nroot($prom, $tam);
		}
		return $prom;
	}

	public static function cuadratic_mean(array $valores)//promedio cuadratico
	{
		$prom = $valores[0]*$valores[0];
		$tam = count($valores);
		if($tam>1)
		{
			for($i=1; $i<$tam; $i++)
			{
				$prom = $prom + $valores[$i]*$valores[$i];
			}
		}
		$prom = math::root($prom);
		return $prom;
	}

	public static function aritmetic_mean_acotado(array $valores, int $cant)//pendiente
	{
		$max = $valores[0];
		$min = $valores[0];
		$acum = $valores[0];
		$tam = count($valores);
		$mediana = 0;
		if($tam > (2*$cant) && $cant>0)
		{
			for($i=1; $i<$tam; $i++)
			{
				if($max<$valores[$i])
				{
					for($j=0; $j<$cant; $j++)
					{
						if($max[$j] < $valores[$i])
						{
							$max[$j] = $valores[$i];
						}
					}
				}
				if($min>$valores[$i])
				{
					for($j=0; $j<$cant; $j++)
					{
						if($min[$j] > $valores[$i])
						{
							$min[$j] = $valores[$i];
						}
					}
				}
				$acum = $acum+$valores[$i];
			}
			$mediana = $acum - $max - $min;
			$mediana = $mediana / ($tam - 2*$cant);
		}
		else
		{
			$mediana = self::aritmetic_mean($valores);
		}
		return $mediana;
	}

	public static function maximum(array $valores)//maximo
	{
		$max = $valores[0];
		$tam = count($valores);
		if($tam>1)
		{
			for($i=1; $i<$tam; $i++)
			{
				if($max<$valores[$i])
				{
					$max = $valores[$i];
				}
			}
		}
		return $max;
	}

	public static function minimum(array $valores)//minimo
	{
		$min = $valores[0];
		$tam = count($valores);
		if($tam>1)
		{
			for($i=1; $i<$tam; $i++)
			{
				if($min>$valores[$i])
				{
					$min = $valores[$i];
				}
			}
		}
		return $min;
	}

	public static function maximum_cant(array $valores, int $cant)
	{
		$max = [];
		$max[0] = $valores[0];
		$tam = count($valores);
		if($tam>1 && $tam > $cant && $cant > 0)
		{
			for($i=1; $i<$tam; $i++)
			{
				$max_temp = $valores[$i];
				for($j=0; $j<$cant; $j++)
				{
					if($max[$j] < $max_temp)
					{
						math::cammay($max[$j], $max_temp);
					}
				}
			}
		}
		else
		{

		}
		return $max;
	}

	public static function minimum_cant(array $valores, int $cant)
	{
		$min= [];
		$min[0]=$valores[0];
		$tam = count($valores);
		if($tam>1 && $tam > $cant && $cant > 0)
		{
			for($i=1; $i<$tam; $i++)
			{
				$min_temp = $valores[$i];
				for($j=0; $j<$cant; $j++)
				{
					if($min[$j] > $min_temp)
					{
						math::cammay($min[$j], $min_temp);
					}
				}
			}
		}
		else
		{

		}
		return $min;
	}

	public static function acumulado(array $valores)//genera el acumulado de una serie de valores
	{
		$acum = [];
		$acum[0] = $valores[0];
		$tam = count($valores);
		for($i=1; $i<$tam; $i++)
		{
			$acum[$i] = $acum[$i-1]+$valores[$i];
		}
		return $acum;
	}

	public static function momentos_centrales(array $valores, int $k)
	{
		$tam = count($valores);
		$prom = self::aritmetic_mean($valores);
		$momento_central = 0;
		for($i = 0; $i< $tam; $i++)
		{
			$momento_central = $momento_central + ($valores[$i] - $prom)**$k;
		}
		$momento_central = $momento_central / $tam;
		return $momento_central;
	}

	public static function momentos_centrales_online($valores)//pendiente
	{
		$n=0;
		$m1=0;
		$m2=0;
		$m3=0;
		$m4=0;
		$tam = count($valores);
		for($i=0; $i<$tam; $i++)
		{
			$n1 = $n;
			$n++;
			$delta = $valores[$i] - $m1;
			$delta_n = $delta / $n;
			$delta_n2 = $delta_n**2;
			$term1 = $delta * $delta_n * $n1;
			$m4 = $m4 + $term1*$delta_n2*($n*$n + 3*$n +3) + 6*$delta_n2*$m2 - 4*$delta_n*$m3;
			$m3 = $m3 + $term1*$delta_n*($n-2) - 3*$delta_n*$m2;
			$m2 = $m2 + $term1;
			$m1 = $m1 + $delta_n;
		}
		$kurtosis = $n*$m4/$m2**2;//-3;
		$skewness = math::root($n)*$m3/root($m2**3);
		$varianza = $m2/$n;
		//$
	}

	public static function varianza(array $valores)
	{
		$varianza = self::momentos_centrales($valores, 2);
		return $varianza;
	}

	public static function covarianza(array $valores1, array $valores2)
	{
		$tam1 = count($valores1);
		$tam2 = count($valores2);
		$covarianza = 0;
		if($tam1 == $tam2)
		{
			$tam = $tam1;
			$prom1 = self::aritmetic_mean($valores1);
			$prom2 = self::aritmetic_mean($valores2);
			for($i = 0; $i< $tam; $i++)
			{
				$temp[$i] = ($valores[$i] - $prom)**2;
			}
		}
		return $covarianza;
	}

	public static function covarianza_online($valores1, $valores2)//pendiente
	{
		$meanx = 0;
		$meany = 0;
		$C = 0;
		$n = 0;
		for($i=0; $i< $tam; $i++)
		{
			$n++;
			$dx = $valores1[$i] - $meanx;
			$meanx = $meanx + $dx / $n;
			$meany = $meany + ($valores2[$i] - $meany) / $n;
			$C = $C + $dx * ($valores2[$i] - $meany);
		}


		$population_covar = $C / $n;
		return $population_covar;
	}

	public static function desviacion_standard(array $valores)
	{
		$num = self::varianza($valores);
		$num = math::root($num);
		return $num;
	}

	public static function coeficiente_variacion(array $valores)
	{
		$num = self::desviacion_standard($valores) / self::aritmetic_mean($valores);
		return $num;
	}

	public static function index_dispertion(array $valores)
	{
		$num = self::varianza($valores)/self::aritmetic_mean($valores);
		return $num;
	}

	public static function average_absolute_derivation(array $valores, $center)//center puede ser moda, mediana o promedio
	{
		$tam = count($valores);
		$sum = 0;
		for($i=0; $i<$tam; $i++)
		{
			$sum = $sum + math::abs($valores[$i]-$center);
		}
		return $sum/$tam;
	}
}
?>