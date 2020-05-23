<?php
declare(strict_types=1);

class big_calculator
{
	const FACT = 10**3;

	public function __construct()//array $x, array $y)
	{

	}

	private function over($result, $i)
	{
		$result[$i+1] += (int)($result[$i] / self::FACT);
		$result[$i] += ($result[$i] % self::FACT);
		return $result;
	}

	private function under($result, $i)
	{
		$result[$i-1] += $result[$i];
		$result[$i+1] -= (int)($result[$i] / self::FACT);
		$result[$i] = 0;
		return $result;
	}

	public function sumar(array $x, array $y)
	{
		$result = [];
		//suma de polinomios
		$tamx = count($x);
		$tamy = count($y);
		$tam = 0;
		if($tamx<= $tamy)
		{
			$tam = $tamy;
			for($i = $tam; $i< $tamx; $i++)
			{
				$result[$i] = $x[$i];
			}
		}
		else
		{
			$tam = $tamx;
			for($i = $tam; $i< $tamy; $i++)
			{
				$result[$i] = $y[$i];
			}
		}
		for($i=0; $i< $tam; $i++)
		{
			$result[$i] += $x[$i]+$y[$i];
			if($result[$i] >= self::FACT)
			{
				$result = $this->over($result, $i);
			}
		}
		return $result;
	}

	public function restar(array $x, array $y)//revisar
	{
		$result = [];
		//restas de polinomios
		$tamx = count($x);
		$tamy = count($y);
		$tam = 0;
		if($tamx <= $tamy)
		{
			$tam = $tamy;
			for($i = $tam; $i < $tamx; $i++)
			{
				$result[$i] = $x[$i];
			}
		}
		else
		{
			$tam = $tamx;
			for($i = $tam; $i< $tamy; $i++)
			{
				$result[$i] = $y[$i];
			}
		}
		for($i=$tam -1; $i >= 0; $i--)
		{
			$result[$i] += $x[$i]-$y[$i];
			if($result[$i] >= self::FACT)
			{
				$result = $this->over($result, $i);
			}
			if($result[$i] < 0)
			{
				$result = $this->under($result, $i);
			}
		}
		return $result;
	}

	public function multiplicar(array $x, array $y)
	{
		$result=[];
		$tamx = count($x);
		$tamy = count($y);
		//multiplicacion de polinomios
		for($i=0; $i< $tamx; $i++ )
		{
			for($j=0; $j< $tamy; $j++ )
			{
				$k = $i + $j;
				$result[$k] += $x[$i]*$y[$j];
				if($result[$k]>self::FACT)
				{
					$result = $this->over($result, $k);
				}
			}
		}
		return $result;
	}

	public function dividir(array $x, array $y)//revisar
	{
		$result=[];
		$residue=[];
		$tamx = count($x);
		$tamy = count($y);
		$tam = 0;
		if($tamx<= $tamy)
		{

		}
		else
		{
			$tam = $tamx;
		}
		for($i=$tamx -1; $i >= $tamy; $i--)
		{
			for($j= 0; $j<$tamy; $j++)
			{
				$k = $i - $j;
				$result[$k] += $x[$k]/$y[$tamy - $j];
				if($result[$k] >= self::FACT)
				{
					$result = $this->over($result, $k);
				}
				if($result[$k] < 0)
				{
					$result = $this->under($result, $k);
				}
			}
		}
		return $result;
	}

	public function potenciar(array $x, int $y)//pendiente
	{
		$result = [];
		$result[0] = 1;
		//volver a y binario y hacer los cuadrados unicamente
		$exponent= [];
		for($i=0; $y!=0 || $y=!1; $i++)
		{
			$exponent[$i+1] =(int)($y/2);//$this->dividir($y,2);
			$exponent[$i]= $y%2;//$this->modular($y,2);
			$y=(int)($y/2);//$this->dividir($y,2);
		}
		$tam2=count($exponent);
		$sumandos = [];
		$sumandos[0]=$x;
		for($i=0; $i<$tam2; $i++)
		{
			$sumandos[$i+1] = $this->multiplicar($sumandos[$i], $sumandos[$i]);
			if(1 === $exponent[$i])
			{
				$result = $this->multiplicar($result, $sumandos[$i]);
			}
		}
		return $result;
	}

	public function modular(array $x, array $y)//pendiente
	{
		$result = [];

		return $result;
	}

	public function comparar(array $x, array $y)
	{
		$result = 0;
		$tamx = count($x);
		$tamy = count($y);
		$tam = 0;
		if($tamx < $tamy)
		{
			$result = -1;
		}
		else if($tamx > $tamy)
		{
			$result = 1;
		}
		else
		{
			for($i=0; $i<$tam; $i++)
			{

			}
		}

		return $result;
	}
}
?>