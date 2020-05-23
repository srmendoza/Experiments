<?php
declare(strict_types=1);

class matriz
{
	private function identidad($num)
	{
		$res = [];
		for($i=0; $i<$num; $i++)
		{
			$res[$i][$i] = 1;
		}
		return $res;
	}

	public function sumar($a, $b)
	{
		$matr = [][];
		for($i = 0; $i < $m; $i++)
		{
			for($j = 0; $j < $m; $j++)
			{
				$matr[$i][$j] = $a[$i][$j] + $b[$i][$j];
			}
		}
		return $matr;
	}

	public function girar($mat, $m, $op)//revisar
	{
		$mat2 = [];
		switch($op)
		{
			case 1:
			for($i = 0; $i < $m; $i++)
			{
				for($j = 0; $j < $m; $j++)
				{
					$mat2[modulo(-$j, $m)][modulo($i, $m)] = $mat[$i][$j];
				}
			}
			break;

			case 2:
			for($i = 0; $i < $m; $i++)
			{
				for($j = 0; $j < $m; $j++)
				{
					$mat2[modulo(-$i, $m)][modulo(-$j, $m)] = $mat[$i][$j];
				}
			}
			break;

			case 3:
			for($i = 0; $i < $m; $i++)
			{
				for($j = 0; $j < $m; $j++)
				{
					$mat2[modulo($j, $m)][modulo(-$i, $m)] = $mat[$i][$j];
				}
			}
			break;
		}
		return $mat2;
	}

	public function cuadrado($x, &$t, $s)//revisar
	{
		if($x != 0)
		{
			$number = 0;
			do
			{
				$t++;
				$number = $number + ($x % (($s**$t)));
			}while($number <= $x);
			$base4 = [];
			$num = $x;
			for($j = ($t - 1); $j >= 0; $j--)
			{
				$base4[$j] = (int)($num % $s);
				$num = $num / $s;
				if($num < $s)
				{
					$base4[$j - 1] = (int)$num;
					$j = -1;
				}
			}
			return ($base4);
		}
		else
		{
			$num = [0];
			return $num;
		}
	}

	public function scalar($mat1, $num)//revisar
	{
		$matrizr = [][];
		for($i = 0; $i < $m; $i++)
		{
			for($j = 0; $j < $m; $j++)
			{
				$matrizr[$i][$j] = $mat1[$i][$j] * $num;
			}
		}
		return $matrizr;
	}

	public function multiplicar($mat1, $mat2)//revisar
	{
		$matrizr = [][];
		for($i = 0; $i < $m; $i++)
		{
			for($j = 0; $j < $m; $j++)
			{
				for($k = 0; $k < $m; $k++)
				{
					$matrizr[$i][$j] = $matrizr[$i][$j] + ($mat1[$i][$k] * $mat2[$k][$j]);
				}
			}
		}
		return $matrizr;
	}

	public function multimatcuad($mat1, $mat2, $m)
	{
		$matrizr = [][];
		for($i = 0; $i < $m; $i++)
		{
			for($j = 0; $j < $m; $j++)
			{
				for($k = 0; $k < $m; $k++)
				{
					$matrizr[$i][$j] = $matrizr[$i][$j] + ($mat1[$i][$k] * $mat2[$k][$j]);
				}
			}
		}
		return $matrizr;
	}

	public function detetminante($mat)
	{
		$num=0;
		$tam = count($mat);
		if($tam > 2)
		{
			for($i=0; $i<$tam; $i++)
			{
				$sub_mat = [];
				$contx = 0;
				$conty = 0;
				for($j=0; $j<$tam; $j++)
				{
					if($j != $i)
					{
						for($k=0; $k<$tam; $k++)
						{
							if($k != $i)
							{
								$sub_mat[$contx][$conty] = $mat[$j][$k];
								$conty++;
							}
						}
						$conty = 0;
						$contx++;
					}
				}
				$num = $num + $mat[0][$i] * determinante($sub_mat);
			}
		}
		else
		{
			if($tam === 1)
			{
				$num = $mat[0][0];
			}
			else
			{
				$num = $mat[0][0]*$mat[1][1]-$mat[0][1]*$mat[1][0];
			}
		}
		return $num;
	}

	public function transpuesta($mat)
	{
		$tam = count($mat);
		for($i=0; $i<$tam; $i++)
		{

		}
	}

	public function inversa($mat)
	{
		$tam = count($mat);
		for($i=0; $i<$tam; $i++)
		{

		}
	}

	public function gauss_jordan($mat)
	{

	}

	public function exponente($mat, int $y)
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
				$sumandos[$i+1] =$this->multimatcuad($sumandos[$i], $sumandos[$i]);
				if(1 === $exponent[$i])
				{
					$result=$this->multimatcuad($result, $sumandos[$i]);
				}
			}
			return $result;
	}
}

class matrizcube
{
	function multiplicar($mat1, $mat2, $mat3, $m)
	{
		$matrizr = [][][];
		for($i = 0; $i < $m; $i++)
		{
			for($j = 0; $j < $m; $j++)
			{
				for($k = 0; $k < $m; $k++)
				{
					for($l = 0; $l < $m; $l++)
					{
						$matrizr[$i][$j][$k] = $matrizr[$i][$j][$k] + ($mat1[$i][$j][$l] * $mat2[$i][$l][$k] * $mat3[$l][$j][$k]);
					}
				}
			}
		}
		return $matrizr;
	}
}

class hypermatrix
{
	function multiplicar($mat1, $mat2, $mat3, $mat4, $m)
	{
		$matrizr = [][][][];
		for($i = 0; $i < $m; $i++)
		{
			for($j = 0; $j < $m; $j++)
			{
				for($k = 0; $k < $m; $k++)
				{
					for($l = 0; $l < $m; $l++)
					{
						for($h = 0; $h < $m; $h++)
						{
							$matrizr[$i][$j][$k][$l] = $matrizr[$i][$j][$k][$l] + ($mat1[$i][$j][$k][$h] * $mat2[$i][$j][$h][$l] * $mat3[$i][$h][$k][$l] * $mat4[$h][$j][$k][$l]);
						}
					}
				}
			}
		}
		return $matrizr;
	}
}
?>