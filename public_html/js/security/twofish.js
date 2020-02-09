var ror4=[0, 8, 1, 9, 2, 10, 3, 11, 4, 12, 5, 13, 6, 14, 7, 15];
var ashx=[0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 5, 14, 7];
var qt0=[[8, 1, 7, 13, 6, 15, 3, 2, 0, 11, 5, 9, 14, 12, 10, 4],[2, 8, 11, 13, 15, 7, 6, 14, 3, 1, 9, 4, 0, 10, 12, 5]];
var qt1=[[14, 12, 11, 8, 1, 2, 3, 5, 15, 4, 10, 6, 7, 0, 9, 13],[1, 14, 2, 11, 4, 12, 3, 7, 6, 13, 10, 5, 15, 9, 0, 8]];
var qt2=[[11, 10, 5, 14, 6, 13, 9, 0, 12, 8, 15, 3, 2, 4, 7, 1],[4, 12, 7, 5, 1, 6, 9, 10, 0, 14, 13, 8, 2, 11, 3, 15]];
var qt3=[[13, 7, 15, 4, 1, 2, 6, 14, 9, 11, 3, 0, 8, 5, 12, 10],[11, 9, 5, 1, 12, 3, 13, 14, 6, 4, 7, 15, 2, 0, 8, 10]];
var qt_gen = 0;
var q_tab=[];
var mt_gen = 0;
var G_M = 0x0169;
var m_tab=[];
var tab_5b = [ 0, (0x0169 >> 2), (0x0169 >> 1), ((0x0169 >> 1) ^ (0x0169 >> 2)) ];
var tab_ef = [ 0, ((0x0169 >> 1) ^ (0x0169 >> 2)), (0x0169 >> 1), (0x0169 >> 2) ];
var G_MOD=0x0000014d;
var sb=[];

private function SWAP_32(x)
{
	return ((x << 24) | (($x & 0xff00) << 8) | (($x & 0x00ff0000) >> 8) | ($x >> 24));
}

private function ffm_01(x)
{
	return (x);
}

private function ffm_5b(x)
{
	return ((x) ^ (($x) >> 2) ^ tab_5b[($x) & 3]);
}

private function ffm_ef(x)
{
	return ((x) ^ (($x) >> 1) ^ (($x) >> 2) ^ tab_ef[($x) & 3]);
}

private function extract_byte($x,$n)
{
	return ((x) >> (8 * $n));
}

private function rotr(x, $n)
{
	return (((x)>>($n))|(($x)<<(32-($n))));
}

private function rotl(x, $n)
{
	return (((x)<<($n))|(($x)>>(32-($n))));
}

private function q20(x)  
{
	return q_tab[0][q_tab[0][$x] ^ extract_byte($key[1],0)] ^ extract_byte($key[0],0);
}

private function q21(x)  
{
	return q_tab[0][q_tab[1][$x] ^ extract_byte($key[1],1)] ^ extract_byte($key[0],1);
}

private function q22(x)  
{
	return q_tab[1][q_tab[0][$x] ^ extract_byte($key[1],2)] ^ extract_byte($key[0],2);
}

private function q23($x)  
{
	return q_tab[1][q_tab[1][$x] ^ extract_byte($key[1],3)] ^ extract_byte($key[0],3);
}

private function q30($x)  
{
	return q_tab[0][q_tab[0][q_tab[1][$x] ^ extract_byte($key[2],0)] ^ extract_byte($key[1],0)] ^ extract_byte($key[0],0);
}

private function q31($x)  
{
	return q_tabtab[0][q_tab[1][q_tab[1][$x] ^ extract_byte($key[2],1)] ^ extract_byte($key[1],1)] ^ extract_byte($key[0],1);
}

private function q32($x)  
{
	return q_tab[1][q_tab[0][q_tab[0][$x] ^ extract_byte($key[2],2)] ^ extract_byte($key[1],2)] ^ extract_byte($key[0],2);
}

private function q33($x)  
{
	return q_tab[1][q_tab[1][q_tab[0][$x] ^ extract_byte($key[2],3)] ^ extract_byte($key[1],3)] ^ extract_byte($key[0],3);
}

private function q40($x)  
{
	return q_tab[0][q_tab[0][q_tab[1][q_tab[1][$x] ^ extract_byte($key[3],0)] ^ extract_byte($key[2],0)] ^ extract_byte($key[1],0)] ^ extract_byte($key[0],0);
}

private function q41($x)  
{
	return q_tab[0][q_tab[1][q_tab[1][q_tab[0][$x] ^ extract_byte($key[3],1)] ^ extract_byte($key[2],1)] ^ extract_byte($key[1],1)] ^ extract_byte($key[0],1);
}

