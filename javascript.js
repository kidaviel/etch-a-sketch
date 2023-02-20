// Call this to create a div element
const container = document.querySelector(".grid-container");

let sketchWidth = 16;
let sketchHeight = 16;

function hover() {
  this.setAttribute("background-color: black");
}

function makeGrid(width, height) {
  for (let i = 1; i <= width * height; i++) {
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      "border-color: black; border-style: solid; border-width: 1px; width: 16px; height: 16px;"
    );
    div.className = "grid";

    container.appendChild(div);
  }
}

makeGrid(sketchWidth, sketchHeight);

function executeSketchArea() {
  const sktechArea = document.querySelectorAll(".grid");
  sktechArea.forEach((cell) =>
    cell.addEventListener("mouseenter", () =>
      cell.setAttribute("style", "background-color: black")
    )
  );
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function changeCSS() {
  document.querySelector(
    ".grid-container"
  ).style.gridTemplateColumns = `repeat(${criteria}, 16px)`;
}

function executeChangeGrid(criteria) {
  for (let i = 1; i <= criteria * criteria; i++) {
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      "border-color: black; border-style: solid; border-width: 1px; width: 16px; height: 16px;"
    );
    div.className = "grid";
    // changeCSS();
    const CSS = document.querySelector(".grid-container");
    CSS.style.gridTemplateColumns = `repeat(${criteria}, 16px)`;
    CSS.style.gridTemplateRows = `repeat(${criteria}, 16px)`;

    container.appendChild(div);
  }
}

function changeGrid() {
  let dimensions = prompt("enter dimensions");
  const removeGrid = document.querySelector(".grid-container");
  removeAllChildNodes(removeGrid);
  executeChangeGrid(dimensions);
  executeSketchArea();
}

const changeGridButton = document.querySelector(".button");

changeGridButton.addEventListener("click", changeGrid);

executeSketchArea();
