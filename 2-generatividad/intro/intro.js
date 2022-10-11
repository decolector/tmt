/////Variables

//String
var nombre = 'María';
//Número
var edad = 25;
//Decimal
var altura = 1.70;
//Fecha
var fecha_nacimiento = new Date('1994-11-15');
//lista
var aficiones = ['nadar', 'ir cine', 'montar bici', 'cocinar'];

//Cantidad de elementos en una lista
console.log(aficiones.length);

//Obtener un elemento de la lista
console.log(aficiones[0]);

//agregar un elemento a la lista, en la última posición
aficiones.push('leer');

//eliminar el último elemento de la lista
//esta función no requiere parámetros para funcionar
//pero se dejan vacíos
aficiones.pop();

//Objeto

var perfil = {
  'nombre': nombre,
  'edad': edad,
  'altura': altura,
  'fecha_nacimiento': fecha_nacimiento,
  'aficiones': aficiones
}

//accedemos a los elementos del objeto con notación de punto
console.log(perfil.nombre);

//igualmente podemos acceder a los elementos del objeto cuando son arrays
console.log(perfil.aficiones[0]);


/////Estructuras de control

//// Condicionales
// If/else

if(edad >= 18){
  alert("Eres mayor de edad. Puedes entrar")
}else{
  alert("Eres menor de edad.  No puedes entrar")
}

/////Iteración

//For loop

for(var i = 0; i < aficiones.length; i++){
  console.log(i);
  console.log(aficiones[i]);
}

//// Funciones

//Función simple

//Definidición de la función, esta utiliza un parámetro
function saludar(nombre){
  var saludo = "Hola " + nombre + " !!"
  console.log(saludo)
}

//Llamada a la función
saludar(nombre)

//Función con retorno
// Esta función retorna un valor
function generarSaludo(nombre){
  var saludo = "Hola " + nombre + " !!"
  return saludo
}

//se puede usar una variable para guardar el valor retornado por una función
var salu = generarSaludo(nombre)

console.log(salu)

//// Iteración y funciones anónimas

//forEach

aficiones.forEach(function(aficion){
  console.log(aficion);
})

//forEach con función flecha

aficiones.forEach(aficion=>{
  console.log(aficion)
});

//si el contenido de la función es de una sola línea
//no se necesitan los corchetes

aficiones.forEach(aficion=>console.log(aficion));

//podemos acceder al índice si pasamos un segundo parámetro a la función

aficiones.forEach((aficion,i)=>console.log(i.toString() + ":" + aficion));
