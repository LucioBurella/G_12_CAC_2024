const teclas_Programas = (e) => {
	switch (e.target.name) {
		case "inicio":
			setTimeout(() => {
                console.log('Se ha hecho click en el botón de inicio');
                borra();
                carga_completa();
			}, 250);
			break;
        case "categorias":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de categorias');
            }, 250);
            break;        
        case "productos":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de productos');
            }, 250);
            break;
        case "acerca":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de acerca');
            }, 250);
            break;
        case "contacto":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de contacto');
            }, 250);
            break;
        case "login":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de login');
            borra();
            carga_registro();
            }, 250);
            break;
        case "buscar":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de buscar');
                alert('Presionaste boton buscar esta en construccion esta seccion')
            }, 250);
            break;

    
    



	}
}
  const inputs = document.querySelectorAll(".tecla");
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('click', teclas_Programas);
}

