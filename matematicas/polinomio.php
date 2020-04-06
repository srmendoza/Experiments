<?php
declare(strict_types=1);

class polynomial
{
	function sumar($a, $b)
	{
		$num = [];
		return $num;
	}

	function multiplicar($a, $b)
	{
		$num = [];
		return $num;
	}

	function integrar($a)
	{
		if($a['potencia'] != -1)
		{
			$a['coeficiente'] = $a['coeficiente'] / ($a['potencia']+1);
			$a['potencia'] = $a['potencia'] +1;
		}
	}

	function derivar($a)
	{
		$a['coeficiente'] = $a['coeficiente'] * $a['potencia'];
		if($a['potencia'] != 0)
		{
			$a['potencia'] = $a['potencia'] -1;
		}
	}
}
//coeficiente exponente
?>