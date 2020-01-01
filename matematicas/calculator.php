<?php
declare(strict_types=1);
$fact = 10**6;

function reordenar($result, $i)
{
	global $fact;
	$result[$i+1] = $result[$i+1] + (int)($result[$i]/$fact);
	$result[$i] = $result[$i] + ($result[$i]%$fact);
	return $result;
}

function suma($x, $y)
{
	$result = [];
	global $fact;
	//suma de polinomios
	$tamx = count($x);
	$tamy = count($y);
	$tam = $tamy;
	if($tamx<= $tamy)
	{
		$tam = $tamx;
	}
	for($i=0; $i<$tam; $i++)
	{
		$result[$i] = $result[$i]+$x[$i]+$y[$i];
		if($result[$i]>$fact)
		{
			$result = reordenar($result, $i);
		}
	}
	return $result;
}

function resta($x, $y)
{
	$result = [];
	global $fact;
	//restas de polinomios
	$tamx = count($x);
	$tamy = count($y);
	$tam = $tamy;
	if($tamx<= $tamy)
	{
		$tam = $tamx;
	}
	for($i=0; $i< $tam; $i++ )
	{
		$result[$i] = $result[$i]+$x[$i]-$y[$i];
		if($result[$i]>$fact)
		{
			$result = reordenar($result, $i);
		}
	}
	return $result;
}

function multiplicacion($x, $y)
{
	$result = [];
	global $fact;
	$tamx = count($x);
	$tamy = count($y);
	//multiplicacion de polinomios
	for($i=0; $i< $tamx; $i++ )
	{
		for($j=0; $j< $tamy; $j++ )
		{
			$result[$i] = $result[$i]+$x[$i]*$y[$j];
			if($result[$i]>$fact)
			{
				$result = reordenar($result, $i);
			}
		}
	}
	return $result;
}

function division($x, $y)//acelerar
{
	$result = [];
	global $fact;
	$tamx = count($x);
	$tamy = count($y);
	$tamr = $tamx/$tamy;
	return $result;
}

function exponente($x, $y)
{
	$result = [];
	global $fact;
	$tam = count($x);
	//volver a y binario y hacer los cuadrados unicamente
	//usar la multiplicacion cada vez
	for($i=0; $y==0 || $y==1; $i++)
	{
		$exponent[$i] = (int)($y/2);
		$exponent[$i+1] = $y%2;
		$y = (int)($y/2);
	}
	$tam2 = count($exponent);
	$sumandos[0] = $x;
	for($i=1; $i<$tam2; $i++)
	{
		$sumandos[$i] = multiplicacion($sumandos[$i-1], $sumandos[$i-1]);
		if($exponent[$i]==1)
		{
			$result = suma($result, $sumandos[$i]);
		}
	}
	return $result;
}

function modulo($x, $y)
{
	$result = [];
	global $fact;
	$result = resta($x,division($x, $y));
	return $result;
}
?>