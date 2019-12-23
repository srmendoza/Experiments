<?php
declare(strict_types=1);

class big_calculator
{
	const FACT = 10**6;
	
	public function suma(array $x, array $y)
	{
		$result = [];
		//suma de polinomios
		$tamx = count($x);
		$tamy = count($y);
		$tam = ($tamx<= $tamy) ? $tamy : $tamx;
		for($i=0; $i< $tam; $i++)
		{
			$result[$i] = $result[$i]+$x[$i]+$y[$i];
			if($result[$i]>self::FACT)
			{
				$result[$i+1] = $result[$i+1]+(int)($result[$i]/$tam);
				$result[$i] = $result[$i]%$tam;
			}
		}
		return $result;
	}
	
	public function resta(array $x, array $y)//pendiente
	{
		$result = [];
		//restas de polinomios
		$tamx = count($x);
		$tamy = count($y);
		$tam = ($tamx<= $tamy) ? $tamy : $tamx;
		for($i=0; $i< $tam; $i++)
		{
			$result[$i]=$result[$i]+$x[$i]-$y[$i];
			if($result[$i]>self::FACT)
			{
				$result[$i+1]=$result[$i+1]+(int)($result[$i]/$tam);
				$result[$i]=$result[$i]%$tam;
			}
		}
		return $result;
	}

	public function multiplicacion(array $x, array $y)
	{
		$result=[];
		$tamx = count($x);
		$tamy = count($y);
		//multiplicacion de polinomios
		for($i=0; $i< $tamx; $i++ )
		{
			for($j=0; $j< $tamy; $j++ )
			{
				$result[$i]=$result[$i]+$x[$i]*$y[$j];
				if($result[$i]>self::FACT)
				{
					$result[$i+1]=$result[$i+1]+(int)($result[$i]/$tam);
					$result[$i]=$result[$i]%$tam;
				}
			}
		}
		return $result;
	}

	public function division(array $x, array $y)//pendiente
	{
		$result=[];
		$tam = count($x);
		$tam = count($y);
		return $result;
	}

	public function exponente(array $x, array $y)//pendiente
	{
		$result = [];
		$tam = count($x);
		//volver a y binario y hacer los cuadrados unicamente
		//usar la multiplicacion cada vez
		/*
		for($i=0; $y==0 || $y==1; $i++)
		{
			$exponent[$i]=(int)($y/2);
			$exponent[$i+1]=$y%2;
			$y=(int)($y/2);
		}
		$tam2=count($exponent);
		$sumandos[0]=$x;
		for($i=1; $i<$tam2; $i++)
		{
			$sumandos[$i]=multiplicacion($sumandos[$i-1], $sumandos[$i-1]);
			if(1 == $exponent[$])
			{
				$result=suma($result, $sumandos[$i]);
			}
		}
		*/
		return $result;
	}

	public function mod(array $x, array $y)//pendiente
	{
		$result = [];
		return $result;
	}
}
?>