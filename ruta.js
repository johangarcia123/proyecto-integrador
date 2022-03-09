
	var ruta = new Number();
	var tiempodelaruta = new Number();
	var total = new Number();
	document.write("Escoja la ruta a donde se va a drigir:",'<BR/>');
	alert("(1)  Ruta de la cerveza ",'<BR/>');
	alert("(2)  Come y Chupalo",'<BR/>');
	clave = Number(prompt("Escoja la ruta donde se va dirigir:"));
	switch (clave) {
	case 1:
		alert("Su total a pagar es de: ",10,"$",'<BR/>');
        alert(10,'<BR/>');
		break;
	case 2:
		alert("Su total a pagar es de: ",20,"$",'<BR/>');
        alert(10,'<BR/>');
		break;
	default:
		alert("Ingreso de la ruta incorrecta ingrese nuevamente porfavor.",'<BR/>');
	}


