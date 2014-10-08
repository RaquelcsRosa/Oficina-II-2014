	var toys1;
	var toys1Name = ["brinquedo0", "brinquedo1", "brinquedo2"];
	var pieces1 = [];
	
	var random = Math.floor(Math.random() * 3);
	
	var x0 = 50;
	var y0 = 482;
	var x1 = 690;
	var y1 = 482;
	var x2 = 200;
	var y2 = 482;
	var x3 = 480;
	var y3 = 482;
	var x4 = 390;
	var y4 = 482;
	var x5 = 282;
	var y5 = 482;
	
	var combinationToy = [];
	var combinationPiece = [];
	
	toys1 = new Image ();
	toys1.name = toys1Name[random];
	toys1.src = "Toys/lvl1/" + toys1.name + ".png";		
	console.log(toys1.name);
	
		for (var i = 0; i < 6; i++)
		{
			pieces1[i] = new Image ();
			pieces1[i].src = "Toys/lvl1/pecas/b" + i +".png";	
		}
	
	function toyCombination()
	{		
		if(toys1.name == "brinquedo0")
		{
			combinationToy = ["b0", "b1"];
		}
		
		if(toys1.name == "brinquedo1")
		{
			combinationToy = ["b2", "b3"];
		}
		
		if(toys1.name == "brinquedo2")
		{
			combinationToy = ["b4", "b5"];
		}
	}
	
	toyCombination();
	
	function check()
	{
		if(combinationPiece.length == 2 && combinationPiece.toString() == combinationToy.toString())
		{
			combinationPiece.splice(0, combinationPiece.length);
			src = "win";
		}
		console.log(src);
		if(combinationPiece.length == 2 && combinationPiece.toString() != combinationToy.toString())
		{
			combinationPiece.splice(0, combinationPiece.length);
			src = "gameOver";
		}
		/*for(var i = 0; i < combinationToy.length; i++)
		{
			var find = false;
			for(var j = 0; j < combinationPiece.length; j++)
			{
				if(combinationPiece[j] == combinationToy[i]) find = true; 
			}
		}
		
		if(find) {console.log("ganhou"); return false;
		if(!find) console.log("perdeu"); return true;*/
	}
	
	function Lvl1 ()
	{
		for (var i = 0; i < pieces1.length; i++)
		{
			ctx.drawImage(pieces1[0], x0, y0);
			ctx.drawImage(pieces1[1], x1, y1);
			ctx.drawImage(pieces1[2], x2, y2);
			ctx.drawImage(pieces1[3], x3, y3);
			ctx.drawImage(pieces1[4], x4, y4);
			ctx.drawImage(pieces1[5], x5, y5);
			/*ctx.drawImage(pieces1[i], 0/*(i+[pos]), 452);*/
		}
		ctx.drawImage(toys1, 182, 152);

		if (mouse_pressed && mouse_x > x0 && mouse_x < 142 && mouse_y > y0 && mouse_y < 602 && src == "game" && combinationPiece.length < combinationToy.length)
		{
			x0 = 492
			y0 = 104;
			combinationPiece.push("b0");
			console.log(combinationPiece.toString());
		}
		
		if (mouse_pressed && mouse_x > 696 && mouse_x < 756 && mouse_y > 488 && mouse_y < 602 && src == "game"&& combinationPiece.length < combinationToy.length)
		{
			x1 = 506;
			y1 = 238;
			combinationPiece.push("b1");
			console.log(combinationPiece.toString());
			mouse_pressed = false;
		}
		
		if (mouse_pressed && mouse_x > x2 && mouse_x < 264 && mouse_y > y2 && mouse_y < 538 && src == "game"&& combinationPiece.length < combinationToy.length)
		{
			x2 = 492;
			y2 = 104;
			combinationPiece.push("b2");
			console.log(combinationPiece.toString());
			mouse_pressed = false;
		}
	
		if (mouse_pressed && mouse_x > x3 && mouse_x < 650 && mouse_y > y3  && mouse_y < 602 && src == "game"&& combinationPiece.length < combinationToy.length)
		{
			x3 = 490;
			y3 = 122;
			combinationPiece.push("b3");
			console.log(combinationPiece.toString());
			mouse_pressed = false;
		}
		
		if (mouse_pressed && mouse_x > x4 && mouse_x < 484 && mouse_y > x4 && mouse_y < 602 && src == "game"&& combinationPiece.length < combinationToy.length)
		{
			x4 = 506;
			y4 = 104;
			combinationPiece.push("b4");
			console.log(combinationPiece.toString());
			mouse_pressed = false;
		}
		
		if (mouse_pressed && mouse_x > x5 && mouse_x < 348 && mouse_y > y5 && mouse_y < 544 && src == "game"&& combinationPiece.length < combinationToy.length)
		{
			x5 = 490;
			y5 = 250;
			combinationPiece.push("b5");
			console.log(combinationPiece.toString());
			mouse_pressed = false;
		}
		
		
	}