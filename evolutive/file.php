<?php
declare(strict_types=1);

class generation
{
	private $population;
	private $matingPool;
	private $generation;
	private $finished;
	private $target;
	private $mutationRate;
	public $DNA;

	public function __construct(int $inicial)
	{
		$this->generation = 0;
		$this->population = $inicial;
		$this->DNA = new dna();
	}
}

class dna
{
	public $genes;
	public $fitness;
}
?>