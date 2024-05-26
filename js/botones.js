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
            meGusta("me_gusta_1");
        setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 1');
                alert('Presionaste boton me gusta en la prenda 1')
            }, 250);
            break;
            case "me_gusta_2":
                meGusta("me_gusta_2");
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 2');
                alert('Presionaste boton me gusta en la prenda 2')
            }, 250);
            break;
        case "me_gusta_3":
            meGusta("me_gusta_3");
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 3');
                alert('Presionaste boton me gusta en la prenda 3')
            }, 250);
            break;
        case "me_gusta_4":
            meGusta("me_gusta_4");
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 4');
                alert('Presionaste boton me gusta en la prenda 4')
            }, 250);
            break;
        case "me_gusta_5":
            meGusta("me_gusta_5");
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 5');
                alert('Presionaste boton me gusta en la prenda 5')
            }, 250);
            break;
        case "me_gusta_6":
            meGusta("me_gusta_6");
            setTimeout(() => {
                console.log('Se ha hecho click en el botón de prenda 6');
                alert('Presionaste boton me gusta en la prenda 6')
            }, 250);
        case "remeras":
            borra();
            restablece_botones();
            disabled_boton('remeras');
            //setTimeout(() => {
            //console.log('Se ha hecho click en el botón de listar remeras');
            //alert('Presionaste boton listar remeras')
            //}, 250);
            break;
        case "pantalon":
            borra();
            restablece_botones();
            disabled_boton('pantalon');
            break;
        case "camisa":
            borra();
            restablece_botones();
            disabled_boton('camisa');
            break;
        case "camperas":
            borra();
            restablece_botones();
            disabled_boton('camperas');
            break;
        case "gorras":
            borra();
            restablece_botones();
            disabled_boton('gorras');
            break;
        case "accesorios":
            borra();
            restablece_botones();
            disabled_boton('accesorios');
            break;
        case "logo_inicio":
            setTimeout(() => {
                console.log('Se ha hecho click en el logo de la tienda');
                borra();
                restablece_botones();
                carga_completa();
            }, 250);
            break;   
        case "carrito":
            restablece_botones();
            setTimeout(() => {
                console.log('Se ha hecho click en el botón del carrito de compras esta seccion esta en construccion');
                alert('Se ha hecho click en el botón del carrito de compras esta seccion esta en construccion');
            }, 250);
            break;       
	}
}
  const inputs = document.querySelectorAll(".tecla");
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('click', teclas_Programas);
}

function meGusta(prenda){
    let fav1 = document.getElementById(prenda);
    console.log(fav1);
    if (fav1.src.includes('me_gusta_vacio.png')) {
      fav1.src = './img/front/me_gusta_lleno.png';
    } else {
      fav1.src = './img/front/me_gusta_vacio.png';
    }
}
   
function disabled_boton(id){
    let boton = document.getElementById(id);
    boton.disabled = true;
    boton.style.backgroundColor = 'gray';
    boton.style.boxShadow = ' 3px 3px 3px 0 #7b7b7b inset,\
    -2px -2px 3px 0  #ffffff inset';
    boton.style.cursor = 'default';
    boton.style.userSelect = 'none';
    boton.style.color = 'white';
}
function restablece_botones() {
    const ids = ['remeras',
                'pantalon', 
                'camisa', 
                'camperas', 
                'gorras', 
                'accesorios'];
    ids.forEach(id => {
        let boton = document.getElementById(id);
        if (boton) {
            boton.disabled = false; 
            boton.style.backgroundColor = 'rgba(197, 197, 145,0.5)';
            boton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.8),\
            -2px -2px 5px rgba(255, 255, 255, 0.8)';
            boton.style.transition = 'all 0.1s ease;';
            boton.style.cursor = 'pointer';
            boton.style.color = 'black';

            
        }
    });
}