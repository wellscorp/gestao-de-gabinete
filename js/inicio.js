$().ready(function(){
	function nav(){
		$("button[name=novo]").click(function(){
			$("#container").empty();
			$("#container").load("../containers/inserir.php");
			$("li").removeClass("active");
			$("li.nav1").addClass("nav1 active");
			console.log("novo");
		});
		$("button[name=buscar]").click(function(){
			$("#container").empty();
			$("#container").load("../containers/buscar.php");
			$("li").removeClass("active");
			$("li.nav2").addClass("nav2 active");
			console.log("buscar");
		});
		$("button[name=config]").click(function(){
			$("#container").empty();
			$("#container").load("../containers/config.php");		
			$("li").removeClass("active");
			$("li.nav3").addClass("nav3 active");
			console.log("config");
		});

		//----------------------------------------------------------------------------------------------------
		$("input[name=voltar]").click(function(){
			console.log("VOLTANDO");
			$("#container").empty();
			$("#container").load("../containers/tipo_contrato.php");

		});

		//----------------------------------------------------------------------------------------------------
		
		/*
		$("input[name=entrar]").click(function(){
			var contrato= $("input[name=entrar]").attr("id");
			$("#container").empty();
			console.log(contrato);
		});
		*/
		


		
		
		$("input[name=entrar]").click(function(){

			//$("#container").empty();
			contrato= $("input[name=entrar]").attr("id");
			contrato= contrato.substr(0,10);		// DEVIDO A ID SEMELHANTES FOI NECESSÁRIO ACRESCENTAR "1" AO ID E RETIRAR AQUI!
			console.log(contrato);

			if(contrato == "contrato_1" || contrato== "contrato_2" || contrato == "contrato_3"){
				var cpf= $("input[name=cpf]").val();
				console.log(cpf);
				var nome= $("input[name=nome]").val();
				console.log(nome);
				var rg= $("input[name=rg]").val();
				console.log(rg);
				var uf= $("select#uf").val();
				console.log(uf);
				var profissao= $("input[name=profissao]").val();
				console.log(profissao);
				var civil= $("select#civil").val();
				console.log(civil);
				var log= $("input[name=log]").val();
				console.log(log);
				var num= $("input[name=num]").val();
				console.log(num);
				var bai= $("input[name=bai]").val();
				console.log(bai);
				var cid= $("input[name=cid]").val();
				console.log(cid);
				var comp= $("input[name=comp]").val();
				console.log(comp);
				var fazenda= $("input[name=fazenda]").val();
				console.log(fazenda);
				var receita= $("input[name=receita]").val();
				console.log(receita);

				var cpf2= $("input[name=cpf2]").val();
				console.log(cpf2);
				var nome2= $("input[name=nome2]").val();
				console.log(nome2);
				var rg2= $("input[name=rg2]").val();
				console.log(rg2);
				var uf2= $("select#uf2").val();
				console.log(uf2);
				var profissao2= $("input[name=profissao2]").val();
				console.log(profissao2);
				var civil2= $("select#civil2").val();
				console.log(civil2);
				var log2= $("input[name=log2]").val();
				console.log(log2);
				var num2= $("input[name=num2]").val();
				console.log(num2);
				var bai2= $("input[name=bai2]").val();
				console.log(bai2);
				var cid2= $("input[name=cid2]").val();
				console.log(cid2);
				var comp2= $("input[name=comp2]").val();
				console.log(comp2);

				var area= $("input[name=area]").val();
				console.log(area);
				var data= $("input[name=data]").val();
				data= data.substr(8,2)+'/'+data.substr(5,2)+'/'+data.substr(0,4);
				console.log(data);
				var prazo= $("input[name=prazo]").val();
				prazo= prazo.substr(8,2)+'/'+prazo.substr(5,2)+'/'+prazo.substr(0,4);
				console.log(prazo);

				var desde="";
				if(contrato== "contrato_5"){
					var desde= $("input[name=desde]").val();
					var cpf2= $("input[name=cpf3]").val();
					console.log(cpf3);
					var nome2= $("input[name=nome3]").val();
					console.log(nome3);
					var rg2= $("input[name=rg3]").val();
					console.log(rg3);
					var uf2= $("select#uf3").val();
					console.log(uf3);
					var log2= $("input[name=log3]").val();
					console.log(log3);
					var num2= $("input[name=num3]").val();
					console.log(num3);
					var bai2= $("input[name=bai3]").val();
					console.log(bai3);
					var cid2= $("input[name=cid3]").val();
					console.log(cid3);
				}

				
				$.ajax({
					type: "POST",
					data: {flag: 0, cpf:cpf, nome:nome, rg:rg, uf:uf, profissao:profissao, civil:civil, log:log, num:num, bai:bai, cid:cid, comp:comp, fazenda:fazenda, receita:receita, cpf2:cpf2, nome2:nome2, rg2:rg2, uf2:uf2, profissao2:profissao2, civil2:civil2, log2:log2, num2:num2, bai2:bai2, cid2:cid2, comp2:comp2 , area:area, data:data, prazo:prazo, desde:desde},
					url: "../logic/logic.php",
					datatype: "html",
					success: function(result, status){
						console.log(result);
					},
					complete: function(result){
						console.log(status);
					}
				});
			}

			if(cpf=="" || nome=="" ||rg=="" || profissao=="" || log=="" || num=="" || bai=="" || cid=="" || comp=="" || fazenda=="" || receita=="" ){
				alert("Campos obrigatórios não preenchidos!");
			}else{if(cpf2=="" || nome2=="" ||rg2=="" || profissao2=="" || log2=="" || num2=="" || bai2=="" || cid2=="" || comp2==""){
				alert("Campos obrigatórios não preenchidos!");
			}else{
			
				//$("#container").empty();
				window.open("../logic/"+contrato+".php","_blank");
				$("#finalizacao").show();
				$("#contrato").hide();
				//$("#container").load("../containers/fim.php");
				console.log("FINALIZANDO");
			} }
		});

		$("input[name=imprimir]").click(function(){
			console.log("IMPRIMINDO");
			console.log(contrato);
			window.open("../logic/"+contrato+".php","_blank");
		});


		//		------------------ SELEÇÃO DE ASSOSSIADOS -----------------------------------------------------------
		$("input[name=buscar]").click(function(){
			$("#tabela").show();
			$("#busca").empty();
			

			cpf0= $("#cpf").val();
			nome0= $("#nome").val();
			apelido0= $("#apelido").val();
			cod0= $("#codigo").val();
			console.log(cpf0);
			$.ajax({
				type: "POST",
				data: {flag: 1, cod:cod0, nome:nome0, apelido:apelido0, cpf:cpf0},
				url: "../logic/logic.php",
				datatype: "html",
				success: function(result, status){
					console.log(result);
					var jsonretorno = JSON.parse(result);
					
					$(jsonretorno).each(function(ind, elem){					
						$("#busca").append(
							'<tr id="linha" class="danger"> <td width="119px"> '+elem.SQL_CCODCLI+' </td> <td width="438px"> <a href="#" id="ind-'+ind+'"> '+elem.SQL_CNOMCLI+' </a> </td> <td width="245px"> '+elem.SQL_CCGCCLI+' </td> <td width="277px"> '+elem.SQL_CNOMFAN+' </td> </tr>'
						);
						$("#ind-"+ind+"").click(function(){
							$("#container").load("../containers/tipo_contrato.php");
							cpf= elem.SQL_CCGCCLI.trim();
							nome= elem.SQL_CNOMCLI.trim();
							rg= elem.SQL_AIDENTI.trim();
							uf= elem.SQL_AORGEXP.trim();
							profissao= elem.SQL_ACARGO.trim();
							civil= elem.SQL_AESTCIV.trim();
							log= elem.SQL_CENDCLI.trim();
							num= elem.SQL_CNUMEND.trim();
							bai= elem.SQL_CBAICLI.trim();
							cid= elem.SQL_CCIDCLI.trim();
							comp= elem.SQL_CCMPEND.trim();
							apelido= elem.SQL_CNOMFAN.trim();
							nasc= elem.SQL_ADATNAS.substr(0,2)+'/'+elem.SQL_ADATNAS.substr(2,2)+'/'+elem.SQL_ADATNAS.substr(4,4);
							de= elem.SQL_ADATEXP.substr(0,2)+'/'+elem.SQL_ADATEXP.substr(2,2)+'/'+elem.SQL_ADATEXP.substr(4,4);

						});
					});
				},
				complete: function(result){
					console.log(status);
				}
			});
		});

		//------------------------CARREGAR TIPO DE CONTRATO (COM INFORMAÇÕES!) -------------------------------------------------------
		

		$("#contrato_1").click(function(){		
			$("#container").load("../containers/contrato_1.php", function(){
				if(typeof(nome) != "undefined"){
					$("input[name=cpf]").val(cpf);
					$("input[name=nome]").val(nome);
					$("input[name=rg]").val(rg);
					$("input[name=profissao]").val(profissao);
					$("input[name=log]").val(log);
					$("input[name=num]").val(num);
					$("input[name=bai]").val(bai);
					$("input[name=cid]").val(cid);
					$("input[name=comp]").val(comp);
					//$("select#civil").val("2");		// COMO POR VALOR EM SELECT???
				}
			});		
			console.log("primeiro tipo de contrato");			
			//$("label#cpf").append('<label>057236</label>');			
		});

		$("#contrato_2").click(function(){		
			$("#container").load("../containers/contrato_2.php", function(){
				if(typeof(nome) != "undefined"){
					$("input[name=cpf]").val(cpf);
					$("input[name=nome]").val(nome);
					$("input[name=rg]").val(rg);
					$("input[name=profissao]").val(profissao);
					$("input[name=log]").val(log);
					$("input[name=num]").val(num);
					$("input[name=bai]").val(bai);
					$("input[name=cid]").val(cid);
					$("input[name=comp]").val(comp);
					//$("select#civil").val("2");		// COMO POR VALOR EM SELECT???
				}
			});		
			console.log("segundo tipo de contrato");			
			//$("label#cpf").append('<label>057236</label>');			
		});

		$("#contrato_3").click(function(){		
			$("#container").load("../containers/contrato_3.php", function(){
				if(typeof(nome) != "undefined"){
					$("input[name=cpf]").val(cpf);
					$("input[name=nome]").val(nome);
					$("input[name=rg]").val(rg);
					$("input[name=profissao]").val(profissao);
					$("input[name=log]").val(log);
					$("input[name=num]").val(num);
					$("input[name=bai]").val(bai);
					$("input[name=cid]").val(cid);
					$("input[name=comp]").val(comp);
					//$("select#civil").val("2");		// COMO POR VALOR EM SELECT???
				}
			});		
			console.log("terceiro tipo de contrato");			
			//$("label#cpf").append('<label>057236</label>');			
		});

		$("#contrato_4").click(function(){		
			$("#container").load("../containers/contrato_4.php", function(){
				if(typeof(nome) != "undefined"){
					$("input[name=cpf]").val(cpf);
					$("input[name=nome]").val(nome);
					$("input[name=rg]").val(rg);
					$("input[name=profissao]").val(profissao);
					$("input[name=log]").val(log);
					$("input[name=num]").val(num);
					$("input[name=bai]").val(bai);
					$("input[name=cid]").val(cid);
					$("input[name=comp]").val(comp);
					//$("select#civil").val("2");		// COMO POR VALOR EM SELECT???
				}
			});		
			console.log("quarto tipo de contrato");			
			//$("label#cpf").append('<label>057236</label>');			
		});

		$("#contrato_5").click(function(){		
			$("#container").load("../containers/contrato_5.php", function(){
				if(typeof(nome) != "undefined"){
					$("input[name=cpf]").val(cpf);
					$("input[name=nome]").val(nome);
					$("input[name=rg]").val(rg);
					$("input[name=profissao]").val(profissao);
					$("input[name=log]").val(log);
					$("input[name=num]").val(num);
					$("input[name=bai]").val(bai);
					$("input[name=cid]").val(cid);
					$("input[name=comp]").val(comp);
					//$("select#civil").val("2");		// COMO POR VALOR EM SELECT???
				}
			});		
			console.log("quinto tipo de contrato");			
			//$("label#cpf").append('<label>057236</label>');			
		});

		$("#contrato_6").click(function(){		
			$("#container").load("../containers/contrato_6.php", function(){
				if(typeof(nome) != "undefined"){
					$("input[name=cpf]").val(cpf);
					$("input[name=nome]").val(nome);
					$("input[name=rg]").val(rg);
					$("input[name=profissao]").val(profissao);
					$("input[name=log]").val(log);
					$("input[name=num]").val(num);
					$("input[name=bai]").val(bai);
					$("input[name=cid]").val(cid);
					$("input[name=comp]").val(comp);
					$("input[name=apelido]").val(apelido);
					$("input[name=nasc]").val(nasc);
					$("input[name=de]").val(de);
					//$("select#civil").val("2");		// COMO POR VALOR EM SELECT???
				}
			});		
			console.log("sexto tipo de contrato");			
			//$("label#cpf").append('<label>057236</label>');			
		});

		//------------------------(FIM)  -- CARREGAR TIPO DE CONTRATO (COM INFORMAÇÕES!) -------------------------------------------------------

		

		//$("div#proprietario").click(function(){
		//	console.log("click lado de fora...");
		//});

		/*		// REDUZIR PARA APENAS UM EVENTO
		$("#nav").click(function(){
			$("#container").load("../containers/config.php");		
			$("li").removeClass("active");
			$("li.nav3").addClass("nav3 active");
			console.log("config");
		});
		*/
	};

	function addPropriedade(){

		// ACRESCENTAR VARIAVEIS P/ OBTER VALORES DOS CAMPOS. E INSERIR EM UMA ARRAY (OU UMA STRING COM INDICES); LIMPAR CAMPOS; APPEND NA TABELA

		$("input[name=mais]").click(function(){

			console.log("mais propriedade");
			var cpf2= $("input[name=cpf2]").val();
			var nome2= $("input[name=nome2]").val();
			var log2= $("input[name=log2]").val();
			var periodo_de= $("input[name=periodo_de]").val();
			var periodo_ate= $("input[name=periodo_ate]").val();
			var categoria= $("input[name=categoria]").val();
			var total= $("input[name=total]").val();
			var explorada= $("input[name=explorada]").val();

			
			if(cpf2=="" || nome2=="" || log2=="" || periodo_de=="" || periodo_ate=="" || categoria=="" || total=="" || explorada=="" ){
				alert("Campos da propriedade não preenchidos");
			}else{
				propriedade= cpf2 +' -- ' + nome2 +' -- ' + log2 +' -- ' + periodo_de +' -- ' + periodo_ate +' -- ' + categoria +' -- ' + total +' -- ' + explorada +' ** ' ;
				$("tbody#propriedade").append(
					'<tr>	<td width="150px"> '+cpf2+' </td>	<td width="146px"> '+nome2+' </td>	<td width="100px"> '+log2+' </td>	<td width="150px"> '+periodo_de+' à '+periodo_ate+' </td>	<td width="110px"> '+categoria+' </td>	<td width="70px"> '+total+' </td>	<td width="52px"> '+explorada+' </td>		</tr>'
				);
			}
		})
	}

	function layout(){
		var activeEl = 2;
		$(function() {
		    var items = $('.btn-nav');
		    $( items[activeEl] ).addClass('active');
		    $( ".btn-nav" ).click(function() {
		        $( items[activeEl] ).removeClass('active');
		        $( this ).addClass('active');
		        activeEl = $( ".btn-nav" ).index( this );
		    });
		});
	}

	addPropriedade();
	nav();
	layout();
})
