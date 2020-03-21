<?php
declare(strict_types=1);
include('operadores.php');

class series
{
	
}
$limit = 20;

function sumando($x)//sumas sucesivas de números
{
	$num = 1;
	if($x > 1)
	{
		$num = ($x * ($x + 1)) / 2;
	} 
	return $num;
}

function fibbonacci($n)//sucesión de fibbonacci usando un ciclo for
{
	$num = [];
	$num[0] = 0;
	$x = 0;
	$y = 1;
	for($i=0; $i<$n; $i++)
	{
		$num[$i+1] = $x + $y;
		$x = $y;
		$y = $num[$i];
	}
	return $num[$n];
}

function credec($num, &$ser, &$k)//revisar
{
	$max = ($num / 2) + ($num % 2);
	if(($ser % $num) < $max)
	{
		$k++;
	}
	else
	{
		$k--;
	}
	$ser++;
}

function expaft($x)
{
	$num = 0;
	if($x>0)
	{
		$num = risingfact($x-1,3);
		$num = $num/3;
	}
	return $num;
}

function geoari($x)//divide una progresión geométrica entre una aritmética
{
	$num = 0;
	if($x>0)
	{
		$num = (2*factorial($x-1))/($x+1);
		//$num = factor($x) / sumando($x);
	}
	return $num;
}

function dbfactor($x)
{
	$num = 1;
	if($x>=1)
	{
		do
		{
			$num = $num*$x;
			$x = $x-2;
		}while($x>1);
	}
	return $num;
}

function fibbonaccimat($x)//realiza la sucesión de fibbonacci con matrices
{
	$i = $x - 1;
	$a = 1;
	$b = 0;
	$c = 0;
	$d = 1;
	$a1 = 1;
	$b1 = 0;
	$c1 = 0;
	$d1 = 1;
	while($i > 0)
	{
		if(($i % 2) == 1)
		{
			$a = ($d1 * $b1) + ($c1 * $a1);
			$b = ($d1 * ($b1 + $a1)) + ($c1 * $b1);
		}
		$c = ($c1 * $c1) + ($d1 * $d1);
		$d = $d1 * (2 * $c1 + $d1);
		$a1 = $a;
		$b1 = $b;
		$c1 = $c;
		$d1 = $d;
		$i = $i / 2;
	}
	return ($a + $b);
}

function lucas($x)//realiza la sucesión de lucas como diferencia de la sucesión de fibbonacci
{
	$num = 2;
	if($x>1)
	{
		$num = 1;
		if($x > 2)
		{
			$num = fibbonaci($x - 1) + fibbonaci($x + 1);
		}
	}
	return $num;
}

function altfactorial($x)//va sumando factoriales positivos y negativos
{
	$num = 1;
	if($x>0)
	{
		for($i=1; $i<$x; $i++)
		{
			$num += ((-1)**($x-$i)) * factorial($i);
		}
	}
	return $num;
}

function catalan($x)
{
	$num;
	if($x>0)
	{
		$num = comb(2 * $x, $x) / ($x + 1);
	}
	return $num;
}

function primorial($x)//multiplicación sucesiva de números primos
{
	$num = 2;
	if($x>0)
	{
		for($i=1; $i<$x; $i++)
		{
			$num = $num * prime($i);
		}
	}
	return $num;
}

function multg($x)//revisar
{
	$num = 1;
	$i = 1;
	$k = 1;
	if($x>=1)
	{
		do
		{
			$j = 1;
			do
			{
				$num = $num*$k;
				$i++;
				$j++;
			}while($i<=$x && $j<=$k);
			$k++;
		}while($i<=$x);
	}
	return $num;
}

function rares($x)//revisar
{
	$num = 1;
	if($x>0)
	{
		for($i=1; $i<$x; $i++)
		{
			$num += comb(2*$i, $i);
		}
	}
	return $num;
}

function antes($x)//revisar
{
	$num = 0;
	if($x>0)
	{
		for($i=1; $i<$x; $i++)
		{
			$num += $i/($i+1);
		}
	}
	return $num;
}

function despues($x)//revisar
{
	$num = 0;
	if($x>0)
	{
		for($i=1; $i<$x; $i++)
		{
			$num += ($i+1)/$i;
		}
	}
	return $num;
}

function bell($x)//obtiene los números de bell
{
	$num = [];
	$num[0] = 1;
	if($x>0)
	{
		$num[1] = 1;
		for($i=2; $i<$x+1; $i++)
		{
			for($j=0; $j<$i; $j++)
			{
				$num[$i] += binomial($i - 1, $j) * num[$j];
			}
		}
	}
	return $num[$x];
}

