"use strict";
function picalc(x, l)
{
	x++;
	var t = [x];//double
	var p = [x];//double
	var s = 1, n = 1, r = 0, q = 0, m = 0, d = 25, b;//double
	var k = Math.Pow(10, l);
	t[0] = 3;
	t[1] = 2 * Math.Pow(10, l - 1);
	p[0] = 3;
	p[1] = 2 * Math.Pow(10, l - 1);
	var a = 0;
	p = calc(t, p, s, a, x, k, r, d, n, m, q);
	t[0] = 4; s = -1; n = 1; d = 239; r = 0; a = 0;
	var i;
	for(i = a; i < x; i++)
	{
		m = t[i] + (k * r);
		q = (long)(m / d);
		r = m % d;
		t[i] = q;
	}
	r = 0;
	for(i = 0; i < x; i++)
	{
		p[i] = p[i] - t[i];
	}
	d = 57121;
	p = calc(t, p, s, a, x, k, r, d, n, m, q);
	x--;
	for(i = x; i >= 1; i--)
	{
		if(p[i] < 0)
		{
			b = -(long)(p[i] / k) + 1;
			p[i] = p[i] + (b * k);
			p[i - 1] = p[i - 1] - b;
		}
	}
	for(i = x; i >= 1; i--)
	{
		if (p[i] >= k)
		{
			b = (long)(p[i] / k);
			p[i] = p[i] - (b * k);
			p[i - 1] = p[i - 1] + b;
		}
	}
	return p;
}

function calc(t, p, s, a, x, k, r, d, n, m, q)
{
	var w = true;//bool
	var cont;//int
	while(w)
	{
		var i;
		n = n + 2;
		s = -(s);
		cont = 0;
		for(i = a; i < x && cont < 5; i++)
		{
			m = t[i] + (k * r);
			q = (long)(m / d);
			r = m % d;
			t[i] = q;
			if (t[i] === 0)
			{
				cont++;
			}
		}
		r = 0;
		for(i = a; i < x; i++)
		{
			m = t[i] + (k * r);
			q = (long)(m / n);
			r = m % n;
			p[i] = p[i] + (s * q);
		}
		r = 0;
		if (t[a] === 0)
		{
			a++;
		}
		w = a < x;
	}
	return p;
}