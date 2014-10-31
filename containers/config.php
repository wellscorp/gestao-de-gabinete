
<script type="text/javascript" src="..\js/config.js" />

<div align="center">
	<div   class="cont">
		<br>
		<div class="col-md-3 column">
			<ul class="nav nav-tabs nav-stacked">
				<li class="nav12 active" id="nav_login">
					<a href="#">Criar Login</a>
				</li>
				<li class="nav22" id="nav_senha">
					<a href="#">Mudar Senha</a>
				</li>			
			</ul>
		</div>
		<!-- 	---------------------- OPÇÕES ---------------------------------- -->

		<div id="login" class="col-md-9 column">
			 <BR>
			<table align="left">
				<tr>
					<th>	<label> Usuário............: </label>	</th>
					<th style="padding-left:10px">	<input type="text" id="in_user" class="form-control" style="width:150px; "  />	</th>
				</tr>
			</table>
			<br><br>
			<table align="left">
				<tr>
					<th >	<label> Senha............: </label>	</th>
					<th style="padding-left:20px">	<input type="password" id="in_senha" class="form-control" style="width:150px; "  />	</th>
				</tr>
			</table>
			<br><br>
			<table align="left">
				<tr>
					<th >	<label> Repita Senha: </label>	</th>
					<th style="padding-left:20px">	<input type="password" id="in_senha_2" class="form-control" style="width:150px; "  />	</th>
				</tr>
			</table>
			<br><br><br><br><br><br><br>
			<div align="right">
				<input type="button"  name="in_usuario" value="Salvar" align="center"  class="btn btn-primary btn-lg ">
			</div>
		</div>	


		<div id="senha" class="col-md-9 column">
			 <BR>
			<table align="left">
				<tr>
					<th>	<label> Senha atual.....: </label>	</th>
					<th style="padding-left:10px">	<input type="password" id="senha_atual" class="form-control" style="width:150px; "  />	</th>
				</tr>
			</table>
			<br><br>
			<table align="left">
				<tr>
					<th >	<label> Nova Senha..: </label>	</th>
					<th style="padding-left:20px">	<input type="password" id="senha_nova" class="form-control" style="width:150px; "  />	</th>
				</tr>
			</table>
			<br><br>
			<table align="left">
				<tr>
					<th >	<label> Repita Senha: </label>	</th>
					<th style="padding-left:20px">	<input type="password" id="senha_nova_2" class="form-control" style="width:150px; "  />	</th>
				</tr>
			</table>
			<br><br><br><br><br><br><br>
			<div align="right">
				<input type="button"  name="senha" value="Salvar" align="center"  class="btn btn-primary btn-lg ">
			</div>
		</div>	



			
	</div>
</div>

<script>
	$("#senha").hide();
	$("#sindicato").hide();
	$("#nav_login").click(function(){
		$("li.nav22").removeClass("active");
		$("li.nav32").removeClass("active");
		$("li.nav12").addClass("nav12 active");
		$("#login").show();
		$("#sindicato").hide();	
		$("#senha").hide();	
		console.log("Login ");
	});
	$("#nav_senha").click(function(){
		$("li.nav12").removeClass("active");
		$("li.nav32").removeClass("active");
		$("li.nav22").addClass("nav22 active");
		$("#login").hide();
		$("#sindicato").hide();	
		$("#senha").show();	
		console.log("Senha ");
	});
	$("#nav_sindicato").click(function(){
		$("li.nav12").removeClass("active");
		$("li.nav22").removeClass("active");
		$("li.nav32").addClass("nav32 active");
		$("#login").hide();
		$("#senha").hide();
		$("#sindicato").show();	
		console.log("SINDICATO ");
	});
</script>

