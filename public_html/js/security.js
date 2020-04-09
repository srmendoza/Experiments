function salt(size)
{
	var code="";
	var num=size*32;
	var rand=rango(1,num,1);
	revolver($rand);
	var bit=[0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x00];//0x80);
	var value=0x00;
	for(let i=0; i<num/4; i++)
	{
		var aux=rand[i]%2;
		var aux2=i%8;
		if(aux === 0)
		{
			value = value | $bit[$aux2];
		}
		if(aux2 === 0 && i!=0)
		{
			if((value>48 && value<122) && (value<57 || value>65) && (value<90 || value>97))
			{
				code=code . String.fromCharCode(value)
			}
			value=0x00;
		}
	}
	return code;
}

function rango(min, max, step)
{
	var cont=0;
	var valor=[];
	for(let i=min; i<=max; i=i+step)
	{
		valor[cont]=i;
		cont++;
	}
	return valor;
}

function revolver(vector)
{
	return valor;
}

function aleatorio(max)
{
	var rand1=rango(1,9,1);
	revolver(rand1);
	var num=rand1[0];
	var rand2=rango(1,max,1);
	revolver(rand2);
	var rand3=rango(0,9,1);
	for(let j=0; j<rand2[0]; j++)
	{
		revolver(rand3);
		num=(10*num)+rand3[0];
	}
	return num;
}