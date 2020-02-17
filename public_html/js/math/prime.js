"use strict";
function primos(x, y)
{
	var valor=1;
	var primos=[2,3,5,7,11,13,17,19,23,29];
	var tam=y;
	var size=1;
	var coprimo=[];

	coprimo[0]=1;
	var i;
	for(i=0; i<tam; i++)
	{
		size=size*(primos[i]-1);
		valor=valor*primos[i];
	}
	i=primos[tam-1]+2;
	var cont=1;
	do
	{
			var band=true;
			for(let j=0; j<tam && band && (i>=(primos[j]*primos[j])); j++)
			{
				if(i%primos[j]==0)
				{
					band=false;
				}
			}
			if(band)
			{
				coprimo[cont]=i;
				cont++;
			}
			i=i+2;//hacer mas eficiente
	}while(cont<size);

	var k=0;
	i=tam;
	do
	{
		for(let j=0; j<size && i<=x; j++)
		{
			var band=true;
			var num=valor*k+coprimo[j];
			for(let l=0; l<i && band && (num>=(primos[l]*primos[l])); l++)
			{
				if(num%primos[l]==0)
				{
					band=false;
				}
			}
			if(band && num>1)
			{
				primos[i]=num;
				i++;
			}
		}
		k++;
	}while(i<=x);
	return primos[x];
}