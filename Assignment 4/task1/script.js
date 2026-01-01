const body = document.getElementById("body");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const btn = document.getElementById("btn");

let isDark = false;

body.style.transition = "0.5s";

btn.addEventListener("click", () => {
  if (!isDark) {
    body.style.backgroundColor = "#121212";
    body.style.color = "#00ffcc";

    title.textContent = "🌙 Dark Mode";
    desc.textContent = "Dark mode activated for your eyes 😎";

    btn.textContent = "🌞 Light Mode";
    btn.style.backgroundColor = "#00ffcc";

    isDark = true;
  } else {
    body.style.backgroundColor = "#f5f5f5";
    body.style.color = "#222";

    title.textContent = "🌞 Light Mode";
    desc.textContent = "Light mode activated ☀️";

    btn.textContent = "🌙 Dark Mode";
    btn.style.backgroundColor = "#ddd";

    isDark = false;
  }
});
