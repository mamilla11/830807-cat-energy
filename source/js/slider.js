/*******************************************************************
*** VARIABLES ******************************************************
********************************************************************/
const tabletWidth = 768;
var range = document.querySelector(".slider__range");
var toggler = document.querySelector(".slider__toggler");
var beforeImage = document.querySelector(".slider__resizable");
var buttonBefore = document.querySelector(".slider__button--before");
var buttonAfter = document.querySelector(".slider__button--after");
var rangeWidth, togglerWidth;
var leftLimit, rightLimit, center;
var viewport;

/*******************************************************************
*** FUNCTIONS ******************************************************
********************************************************************/
function init() {
  addTogglerHandler();
  resize();
};

function resize() {
  viewport = window.innerWidth;
  rangeWidth = getElemWidth(range);
  togglerWidth = getElemWidth(toggler);
  leftLimit = 0 + (togglerWidth / 2);
  rightLimit = rangeWidth - (togglerWidth / 2) + 1;
  center = (rangeWidth / 2) + 1;

  if (viewport < tabletWidth) {
    beforeImage.style.width = "100%";
    range.classList.add("slider__range--before");
  }
  else {
    beforeImage.style.width = "50%";
    range.classList.remove("slider__range--before");
    range.classList.remove("slider__range--after");
  }
}

function getElemWidth(elem) {
  return parseInt(getComputedStyle(elem).width, 10);
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return box.left + pageXOffset;
};

function addTogglerHandler() {
  toggler.addEventListener("mousedown", togglerDownHandler);
};

function togglerDownHandler(evt) {
  var togglerCoords = getCoords(toggler);
  var rangeCoords = getCoords(range);

  var shiftX = evt.pageX - togglerCoords;

  document.onmousemove = function(evt) {
    var moveTo = evt.pageX - shiftX - rangeCoords;

    if (moveTo < leftLimit) {
      moveTo = leftLimit;
    }

    if (moveTo > rightLimit) {
      moveTo = rightLimit;
    }

    toggler.style.left = moveTo + "px";
    var imageSize = 100 - (moveTo / rightLimit * 100);
    beforeImage.style.width = imageSize + "%";
  };

  document.onmouseup = function () {
    document.onmousemove = document.onmouseup = null;
  };
};

/*******************************************************************
*** EVENT HANDLERS *************************************************
********************************************************************/
window.addEventListener("load", init);
window.addEventListener("resize", resize);

buttonBefore.addEventListener("click", function(evt) {
  evt.preventDefault();
  beforeImage.style.width = "100%";

  if (viewport < tabletWidth) {
    range.classList.remove("slider__range--after");
    range.classList.add("slider__range--before");
  }
  else {
    toggler.style.left = leftLimit + "px";
  }
});

buttonAfter.addEventListener("click", function (evt) {
  evt.preventDefault();
  beforeImage.style.width = "0";

  if (viewport < tabletWidth) {
    range.classList.remove("slider__range--before");
    range.classList.add("slider__range--after");
  }
  else {
    toggler.style.left = rightLimit + "px";
  }
});

toggler.addEventListener("dblclick", function () {
  beforeImage.style.width = "50%";
  toggler.style.left = center + "px";
});