function kynea($x)
{
	$num = 0;
	if($x>0)
	{
		$num = 4**$x + 2**($x + 1) - 1;
	}
	return $num;
}

function bernoulli($x, $n)//obtiene los números de bernoulli
{
	$num = 0;
	if($x>0)
	{
		for($i=0; $i<=$x; $i++)
		{
			$num += ((-1)**$i) * (Worpitzky($x, $i) / ($i + 1));
		}
	}
	return $num;
}

function comb($x, $n)//realiza la combinación de de x en n
{
	$num = 1;
	if($n == $x || $n == 0)
	{
		$num = 1;
	}
	else
	{
		if($n == 1 || $n == ($x - 1))
		{
			$num = $x;
		}
		else
		{
			if($n == 2 || $n == ($x - 2))
			{
				$num = sumando($x - 1);
			}
			else
			{
				if(($x - $n) > $n)
				{
					$num = perm($x, $n) / factor($n);
				}
				else
				{
					$num = perm($x, $x - $n) / factor($x - $n);
				}
			}
		}
	}
	return $num;
}

function combrepe($x, $n)//revisar
{
	$num = 1;
	if($n!=$x && $n!=0)
	{
		$num = RisingFact($x, $n) / factor($n);
	}
	return $num;
}

function perm($x, $n)//realiza las permutaciones de x en n
{
	$num = 1;
	if($n == 0)
	{
		$num = 1;
	}
	if($n == 1)
	{
		$num = $x;
	}
	else
	{
		if($n == $x || $n == ($x - 1))
		{
			$num = factor($x);
		}
		else
		{
			$a = $x - $n + 1;
			for($i = $a; $i <= $x; $i++)
			{
				$num = $num * $i;
			}
		}
	}
	return $num;
}

function sumas($x, $n)//revisar
{
	return comb($x + $n - 2, $x - 1);
}

function fermat($x, $n)
{
	$num = prime($n);
	return (((($x + 1)**$num) - ($x + 1)) / $num);
}

function suma_potencia($x, $n)//suma consecutiva de potencias, optimizar
{
	$num = [];
	$num[0] = 1;
	if($x>0)
	{
		for($i=1; $i<($x+1); $i++)
		{
			$num[$i] = $num[$i-1] + $i**$n;
		}
	}
	return $num;
}

function creci($x, $n)//secuencia de diferencia de potencias
{
	$num = [];
	$num[0] = 1;
	if($x>0)
	{
		for($i=1; $i<($x+1); $i++)
		{
			$num[$i] = $num[$i-1] + ($i**$n) - (($i-1)**$n);
		}
	}
	return $num;
}

function polilog($x, $n)//realiza el polilogaritmo de x base n
{
	$num = 0;
	if($x>0)
	{
		for($i=1; $i<20; $i++)
		{
			$num += ($x**$i)/($i**$n);
		}
	}
	return $num;
}

function xzeta($x, $n)
{
	$num = 0;
	if($x>0)
	{
		for($i=1; $i<20; $i++)
		{
			$k = 2 * $i + 1;
			$num += ($x**$k)/($k**$n);
		}
	}
	return $num;
}

function mcm($x, $n)//mínimo común múltiplo
{
	return ($x * $n) / MCD($x, $n);
}

function fibbo($x, $y)
{
	$i = $x - 1;
	$a = 1;
	$b = 0;
	$c = 0;
	$d = 1;
	$a1 = 1;
	$b1 = 0;
	$c1 = 0;
	$d1 = 1;
	while($i > 0)
	{
		if(($i % 2) == 1)
		{
			$a = ($d1 * $b1) + ($c1 * $a1);
			$b = ($d1 * ($b1 + $a1)) + ($c1 * $b1);
		}
		$c = ($c1 * $c1) + ($d1 * $d1);
		$d = $d1 * (2 * $c1 + $d1);
		$a1 = $a;
		$b1 = $b;
		$c1 = $c;
		$d1 = $d;
		$i = $i / 2;
	}
	$num = (($a * $y) + ($b * ($y + 1)));
	return $num;
}

function exprime($x, $n)//suma de potencia de primos
{
	$num = 0;
	if($x>1)
	{
		for($i=0;$i<$x;$i++)
		{
			$num += (prime($i)**$n);
		}
	}
	return $num;
}

function invpolilog($x, $y)//inverso del polilogaritmo
{
	$num = 0;
	if($x>0 && $y>0)
	{
		for($i=1;$i<20;$i++)
		{
			$num += ($i**$x) / ($y**$i);
		}
	}
	return $num;
}

