	var bgGame = new Image();
	bgGame.src = "telas/Tela_Jogo.png";
	
	var soundGame = new Audio
	soundGame.src = "Sounds/Tela_Jogo.mp3";
	
	var time = 5;
	var timer = 0;
	
	function Game ()
	{
		ctx.drawImage (bgGame, 0, 0);
		/*ctx.drawText(time, canvas.width/2, 50, "30px Arial", "BLACK");*/
		soundGameO.pause();
		soundGame.play();
		
		if (timer ++ > 60)
		{
			time--;
			timer = 0;
		}
		
		if (time <= 0)
		{
			src = "gameOver";
			soundGame.pause();
		}
		console.log(time);
		
		Lvl1();
		check();
	}