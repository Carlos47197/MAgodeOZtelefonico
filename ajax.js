// JavaScript Document


function buscador()
{
	var xmlhttp=false;
	try
	{
		xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e1)
	{
		try
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e2)
		{
			xmlhttp=false;
		}
	}
	
	if(!xmlhttp & typeof XMLHttpRequest!='undefined')
	{
		xmlhttp=new XMLHttpRequest();
	}
	return xmlhttp;
}




function menu1()
{
	c=document.getElementById('uno');
	
	ajax=buscador();
	ajax.open("GET","MENU1.php");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
}

function papas()
{
	c=document.getElementById('uno');
	
	ajax=buscador();
	ajax.open("GET","papas.html");
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4)
		{
			c.innerHTML=ajax.responseText;
		}
	}
	ajax.send(null);
}

