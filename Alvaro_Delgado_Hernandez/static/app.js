// Alvaro Delgado Hernandez

// Ver cuadro 2 ,con esta funcion hago que el boton vea el formulario.
function vercuadro2() {
    document.getElementById('cuadro2').style.display = 'block';
    document.getElementById('cuadro1').style.display = 'none';
  }
  // Cerrar cuadro 2 ,con esta funcion hago que el boton volver atras muestre la tabla.
  function cerrarcuadro2() {
    document.getElementById('cuadro2').style.display = 'none';
    document.getElementById('cuadro1').style.display = 'block';
  }
 // Esta funcion valida para que cuando el campo nombre este vacio avise
 
 
 // Mi idea era que con una sola funcion comprobara si esta vacio  y te saltara el error como el video pero no lo he conseguido te dejo comentado mi intento
 //function validador(){
  //  var Nombre = document.getElementById("Nombre");
  //  if(Nombre.lenght==0){
  //  alert("El campo  nombre esta vacio");
  //  }else{
  //  alert('El formulario se ha realizado con éxito')
//}
//}
  // Enviar datos del formulario.
  function enviarFormulario(){
    alert('El formulario se subio de manera satisfactoria')
}