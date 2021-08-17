function validatepass()
{
	var pass1 = document.getElementById("pass1").value,
		pass2 = document.getElementById("pass2").value;
	var repass1 = document.getElementById("repass1").value,
		repass2 = document.getElementById("repass2").value;
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