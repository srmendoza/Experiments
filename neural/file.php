<?php
declare(strict_types=1);

class neuron
{
	public $bias;
	public $weights;
	public $function;

	public function __construct(int $size)
	{
//random
	}

	public function calculate(array $input)
	{
		$size = $input;
		$sum = 0;
		for($i = 0; $i< $size; $i++)
		{
			$sum += $input[$i];
		}
		$res = $this->evaluate ($sum);

	}

	public function evaluate($input)
	{

	}
}
?>