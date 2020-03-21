<?php
error_reporting(E_ERROR);
function picalc($x, $l)
{
	$x++;
	$t=[];
	$p=[];
	$s = 1;
	$n = 1;
	$r = 0;
	$q = 0;
	$m = 0;
	$d = 25;
	$b;
	$k=(10**$l);
	$t[0] = 3;
	$t[1] = 2 * (10**($l - 1));
	$p[0] = 3;
	$p[1] = 2 * (10**($l - 1));
	$a=0;
	calc($t, $p, $s, $a, $x, $k, $r, $d, $n, $m, $q);
	$t[0]=4;
	$s=-1;
	$n=1;
	$d=239;
	$r=0;
	$a=0;
	for($i=$a; $i<$x;$i++)
	{
		$m=$t[$i]+($k*$r);
		$q=(int)($m/$d);
		$r=$m%$d;
		$t[$i]=$q;
	}
	$r=0;
	for($i=0;$i<$x;$i++)
	{
		$p[$i]=$p[$i]-$t[$i];
	}
	$d=57121;
	calc($t, $p, $s, $a, $x, $k, $r, $d, $n, $m, $q);
	$x--;
	for($i=$x;$i>=1;$i--)
	{
		if($p[$i]<0)
		{
			$b = -(int)($p[$i] / $k) + 1;
			$p[$i] = $p[$i]+($b*$k);
			$p[$i-1] = $p[$i-1]-$b;
		}
	}
	for($i=$x; $i>=1; $i--)
	{
		if($p[$i]>=$k)
		{
			$b = (int)($p[$i]/$k);
			$p[$i] = $p[$i]-($b*$k);
			$p[$i-1] = $p[$i-1]+$b;
		}
	}
	return $p;
}

function calc($t, &$p, $s, $a, $x, $k, $r, $d, $n, $m, $q)
{
	$w=true;
	while($w)
	{
		$n=$n+2;
		$s=-($s);
		$cont=0;
		for($i=$a;$i<$x && $cont<5;$i++)
		{
			$m = $t[$i]+($k*$r);
			$q = (int)($m/$d);
			$r = $m%$d;
			$t[$i] = $q;
			if($t[$i]==0)
			{
				$cont++;
			}
		}
		$r=0;
		for($i=$a; $i<$x; $i++)
		{
			$m=$t[$i]+($k*$r);
			$q=(int)($m/$n);
			$r=$m%$n;
			$p[$i]=$p[$i]+($s*$q);
		}
		$r=0;
		if($t[$a]==0)
		{
			$a++;
		}
		$w=$a<$x;
	}
}

print_r(picalc(100,10));
?>