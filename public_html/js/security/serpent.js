/*
#define beforeS0(f) f(0,a,b,c,d,e)
#define afterS0(f) f(1,b,e,c,a,d)
#define afterS1(f) f(2,c,b,a,e,d)
#define afterS2(f) f(3,a,e,b,d,c)
#define afterS3(f) f(4,e,b,d,c,a)
#define afterS4(f) f(5,b,a,e,c,d)
#define afterS5(f) f(6,a,c,b,e,d)
#define afterS6(f) f(7,a,c,d,b,e)
#define afterS7(f) f(8,d,e,b,a,c)

// order of output from inverse S-box functions
#define beforeI7(f) f(8,a,b,c,d,e)
#define afterI7(f) f(7,d,a,b,e,c)
#define afterI6(f) f(6,a,b,c,e,d)
#define afterI5(f) f(5,b,d,e,c,a)
#define afterI4(f) f(4,b,c,e,a,d)
#define afterI3(f) f(3,a,b,e,c,d)
#define afterI2(f) f(2,b,d,e,c,a)
#define afterI1(f) f(1,a,b,c,e,d)
#define afterI0(f) f(0,a,d,b,e,c)
*/

private function rotlFixed($x, $n)
{
	return (((x) << ($n)) | (($x) >> (32 - ($n))));
}

private function rotrFixed($x, $n)
{
	return (((x) >> ($n)) | (($x) << (32 - ($n))));
}

private function LT($i,&$a,&$b,&$c,&$d,&$e)
{
	$a = rotlFixed($a, 13);
	$c = rotlFixed($c, 3);
	$d = rotlFixed($d ^ $c ^ ($a << 3), 7);
	$b = rotlFixed($b ^ $a ^ $c, 1);
	$a = rotlFixed($a ^ $b ^ $d, 5);
	$c = rotlFixed($c ^ $d ^ ($b << 7), 22);
}

private function ILT($i,&$a,&$b,&$c,&$d,&$e)
{
	$c = rotrFixed($c, 22);
	$a = rotrFixed($a, 5);
	$c ^= $d ^ ($b << 7);
	$a ^= $b ^ $d;
	$b = rotrFixed($b, 1);
	$d = rotrFixed($d, 7) ^ $c ^ ($a << 3);
	$b ^= $a ^ $c;
	$c = rotrFixed($c, 3);
	$a = rotrFixed($a, 13);
}

private function S0($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r3 ^= $r0;
	r4 = $r1;
	r1 &= $r3;
	r4 ^= $r2;
	r1 ^= $r0;
	r0 |= $r3;
	r0 ^= $r4;
	r4 ^= $r3;
	r3 ^= $r2;
	r2 |= $r1;
	r2 ^= $r4;
	r4 = ~$r4;
	r4 |= $r1;
	r1 ^= $r3;
	r1 ^= $r4;
	r3 |= $r0;
	r1 ^= $r3;
	r4 ^= $r3;
}

private function I0($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r2 = ~$r2;
	r4 = $r1;
	r1 |= $r0;
	r4 = ~$r4;
	r1 ^= $r2;
	r2 |= $r4;
	r1 ^= $r3;
	r0 ^= $r4;
	r2 ^= $r0;
	r0 &= $r3;
	r4 ^= $r0;
	r0 |= $r1;
	r0 ^= $r2;
	r3 ^= $r4;
	r2 ^= $r1;
	r3 ^= $r0;
	r3 ^= $r1;
	r2 &= $r3;
	r4 ^= $r2;
}

private function S1($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r0 = ~$r0;
	r2 = ~$r2;
	r4 = $r0;
	r0 &= $r1;
	r2 ^= $r0;
	r0 |= $r3;
	r3 ^= $r2;
	r1 ^= $r0;
	r0 ^= $r4;
	r4 |= $r1;
	r1 ^= $r3;
	r2 |= $r0;
	r2 &= $r4;
	r0 ^= $r1;
	r1 &= $r2;
	r1 ^= $r0;
	r0 &= $r2;
	r0 ^= $r4;
}