private function q42($x)  
{
	return q_tab[1][q_tab[0][q_tab[0][q_tab[0][$x] ^ extract_byte($key[3],2)] ^ extract_byte($key[2],2)] ^ extract_byte($key[1],2)] ^ extract_byte($key[0],2);
}

private function q43($x)
{
	return q_tab[1][q_tab[1][q_tab[0][q_tab[1][$x] ^ extract_byte($key[3],3)] ^ extract_byte($key[2],3)] ^ extract_byte($key[1],3)] ^ extract_byte($key[0],3);
}

private function qp(&$n, &$x)
{
	$a0; $a1; $a2; $a3; $a4; $b0; $b1; $b2; $b3; $b4;
	$a0 = $x >> 4;
	$b0 = $x & 15;
	$a1 = $a0 ^ $b0;
	$b1 = ror4[$b0] ^ ashx[$a0];
	$a2 = qt0[$n][$a1];
	$b2 = qt1[$n][$b1];
	$a3 = $a2 ^ $b2;
	$b3 = ror4[$b2] ^ ashx[$a2];
	$a4 = qt2[$n][$a3];
	$b4 = qt3[$n][$b3];
	return (($b4 << 4) | $a4);
}

private function g0_fun($x) 
{
	//($this->m_tab[0][$this->sb[0][$this->extract_byte($x,0)]] ^ $this->m_tab[1][$this->sb[1][$this->extract_byte($x,1)]] ^ $this->m_tab[2][$this->sb[2][$this->extract_byte($x,2)]] ^ $this->m_tab[3][$sb[3][$this->extract_byte($x,3)]]);
	//return  $this->mk_tab[0 + 4*$this->extract_byte(x,0)] ^ $this->mk_tab[1 + 4*$this->extract_byte(x,1)] ^ $this->mk_tab[2 + 4*$this->extract_byte(x,2)] ^ $this->mk_tab[3 + 4*$this->extract_byte(x,3)] 
	return h_fun($instance, $x, $instance->s_key);
}

private function g1_fun($x)
{
	// ($this->m_tab[0][$this->sb[0][$this->extract_byte($x,3)]] ^ $this->m_tab[1][$this->sb[1][$this->extract_byte($x,0)]]^ $this->m_tab[2][$this->sb[2][$this->extract_byte($x,1)]] ^ $this->m_tab[3][$sb[3][$this->extract_byte($x,2)]]);
	//return  mk_tab[0 + 4*extract_byte(x,3)] ^ mk_tab[1 + 4*extract_byte(x,0)] ^ mk_tab[2 + 4*extract_byte(x,1)] ^ mk_tab[3 + 4*extract_byte(x,2)] 
	return h_fun($instance, rotl($x,8), $instance->s_key);
}

private function gen_qtab()
{
	for($i = 0; $i < 256; ++$i)
	{
		q_tab[0][$i] = qp(0, $i);
		q_tab[1][$i] = qp(1, $i);
	}
}

private function gen_mtab()
{
	$f01; $f5b; $fef;
	for($i = 0; $i < 256; ++$i)
	{
		$f01 = q_tab[1][$i];
		$f5b = ffm_5b($f01);
		$fef = ffm_ef($f01);
		m_tab[0][$i] = $f01 + ($f5b << 8) + ($fef << 16) + ($fef << 24);
		m_tab[2][$i] = $f5b + ($fef << 8) + ($f01 << 16) + ($fef << 24);

		$f01 = q_tab[0][$i];
		$f5b = ffm_5b($f01);
		$fef = ffm_ef($f01);
		m_tab[1][$i] = $fef + ($fef << 8) + ($f5b << 16) + ($f01 << 24);
		m_tab[3][$i] = $f5b + ($f01 << 8) + ($fef << 16) + ($f5b << 24);
	}
}

