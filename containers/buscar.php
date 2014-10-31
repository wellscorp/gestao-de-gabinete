

<div align="center">
	<div id="consulta"  class="cont">
		<br><br>
		<div >
			<div style="padding-left:100px">
				<table align="left">
					<tr>
						<th>	<label> Nome................: </label>	</th>
						<th style="padding-left:34px">	<input type="text" name="nome" class="form-control" style="width:530px; "  />	</th>
					</tr>
				</table>		
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Data............. De: </label>	</th>
						<th style="padding-left:34px">	<input type="date" name="data_1" class="form-control" style="width:210px; "  />	</th>
						<th style="padding-left:10px">	<label> Até: </label>	</th>
						<th style="padding-left:19px">	<input type="date" name="data_2" class="form-control" style="width:150px; "  />	</th>
					</tr>
				</table>	
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Bairro.............: </label>	</th>
						<th style="padding-left:46px">	<input type="text" name="bai" class="form-control" style="width:530px; "  />	</th>
					</tr>
				</table>	
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Assessor................: </label>	</th>
						<th style="padding-left:10px">	<input type="text" name="assessor" class="form-control" style="width:530px; "  />	</th>
					</tr>
				</table>	
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Assunto................: </label>	</th>
						<th style="padding-left:15px">	<input type="text" name="assunto" class="form-control" style="width:530px; "  />	</th>
					</tr>
				</table>		
				<br><br>
				<table align="left">
					<tr>
						<th>	<label> Data Nascimento...... De: </label>	</th>
						<th style="padding-left:19px">	<input type="date" name="nasc_1" class="form-control" style="width:210px; "  />	</th>
						<th style="padding-left:10px">	<label> Até: </label>	</th>
						<th style="padding-left:19px">	<input type="date" name="nasc_2" class="form-control" style="width:150px; "  />	</th>
					</tr>
				</table>
			</div>
			<br><br><br>
			<input type="button"  name="consultar" id="consultar" value="Consultar" align="center"  class="btn btn-primary btn-lg ">
		</div>
	</div>
	<div id="tabela"  class="cont">
		<div >
			<br><br>
			<table class="table table-hover table-bordered" style="width:1150px; ">
				<thead class="tabela">
					<tr>
						<th width="120px">
							CPF/CNPJ
						</th>
						<th width="120px">
							Nome
						</th>
						<th width="120px">
							RG
						</th>
						<th width="120px">
							End.
						</th>
						<th width="120px">
							Bairro
						</th>
						<th width="120px">
							Cidade
						</th>
						<th width="120px">
							Profissão
						</th>
						<th width="120px">
							Assessor
						</th>
					</tr>
				</thead>
				<tbody id="tab">
				</tbody>
			</table>
		</div>
	</div>
</div>


<script>
	$("#tabela").hide();
	$("input[name=consultar]").click(function(){
		$("#tabela").show();
		$("#consulta").hide();

		var nome= $("input[name=nome]").val();
		var data_1= $("input[name=data_1]").val();
		var data_2= $("input[name=data_2]").val();
		var bai= $("input[name=bai]").val();
		var assessor= $("input[name=assessor]").val();
		var assunto= $("input[name=assunto]").val();
		var nasc_1= $("input[name=nasc_1]").val();
		var nasc_2= $("input[name=nasc_2]").val();

		$.ajax({
			type: "POST",
			data: {flag: 1, nome:nome, bai:bai,  nasc_1:nasc_1, nasc_2:nasc_2, assunto:assunto, data_1:data_1, data_2:data_2, assessor:assessor},
			url: "../logic/logic.php",
			datatype: "html",
			success: function(result, status){
				console.log(result);
				var jreturn= JSON.parse(result);
				$(jreturn).each(function(ind, el){
					$("#tab").empty();
					$("#tab").append('<tr>  <td> '+el.CPF+' </td>  <td> '+el.NOME_PESSOA+' </td>   <td> '+el.DATA+' </td>  <td> '+el.ENDERECO+' </td>  <td> '+el.BAIRRO+' </td>	<td> '+el.CIDADE+' </td>  <td> '+el.PROFISSAO+' </td>   <td> '+el.ASSESSOR+' </td>	</tr>');
				});
			},
			complete: function(result){
				console.log(status);
			}
		});
	});

</script>

