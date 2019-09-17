var fact = 10**6;

function reordenar(result, i)
{
	result[i+1] = result[i+1]+(int)(result[i]/fact);
	result[i] = result[i]+(result[i]%fact);
	return result;
}

function suma(x, y)
{
	var result = [];
	//suma de polinomios
	var tamx = x.length;
	var tamy = y.length;
	var tam = tamy;
	if(tamx<= tamy)
	{
		tam = tamx;
	}
	for(var i=0; i<tam; i++)
	{
		result[i] = result[i]+x[i]+y[i];
		if(result[i]>fact)
		{
			result = reordenar(result, i);
		}
	}
	return result;
}

function resta(x, y)
{
	var result = [];
	//restas de polinomios
	var tamx = x.length;
	var tamy = y.length;
	var tam = tamy;
	if(tamx<= tamy)
	{
		tam = tamx;
	}
	for(var i=0; i< tam; i++ )
	{
		result[i] = result[i]+x[i]-y[i];
		if(result[i]>fact)
		{
			result = reordenar(result, i);
		}
	}
	return result;
}

function multiplicacion(x, y)
{
	var result = [];
	var tamx = x.length;
	var tamy = y.length;
	//multiplicacion de polinomios
	for(var i=0; i< tamx; i++ )
	{
		for(var j=0; j< tamy; j++ )
		{
			result[i] = result[i]+x[i]*y[j];
			if(result[i]>fact)
			{
				result = reordenar(result, i);
			}
		}
	}
	return result;
}

function division(x, y)//acelerar
{
	var result = [];
	var tamx = x.length;
	var tamy = y.length;
	var tamr = tamx/tamy;
	return result;
}

function exponente(x, y)
{
	var result = [];
	var tam = x.length;
	//volver a y binario y hacer los cuadrados unicamente
	//usar la multiplicacion cada vez
	for(var i=0; y==0 || y==1; i++)
	{
		exponent[i] = (int)(y/2);
		exponent[i+1] = y%2;
		y = (int)(y/2);
	}
	var tam2 = exponent.length;
	var sumandos[0] = x;
	for(i=1; i<tam2; i++)
	{
		sumandos[i] = multiplicacion(sumandos[i-1],sumandos[i-1]);
		if(exponent[i]==1)
		{
			result = suma(result,sumandos[i]);
		}
	}
	return result;
}

function modulo(x, y)
{
	var result = [];
	result = resta(x,division(x,y));
	return result;
}