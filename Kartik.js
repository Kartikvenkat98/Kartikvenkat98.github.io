window.onresize = function () 
{
  document.getElementById('coverpage').style.height='100vh';
  document.getElementById('coverpage').style.width='100vw';
}
/*
var arr1 = [" ","Hey guys !!!! I am Kartik Venkataraman ..", "It's really good to see you here :)"];
var i = 0;
var j = 0;
var inc = 1;
var k = 0;
var temp = [];
intro.innerHTML = arr1[0];
j = arr1[0].length;
for(k =0;k<arr1[0].length;k++)
{
	temp.push(arr1[0][k]);
}
function change()
{
	var div = document.getElementById("intro");
	
	if(inc>0)
	{
		if(j<arr1[i].length)
		   temp.push(arr1[i][j]);
	}
	else
	{
		temp.splice(j,1);
	}
	var temp1 = temp.join("");
	intro.innerHTML = temp1+"|";
	if(j == arr1[i].length)
	    inc = inc*-1;
	j = j+inc;
	if(j<0 && inc == -1)
	{
		j = 0;
		inc = 1;
		i = (i+1)%arr1.length;
	}
}
setInterval(change,200);
*/

//for the i love html animation
var arr = ["C++","Python","Algorithms","HTML","CSS","Javascript","PHP","Laravel"];
var i = 0;
var j = 0;
var inc = 1;
var k = 0;
var temp = [];
abcd.innerHTML = arr[0];
j = arr[0].length;
for(k =0;k<arr[0].length;k++)
{
	temp.push(arr[0][k]);
}
function change()
{
	var div = document.getElementById("abcd");
	
	if(inc>0)
	{
		if(j<arr[i].length)
		   temp.push(arr[i][j]);
	}
	else
	{
		temp.splice(j,1);
	}
	var temp1 = temp.join("");
	abcd.innerHTML = temp1+"|";
	if(j == arr[i].length)
	    inc = inc*-1;
	j = j+inc;
	if(j<0 && inc == -1)
	{
		j = 0;
		inc = 1;
		i = (i+1)%arr.length;
	}
}
setInterval(change,200);

var flag=true;
		
		function fun()
		{
			if(flag)
			{			
			document.getElementById("pic1").style.transform="translate(150px,0px)";
			document.getElementById("pic2").style.transform="translate(130px,55px)";
			document.getElementById("pic3").style.transform="translate(100px,100px)";
			document.getElementById("pic4").style.transform="translate(55px,130px)";
			document.getElementById("pic5").style.transform="translate(0px,150px)";
			}
			
			else
			{
			document.getElementById("pic1").style.transform="translate(0px,0px)";
			document.getElementById("pic2").style.transform="translate(0px,0px)";
			document.getElementById("pic3").style.transform="translate(0px,0px)";
			document.getElementById("pic4").style.transform="translate(0px,0px)";
			document.getElementById("pic5").style.transform="translate(0px,0px)";
			}
			flag=!flag;
			
		}		
		
		