private function I1($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r1;
	r1 ^= $r3;
	r3 &= $r1;
	r4 ^= $r2;
	r3 ^= $r0;
	r0 |= $r1;
	r2 ^= $r3;
	r0 ^= $r4;
	r0 |= $r2;
	r1 ^= $r3;
	r0 ^= $r1;
	r1 |= $r3;
	r1 ^= $r0;
	r4 = ~$r4;
	r4 ^= $r1;
	r1 |= $r0;
	r1 ^= $r0;
	r1 |= $r4;
	r3 ^= $r1;
}

private function S2($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r0;
	r0 &= $r2;
	r0 ^= $r3;
	r2 ^= $r1;
	r2 ^= $r0;
	r3 |= $r4;
	r3 ^= $r1;
	r4 ^= $r2;
	r1 = $r3;
	r3 |= $r4;
	r3 ^= $r0;
	r0 &= $r1;
	r4 ^= $r0;
	r1 ^= $r3;
	r1 ^= $r4;
	r4 = ~$r4;
}

private function I2($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r2 ^= $r3;
	r3 ^= $r0;
	r4 = $r3;
	r3 &= $r2;
	r3 ^= $r1;
	r1 |= $r2;
	r1 ^= $r4;
	r4 &= $r3;
	r2 ^= $r3;
	r4 &= $r0;
	r4 ^= $r2;
	r2 &= $r1;
	r2 |= $r0;
	r3 = ~$r3;
	r2 ^= $r3;
	r0 ^= $r3;
	r0 &= $r1;
	r3 ^= $r4;
	r3 ^= $r0;
}

private function S3($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r0;
	r0 |= $r3;
	r3 ^= $r1;
	r1 &= $r4;
	r4 ^= $r2;
	r2 ^= $r3;
	r3 &= $r0;
	r4 |= $r1;
	r3 ^= $r4;
	r0 ^= $r1;
	r4 &= $r0;
	r1 ^= $r3;
	r4 ^= $r2;
	r1 |= $r0;
	r1 ^= $r2;
	r0 ^= $r3;
	r2 = $r1;
	r1 |= $r3;
	r1 ^= $r0;
}

private function I3($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r2;
	r2 ^= $r1;
	r1 &= $r2;
	r1 ^= $r0;
	r0 &= $r4;
	r4 ^= $r3;
	r3 |= $r1;
	r3 ^= $r2;
	r0 ^= $r4;
	r2 ^= $r0;
	r0 |= $r3;
	r0 ^= $r1;
	r4 ^= $r2;
	r2 &= $r3;
	r1 |= $r3;
	r1 ^= $r2;
	r4 ^= $r0;
	r2 ^= $r4;
}

private function S4($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r1 ^= $r3;
	r3 = ~$r3;
	r2 ^= $r3;
	r3 ^= $r0;
	r4 = $r1;
	r1 &= $r3;
	r1 ^= $r2;
	r4 ^= $r3;
	r0 ^= $r4;
	r2 &= $r4;
	r2 ^= $r0;
	r0 &= $r1;
	r3 ^= $r0;
	r4 |= $r1;
	r4 ^= $r0;
	r0 |= $r3;
	r0 ^= $r2;
	r2 &= $r3;
	r0 = ~$r0;
	r4 ^= $r2;
}

private function I4($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r2;
	r2 &= $r3;
	r2 ^= $r1;
	r1 |= $r3;
	r1 &= $r0;
	r4 ^= $r2;
	r4 ^= $r1;
	r1 &= $r2;
	r0 = ~$r0;
	r3 ^= $r4;
	r1 ^= $r3;
	r3 &= $r0;
	r3 ^= $r2;
	r0 ^= $r1;
	r2 &= $r0;
	r3 ^= $r0;
	r2 ^= $r4;
	r2 |= $r3;
	r3 ^= $r0;
	r2 ^= $r1;
}

private function S5($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r0 ^= $r1;
	r1 ^= $r3;
	r3 = ~$r3;
	r4 = $r1;
	r1 &= $r0;
	r2 ^= $r3;
	r1 ^= $r2;
	r2 |= $r4;
	r4 ^= $r3;
	r3 &= $r1;
	r3 ^= $r0;
	r4 ^= $r1;
	r4 ^= $r2;
	r2 ^= $r0;
	r0 &= $r3;
	r2 = ~$r2;
	r0 ^= $r4;
	r4 |= $r3;
	r2 ^= $r4;
}

