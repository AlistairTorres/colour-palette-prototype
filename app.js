const palette = document.querySelector("#palette");
const status = document.querySelector("#status");
const values = [];

function randomColour() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function setStatus(message) {
  status.textContent = message;
}

function render() {
  palette.replaceChildren();
  values.length = 0;

  for (let i = 0; i < 5; i += 1) {
    const colour = randomColour();
    values.push(colour);

    const item = document.createElement("button");
    item.type = "button";
    item.className = "colour-swatch";
    item.style.setProperty("--swatch", colour);
    item.dataset.colour = colour;
    item.textContent = colour;
    item.setAttribute("aria-label", "Copy " + colour);
    palette.append(item);
  }
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus("Copied " + text + " to the clipboard.");
  } catch {
    setStatus("Clipboard access was unavailable. Select the value manually: " + text);
  }
}

document.querySelector("#generate").addEventListener("click", () => {
  render();
  setStatus("Generated a new palette.");
});

document.querySelector("#copy-all").addEventListener("click", () => {
  copy(values.join(", "));
});

palette.addEventListener("click", (event) => {
  const colour = event.target.dataset.colour;
  if (colour) copy(colour);
});

render();
