<?php

class complex
{

}
function suma_complex($a, $b)
{
	$num = [];
	$num['re'] = $a['re'] + $b['re'];
	$num['im'] = $a['im'] + $b['im'];
	return $num;
}

function resta_complex($a, $b)
{
	$num = [];
	$num['re'] = $a['re'] - $b['re'];
	$num['im'] = $a['im'] - $b['im'];
	return $num;
}

function multiplicacion_complex($a, $b)
{
	$num = [];
	$num['re'] = $a['re'] * $b['re'] - $a['im'] * $b['im'];
	$num['im'] = $a['re'] * $b['im'] + $a['im'] * $b['re'];
	return $num;
}

function division_complex($a, $b)
{
	
}

function exponent_complex($a, $b)
{
	
}
?>