private function h_fun(&$instance, &$x, &$key)
{
	$b0; $b1; $b2; $b3;
	$b0 = extract_byte($x, 0);
	$b1 = extract_byte($x, 1);
	$b2 = extract_byte($x, 2);
	$b3 = extract_byte($x, 3);

	switch($instance)
	{
		case 4:
			$b0 = q_tab[1][$b0] ^ extract_byte($key[3],0);
			$b1 = q_tab[0][$b1] ^ extract_byte($key[3],1);
			$b2 = q_tab[0][$b2] ^ extract_byte($key[3],2);
			$b3 = q_tab[1][$b3] ^ extract_byte($key[3],3);
		break;

		case 3:
			$b0 = q_tab[1][$b0] ^ extract_byte($key[2],0);
			$b1 = q_tab[1][$b1] ^ extract_byte($key[2],1);
			$b2 = q_tab[0][$b2] ^ extract_byte($key[2],2);
			$b3 = q_tab[0][$b3] ^ extract_byte($key[2],3);
		break;

		case 2:
			$b0 = q_tab[0][(q_tab[0][$b0] ^ extract_byte($key[1],0))] ^ extract_byte($key[0],0);
			$b1 = q_tab[0][(q_tab[1][$b1] ^ extract_byte($key[1],1))] ^ extract_byte($key[0],1);
			$b2 = q_tab[1][(q_tab[0][$b2] ^ extract_byte($key[1],2))] ^ extract_byte($key[0],2);
			$b3 = q_tab[1][(q_tab[1][$b3] ^ extract_byte($key[1],3))] ^ extract_byte($key[0],3);
		break;
	}

	$b0 = q_tab[1][$b0];
	$b1 = q_tab[0][$b1];
	$b2 = q_tab[1][$b2];
	$b3 = q_tab[0][$b3];

	$m5b_b0 = ffm_5b($b0);
	$m5b_b1 = ffm_5b($b1);
	$m5b_b2 = ffm_5b($b2);
	$m5b_b3 = ffm_5b($b3);
	$mef_b0 = ffm_ef($b0);
	$mef_b1 = ffm_ef($b1);
	$mef_b2 = ffm_ef($b2);
	$mef_b3 = ffm_ef($b3);
	$b0 ^= $mef_b1 ^ $m5b_b2 ^ $m5b_b3;
	$b3 ^= $m5b_b0 ^ $mef_b1 ^ $mef_b2;
	$b2 ^= $mef_b0 ^ $m5b_b1 ^ $mef_b3;
	$b1 ^= $mef_b0 ^ $mef_b2 ^ $m5b_b3;

	return $b0 | ($b3 << 8) | ($b2 << 16) | ($b1 << 24);
}

private function gen_mk_tab(&$instance, $key)
{
	var i;
	$by;
	$mk_tab = &$instance->mk_tab;
	switch($instance)
	{
		case 2:
		for(i=0; i<256; ++i)
		{
			$by=i;
			sb[0][$i] = q20($by);
			sb[1][$i] = q21($by);
			sb[2][$i] = q22($by);
			sb[3][$i] = q23($by);
		}
		break;

		case 3:
		for(i=0; i<256; ++i)
		{
			$by=i;
			sb[0][$i] = q30($by);
			sb[1][$i] = q31($by);
			sb[2][$i] = q32($by);
			sb[3][$i] = q33($by);
		}
		break;

		case 4:
		for(i=0; i<256; ++i)
		{
			$by=$i;
			sb[0][$i] = q40($by);
			sb[1][$i] = q41($by);
			sb[2][$i] = q42($by);
			sb[3][$i] = q43($by);
		}
		break;
	}
}

private function mds_rem($p0, $p1)
{
	$i; $u; $t;
	for($i=0; $i<8; ++$i)
	{
		$t = $p1 >> 24;
		$p1 = ($p1 << 8) | ($p0 >> 24);
		$p0 <<= 8;
		$u = ($t << 1);
		if($t & 0x80)
		{
			$u ^= G_MOD;
		}
		$p1 ^= $t ^ ($u << 16);
		$u ^= ($t >> 1);
		if($t & 0x01)
		{
			$u ^= G_MOD >> 1;
		}
		$p1 ^= ($u << 24) | ($u << 8);
	}
	return $p1;
}

private function i_rnd($i)
{
	$t1 = g1_fun($blk[1]);
	$t0 = g0_fun($blk[0]);
	$blk[2] = rotl($blk[2], 1) ^ ($t0 + $t1 + $l_key[4 * ($i) + 10]);
	$blk[3] = rotr($blk[3] ^ ($t0 + 2 * $t1 + $l_key[4 * ($i) + 11]), 1);

	$t1 = g1_fun($blk[3]);
	$t0 = g0_fun($blk[2]);
	$blk[0] = rotl($blk[0], 1) ^ ($t0 + $t1 + $l_key[4 * ($i) +  8]);
	$blk[1] = rotr($blk[1] ^ ($t0 + 2 * $t1 + $l_key[4 * ($i) +  9]), 1);
}

private function f_rnd($i)
{
	$t1 = g1_fun($blk[1]);
	$t0 = g0_fun($blk[0]);
	$blk[2] = rotr($blk[2] ^ ($t0 + $t1 + $l_key[4 * ($i) + 8]), 1);
	$blk[3] = rotl($blk[3], 1) ^ ($t0 + 2 * $t1 + $l_key[4 * ($i) + 9]);

	$t1 = g1_fun($blk[3]);
	$t0 = g0_fun($blk[2]);
	$blk[0] = rotr($blk[0] ^ ($t0 + $t1 + $l_key[4 * ($i) + 10]), 1);
	$blk[1] = rotl($blk[1], 1) ^ ($t0 + 2 * $t1 + $l_key[4 * ($i) + 11]);
}

