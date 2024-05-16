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
                console.log('Se ha hecho click en el botón de prenda 1');
                alert('Presionaste boton me gusta en la prenda 1')
            }, 250);
            break;
        case "me_gusta_2":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 2');
                alert('Presionaste boton me gusta en la prenda 2')
            }, 250);
            break;
        case "me_gusta_3":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 3');
                alert('Presionaste boton me gusta en la prenda 3')
            }, 250);
            break;
        case "me_gusta_4":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 4');
                alert('Presionaste boton me gusta en la prenda 4')
            }, 250);
            break;
        case "me_gusta_5":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 5');
                alert('Presionaste boton me gusta en la prenda 5')
            }, 250);
            break;
        case "me_gusta_6":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 6');
                alert('Presionaste boton me gusta en la prenda 6')
            }, 250);
        case "remeras":
            borra();
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de listar remeras');
                alert('Presionaste boton listar remeras')

            }, 250);
            break;
        case "pantalon":
            borra();
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de listar pantalones');
                alert('Presionaste boton listar pantalones')
            }, 250);
            break;
        case "camisa":
            borra();
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de listar camisas');
                alert('Presionaste boton listar camisas')
            }, 250);
            break;
        case "camperas":
            borra();
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de listar camperas');
                alert('Presionaste boton listar camperas')
            }, 250);
            break;
        case "gorras":
            borra();
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de listar camperas');
                alert('Presionaste boton listar camperas')
            }, 250);
            break;
        case "accesorios":
            borra();
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de listar camperas');
                alert('Presionaste boton listar camperas')
            }, 250);
            break;
            







        case "logo_inicio":
            setTimeout(() => {
                console.log('Se ha hecho click en el logo de la tienda');
                borra();
                carga_completa();
            }, 250);
            break;   
        case "carrito":
            setTimeout(() => {
                console.log('Se ha hecho click en el botón del carrito de compras esta seccion esta en construccion');
                alert('Se ha hecho click en el botón del carrito de compras esta seccion esta en construccion')
            }, 250);
            break;    



	}
}
  const inputs = document.querySelectorAll(".tecla");
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('click', teclas_Programas);
}

