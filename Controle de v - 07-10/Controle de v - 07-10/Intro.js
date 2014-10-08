	var introduction = new Image ();
	introduction.src = "telas/Tela_Introducao.png";
	
	var goMenu = 0;
	var speedIntro = 5;
	var xIntro = -600;
	
	function Intro ()
	{
		ctx.clearRect(0, 0, 800, 600);
		ctx.drawImage (introduction, xIntro, 0);
		
		if (goMenu == 300)
		{
			src = "menu";
		}
		
		goMenu++;
		
		xIntro += speedIntro;
		
		if (xIntro == 0)
		{
			speedIntro = 0;
		}
		if (goMenu == 155)
		{
			speedIntro = 5;
		}
		
		console.log(goMenu);
	
		
	}
	
	