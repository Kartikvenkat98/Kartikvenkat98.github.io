var memory_array = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var sec;
var score;
var moves;
var x;
var flag = 0;
Array.prototype.memory_tile_shuffle = function()              // Fisher - Yates algorithm to randomly shuffle the array
{
    var i = this.length, j, temp;
    while(--i > 0)
	{
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard()
{
	tiles_flipped = 0;
	score = 0;
	moves = 0;
	var output = [];
    memory_array.memory_tile_shuffle();
	
	for(var i = 0; i < memory_array.length; i++)
	{
		 output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	/*for(var i = 0; i < height; ++i)
	{
		for(var j = 0; j < width; ++j)
		{
			output += "<td><div id='tile_"+w+"' onclick='memoryFlipTile(this,\""+memory_array[w]+"\");'>"+"</div></td>";
			w++;
		}
	}*/
	
	document.getElementById('memory_board').innerHTML = output;
	
	var cTime = new Date();
	cTime = cTime.getTime();
	
	
	function Countdown()
	{
		var curTime = new Date();
		curTime = curTime.getTime();
		
		var diff = cTime - curTime + 60000;
		diff = Math.floor(diff/1000);
		
		sec = diff%60;
		
		document.getElementById("Seconds").innerHTML = ((sec<10)?'0'+sec:sec);	
		
		if(!sec)                          // If time is up
		{
			window.alert("Oops!!! Time is up... Your score is "+score+" in "+moves+" moves... Try Again :)");
			document.getElementById("Score").innerHTML = '00';
	        document.getElementById("Moves").innerHTML = '00';
			clearInterval(x);
			newBoard();
			
		}
	}
	x = setInterval(Countdown, 1000);
}

function memoryFlipTile(tile, val)                       // Function to reveal the numbers behind the tiles
{
	/*if(!flag)
	{
		flag = 1;
		x = setInterval(Countdown, 1000);
	}*/
	
	if(tile.innerHTML == "" && memory_values.length < 2)
	{
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0)
		{
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} 
		else if(memory_values.length == 1)
		{
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1])
			{
				tiles_flipped += 2;
				score += 1;
				moves += 1;
				
				document.getElementById("Score").innerHTML = '0'+score;
				document.getElementById("Moves").innerHTML = ((moves<10)?'0'+moves:moves);
				
				memory_values = [];        // Clear the array
            	memory_tile_ids = [];      // Clear the array
				
				
				// Check to see if the whole board is cleared
				
				if(tiles_flipped == memory_array.length)
				{
					alert("Board cleared... Congratulations!!! Your score is "+score+" in "+moves+" moves... Generating new board !!!!" );
					document.getElementById("Score").innerHTML = '00';
	                document.getElementById("Moves").innerHTML = '00';
					clearInterval(x);
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
					
				}
			} 
			else
			{
				function flip2Back()                                  // Function to flip back the tiles when numbers are not same
				{
					
				    // Flip the 2 tiles back over
					
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
            	    tile_1.innerHTML = "";
					tile_1.style.background = 'url(images.jpg)';
				    tile_2.style.background = 'url(images.jpg)';
            	    tile_2.innerHTML = "";
					moves += 1;
					document.getElementById("Moves").innerHTML = ((moves<10)?'0'+moves:moves);
					
				    // Clear both arrays
					
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 1000);
			}
		}
	}
}

