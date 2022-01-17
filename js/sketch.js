const cursor = {
  img: undefined, // Imagen del cursor (no alterar)
  imgPath: "assets/img/arrow.png", // Enlace de la imagen del cursor
  color: undefined, // Color de las lineas (no alterar)
  colorValue: "255, 255, 255", // Color RBG de las lineas
  alpha: 0.2, // Opacidad de las lineas
  weight: 2, // Grosor de las lineas
};

function preload() {
  cursor.img = loadImage(cursor.imgPath);
}

let div;
let div2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor.color = color(`rgba(${cursor.colorValue}, ${cursor.alpha})`);
  // Create div
  // myDiv.style("background-color", "red");
  div = document.getElementById("interface-mouse-right-line");
  div2 = document.getElementById("interface-mouse-top-line");
  console.log(div.style);
}

// Ajustar medidas de la pantalla cuando se actualiza
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Limpiar canvas
  clear();

  // Propiedades de la linea
  stroke(cursor.color);
  strokeWeight(cursor.weight);

  // Izquierda
  line(0, mouseY, mouseX, mouseY);

  // Derecha
  line(mouseX, mouseY, windowWidth, mouseY);

  // Arriba
  line(mouseX, mouseY, mouseX, 0);

  div.style.height = windowHeight + "px";
  div.style.left = mouseX + "px";

  div2.style.width = windowWidth + "px";
  div2.style.top = mouseY + "px";

  // Abajo
  line(mouseX, mouseY, mouseX, windowHeight);

  imageMode(CENTER);

  // Dibujar cursos
  image(cursor.img, mouseX, mouseY);
}
