	var instru = [];
	var iFrame = 0;
	var framesNum = 4;
	var goGame = 0;
	
	for (i = 0; i < framesNum; i++)
		{
			instru[i] = new Image();
			instru[i].src = "telas/Instrucoes_" + i + ".png";
		}
	
	for (i = 0; i < 2; i++)
		{
			skip[i] = new Image();
			skip[i].src = "telas/Assets/BotaoPular_" + i + ".png";
		}
		
	function Instructions ()
	{
		ctx.drawImage (instru[iFrame%framesNum], 0, 0);
		ctx.drawImage (skip[0], 0/*10*/, 0/*-500*/);
		
		if(counter++ == 20)
		{
			iFrame++;
			counter = 0;
			goGame++;
		}
		if (goGame ++ == 250)
		{
			src = "game";
			goGame = 0;
		}
		
		if (mouse_x > 716 && mouse_x < 764 && mouse_y > 544 && mouse_y < 564)
		{
			ctx.drawImage(skip[1], 0/*10*/, 0/*-500*/);
			
			if(mouse_pressed && src == "instructions")
			{
				src = "game";
				soundMenu.pause();
				soundClick.play();
				mouse_pressed = false;
			}
		}
	}