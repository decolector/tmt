function setup() {
    //crea el elemento canvas
    createCanvas(710, 400);
    //pintar el fondo de gris
    background(102);
  }
  
  function draw() {
    //define el color de borde de línea
    stroke(255);
    //si el mouse está presionado
    if (mouseIsPressed === true) {
      //dibuja una línea entre el punto x,y anterior y el x,y actual
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }