<?php
function suma_hypercomplex($a, $b)
{
	$num = [];
	$num['r'] = $a['r'] + $b['r'];
	$num['i'] = $a['i'] + $b['i'];
	$num['j'] = $a['j'] + $b['j'];
	$num['k'] = $a['k'] + $b['k'];
	return $num;
}

function resta_hypercomplex($a, $b)
{
	$num = [];
	$num['r'] = $a['r'] - $b['r'];
	$num['i'] = $a['i'] - $b['i'];
	$num['j'] = $a['j'] - $b['j'];
	$num['k'] = $a['k'] - $b['k'];
	return $num;
}

function multiplicacion_hypercomplex($a, $b)
{
	$num = [];
	$num['r'] = $a['r']*$b['r'] - $a['i']*$b['i'] - $a['j']*$b['j'] - $a['k']*$b['k'];
	$num['i'] = $a['r']*$b['i'] + $a['i']*$b['r'] + $a['j']*$b['k'] - $a['k']*$b['j'];
	$num['j'] = $a['r']*$b['j'] - $a['i']*$b['k'] + $a['j']*$b['r'] + $a['k']*$b['i'];
	$num['k'] = $a['r']*$b['k'] + $a['i']*$b['j'] - $a['j']*$b['i'] + $a['k']*$b['r'];
	return $num;
}

function division_hypercomplex($a, $b)
{
	$num = [];
	
	return $num;
}

function exponent_hypercomplex($a, $b)
{
	$num = [];
	
	return $num;
}
?>