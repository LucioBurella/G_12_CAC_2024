function carga_completa() {
    const productos = document.querySelector('.productos');
    productos.style.gridTemplateColumns = '26% 26% 26%';

    const classNamesToGrid = [".noticias",
        ".filtros",
        "productos",
        ".prenda_1",
        ".prenda_2",
        ".prenda_3",
        ".prenda_4",
        ".prenda_5",
        ".prenda_6"];
    classNamesToGrid.forEach(className => {
      document.querySelectorAll(className).forEach(element => element.style.display = "grid");
    });
}
function carga_registro() {
    try {
        const productos = document.querySelector('.productos');
        productos.style.gridTemplateColumns = '20% 40% 20%';

        const formularioRegistroContenedor = document.querySelector('.formulario_registro_contenedor');
        formularioRegistroContenedor.style.gridArea = '1 / 2 / 2 / 3';

        const sitElements = document.querySelectorAll(".productos,\
        .formulario_registro_contenedor,\
        .formulario_registro_titulo,\
        .formulario_registro_input");

        sitElements.forEach(element => {
            element.style.display = "grid";
        });
    } catch (error) {
        console.log("Error en carga de pantalla " + error);
    }
}

function carga_login() {
    try {
        const productos = document.querySelector('.productos');
        productos.style.gridTemplateColumns = '20% 40% 20%';

        const formularioRegistroContenedor = document.querySelector('.formulario_login_contenedor');
        formularioRegistroContenedor.style.gridArea = '1 / 2 / 2 / 3';

        const sitElements = document.querySelectorAll(".productos,\
        .formulario_login_contenedor,\
        .formulario_login_titulo,\
        .formulario_registro_input");

        sitElements.forEach(element => {
            element.style.display = "grid";
        });
    } catch (error) {
        console.log("Error en carga de pantalla " + error);
    }
}

function borra() {
    try {
        const sitElements = document.querySelectorAll(".prenda_1,\
        .prenda_2,\
        .prenda_3,\
        .prenda_4,\
        .prenda_5,\
        .prenda_6,\
        .formulario_registro_contenedor,\
        .formulario_registro_titulo,\
        .formulario_registro_input");
        sitElements.forEach(element => {
            element.style.display = "none";
        });
    } catch (error) {
        console.log("Error en borrado de pantalla " + error);
    }
}

function seleccionar(id) {
    setTimeout(() => {
        console.log('Se ha hecho click en el botón de login');
        borra();
        carga_preguntas(id);
    }, 250);
}

function carga_preguntas(id) {
    try {
        const productos = document.querySelector('.productos');
        productos.style.gridTemplateColumns = '20% 40% 20%';

        const dudasElements = document.querySelectorAll(".dudas");
        dudasElements.forEach(element => {
            element.style.display = "none";
        });

        const preguntaSeleccionada = document.querySelector('.distintas_preguntas_contenedor');
        preguntaSeleccionada.style.gridArea = '1 / 2 / 2 / 2';

        const sitElements = document.getElementById(id);
        if (sitElements) {
            sitElements.style.display = "grid";
           
        } else {
            console.log("El elemento con ID " + id + " no fue encontrado.");
        }
    } catch (error) {
        console.log("Error en carga de pantalla " + error);
    }
}



//const inicioButton = document.getElementById("inicio");
//inicioButton.addEventListener('click', function() {
//    console.log('Se ha hecho click en el botón de inicio');
//    borra();
//    carga_completa();
//});
// const categoriasButton = document.getElementById("categorias");
// categoriasButton.addEventListener('click', function() {
//     console.log('Se ha hecho click en el botón de categorias');

// });
// const productosButton = document.getElementById("productos");
// productosButton.addEventListener('click', function() {
//     console.log('Se ha hecho click en el botón de productos');

// });
// const acercaButton = document.getElementById("nosotros");
// acercaButton.addEventListener('click', function() {
//     console.log('Se ha hecho click en el botón de acerca');

// });
// const contactoButton = document.getElementById("contacto");
// contactoButton.addEventListener('click', function() {
//     console.log('Se ha hecho click en el botón de contacto');

// });
// const loginButton = document.getElementById("login");
// loginButton.addEventListener('click', function() {
//     console.log('Se ha hecho click en el botón de login');
//     borra();
//     carga_registro();
// });
// const adminitradorButton = document.getElementById("administrador");
//     adminitradorButton.addEventListener('click', function() {
//     console.log('Se ha hecho click en el botón de administrador');

// });


