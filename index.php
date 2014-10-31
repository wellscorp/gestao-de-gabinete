<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema </title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

	
	<script type="text/javascript" src="js/jquery.min.js" ></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script>
		$(function(){
			$("input[name=entrar]").click(function(){
				//$("#div-into")load.("pags/inicio.php");
				window.location.href= "pags/inicio.php";
				console.log("entrou");
			})
		});
	</script>
	
	
	<link rel="shortcut icon" href="img\Untitled-1.png" type="image/x-icon">
	
  </head>
  <body background="img\back_1.jpg">
   
	
	<br><br>
<div id="div-into" />
	<br>
	<div align="center" style="padding-top:50px; " >
		<div class="container" align="center"  style="background-color:#E9E7E7;border-radius: 8px;box-shadow: 0 15px 20px rgba(0, 0, 0, .175); height: 310px;width:310px">
			<img src="img/logo.png" width="100px" style="padding-top:20px;">
			<br><br>
			<input type="text" name="usuario" autofocus style="border-radius: 3px;border: 1px solid #ccc; width:240px; height:30px;" placeholder="   Usuário"> <br>
			<input type="password" name="senha" style="border-radius: 3px;border: 1px solid #ccc; width:240px; height:30px;" placeholder="   Senha" > <br><br>
			<input type="button"  name="entrar" value="ENTRAR" align="center" style="width:100px" class="btn btn-default ">
			<br><br>
			<!--	<a href="#" id="a-alterar-senha">Alterar Senha </a>	-->
		</div>	
	</div>
	
	
	<br>
	<br>
  </body>
</html>
