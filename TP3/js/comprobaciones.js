			
$( document ).ready(function() {


		$("#alerta").hide();




	$("#submit").on("click", function(){
	 		
			if ($("#nom").val().length < 1 || $("#ape").val().length < 1 || 
				$("#fecha").val().length < 1 || $("#valoracion").val().length < 1 || 
				$("#sexo").val().length < 1) {
			alert("Todos los campos obligatorios deben estar llenos!");
			}

	
				if (! /^[a-zA-Z]+$/.test($("#nom").val()) && $("#nom").val().length != 0)
				{
					alert("El NOMBRE debe contener SOLO caracteres de a-z o A-Z!")
				}

				if (! /^[a-zA-Z]+$/.test($("#ape").val()) && $("#ape").val().length != 0)
				{
					alert("El APELLIDO debe contener SOLO caracteres de a-z o A-Z!")
				}
			

			if ($("#nom").val().length != 0 && $("#ape").val().length != 0 &&
				$("#fecha").val().length != 0 && $("#valoracion").val().length != 0 && 
				$("#sexo").val().length != 0) 
			{

				$("#alerta").fadeIn();

	    		setTimeout(function() {
	        		$("#alerta").fadeOut(1500);
	    		},5000);

				prompt("Nombre: ", $("#nom").val());
				prompt("Apellido: ", $("#ape").val());
				prompt("Fecha de Nacimiento: ", $("#fecha").val());
				prompt("Sexo: ", $("#sexo").val());
				prompt("Valoracion: ", $("#valoracion").val());
				prompt("Comentario: ", $("#comentario").val());


			}
	});

			$("#cancelar").on("click", function(){

			confirm("Desea cancelar la encuesta?");
			});

			$("#restablecer").on("click", function(){
				$("#nom").val("");
				$("#ape").val("");
				$("#fecha").val("");
				$("#sexo").val("");
				$("#valoracion").val("");
				$("#comentario").val("");
			});
	});


