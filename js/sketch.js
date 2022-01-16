function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  v2anim = 0;
  keep = windowWidth;

  // background("#dbdbdb");
}
let mode = "normal";

let v1Anim = 0;
let v2anim = 0;

let p = true;
let nn = 0;
let t = 0;
let keep;

function draw() {
  stroke("black");
  strokeWeight(0.6);
  let xpos = mode == "normal" ? (windowWidth / 12) * 3 : (windowWidth / 12) * 2;
  // let xpos = 300
  let ypos = 67;

  // Anim arriba - abajo
  // Vertical 1

  line(xpos, 0, xpos, v1Anim);
  v1Anim += 20;

  // Vertical 2
  line(
    windowWidth - xpos,
    windowHeight,
    windowWidth - xpos,
    windowHeight - v2anim
  );
  v2anim += 20;

  // Horizontal 1
  //line(0, ypos, windowWidth, ypos);

  strokeWeight(1.2);

  // 1
  let ii = t + nn;
  // 2
  let iii = t + nn;
  nn += 20; // separacion
  t++;

  line(windowWidth - ii, ypos, keep - ii + 10, ypos);

  // Horizontal bottom
  line(iii, windowHeight - ypos, iii + 10, windowHeight - ypos);

  // // Horizontal 2
  // line(0, windowHeight - ypos, windowWidth, windowHeight- ypos);
  // Line lateral

  if (mode == "normal") {
    strokeWeight(0.6);
    line(62, 90, 62, windowHeight - 90);
  }
}

// Ajustar medidas de la pantalla cuando se actualiza
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  if (windowWidth < 768) {
    mode = "small";
  } else mode = "normal";

  // background("#dbdbdb");
  // Reset

  v1Anim = 0;
  v2anim = 0;
  keep = windowWidth;

  p = true;
  nn = 0;
  t = 0;
}

// line(xpos, 0, xpos, windowHeight);

// // Vertical 2
// line(windowWidth - xpos, 0, windowWidth - xpos, windowHeight);

// // Horizontal 1
// line(0, ypos, windowWidth, ypos);

// // Horizontal 2
// line(0, windowHeight - ypos, windowWidth, windowHeight- ypos);
