		var menu = new Image ();
		menu.src = "telas/Tela_Menu.png";
		
		var bird = [];
		var birdFrame = 5;
		var cFrame = 0;
		
		var boy = [];
		var boyFrame = 2;
		var bFrame = 0;
		var counter = 0;
		
		var soundMenu = new Audio ();
		soundMenu.src = "Sounds/Tela_Menu.mp3";
		
		var play = [];	
		var cred = [];
		var exit = [];
		var music = [];
		var sound = [];
		
		var yP = -300;
		var xP = 0;
		var yC = 300;
		var xB = 100;
		
		var speedY = 3;
		var speedX = 2;
		var pBol = false;
		
		for (var i = 0; i < 2; i++)
		{
			 play[i] = new Image ();
			 play[i].src = "telas/Assets/BotaoJogar_" + i + ".png";
			
			cred[i] = new Image ();
			cred[i].src = "telas/Assets/BotaoCred_" + i + ".png";
			
			exit[i] = new Image ();
			exit[i].src = "telas/Assets/BotaoSair_" + i + ".png";
			
			music[i] = new Image ();
			music[i].src = "telas/Assets/BotaoMusica_" + i + ".png";
			
			sound[i] = new Image ();
			sound[i].src = "telas/Assets/BotaoSom_" + i + ".png";
			
			boy[i] = new Image ();
			boy[i].src = "telas/PersonagemMenu_" + i + ".png";
		}
		
		for (i = 0; i < 6; i ++)
		{	
			bird[i] = new Image ();
			bird[i].src = "telas/Assets/Animacao/Frame_" + i + ".png";
		}
		
		function Menu ()
	{
		soundMenu.play();
		ctx.drawImage (menu, 0, 0);
		ctx.drawImage (play[0], xP, yP);
		ctx.drawImage (cred[0], 0, yC);
		ctx.drawImage (exit[0], 0, 0);
		ctx.drawImage (music[0], 0, 0);
		ctx.drawImage (sound[0], 0, 0);
			
		ctx.save();
			//ctx.translate()(xB,0);
			if (xB < - 650 || xB > 300)
			{
				ctx.scale(-1, 1);
			}
			ctx.drawImage(bird[cFrame%birdFrame], xB, 0);
		ctx.restore();
		
		ctx.drawImage(boy[cFrame%boyFrame], 0, 0);
		//console.log(xB);
		if(counter++ == 10)
		{
			cFrame++;
			bFrame++;
			counter = 0;
		}
		soundGameO.pause();
		
		if (mouse_x > 331 && mouse_x < 474 && mouse_y > 234 && mouse_y < 274 && pBol)
		{
			ctx.drawImage(play[1], 0, 0);
			
			if(mouse_pressed && src == "menu")
			{
				src = "animation";
				counter = 0;
				soundClick.play();
			}
		}
		
		if (mouse_x > 334 && mouse_x < 469 && mouse_y > 327 && mouse_y < 365 && pBol)
		{
			ctx.drawImage(cred[1], 0, 0);
			
			if(mouse_pressed && src == "menu")
			{
				src = "credits";
				soundClick.play();
			}
		}
	
		if (mouse_x > 716 && mouse_x < 764 && mouse_y > 544 && mouse_y < 564)
		{
			ctx.drawImage(exit[1], 0, 0);
			
			if(mouse_pressed && src == "menu")
			{
				onclick = window.close();
			}
		}
		
			yP += speedY;
			xB -= speedX;			
			
			if (yP > 30)
			{
				speedY =  0;
				yP = 0;		
			}
			
			if (speedY == 0)
			{
				pBol = true;
				yP = 0;
			}
			yC -= speedY;	
			
			if (yC < 0)
			{
				speedY =  0;
				yC = 0;
			}	
		
		
	}
	
	
	
	
	
	