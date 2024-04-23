console.log("Bienvenidos");


function login(){
    try {
        console.log("hola por aca pase");
        const classNamesToBlock = [".login"];
        classNamesToBlock.forEach(className => {
          document.querySelectorAll(className).forEach(element => element.style.display = "block");
        });
      } catch (error) {
        console.log(error);
        alert("Error al intentar abrir login");
      }
}