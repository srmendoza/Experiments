<?php

class elliptic
{

}

function elliptic()
{
	
}

function elliptic_sum($p, $q)
{
	$r = [];
	$lambda = ($q['y']-$p['y'])/($q['x']-$p['x']);
	$r['x'] = $lambda*$lambda-$p['x']-$q['x'];
	$r['y'] = $lambda*($p['x']-$r['x'])-$p['y'];
}


function elliptic_double($p)
{
	$r = [];
	$lambda = (3*$p['x']*$p['x']+$a)/(2*$p['y']);
	$r['x'] = $lambda*$lambda-$p['x']-$q['x'];
	$r['y'] = $lambda*($p['x']-$r['x'])-$p['y'];
}

function elliptic_multiply($p, $n)
{
	for($i=0; $i<$n; $i++)
	{
		
	}
	
	}
	/*
 N ? P
  Q ? 0
  for i from 0 to m do
	 if di = 1 then
		 Q ? point_add(Q, N)
	 N ? point_double(N)
  return Q
*/


function hypereilliptic()
{
	
}
?>>