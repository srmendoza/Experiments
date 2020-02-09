<?php
//gausseuler //namespace GaussEuler;
declare(strict_types=1);

class trig
{
	const PI = 3.141592653589793;
	const TAU = 6.283185307179586;

	public static function sin(float $x)
	{
		$num = 0;
		if(0 == $x)
		{
			$num = 0;
		}
		else
		{
			while($x > self::TAU)
			{
				$x -= self::TAU;
			}
			for($i=0; $i<8; $i++)
			{
				$num += ($x**(4*$i + 1))/math::factorial(4*$i + 1); 
				$num -= ($x**(4*$i + 3))/math::factorial(4*$i + 3);
			}
		}
		return $num;
	}

	public static function cos(float $x)
	{
		$num = 0;
		if(0 == $x)
		{
			$num = 1;
		}
		else
		{
			while($x > self::TAU)
			{
				$x -= self::TAU;
			}
			for($i=0; $i<8; $i++)
			{
				$num += ($x**(4*$i + 0))/math::factorial(4*$i + 0); 
				$num -= ($x**(4*$i + 2))/math::factorial(4*$i + 2);
			}
		}
		return $num;
	}

	public static function tangente(float $x)
	{
		$res = 0;
		$num = self::sin($x);
		if(0 == $num || 1 == $num)
		{
			$res = 0;
		}
		else
		{
			$den = self::cos($x);
			$res = $num / $den;
		}
		return $res;
	}
	
	public static function arcsin(float $x)
	{
		$res = 0;
		if(0 == $x)
		{
			$res = 0;
		}
		else
		{
			if($x > 1)
			{
				$x -= -1;
			}
			for($i=0; $i<10; $i++)
			{
				$res = $res + math::factorial(2*$i)*($x**(2*$i+1))/((2*$i+1)*4**($i)*factorial($i)**2);
			}
		}
		return $res;
	}

	public static function arccos(float $x)//pendiente
	{
		$res = 0;
		for($i=0; $i<10; $i++)
		{

		}
	}

	public static function arctan(float $x)
	{
		$res = 0;
		for($i=0; $i<10; $i++)
		{
			$res = $res + ((-1)**($i)*($x**(2*$i+1)))/(2*$i+1);
		}
	}
}

class hiperbolic
{
	public static function sin()
	{
		$num = 0;
		if(0 == $x)
		{
			$num = 0;
		}
		else
		{
			for($i=0; $i<16; $i++)
			{
				$num += ($x**(2*$i + 1))/math::factorial(2*$i + 1);
			}
		}
		return $num;
	}

	public static function cos()
	{
		$num = 0;
		if(0 == $x)
		{
			$num = 0;
		}
		else
		{
			for($i=0; $i<16; $i++)
			{
				$num += ($x**(2*$i))/math::factorial(2*$i);
			}
		}
		return $num;
	}

	public static function tangent()//pendiente
	{
		
	}

	public static function sigmoid()//pendiente
	{
		
	}
}
?>