function multy($x, $y)//revisar
{
	$num = 1;
	$i = 1;
	$k = 1;
	if($x>=1)
	{
		do
		{
			$j = 1;
			do
			{
				$num = $num * $k;
				$i++;
				$j++;
			} while($i <= $x && $j <= $y);
			$k++;
		} while($i <= $x);
	}
	return $num;
}

function euler($x, $y)//numeros de euler
{
	$num = 0;
	for($i=0; $i<=$y; $i++)
	{
		$num += (((-1)**$i) * binomial($x + 1, $i) * (($y + 1 - $i)**$x));
	}
	return $num;
}

function stirling($x, $y)//números de stirling
{
	$num = 0;
	for($i=1; $i<=$y; $i++)
	{
		$num += (-1)**($y - $i) * binomial($y, $i) * $i**$x;
	}
	$num = $num / factorial($y);
	return $num;
}

function expcoef($x, $n)//revisar
{
	$num = 0;
	for($i = 1; $i <= $n; $i++)
	{
		$num += $i * ($x**($i - 1)) * ((-1)**($n - $i));
	}
	return $num;
}

function risingfact($x, $n)//revisar
{
	$num = 1;
	for($i=$x; $i<=$x+$n-1; $i++)
	{
		$num = $num*$i;
	}
	return $num;
}

function qexponent($x, $n)
{
	$num = 0;
	for($i = 1; $i <= 20; $i++)
	{
		$num += ($x**$i)/qfactorial($n, $i);
	}
	return $num;
}

function qanalog($x, $n)
{
	$num = 0;
	if($n > 0)
	{
		for($i = 0; $i < $n; $i++)
		{
			$num += ($x**$i);
		}
	}
	return $num;
}

function qfactorial($x, $n)
{
	$num;
	if($n > 1 && $x > 0)
	{
		for($i = 2; $i <= $n; $i++)
		{
			$num = $num * qanalog($x, $i);
		}
	}
	return $num;
}

function nfibonacci($x, $t)
{
	if(x > 2)
	{
		$num = [];
		$m = $x + $t;
		$num[0] = 0;
		for($i = 1; $i <= $t; $i++)
		{
			$num[$i] = 1;
		}
		for($i = $t + 1; $i < $m; $i++)
		{
			for($j = 1; $j <= $t; $j++)
			{
				$num[$i] = $num[$i] + $num[$i - $j];
			}
		}
		return $num[$x + $t - 1];
	}
	if($x == 2)
	{
		return (fibbonaci($x));
	}
	return $t;
}

function touchard($x, $y)
{
	$num = 1;
	if($x == 1)
	{
		$num = bell($y);
	}
	else
	{
		for($i = 1; $i <= $y; $i++)
		{
			$num += stirling($y, $i) *($x**$i);
		}
	}
	return $num;
}

function self($x, $y)//revisar
{
	if($y > 2)
	{
		$num = [];
		if(($y % 2) == 0)
		{
			$num[0] = $y - 1;
		}
		else
		{
			$num[0] = $y - 2;
		}
		if($x > 0)
		{
			for($i = 1; $i < ($x+1); $i++)
			{
				$num[$i] = ($y - 2) * ($y**($i - 1)) + $num[$i - 1] + ($y - 2);
			}
		}
		return $num[$x];
	}
	return 1;
}

function narayana($x, $y)
{
	return (((binomial($x, $y)**2) * $y) / (($x - $y + 1) * $x));
}

function jugexp($x, $n)//revisar
{
	$num = [];
	$num[0] = $n;
	if($x > 1)
	{
		for($i = 1; $i < $x; $i++)
		{
			if(($i % 2) == 0)
			{
				$num[$i] = root($num[$i - 1]);
			}
			else
			{
				$num[$i] = root($num[$i - 1]**5);
			}
		}
		return $num[$x - 1];
	}
	return $num[0];
}

function worpitzky($x, $y)
{
	$num = 0;
	if($y > 0)
	{
		for($i = 0; $i <= $y; $i++)
		{
			$num += ((-1)**($i + $y)) * (($i + 1)**$x) * comb($y, $i);
		}
	}
	return $num;
}

function sumprod($x, $n)//revisar
{
	$q = 0;
	if($n > 1)
	{
		$nums = cuadrado($x, $q, $n);
		$num2 = 0;
		$num3 = 1;
		for($i = 0; $i < $q; $i++)
		{
			$num2 += $nums[$i];
			$num3 = $num3 * $nums[$i];
		}
		$num = $num2 * $num3;
		return $num;
	}
	return 1;
}

function numexp($x, $n)//revisar
{
	$q = 0;
	if($n > 1)
	{
		$nums = cuadrado($x, $q, $n);
		$num = 0;
		for($i = 0; $i < $q; $i++)
		{
			$num += ($nums[$i]**2);
		}
		return $num;
	}
	return 1;
}

