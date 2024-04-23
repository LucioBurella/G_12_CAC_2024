const teclas_Programas = (e) => {
	switch (e.target.name) {
		case "login":
			setTimeout(() => {
             alert("hola");
             login();
			}, 250);
			break;
		case "guarda":
			setTimeout(() => {
			nuevo_sitio();
			}, 250);
			break;
		case "modifica":
			setTimeout(() => {
			modifica_sitio();
			}, 250);
			break;
		case "elimina":
			setTimeout(() => {
			elimina_sitio();
			}, 250);
			break;
		case "cancelar":
			setTimeout(() => {
			resetearFormulario();	
			mi_Config();
			}, 250);
			break;
	}
}
const inputs = document.querySelectorAll(".boton");
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('click', teclas_Programas);
}