private function I5($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r1 = ~$r1;
	r4 = $r3;
	r2 ^= $r1;
	r3 |= $r0;
	r3 ^= $r2;
	r2 |= $r1;
	r2 &= $r0;
	r4 ^= $r3;
	r2 ^= $r4;
	r4 |= $r0;
	r4 ^= $r1;
	r1 &= $r2;
	r1 ^= $r3;
	r4 ^= $r2;
	r3 &= $r4;
	r4 ^= $r1;
	r3 ^= $r0;
	r3 ^= $r4;
	r4 = ~$r4;
}

private function S6($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r2 = ~$r2;
	r4 = $r3;
	r3 &= $r0;
	r0 ^= $r4;
	r3 ^= $r2;
	r2 |= $r4;
	r1 ^= $r3;
	r2 ^= $r0;
	r0 |= $r1;
	r2 ^= $r1;
	r4 ^= $r0;
	r0 |= $r3;
	r0 ^= $r2;
	r4 ^= $r3;
	r4 ^= $r0;
	r3 = ~$r3;
	r2 &= $r4;
	r2 ^= $r3;
}

private function I6($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r0 ^= $r2;
	r4 = $r2;
	r2 &= $r0;
	r4 ^= $r3;
	r2 = ~$r2;
	r3 ^= $r1;
	r2 ^= $r3;
	r4 |= $r0;
	r0 ^= $r2;
	r3 ^= $r4;
	r4 ^= $r1;
	r1 &= $r3;
	r1 ^= $r0;
	r0 ^= $r3;
	r0 |= $r2;
	r3 ^= $r1;
	r4 ^= $r0;
}

private function S7($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r2;
	r2 &= $r1;
	r2 ^= $r3;
	r3 &= $r1;
	r4 ^= $r2;
	r2 ^= $r1;
	r1 ^= $r0;
	r0 |= $r4;
	r0 ^= $r2;
	r3 ^= $r1;
	r2 ^= $r3;
	r3 &= $r0;
	r3 ^= $r4;
	r4 ^= $r2;
	r2 &= $r0;
	r4 = ~$r4;
	r2 ^= $r4;
	r4 &= $r0;
	r1 ^= $r3;
	r4 ^= $r1;
}

private function I7($i, &$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r2;
	r2 ^= $r0;
	r0 &= $r3;
	r2 = ~$r2;
	r4 |= $r3;
	r3 ^= $r1;
	r1 |= $r0;
	r0 ^= $r2;
	r2 &= $r4;
	r1 ^= $r2;
	r2 ^= $r0;
	r0 |= $r2;
	r3 &= $r4;
	r0 ^= $r3;
	r4 ^= $r1;
	r3 ^= $r4;
	r4 |= $r0;
	r3 ^= $r2;
	r4 ^= $r2;
}

private function KX($r, &$a, &$b, &$c, &$d, &$e)
{
	a ^= $k[4 * $r + 0];
	b ^= $k[4 * $r + 1];
	c ^= $k[4 * $r + 2];
	d ^= $k[4 * $r + 3];
}

private function S0f(&$r0, &$r1, &$r2, &$r3, &$r4)
{
	r3 ^= $r0;
	r4 = $r1;
	r1 &= $r3;
	r4 ^= $r2;
	r1 ^= $r0;
	r0 |= $r3;
	r0 ^= $r4;
	r4 ^= $r3;
	r3 ^= $r2;
	r2 |= $r1;
	r2 ^= $r4;
	r4 = ~$r4;
	r4 |= $r1;
	r1 ^= $r3;
	r1 ^= $r4;
	r3 |= $r0;
	r1 ^= $r3;
	r4 ^= $r3;
}

