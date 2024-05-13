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
        case "me_gusta_1":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de buscar');
                alert('Presionaste boton me gusta en la prenda 1')
            }, 250);
            break;
        case "me_gusta_2":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de buscar');
                alert('Presionaste boton me gusta en la prenda 2')
            }, 250);
            break;
        case "me_gusta_3":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de buscar');
                alert('Presionaste boton me gusta en la prenda 3')
            }, 250);
            break;
        case "me_gusta_4":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de buscar');
                alert('Presionaste boton me gusta en la prenda 4')
            }, 250);
            break;
        case "me_gusta_5":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de buscar');
                alert('Presionaste boton me gusta en la prenda 5')
            }, 250);
            break;
        case "me_gusta_6":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de buscar');
                alert('Presionaste boton me gusta en la prenda 6')
            }, 250);
            break;

    
    



	}
}
  const inputs = document.querySelectorAll(".tecla");
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('click', teclas_Programas);
}

