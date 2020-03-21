<?php
function coprime($primos, $size, &$valor,&$var)
{
	$num=[];
	$num[0]=1;
	for($i=0;$i<$size;$i++)
	{
		$var=$var*($primos[$i]-1);
		$valor=$valor*$primos[$i];
	}
	$i=$primos[$size-1]+2;
	$cont=1;
	do
	{
		$band=true;
		for($j=0;$j<$size && $band && ($i>=($primos[$j]**2));$j++)
		{
			if($i%$primos[$j]==0)
			{
				$band=false;
			}
		}
		if($band)
		{
			$num[$cont]=$i;
			$cont++;
		}
		$i=$i+2;//hacer mas eficiente
	}while($cont<$var);
	return $num;
}

function prime($x, $y)
{
	$valor=1;
	$primos=[2,3,5,7,11,13,17,19,23,29];
	$tam=$y;
	$size=1;
	$coprimo=coprime($primos, $tam, $valor, $size);
	$k=0;
	$i=$tam;
	do
	{
		for($j=0;$j<$size && $i<=$x;$j++)
		{
			$band=true;
			$num=$valor*$k+$coprimo[$j];
			for($l=0;$l<$i && $band && ($num>=($primos[$l]**2));$l++)
			{
				if($num%$primos[$l]==0)
				{
					$band=false;
				}
			}
			if($band && $num>1)
			{
				$primos[$i]=$num;
				$i++;
			}
		}
		$k++;
	}while($i<=$x);
	return $primos[$x];
}
?>