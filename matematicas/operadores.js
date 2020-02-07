function exponent(x)//función de taylor del exponente
{
	var num = 1;
	var n = 1;
	for(var i = 1; i <= 10; i++)
	{
		n = n*i;
		num = num + x**i / n;
	}
	return num;
}

function seno(x)
{
	var num = 0;
	var n = 1;
	for(var i=0; i<10; i++)
	{
		num = num + (x**(4*i + 1))/factorial(4*i + 1) - (x**(4*i + 3))/factorial(4*i + 3);
	}
	return num;
}

function coseno(x)
{
	var num = 0;
	var n = 1;
	for(var i=0; i<10; i++)
	{
		num = num + (x**(4*i + 0))/factorial(4*i + 0) - (x**(4*i + 2))/factorial(4*i + 2);
	}
	return num;
}

function logaritmo(x)
{
	var num = 0;
	if(x >= 2)
	{
		var num2 = ((x - 1) / (x + 1));
		for(var i = 0; i <= 100; i++)
		{
			var k = 2 * i + 1;
			num = num + ((num2**k) / k);
		}
		num = 2 * num;
	}
	return num;
}

function factorial(x)//realiza el factorial usando un ciclo for
{
	var num = 1;
	if(x>0)
	{
		for(var i=1; i<=x; i++)
		{
			num = num*i;
		}
	}
	return num;
}

function absolute(num)
{
	var result = num;
	if(num<0)
	{
		result = 0 - num;
	}
	return result;
}

function modulo(num, mod)
{
	var num = num % mod;
	if(num<0)
	{
		num = num + mod;
	}
	return num;
}

function cammay(&$x, &$y)
{
	if($x<$y)
	{
		$p = $x;
		$x = $y;
		$y = $p;
	}
}

function mcd(x, n)
{
	if(x == 0)
	{
		return n;
	}
	while(n != 0)
	{
		if(x > n)
		{
			x = x - n;
		}
		else
		{
			n = n - x;
		}
	}
	return x;
}

function extendeu(a, b, &x, &t, &d)
{
	if(b == 0)
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

function factorize($n, &$fact, &$exp)
{
	$count = 0;
	$root = introot($n) + 1;
	for($i = 2; $i <= $root; $i++)
	{
		if($n % $i == 0)
		{
			$n /= $i;
			$fact[$count] = $i;
			$exp[$count] = 1;
			while($n % $i == 0)
			{
				$n /= $i;
				$exp[$count]++;
			}
			$count++;
			$root = introot($n) + 1;
		}
	}
	if($n != 1)
	{
		$fact[$count] = (int)$n;
		$exp[$count++] = 1;
	}
}

function root(n)
{
	var x2 = n / 2;
	do
	{
		var x1 = x2;
		x2 = ((x1 + (n / x1)) / 2);
	}while(absolute(x2 - x1) > 0.01);
	return x2;
}

function introot($n)
{
	$x2=(int)($n / 2);
	do
	{
		$x1 = $x2;
		$x2 = (int)(($x1 + ($n / $x1)) / 2);
		$x3 = absolute($x2 - $x1);
	}while(($x3) > 1);
	return $x2;
}

function nroot($n, $r)
{
	$x2 = $n / 2;
	do
	{
		$x1 = $x2;
		$x2 = (((($r - 1) * $x1) + ($n / ($x1 ** ($r - 1)))) / $r);
		$x3 = $x2 - $x1;
	}while(absolute($x3) > 0.001);
	return $x2;
}