private function S1f(&$r0, &$r1, &$r2, &$r3, &$r4)
{
	r0 = ~$r0;
	r2 = ~$r2;
	r4 = $r0;
	r0 &= $r1;
	r2 ^= $r0;
	r0 |= $r3;
	r3 ^= $r2;
	r1 ^= $r0;
	r0 ^= $r4;
	r4 |= $r1;
	r1 ^= $r3;
	r2 |= $r0;
	r2 &= $r4;
	r0 ^= $r1;
	r1 &= $r2;
	r1 ^= $r0;
	r0 &= $r2;
	r0 ^= $r4;
}

private function S2f(&$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r0;
	r0 &= $r2;
	r0 ^= $r3;
	r2 ^= $r1;
	r2 ^= $r0;
	r3 |= $r4;
	r3 ^= $r1;
	r4 ^= $r2;
	r1 = $r3;
	r3 |= $r4;
	r3 ^= $r0;
	r0 &= $r1;
	r4 ^= $r0;
	r1 ^= $r3;
	r1 ^= $r4;
	r4 = ~$r4;
}

private function S3f(&$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r0;
	r0 |= $r3;
	r3 ^= $r1;
	r1 &= $r4;
	r4 ^= $r2;
	r2 ^= $r3;
	r3 &= $r0;
	r4 |= $r1;
	r3 ^= $r4;
	r0 ^= $r1;
	r4 &= $r0;
	r1 ^= $r3;
	r4 ^= $r2;
	r1 |= $r0;
	r1 ^= $r2;
	r0 ^= $r3;
	r2 = $r1;
	r1 |= $r3;
	r1 ^= $r0;
}

private function S4f(&$r0, &$r1, &$r2, &$r3, &$r4)
{
	r1 ^= $r3;
	r3 = ~$r3;
	r2 ^= $r3;
	r3 ^= $r0;
	r4 = $r1;
	r1 &= $r3;
	r1 ^= $r2;
	r4 ^= $r3;
	r0 ^= $r4;
	r2 &= $r4;
	r2 ^= $r0;
	r0 &= $r1;
	r3 ^= $r0;
	r4 |= $r1;
	r4 ^= $r0;
	r0 |= $r3;
	r0 ^= $r2;
	r2 &= $r3;
	r0 = ~$r0;
	r4 ^= $r2;
}

private function S5f(&$r0, &$r1, &$r2, &$r3, &$r4)
{
	r0 ^= $r1;
	r1 ^= $r3;
	r3 = ~$r3;
	r4 = $r1;
	r1 &= $r0;
	r2 ^= $r3;
	r1 ^= $r2;
	r2 |= $r4;
	r4 ^= $r3;
	r3 &= $r1;
	r3 ^= $r0;
	r4 ^= $r1;
	r4 ^= $r2;
	r2 ^= $r0;
	r0 &= $r3;
	r2 = ~$r2;
	r0 ^= $r4;
	r4 |= $r3;
	r2 ^= $r4;
}

private function S6f(&$r0, &$r1, &$r2, &$r3, &$r4)
{
	r2 = ~$r2;
	r4 = $r3;
	r3 &= $r0;
	r0 ^= $r4;
	r3 ^= $r2;
	r2 |= $r4;
	r1 ^= $r3;
	r2 ^= $r0;
	r0 |= $r1;
	r2 ^= $r1;
	r4 ^= $r0;
	r0 |= $r3;
	r0 ^= $r2;
	r4 ^= $r3;
	r4 ^= $r0;
	r3 = ~$r3;
	r2 &= $r4;
	r2 ^= $r3;
}

private function S7f(&$r0, &$r1, &$r2, &$r3, &$r4)
{
	r4 = $r2;
	r2 &= $r1;
	r2 ^= $r3;
	r3 &= $r1;
	r4 ^= $r2;
	r2 ^= $r1;
	r1 ^= $r0;
	r0 |= $r4;
	r0 ^= $r2;
	r3 ^= $r1;
	r2 ^= $r3;
	r3 &= $r0;
	r3 ^= $r4;
	r4 ^= $r2;
	r2 &= $r0;
	r4 = ~$r4;
	r2 ^= $r4;
	r4 &= $r0;
	r1 ^= $r3;
	r4 ^= $r1;
}

private function KXf(&$k, $r, &$a, &$b, &$c, &$d)
{
	a ^= $k[$r];
	b ^= $k[$r + 1];
	c ^= $k[$r + 2];
	d ^= $k[$r + 3];
}

