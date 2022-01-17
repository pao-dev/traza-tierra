var z = 0;
$(".main-content .project").on("wheel", function (e) {
  e.preventDefault();
  // atras
  if (e.originalEvent.wheelDelta >= 0 && $(this).prev()[0].id != "project4") {
    z = $(this).prev()[0].id;
    if ($(this).prev().length) {
      var prev = "#" + $(this).prev().attr("id");
      document.querySelector(prev).scrollIntoView({ behavior: "smooth" });
      changeNav(prev);
    }
  } else {
    // adelante
    // console.log($(this).next());
    z = $(this).next()[0].id;
    if ($(this).next().length && $(this).next()[0].id != "project-casa-bahia") {
      var next = "#" + $(this).next().attr("id");
      document.querySelector(next).scrollIntoView({ behavior: "smooth" });
      console.log("--", next);
      changeNav(next);
    }
  }
});

//

$(window).resize(function () {
  document.getElementById(z).scrollIntoView({});
});

const interfaceItems = [];
const interfaceBottomSection = document.getElementById(
  "interface-bottom-section"
);

const interfaceTopProjectTitle = document.getElementById(
  "interface-top-project-name"
);

const interfaceBottomAction = document.getElementById(
  "interface-bottom-action"
);

for (let i = 0; i < 4; ++i) {
  interfaceItems.push(document.getElementById(`interface-left-item-${i + 1}`));
}

function changeNav(item) {
  switch (item) {
    case "#section-home":
      interfaceItems.forEach((value) => {
        value.className = "";
      });
      interfaceItems[0].className = "active";
      interfaceBottomSection.innerHTML = `HOME <img src="assets/img/icons/1x/Asset 1.png" alt="" id="section-icon"/>`;
      interfaceTopProjectTitle.innerHTML = "";
      interfaceBottomAction.innerHTML = "";
      break;

    case "#section-about":
      interfaceItems.forEach((value) => {
        value.className = "";
      });
      interfaceItems[1].className = "active";
      interfaceBottomSection.innerHTML = `NOSOTROS <img src="assets/img/icons/1x/Asset 2.png" alt="" id="section-icon"/>`;
      interfaceTopProjectTitle.innerHTML = "";
      interfaceBottomAction.innerHTML = "";
      break;

    case "#section-portfolio":
      interfaceItems.forEach((value) => {
        value.className = "";
      });
      interfaceItems[2].className = "active";
      interfaceBottomSection.innerHTML = `PORTAFOLIO <img src="assets/img/icons/1x/Asset 3.png" alt="" id="section-icon"/>`;
      if (projectInfoOpen) {
        // Middle title
        interfaceTopProjectTitle.innerHTML = projectInfoOpen = "Casa Bahía";
        // Bottom Action
        interfaceBottomAction.innerHTML = `<a class="portfolio-button-return" href="" onclick="projectReturn(event)">Regresar</a>`;
      }
      break;

    case "#project4":
      interfaceItems.forEach((value) => {
        value.className = "";
      });
      interfaceItems[3].className = "active";
      interfaceBottomSection.innerHTML = `CONTACTO <img src="assets/img/icons/1x/Asset 4.png" alt="" id="section-icon"/>`;
      interfaceTopProjectTitle.innerHTML = "";
      interfaceBottomAction.innerHTML = "";
      break;

    default:
      break;
  }
}

function interfaceLeft(section) {
  document.getElementById(section).scrollIntoView({
    behavior: "smooth",
  });
}

let projectMainContainer = `
<div class="row">
  <div class="col-3 d-none d-md-block" style="position: relative">
    <div id="project-author-vertical">Arq Irving Martin</div>
    <!-- square -->
    <div id="project-square">
      <div class="" id="project-line"></div>
      <div class="" id="project-year-vertical">2020</div>
    </div>
  </div>
  <div class="col-12 col-md-6 section-portfolio-center">
    <div
      class=""
      style="background-color: coral; position: relative"
    >
      <span id="project-author" class="d-block d-md-none">
        Arq Irving Martin
      </span>

      <span id="project-number">01</span>

      <span id="project-name"> CASA BAHÍA </span>
      <img
        src="assets/img/CasaBahia/main_cover.png"
        alt=""
        class="portfolio-main-cover"
        onclick="project(1)"
      />
    </div>
  </div>
</div>
`;