function knodel($x, $y, $z)
{
	$num = 1;
	$band = false;
	$i = 0;
	$r = 0;
	$cont = 0;
	$exp = cuadrado($y - $z, $r, 2);
	do
	{
		$num = expmod($i, $exp, $y);
		if(($num % $y) == 1)
		{
			$band = true;
			$cont++;
			$i++;
		}
		else
		{
			$i++;
		}
	}while($band != true || $cont <= $x);
	$i--;
	return $i;
}

function expmod($x, $t, $s)//revisar
{
	$r = 0;
	$num = 1;
	$expo = cuadrado($t, $r, 2);
	for($j = 0; $j < $r; $j++)
	{
		$num = (($num % $s) * ($num % $s)) % $s;
		if($expo[$j] == 1)
		{
			$num = (($num % $s) * ($x % $s)) % $s;
		}
	}
	return $num;
}

function qpochhammer($x, $y, $z)
{
	$num = 1;
	if($x > 0)
	{
		for($i = 0; $i <= $z - 1; $i++)
		{
			$num = $num * (1 - $x * ($y**$i));
		}
	}
	return $num;
}

function kpochhammer($x, $y, $z)
{
	$num = 1;
	for($i = 0; $i <= ($y - 1); $i++)
	{
		$num = $num * ($x + ($i * $z));
	}
	return $num;
}

function lerch($x, $y, $z)
{
	$num = 0;
	for($i = 0; $i <= 20; $i++)
	{
		$num += ($x**$i) / (($i + $z)**$y);
	}
	return $num;
}

function qbinomial($x, $n)
{
	$num = 1;
	$a = $y - $z + 1;
	for($i = $a; $i <= $y; $i++)
	{
		$num = $num * qanalog($x, $i);
	}
	$num = $num / qfactorial($x, $z);
	return $num;
}

function regurbeta($x, $y, $z)
{
	$num = 0;
	$a = $y + $z - 1;
	for($i = $y; $i <= $a; $i++)
	{
		$num += (comb($a, $i) * ($x**$i) * ((1 - $x)**($a - $i)));
	}
	return $num;
}

function sergesecuen($x, $t, $s, $r)
{
	$num = [];
	$t1 = count($t);
	$num1 = $x + $t1;
	for($i = 0; $i < $t1; $i++)
	{
		$num[$i] = $t[$i];
	}
	$s1 = count($s);
	if($t1 >= $s1)
	{
		if($x >= $t1)
		{
			for($i = $t1; $i < $num1; $i++)
			{
				for($j = 1; $j <= $s1; $j++)
				{
					$num[$i] = $num[$i] + ($s[$j - 1] * $num[$i - $j]);
				}
				$num[i] = $num[$i] + $r;
			}
		}
		return $num[$x];
	}
	return $num[$t1 - 1];
}

function dichirel($x)
{
	$num = 0;
	for($i = 1; $i <= 50; $i++)
	{
		$num = $num + 1 / ($i**$x);
	}
	return $num;
}

function matrizs($x)//revisar
{
	$mat = [][];
	for($i = 0; $i < $x; $i++)
	{
		for($j = 0; $j < $x; $j++)
		{
			$mat[$i][$j] = comb($i + $j - 2, $i - 1);
		}
	}
	return $mat;
}

function matesc($x)//revisar
{
	$mat = [][];
	$cont = 1;
	$i = 0;
	while($i < $x)
	{
		$mat[$i][$i] = $cont++;
		$j = $i + 1;
		while($j < $x)
		{
			$mat[$i][$j] = $cont++;
			$mat[$j][$i] = $cont++;
		}
		$i++;
	}
	return $mat;
}

function qgeneralize($x, $y, $z)
{
	$num = 1;
	$y1 = count($y);
	for($i = 1; $i <= $y1; $i++)
	{
		for($j = 1; $j <= $y[$i]; $j++)
		{
			$num = $num * ($x - (($i - 1) / $z) + $j - 1);
		}
	}
	return $num;
}

function multinomial($x)
{
	$num = 1;
	$n = count($x);
	for($i=0; $i < $n; $i++)
	{
		$num2 = 0;
		for($j = 0; $j < $i; $j++)
		{
			$num2 += $x[$j];
		}
		$num = $num * comb($num2, $x[$i]);
	}
	return $num;
}

function permlist($x, $s)//revisar permuta una lista
{
	$n = count($s);
	for($j = 1; $j < $n; $j++)
	{
		$x = $x / $j;
		$camb = $s[($x % $j) + 1];
		$s[($x % $j) + 1] = $s[$j];
		$s[$j] = $camb;
	}
	return $s;
}
?>