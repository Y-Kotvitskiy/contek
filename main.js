const div = document.querySelector(".footer span");
const services = document.querySelectorAll(".service");

div.insertAdjacentHTML(
  "beforeend",
  `<span style='font-size: 0.7rem'>resolution: ${window.innerWidth} ${window.innerHeight} </span>`
);

let serviceInex = 0;
const lastServiceNumber = services.length - 1;

const showService = () => {
  return
  serviceInex = serviceInex === lastServiceNumber ? 0 : serviceInex + 1;
  services.forEach((currentService, currentIndex) => {
    if (currentIndex === serviceInex) currentService.style.opacity = 1;
    else currentService.style.opacity = 0;
  });
};

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

let interval = null;

if (isTouchDevice()) {
  interval = setInterval(showService, 3000);
}

addEventListener("resize", (e) => {
  if (!isTouchDevice()) {
    clearInterval(interval);

    services.forEach((currentService, currentIndex) => {
      currentService.style.opacity = 1;
    });
  } else {
    if (!interval) {
      interval = setInterval(showService, 3000);
    }
  }
});
