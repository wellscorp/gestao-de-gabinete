

<div align="center">
	<div  class="cont">
		<br><br>
		<div id="consulta">
			<div style="padding-left:100px" align="left">


				<table align="left">
					<tr>
						<th>	<label> CPF: </label>	</th>
						<th style="padding-left:60px">	<input type="text" name="cpf" class="form-control" style="width:250px; "  />	</th>
						<th>	<label style="padding-left:10px"> Nome: </label>	</th>
						<th style="padding-left:10px">	<input type="text" name="nome" class="form-control" style="width:530px; "  />	</th>
					</tr>
				</table>	
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Endereço: </label>	</th>
						<th style="padding-left:23px">	<input type="text" name="end" class="form-control" style="width:650px; "  />	</th>
						<th style="padding-left:10px">	<label> Num.: </label>	</th>
						<th style="padding-left:13px">	<input type="text" name="num" class="form-control" style="width:70px; "  />	</th>
					</tr>
				</table>		
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Bairro: </label>	</th>
						<th style="padding-left:47px">	<input type="text" name="bai" class="form-control" style="width:250px; "  />	</th>
						<th>	<label style="padding-left:10px"> Cidade: </label>	</th>
						<th style="padding-left:10px">	<input type="text" name="cid" class="form-control" style="width:250px; "  />	</th>
						<th>	<label style="padding-left:10px"> CEP: </label>	</th>
						<th style="padding-left:10px">	<input type="text" name="cep" class="form-control" style="width:230px; "  />	</th>
					</tr>
				</table>		
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Tel. Res.: </label>	</th>
						<th style="padding-left:28px">	<input type="text" name="tel" class="form-control" style="width:250px; "  />	</th>
						<th>	<label style="padding-left:10px"> Cel.: </label>	</th>
						<th style="padding-left:10px">	<input type="text" name="cel" class="form-control" style="width:250px; "  />	</th>
					</tr>
				</table>		
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> E-mail: </label>	</th>
						<th style="padding-left:45px">	<input type="text" name="email" class="form-control" style="width:650px; "  />	</th>
					</tr>
				</table>		
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Data Nasc.: </label>	</th>
						<th style="padding-left:14px">	<input type="text" name="nasc" class="form-control" style="width:250px; "  />	</th>
						<th>	<label style="padding-left:10px"> Profissão: </label>	</th>
						<th style="padding-left:10px">	<input type="text" name="prof" class="form-control" style="width:330px; "  />	</th>
					</tr>	
				</table>	
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Assunto: </label>	</th>
						<th style="padding-left:28px">	<textarea id="assunto" class="form-control" rows="3" style="width:750px; "  />	</th>
					</tr>	
				</table>	
				<br><br><br><br>
				<table align="left">
					<tr>
						<th>	<label> Assessor: </label>	</th>
						<th style="padding-left:23px">	<input type="text" name="assessor" class="form-control"  style="width:750px; "  />	</th>
					</tr>	
				</table>	
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Data: </label>	</th>
						<th style="padding-left:58px">	<input type="date" name="data" class="form-control"  style="width:200px; "  />	</th>
					</tr>	
				</table>		


			</div>
			<div align="right" style="padding-right:20px">
				<input type="button"  name="cadastrar" id="cadastrar" value="cadastrar" align="center"  class="btn btn-primary btn-lg ">
			</div>
		</div>
		<!--
		<a href="#"><img alt="140x140" src="http://lorempixel.com/140/140/" class="img-rounded" /> </a>
		<a href="#"><img alt="140x140" src="http://lorempixel.com/140/140/" class="img-rounded" /> </a>
		-->
	</div>
</div>

<script>
	$("input[name=cadastrar]").click(function(){
		

		var cpf= $("input[name=cpf]").val();
		console.log(cpf);
		var nome= $("input[name=nome]").val();
		console.log(nome);
		var end= $("input[name=end]").val();
		console.log(end);
		var num= $("input[name=num]").val();
		console.log(num);
		var bai= $("input[name=bai]").val();
		console.log(bai);
		var cid= $("input[name=cid]").val();
		console.log(cid);
		var cep= $("input[name=cep]").val();
		console.log(cep);
		var tel= $("input[name=tel]").val();
		console.log(tel);
		var cel= $("input[name=cel]").val();
		console.log(cel);
		var email= $("input[name=email]").val();
		console.log(email);
		var nasc= $("input[name=nasc]").val();
		console.log(nasc);
		var prof= $("input[name=prof]").val();
		console.log(prof);
		var assunto= $("#assunto").val();
		console.log(assunto);
		var assessor= $("input[name=assessor]").val();
		console.log(assessor);
		var data= $("input[name=data]").val();
		data= data.substr(0,4)+data.substr(5,2)+data.substr(8,2);
		console.log(data);

		if(cpf=="" || nome=="" || prof=="" ||  num=="" || bai=="" || cid=="" || end=="" || cep=="" || tel=="" || cel=="" || email=="" || nasc=="" || assunto=="" || assessor=="" ||  data==""   ){
			alert("Campos obrigatórios não preenchidos!");
		}else{
			console.log("Cadastrou!");
			//alert("Cadastro realizado com sucesso!");

			$.ajax({
				type: "POST",
				data: {flag: 0, cpf:cpf, nome:nome, end:end, cep:cep, prof:prof, tel:tel, cel:cel, num:num, bai:bai, cid:cid, nasc:nasc, email:email, assunto:assunto, data:data, assessor:assessor},
				url: "../logic/logic.php",
				datatype: "html",
				success: function(result, status){
					console.log(result);
					alert("Cadastro realizado com sucesso!");
				},
				complete: function(result){
					console.log(status);
				}
			});
		}
	});


</script>


