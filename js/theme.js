const themes = ["theme-rhode-island", "theme-arizona", "theme-tokyo", "theme-dublin"];

const themeEmojis = {
  "theme-rhode-island": "🌊",
  "theme-arizona": "🌵",
  "theme-tokyo": "🌳",
  "theme-dublin": "☘️",
};

const themeButtons = document.querySelectorAll("[data-theme]");

function setTheme(themeName, animate = true) {
  const swap = () => {
    themes.forEach((t) => document.body.classList.remove(t));
    document.body.classList.add(themeName);
    themeButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === themeName);
    });
    localStorage.setItem("theme", themeName);
    const emoji = themeEmojis[themeName];
    document.getElementById("favicon").href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`;
  };

  if (!animate) {
    swap();
    return;
  }

  document.body.style.opacity = "0";
  setTimeout(() => {
    swap();
    document.body.style.opacity = "1";
  }, 200);
}

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => setTheme(btn.dataset.theme));
});

const savedTheme = localStorage.getItem("theme") || "theme-rhode-island";
setTheme(savedTheme, false);