let projectInfoContainer = `
<div class="logo-slider" >
  <div class="images" id="image-galery-1a">
    <img src="assets/img/CasaBahia/galery/galery_1.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_2.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_3.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_4.png" onclick="openImage(this)">
   </div>
  
  <div id="image-galery-1b">
    <img src="assets/img/CasaBahia/galery/galery_1.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_2.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_3.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_4.png" onclick="openImage(this)">
  </div>
</div>
<div class="logo-slider-2">
  <div id="image-galery-2a">
    <img src="assets/img/CasaBahia/galery/galery_1.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_2.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_3.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_4.png" onclick="openImage(this)">
   </div>
  
  <div id="image-galery-2b">
    <img src="assets/img/CasaBahia/galery/galery_1.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_2.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_3.png" onclick="openImage(this)">
    <img src="assets/img/CasaBahia/galery/galery_4.png" onclick="openImage(this)">
  </div>
</div>
`;

function projectReturn(_that) {
  // Cambiar estado
  projectInfoOpen = false;

  // Evitar recargar pagina
  _that.preventDefault();
  // Cambiar contenido div
  let projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = projectMainContainer;
  // Remover labels
  interfaceTopProjectTitle.innerHTML = "";
  interfaceBottomAction.innerHTML = "";
}

let projectInfoOpen = false;

// portfolio
function project() {
  // Cambiar estado
  projectInfoOpen = true;

  // Cambiar contenido div
  let projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = projectInfoContainer;
  // Titulo
  interfaceTopProjectTitle.innerHTML = "Casa Bahia";
  // Bottom Action
  interfaceBottomAction.innerHTML = `<a class="portfolio-button-return" href="" onclick="projectReturn(event)">Regresar</a>`;
  // Animate

  image_slider = document.getElementById("animate--");
  __animate = true;
}

const URL = "http://127.0.0.1:5501/index.html";

// Navigation smooth

const interfaceLeftNavigation = [
  {
    id: "interface-left-item-1",
    itemIndex: 0,
    href: "#home",
    destination: "section-home",
  },
  {
    id: "interface-left-item-2",
    itemIndex: 1,
    href: "#about",
    destination: "section-about",
  },
  {
    id: "interface-left-item-3",
    itemIndex: 2,
    href: "#portfolio",
    destination: "section-portfolio",
  },
  {
    id: "interface-left-item-4",
    itemIndex: 3,
    href: "#contact",
    destination: "project4",
  },
];

interfaceLeftNavigation.forEach((interfaceItem) => {
  let _id = document.getElementById(interfaceItem.id);
  _id.addEventListener("click", (event) => {
    event.preventDefault();
    // mandar seccion
    z = interfaceItem.destination;
    console.log("zz", z);

    // // Resect select class
    // interfaceItems.forEach((value) => {
    //   value.className = "";
    // });
    changeNav("#" + interfaceItem.destination);

    // set select class
    interfaceItems[interfaceItem.itemIndex].className = "active";

    location.href = URL + interfaceItem.href;

    document.getElementById(interfaceItem.destination).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animation
var image_slider;
let animationX = 0;

let __animate = false;

let lastX = 0;
let x = 0;

function update(delta) {
  lastX = x;
  x += 0.2 * delta;
}

function draw(interpolationPercentage) {
  if (__animate) {
    //
    var _x = lastX + (x - lastX) * interpolationPercentage;
    image_slider.style.marginLeft = _x + "px";
  }
}

let imageIsOpen = false;

function openImage(image) {
  $("#full-image").attr("src", $(image).attr("src"));
  $("#image-viewer").show();

  // Cambiar estado
  imageIsOpen = true;

  // detener animaciones

  const slider1_a = document.getElementById("image-galery-1a");
  const slider1_b = document.getElementById("image-galery-1b");

  const slider2_a = document.getElementById("image-galery-2a");
  const slider2_b = document.getElementById("image-galery-2b");

  slider1_a.style.animationPlayState = "paused";
  slider1_b.style.animationPlayState = "paused";

  slider2_a.style.animationPlayState = "paused";
  slider2_b.style.animationPlayState = "paused";
}

function closeImage(image) {
  // cerrar div
  $("#image-viewer").hide();

  // Cambiar estado
  imageIsOpen = false;

  // Reanudar animaciones

  const slider1_a = document.getElementById("image-galery-1a");
  const slider1_b = document.getElementById("image-galery-1b");

  const slider2_a = document.getElementById("image-galery-2a");
  const slider2_b = document.getElementById("image-galery-2b");

  slider1_a.style.animationPlayState = "running";
  slider1_b.style.animationPlayState = "running";

  slider2_a.style.animationPlayState = "running";
  slider2_b.style.animationPlayState = "running";
}

$(document).ready(() => {
  // close image

  // Cerrar imagien con X
  $("#image-viewer .close").click(function () {
    closeImage();
  });
  // close click
  $(document).mouseup(function (e) {
    let container = $(".modal-content");

    // si no le das click a la imaen
    if (
      !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      imageIsOpen
    ) {
      closeImage();
    }
  });
  // Keys
  $(document).keyup(function (e) {
    if (e.key === "Escape" && imageIsOpen) {
      closeImage();
    }
  });
});