private function LK($r, &$a, &$b, &$c, &$d, &$e)
{
	a = $k[(8-$r)*4 + 0];
	b = $k[(8-$r)*4 + 1];
	c = $k[(8-$r)*4 + 2];
	d = $k[(8-$r)*4 + 3];
}

private function SK($r, $a, $b, $c, $d, $e)
{
	k[(8-$r)*4 + 4] = $a;
	k[(8-$r)*4 + 5] = $b;
	k[(8-$r)*4 + 6] = $c;
	k[(8-$r)*4 + 7] = $d;
}

private function LKf($k, $r, &$a, &$b, &$c, &$d)
{
	a = $k[$r];
	b = $k[$r + 1];
	c = $k[$r + 2];
	d = $k[$r + 3];
}

private function SKf(&$k, $r, $a, $b, $c, $d)
{
	k[$r + 4] = $a;
	k[$r + 5] = $b;
	k[$r + 6] = $c;
	k[$r + 7] = $d;
}

private function LTf(&$a, &$b, &$c, &$d)
{
	a = rotlFixed($a, 13);
	c = rotlFixed($c, 3);
	d = rotlFixed($d ^ $c ^ ($a << 3), 7);
	b = rotlFixed($b ^ $a ^ $c, 1);
	a = rotlFixed($a ^ $b ^ $d, 5);
	c = rotlFixed($c ^ $d ^ ($b << 7), 22);
}

private function ILTf(&$a, &$b, &$c, &$d)
{
	c = rotrFixed($c, 22);
	a = rotrFixed($a, 5);
	c ^= $d ^ ($b << 7);
	a ^= $b ^ $d;
	b = rotrFixed($b, 1);
	d = rotrFixed($d, 7) ^ $c ^ ($a << 3);
	b ^= $a ^ $c;
	c = rotrFixed($c, 3);
	a = rotrFixed($a, 13);
}

public function serset_key(&$userKey, $keylen, $ks)
{
	var a;
	var b;
	var c;
	var d;
	var e;
	var k=&$ks;
	var t;
	var i;

	for(i=0; $i <$keylen/32; $i++)
	{
		$k[$i]=$userKey[$i];
	}

	if(keylen < 32)
	{
		$k[$keylen/4] |= 1 << ($keylen%4)*8;
	}
	$k=$k+8;//revisar
	$t=$k[-1];
	for(i=0; $i<132; $i++)
	{
		$k[$i] = $t = rotlFixed($k[$i-8] ^ $k[$i-5] ^ $k[$i-3] ^ $t ^ 0x9e3779b9 ^ $i, 11);
	}
	$k=$k-20;//revisar
	for(i=0; $i<4; $i++)
	{
		LKf($k, 20, $a, $e, $b, $d);
		S3f($a, $e, $b, $d, $c);
		SKf($k, 16, $e, $b, $d, $c);
		LKf($k, 24, $c, $b, $a, $e);
		S2f($c, $b, $a, $e, $d);
		SKf($k, 20, $a, $e, $b, $d);
		LKf($k, 28, $b, $e, $c, $a);
		S1f($b, $e, $c, $a, $d);
		SKf($k, 24, $c, $b, $a, $e);
		LKf($k, 32, $a, $b, $c, $d);
		S0f($a, $b, $c, $d, $e);
		SKf($k, 28, $b, $e, $c, $a);
		$k =$k + 8*4;//revisar
		LKf ($k,  4, $a, $c, $d, $b);
		S7f ($a, $c, $d, $b, $e);
		SKf ($k,  0, $d, $e, $b, $a);
		LKf ($k,  8, $a, $c, $b, $e);
		S6f ($a, $c, $b, $e, $d);
		SKf ($k,  4, $a, $c, $d, $b);
		LKf ($k, 12, $b, $a, $e, $c);
		S5f ($b, $a, $e, $c, $d);
		SKf ($k,  8, $a, $c, $b, $e);
		LKf ($k, 16, $e, $b, $d, $c);
		S4f ($e, $b, $d, $c, $a);
		SKf ($k, 12, $b, $a, $e, $c);
	}
	LKf ($k, 20, $a, $e, $b, $d);
	S3f ($a, $e, $b, $d, $c);
	SKf ($k, 16, $e, $b, $d, $c);
}

