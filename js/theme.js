const themes = ["theme-rhode-island", "theme-arizona", "theme-tokyo", "theme-dublin"];

const themeEmojis = {
  "theme-rhode-island": "🌊",
  "theme-arizona": "🌵",
  "theme-tokyo": "🌳",
  "theme-dublin": "☘️",
};

const themeImages = {
  "theme-rhode-island": "assets/images/bg-rhode-island.jpeg",
  "theme-arizona": "assets/images/bg-arizona.jpeg",
  "theme-tokyo": "assets/images/bg-tokyo.jpeg",
  "theme-dublin": "assets/images/bg-dublin.jpeg",
};

const themeColors = {
  "theme-rhode-island": "#3a6b6e",
  "theme-arizona": "#b5651d",
  "theme-tokyo": "#6b5b6e",
  "theme-dublin": "#2d5a27",
};

// Preload all theme images so switching is instant
Object.values(themeImages).forEach(src => {
  const img = new Image();
  img.src = src;
});

const savedTheme = localStorage.getItem("theme") || "theme-rhode-island";
document.body.classList.add(savedTheme);

let transitioning = false;

function setTheme(themeName, animate = true) {
  const swap = () => {
    themes.forEach((t) => document.body.classList.remove(t));
    document.body.classList.add(themeName);
    document.querySelectorAll("[data-theme]").forEach((btn) => {
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

  if (transitioning) return;
  transitioning = true;

  const overlay = document.getElementById("theme-overlay");
  overlay.style.backgroundColor = themeColors[themeName];
  overlay.style.backgroundImage = `url("${themeImages[themeName]}")`;
  overlay.style.opacity = "1";

  setTimeout(() => {
    swap();
    overlay.style.opacity = "0";
    setTimeout(() => { transitioning = false; }, 300);
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme(savedTheme, false);

  document.querySelectorAll("[data-theme]").forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.dataset.theme));
  });
});