public function twoset_key(&$instance, &$in_key, &$key_len)
{
	$i; $a; $b;
	$me_key=[];
	$mo_key=[];
	$l_key=&$instance->l_key;
	$s_key=&$instance->s_key;

	//#ifdef Q_TABLES
	if(!$qt_gen)
	{
		gen_qtab();
		$qt_gen = 1;
	}
	//#endif

	//#ifdef M_TABLE
	if(!$mt_gen)
	{
		gen_mtab();
		$mt_gen = 1;
	}
	//#endif

	for($i = 0; $i < $instance->k_len; ++$i)
	{
		$a = SWAP_32($in_key[$i + $i]);
		$me_key[$i] = $a;
		$b = SWAP_32($in_key[$i + $i + 1]);
		$mo_key[$i] = $b;
		$s_key[$instance->k_len - $i - 1] = mds_rem($a, $b);
	}

	for($i=0; $i<40; $i +=2)
	{
		$a = 0x01010101 * $i;
		$b = $a + 0x01010101;

		$a = h_fun($instance, $a, $me_key);
		$b = rotl(h_fun($instance, $b, $mo_key), 8);

		$l_key[$i] = $a + $b;
		$l_key[$i + 1] = rotl($a + 2 * $b, 9);
	}
	//#ifdef MK_TABLE
	gen_mk_tab($instance, $s_key);
	//#endif

	return $l_key;
}

public function twofish_encrypt(&$instance, &$in_blk, $out_blk)
{
	$t0; $t1;
	$blk=[];
	$l_key=&$instance->l_key;
	$mk_tab=&$instance->mk_tab;
	$blk[0] = SWAP_32($in_blk[0]) ^ $l_key[0];
	$blk[1] = SWAP_32($in_blk[1]) ^ $l_key[1];
	$blk[2] = SWAP_32($in_blk[2]) ^ $l_key[2];
	$blk[3] = SWAP_32($in_blk[3]) ^ $l_key[3];
	for($i=0;$i<=7;++$i)
	{
		$t1 = g1_fun($blk[1]);
		$t0 = g0_fun($blk[0]);
		$blk[2] = rotr($blk[2] ^ ($t0 + $t1 + $l_key[4 * ($i) + 8]), 1);
		$blk[3] = rotl($blk[3], 1) ^ ($t0 + 2 * $t1 + $l_key[4 * ($i) + 9]);

		$t1 = g1_fun($blk[3]);
		$t0 = g0_fun($blk[2]);
		$blk[0] = rotr($blk[0] ^ ($t0 + $t1 + $l_key[4 * ($i) + 10]), 1);
		$blk[1] = rotl($blk[1], 1) ^ ($t0 + 2 * $t1 + $l_key[4 * ($i) + 11]);
	}
	$out_blk[0] = SWAP_32($blk[2] ^ $l_key[4]);
	$out_blk[1] = SWAP_32($blk[3] ^ $l_key[5]);
	$out_blk[2] = SWAP_32($blk[0] ^ $l_key[6]);
	$out_blk[3] = SWAP_32($blk[1] ^ $l_key[7]);
	return $out_blk;
}

public function twofish_decrypt(&$instance, &$in_blk, $out_blk)
{
	$t0; $t1;
	$blk=[];
	$l_key=&$instance->l_key;
	$mk_tab=&$instance->mk_tab;
	$blk[0] = SWAP_32($in_blk[0]) ^ $l_key[4];
	$blk[1] = SWAP_32($in_blk[1]) ^ $l_key[5];
	$blk[2] = SWAP_32($in_blk[2]) ^ $l_key[6];
	$blk[3] = SWAP_32($in_blk[3]) ^ $l_key[7];
	for($i=7;$i>=0;--$i)
	{
		$t1 = g1_fun($blk[1]);
		$t0 = g0_fun($blk[0]);
		$blk[2] = rotl($blk[2], 1) ^ ($t0 + $t1 + $l_key[4 * ($i) + 10]);
		$blk[3] = rotr($blk[3] ^ ($t0 + 2 * $t1 + $l_key[4 * ($i) + 11]), 1);

		$t1 = g1_fun($blk[3]);
		$t0 = g0_fun($blk[2]);
		$blk[0] = rotl($blk[0], 1) ^ ($t0 + $t1 + $l_key[4 * ($i) +  8]);
		$blk[1] = rotr(blk[1] ^ ($t0 + 2 * $t1 + $l_key[4 * ($i) +  9]), 1);
	}
	$out_blk[0] = SWAP_32($blk[2] ^ $l_key[0]);
	$out_blk[1] = SWAP_32($blk[3] ^ $l_key[1]);
	$out_blk[2] = SWAP_32($blk[0] ^ $l_key[2]);
	$out_blk[3] = SWAP_32($blk[1] ^ $l_key[3]);
	return $out_blk;
}