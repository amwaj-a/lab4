let reset = document.getElementById("reset");
let box = document.getElementById("box");

function edit(value, i) {
  i.getAttribute("id") == "width"
    ? (box.style.width = `${value}vw`)
    : i.getAttribute("id") == "height"
    ? (box.style.height = `${value}vh`)
    : (box.style.backgroundColor = `${value}`);
}

reset.addEventListener("click", () => {
  box.style.width = "30vw";
  box.style.height = "40vh";
  box.style.backgroundColor = "blue";
});
