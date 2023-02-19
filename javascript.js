// Call this to create a div element
const container = document.querySelector(".grid-container");

const sketchWidth = 16;
const sketchHeight = 16;

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

const sktechArea = document.querySelectorAll(".grid");

console.log(sktechArea);
sktechArea.forEach((cell) =>
  cell.addEventListener("mouseenter", () =>
    cell.setAttribute("style", "background-color: black")
  )
);
