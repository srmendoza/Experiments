<?php
//coeficiente exponente
function suma_polinomio($a, $b)
{
	$num = [];
	return $num;
}

function multiplicacion_polinomio($a, $b)
{
	$num = [];
	return $num;
}

function integral($a)
{
	if($a['potencia'] != -1)
	{
		$a['coeficiente'] = $a['coeficiente'] / ($a['potencia']+1);
		$a['potencia'] = $a['potencia'] +1;
	}
}

function derivada($a)
{
	$a['coeficiente'] = $a['coeficiente'] * $a['potencia'];
	if($a['potencia'] != 0)
	{
		$a['potencia'] = $a['potencia'] -1;
	}
}
?>