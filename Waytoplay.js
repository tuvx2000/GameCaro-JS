/*      0 = 2      1 = X                        */
 array = ["0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 "];
	var d = 0;
	var x,y;
	var check;
	
	var flag = 0;
	
	function danh(a)
	{
		flag = 1;
		
		x = eval(a[0]); ///// dong
		y = eval(a[1]) ; ////  cot/*
		check = array[x];
		check = check[y];
		if ( check == 0)
		{
			d++;
			if ( d % 2 == 1)
			{	
				document.getElementById(a).src = "X.jpg"; 
				array[x] = array[x].substr(0,y) + '1' + array[x].slice(y +1 , 11);	
				
			}
			else
			{
				document.getElementById(a).src = "O.jpg";
				array[x] = array[x].substr(0,y) + '2' + array[x].slice(y +1 , 11);	
			}
		}
		//////////////////////////////////////////////////////// an thua la o day
		var point1 = 0;  // duong ngang -
		var point2 = 0;  // duong doc   |
		var point3 = -1;  // duong cheo 	/
		var point4 = -1;  // duong cheo  \
		var i = x , j = y ;
		var ten;
		var value = array[x][y];
		for ( j = 0 ; j < 10 ; j ++)	
		{
		
			if(array[x][j] == value)
			{
				point1++;
				if(point1 == 4)
				{	
					if (d % 2 == 1)
						ten = 'X';
					else
						ten = 'O';{
					document.getElementById('text1').innerHTML =  "Player use " + ten + " Won" ;
					document.getElementById('soundwon').play();
					}
				}
			}
			else
				point1 = 0;
				
			if (array[j][y] == value)
			{
				point2++;
				if(point2 == 4)
				{	
					if (d % 2 == 1)
						ten = 'X';
					else
						ten = 'O';
					document.getElementById('text1').innerHTML =  "Player use " + ten + " Won" ;
					document.getElementById('soundwon').play();
				}
			}
			else
				point2 = 0;
		}
		
		for ( i = x  , j = y  ;   ; i++ , j++)
		{
			if(array[i][j] == array[x][y])
				point3++;
			else
				break;
			if ( j == 9) break;
			if ( i == 9) break;
		}
		for ( (i = x  , j = y  ) ; (i > -1) && (j > -1) ; (i-- , j--) )
		{
			if(array[i][j] == array[x][y])
				point3++;
			else
				break;		
		}
		if (point3 == 4)
		{	
			if (d % 2 == 1)
				ten = 'X';
			else
				ten = 'O';
			document.getElementById('text1').innerHTML =  "Player use " + ten + " Won" ;
			document.getElementById('soundwon').play();
		}
		//////////////////////////////////////
		for ( i = x  , j = y  ;   ; i++ , j--)
		{
			if(array[i][j] == array[x][y])
				point4++;
			else
				break;
			if ( j == 0) break;
			if ( i == 9) break;
		}
		for ( (i = x  , j = y  ) ; (i > -1) && (j > -1) ; (i-- , j++) )
		{
			if(array[i][j] == array[x][y])
				point4++;
			else
				break;		
		}
		if (point4 == 4)
		{	
			if (d % 2 == 1)
				ten = 'X';
			else
				ten = 'O';
			
			document.getElementById('text1').innerHTML =  "Player use " + ten + " Won" ;
			document.getElementById('soundwon').play();
			
		}								
	}
	
	
	
	
	
	
	/////////////////////////////////////////////////////////////////	/////////////////////////////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function danhlai()
	{
		if ( flag == 1)
			d--;
		flag = 0;
		array[x] = array[x].substr(0,y) + '0' + array[x].slice(y +1 , 10);
		document.getElementById('' + x+ y).src = "none.jpg"; 
	}
	function danhvanmoi()
	{
		array = ["0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 ", "0000000000 "];
		document.getElementById('text1').innerHTML='';
		 d = 0;
		 i = 0 ; j = 0;
		 for ( i = 0 ; i < 10 ; i ++)
			 for(j = 0 ; j < 10 ; j ++)
				 document.getElementById('' + i+ j).src = "none.jpg";
	}

function trans()
{
	document.getElementById('soundmain').play();
		
	document.getElementById('panelxxx').style.opacity=0;
	document.getElementById('start').style.opacity =0;

	document.getElementById('banco1').style.opacity =1;
	document.getElementById('banco2').style.opacity =1;
	
	document.getElementById('control').style.opacity =1;
	setTimeout(later, 1300);
	}
function later()
{
	
	document.getElementById('panelxxx').style.zIndex=0;
	document.getElementById('start').style.zIndex = 0;
}
function outgame()
{
	document.getElementById('panelxxx').style.opacity=1;
	document.getElementById('start').style.opacity =1;

	document.getElementById('banco1').style.opacity =0;
	document.getElementById('banco2').style.opacity =0;
	
	document.getElementById('control').style.opacity =0;
	setTimeout(later1, 1300);
}
function later1()
{
	document.getElementById('panelxxx').style.zIndex=1;
	document.getElementById('start').style.zIndex = 3;
}

var music = 1;
function sound()
{	
	if(music == 1)
	{
		document.getElementById('soundmain').pause();
		document.getElementById('sound').src = "muted.jpg";
		music = 0;
	}
	else
	{
		document.getElementById('soundmain').play();
		document.getElementById('sound').src = "loa.jpg"; 
		music = 1;
	}
}

