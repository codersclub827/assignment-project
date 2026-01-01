const btn = document.getElementById("createBtn");
const container = document.getElementById("container");

let count = 1;

const colors = ["#ff6b6b", "#6bc5ff", "#6bff95", "#f9ff6b", "#c56bff"];
const emojis = ["😀", "🚀", "✨", "🔥", "🎉"];

btn.addEventListener("click", () => {
  const div = document.createElement("div");

  const color = colors[Math.floor(Math.random() * colors.length)];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  div.textContent = `${emoji} Creative Div ${count}`;
  div.style.backgroundColor = color;
  div.style.padding = "15px";
  div.style.margin = "10px";
  div.style.borderRadius = "10px";
  div.style.cursor = "pointer";
  div.style.transition = "0.4s";

  div.addEventListener("mouseover", () => {
    div.style.transform = "scale(1.05)";
  });

  div.addEventListener("mouseout", () => {
    div.style.transform = "scale(1)";
  });

  div.addEventListener("click", () => {
    div.remove();
  });

  container.appendChild(div);
  count++;
});
