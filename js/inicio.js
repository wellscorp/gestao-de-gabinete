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
		
	}

	/*
	function inserir(){

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
	}
	*/
		

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

	nav();
	layout();
	//inserir();
})
