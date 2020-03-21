<?php

class complex
{
	function sumar($a, $b)
	{
		$num = [];
		$num['re'] = $a['re'] + $b['re'];
		$num['im'] = $a['im'] + $b['im'];
		return $num;
	}

	function restar($a, $b)
	{
		$num = [];
		$num['re'] = $a['re'] - $b['re'];
		$num['im'] = $a['im'] - $b['im'];
		return $num;
	}

	function multiplicar($a, $b)
	{
		$num = [];
		$num['re'] = $a['re'] * $b['re'] - $a['im'] * $b['im'];
		$num['im'] = $a['re'] * $b['im'] + $a['im'] * $b['re'];
		return $num;
	}

	function dividir($a, $b)
	{

	}

	function potenciar($a, $b)
	{

	}
}
?>