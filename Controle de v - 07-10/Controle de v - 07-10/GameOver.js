	var bgGameOver = new Image();
	bgGameOver.src = "telas/Tela_Derrota.png";
	
	var character = [];
	var currentFrame = 0;
	var charaterF = 2;
	
	var bMenu = new Image();
	bMenu.src = "telas/Assets/BotaoMenu_0.png";
	
	var playAgain = new Image ();
	playAgain.src = "telas/Assets/BotaoJogarN_0.png";
	
	var soundGameO = new Audio();
	soundGameO.src = "Sounds/TelaDerrota_2.mp3";
	
	for (i = 0; i < 2; i++ )
	{
		character [i] = new Image();
		character [i].src = "telas/PersonagemDerrota_" + i + ".png";
	}
	
	function gameOver ()
	{
		ctx.drawImage (bgGameOver, 0, 0);
		ctx.drawImage(character[currentFrame%charaterF], 0, 0);
		
		if(counter++ == 10)
		{
			currentFrame++;
			counter = 0;
		}
		soundGame.pause();
		soundGameO.play();
		
		if (mouse_x > 272 && mouse_x < 348 && mouse_y > 442 && mouse_y < 472)
		{
			ctx.drawImage(bMenu, 0, 0);
			
			if(mouse_pressed && src == "gameOver")
			{
				src = "menu";
				yP = -300;
				xP = 0;
				yC = 300;
				xB = 100;
				speedY = 3;
				speedX = 2;
				time = 10;
				counter = 0;
				soundClick.play();
				x0 = 50;
				y0 = 482;
				x1 = 690;
				y1 = 482;
				x2 = 200;
				y2 = 482;
				x3 = 480;
				y3 = 482;
				x4 = 390;
				y4 = 482;
				x5 = 282;
				y5 = 482;
			}
		}
		
		if (mouse_x > 372 && mouse_x < 536 && mouse_y > 442 && mouse_y < 472)
		{
			ctx.drawImage(playAgain, 0, 0);
			
			if(mouse_pressed)
			{
				time = 10;
				
				if (src == "gameOver")
				{
					src = "game";
					soundClick.play();
					x0 = 50;
					y0 = 482;
					x1 = 690;
					y1 = 482;
					x2 = 200;
					y2 = 482;
					x3 = 480;
					y3 = 482;
					x4 = 390;
					y4 = 482;
					x5 = 282;
					y5 = 482;
					mouse_pressed = false;
				}			
			}
		}
	}