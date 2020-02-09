function validatepass()
{
	var pass1 = document.getElementsByName("pass1")[0].value;
	var pass2 = document.getElementsByName("pass2")[0].value;
	var repass1 = document.getElementsByName("repass1")[0].value;
	var repass2 = document.getElementsByName("repass2")[0].value;
	if(pass1==repass1 && pass2==repass2)
	{
		if(pass1 != pass2)
		{
			if((pass1.length+pass2.length)>=12)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}