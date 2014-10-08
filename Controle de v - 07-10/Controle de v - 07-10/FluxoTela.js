	/*var transition = false;
	
	function fadeIn(scene)
	{
		if(transition)
		{
			ctx.globalAlpha -= 0.2;
			
			if(ctx.globalAlpha < 0.2)
			{
				ctx.globalAlpha = 0;
				screem = scene;
				transition = false;
				Show();
			}
			
			console.log(this.ctx.globalAlpha);
		}
	}
	
	this.fadeOut = function()
	{
		ctx.globalAlpha += 0.2;
		
		if(ctx.globalAlpha > 1)
		{
			ctx.globalAlpha = 1;
		}
	}*/
	
	function Show ()
	{
		//console.log(tela);
		switch (src)
		{	
			case "intro":
				Intro ();
				break;
				
			case "menu":
					Menu ();	
				break;	
			
			case "animation":
					Animation ();
					break;
			
			case "instructions":
					Instructions ();
				break;				
				
			case "credits":
					Credits ();
				break;	
			
			case "game":
					Game();
					
				break;				
			case "win":
					Win();
				break;
				
			case "gameOver":
					gameOver ();
				break;
		}
	}
	
	