<?php
declare(strict_types=1);

class math
{
	public static function NeumaierSum(array $valores)
	{
		$sum = $valores[0];
		$c = 0.0;
		$tam = count($valores);
		for($i=1; $i<$tam; $i++)
		{
			$t = $sum + $valores[$i];
			if(math::abs($sum) >= math::abs($valores[$i]))
			{
				$c = $c + ($sum-$t) + $valores[$i];
			}
			else
			{
				$c = $c + ($valores[$i]-$t) + $sum;
			}
			$sum = $t;
		}
		return $sum + $c;
	}

	public static function ponderada()
	{
		
	}

	public static function extendeu(int $a, int $b, &$x, &$t, &$d)
	{
		if(0 == $b)
		{
			$d = $a;
			$x = 1;
			$t = 1;
		}
		$x2 = 1;
		$x1 = 0;
		$t2 = 0;
		$t1 = 1;
		while($b > 0)
		{
			$q = $a / $b;
			$r = $a - $q * $b;
			$x = $x2 - $q * $x1;
			$t = $t2 - $q * $t1;
			$a = $b;
			$b = $r;
			$x2 = $x1;
			$x1 = $x;
			$t2 = $t1;
			$t1 = $t;
		}
		$d = $a;
		$x = $x2;
		$t = $t2;
	}

	public static function factorize(int $n)
	{
		$fact = [];
		$count = 0;
		$root = self::introot($n) + 1;
		for($i = 2; $i <= $root; $i++)//crecimiento en -1 +1 de 6
		{
			if(($n % $i) == 0)
			{
				$n = ($n / $i);
				$fact[$count]['fact'] = $i;
				$fact[$count]['exp'] = 1;
				while(($n % $i) == 0)
				{
					$n = ($n / $i);
					$fact[$count]['exp']++;
				}
				$count++;
				$root = self::introot($n) + 1;
			}
		}
		if($n != 1)
		{
			$fact[$count]['fact'] = $n;
			$fact[$count++]['exp'] = 1;
		}
		return $fact;
	}

	public static function logaritmo_base_n(float $x, int $base)//pendiente
	{
		$num =0;
		if($base > 1 && $x > 1)
		{
			for($i=0; $i<=20; $i++)
			{

			}
		}
		return $num;
	}

	public static function quadratic(float $a, float $b, float $c)//pendiente
	{
		$det = $b*$b-4*$a*$c;
		if($det >0)
		{
			$x1 = (-1 * $b-self::signo($b) * self::root($det))/(2 * $a);
			$x2 = $c / ($a * $x1);
		}
	}
	
	public static function mod(int $num, int $mod)//: int
	{
		$num = $num % $mod;
		if($num<0)
		{
			$num = $num+$mod;
		}
		return $num;
	}
	
	public static function exponentes(float $x)//función de taylor del exponente
	{
		$num = 1;
		if(0 == $x)
		{
			$num = 1;
		}
		else
		{
			$n = 1;
			for($i = 1; $i <= 10; $i++)
			{
				$n = $n*$i;
				$num = $num + $x**$i / $n;
			}
		}
		return $num;
	}

	public static function logaritmo_natural(float $x)
	{
		$num = 0;
		if($x > 1)
		{
			$num2 = (($x - 1) / ($x + 1));
			for($i = 0; $i <= 20; $i++)
			{
				$k = 2 * $i + 1;
				$num = $num + (($num2**$k) / $k);
			}
			$num = 2 * $num;
		}
		return $num;
	}

	public static function factorial(int $x)//realiza el factorial usando un ciclo for
	{
		$num = 1;
		if($x > 1)
		{
			$valores = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000, 121645100408832000, 2432902008176640000];
			if($x <= 20)
			{
				$num = $valores[$x];
			}
			else
			{
				$num = $valores[20];
				for($i=21; $i<=$x; $i++)
				{
					$num = $num*$i;
				}
			}
		}
		return $num;
	}

	public static function abs(float $num)
	{
		return ($num >= 0) ? $num : -1*$num;
	}

	public static function signo(float $num)//: int
	{
		$result = 0;
		if($num != 0)
		{
			$result = ($num > 0) ? 1 : -1;
		}
		return $result;
	}

	public static function swap(&$x, &$y)
	{
		$p = $x;
		$x = $y;
		$y = $p;
	}

	public static function mcd(int $x, int $n)//: int
	{
		if(0 == $x)
		{
			return $n;
		}
		while($n != 0)
		{
			if($x > $n)
			{
				$x = $x - $n;
			}
			else
			{
				$n = $n - $x;
			}
		}
		return $x;
	}

	public static function root(float $n)
	{
		$x2 = 0;
		if($n>0)
		{
			$x2 = $n / 2;
			do
			{
				$x1 = $x2;
				$x2 = (($x1 + ($n / $x1)) / 2);
				$x3 = $x2 - $x1;
			}while(self::abs($x3) > 0.0001);
		}
		return $x2;
	}

	public static function introot(float $n)
	{
		$x2 = 1;
		if($n>1)
		{
			$x2 = (int)($n / 2);
			do
			{
				$x1 = $x2;
				$x2 = (int)(($x1 + ($n / $x1)) / 2);
			}while((self::abs($x2 - $x1)) > 1);
		}
		return $x2;
	}

	public static function nroot(int $n, float $r)
	{
		$x2 = 0;
		if(1 == $n)
		{
			$x2 = 1;
		}
		else
		{
			if((($r%2) == 0  && $n > 0) || (($r%2) != 0))
			{
				$x2 = $n / 2;
				do
				{
					$x1 = $x2;
					$x2 = (((($r - 1) * $x1) + ($n / ($x1 ** ($r - 1)))) / $r);
					$x3 = $x2 - $x1;
				}while(self::abs($x3) > 0.0001);
			}
		}
		return $x2;
	}
}
?>