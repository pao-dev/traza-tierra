// Get a reference to an element
var square = document.querySelector(".main-content");

// Create a manager to manager the element
var manager = new Hammer.Manager(square);

// Create a recognizer
var Swipe = new Hammer.Swipe();

// Add the recognizer to the manager
manager.add(Swipe);

// Declare global variables to swiped correct distance
var deltaX = 0;
var deltaY = 0;

// const interfaceLeftNavigation = [
//   {
//     id: "interface-left-item-1",
//     itemIndex: 0,
//     href: "#home",
//     destination: "section-home",
//   },
//   {
//     id: "interface-left-item-2",
//     itemIndex: 1,
//     href: "#about",
//     destination: "section-about",
//   },
//   {
//     id: "interface-left-item-3",
//     itemIndex: 2,
//     href: "#portfolio",
//     destination: "section-portfolio",
//   },
//   {
//     id: "interface-left-item-4",
//     itemIndex: 3,
//     href: "#contact",
//     destination: "project4",
//   },
// ];

// Subscribe to a desired event
manager.on("swipeleft", function (e) {
  console.log(z);
  switch (z) {
    case 0:
      document.getElementById("section-about").scrollIntoView({
        behavior: "smooth",
      });
      z = "section-about";
      break;

    case "section-home":
      document.getElementById("section-about").scrollIntoView({
        behavior: "smooth",
      });
      z = "section-about";
      break;
    case "section-about":
      document.getElementById("section-portfolio").scrollIntoView({
        behavior: "smooth",
      });

      z = "section-portfolio";
      break;
    case "section-portfolio":
      document.getElementById("project4").scrollIntoView({
        behavior: "smooth",
      });
      z = "project4";
      break;

    default:
      break;
  }

  changeNav("#" + z);
});

manager.on("swiperight", function (e) {
  console.log(z);
  switch (z) {
    case "section-about":
      document.getElementById("section-home").scrollIntoView({
        behavior: "smooth",
      });

      z = "section-home";
      break;

    case "section-portfolio":
      console.log("portfolio");
      document.getElementById("section-about").scrollIntoView({
        behavior: "smooth",
      });

      z = "section-about";
      break;

    case "project4":
      document.getElementById("section-portfolio").scrollIntoView({
        behavior: "smooth",
      });

      z = "section-portfolio";
      break;

    default:
      break;
  }

  changeNav("#" + z);
});
