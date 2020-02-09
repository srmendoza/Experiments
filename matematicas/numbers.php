<?php
//gausseuler //namespace GaussEuler;
declare(strict_types=1);

class numbers
{
	public static function Bernoulli(int $x)//pendiente
	{
		
	}

	public static function Euler(int $x)
	{
		
	}

	public static function Worpitzky()
	{
		
	}

	public static function Stirling()
	{
		
	}

	public static function binomial(int $n, int $k)//: int//pendiente
	{
		$num=1;
		if($n != $k && $n != 0)
		{

		}
		return $num;
	}

	public static function permutation(int $n, int $k)//: int//pendiente
	{
		$num = 1;
		if($k != 0)
		{
			if(1 == $k)
			{
				$num = $n;
			}
			else
			{

			}
		}
	}

	public static function sum_pot(int $n, int $k)//pendiente
	{

	}

	public static function rising_factorial(int $n, int $m)
	{
		$res = 0;
		if($n>$m)
		{
			$res = $m;
			for($i=$n; $i>$m; $i--)
			{
				$res = $res * $i;
			}
		}
		return $res;
	}
}
?>