public function serencrypt(&$inBlock, &$outBlock, $ks)
{
	$a; $b; $c; $d; $e; $i=1;
	$k=&$ks;
	$in=&$inBlock;
	$out=&$outBlock;
	do{
		KXf ($k,  0, $a, $b, $c, $d);
		S0f ($a, $b, $c, $d, $e);
		LTf ($b, $e, $c, $a);
		KXf ($k,  4, $b, $e, $c, $a);
		S1f ($b, $e, $c, $a, $d);
		LTf ($c, $b, $a, $e);
		KXf ($k,  8, $c, $b, $a, $e);
		S2f ($c, $b, $a, $e, $d);
		LTf ($a, $e, $b, $d);
		KXf ($k, 12, $a, $e, $b, $d);
		S3f ($a, $e, $b, $d, $c);
		LTf ($e, $b, $d, $c);
		KXf ($k, 16, $e, $b, $d, $c);
		S4f ($e, $b, $d, $c, $a);
		LTf ($b, $a, $e, $c);
		KXf ($k, 20, $b, $a, $e, $c);
		S5f ($b, $a, $e, $c, $d);
		LTf ($a, $c, $b, $e);
		KXf ($k, 24, $a, $c, $b, $e);
		S6f ($a, $c, $b, $e, $d);
		LTf ($a, $c, $d, $b);
		KXf ($k, 28, $a, $c, $d, $b);
		S7f ($a, $c, $d, $b, $e);
		if ($i == 4)
		{
			break;//revisar
		}
		++$i;
		$c = $b;
		$b = $e;
		$e = $d;
		$d = $a;
		$a = $e;
		$k+=32;
		LTf ($a,$b,$c,$d);
	}while(1);//revisar
	KXf ($k, 32, $d, $e, $b, $a);

	$out[0] = $d;
	$out[1] = $e;
	$out[2] = $b;
	$out[3] = $a;
}

public function serdecrypt(&$inBlock, &$outBlock, $ks)
{
	$a; $b; $c; $d; $e; $i=4;
	$k=&$ks;
	$in=&$inBlock;
	$out=&$outBlock;
	$a = $in[0];
	$b = $in[1];
	$c = $in[2];
	$d = $in[3];
	KXf ($k, 32, $a, $b, $c, $d);
	//goto start;//revisar
	do
	{
		$c = $b;
		$b = $d;
		$d = $e;
		$k -= 32;
		ILT(8,$a,$b,$c,$d,$e);
		start: //revisar
		I7(8,$a,$b,$c,$d,$e);
		KXf ($k, 28, $d, $a, $b, $e);
		ILTf ($d, $a, $b, $e);
		I6(7,$d,$a,$b,$e,$c);
		KXf ($k, 24, $a, $b, $c, $e);
		ILTf ($a, $b, $c, $e);
		I5(6,$a,$b,$c,$e,$d);
		KXf ($k, 20, $b, $d, $e, $c);
		ILTf ($b, $d, $e, $c);
		I4(5,$b,$d,$e,$c,$a);
		KXf ($k, 16, $b, $c, $e, $a);
		ILTf ($b, $c, $e, $a);
		I3(4,$b,$c,$e,$a,$d);
		KXf ($k, 12, $a, $b, $e, $c);
		ILTf ($a, $b, $e, $c);
		I2(3,$a,$b,$e,$c,$d);
		KXf ($k, 8,  $b, $d, $e, $c);
		ILTf ($b, $d, $e, $c);
		 I1(2,$b,$d,$e,$c,$a);
		KXf ($k, 4,  $a, $b, $c, $e);
		ILTf ($a, $b, $c, $e);
		I0(1,$a,$b,$c,$e,$d);
		KXf ($k, 0,  $a, $d, $b, $e);
	}while(--$i !=0);
	$out[0] = $a;
	$out[1] = $d;
	$out[2] = $b;
	$out[3] = $e;
}