// ── Section navigation ────────────────────────────────────────────────────
const navItems = document.querySelectorAll("[data-section]");
const sections = document.querySelectorAll("main section");

function setActiveSection(targetId) {
  navItems.forEach((navItem) => navItem.classList.remove("active"));
  sections.forEach((section) => section.classList.add("hidden"));

  const targetSection = document.getElementById(targetId);
  const targetNavItem = document.querySelector(`[data-section="${targetId}"]`);

  if (targetSection) targetSection.classList.remove("hidden");
  if (targetNavItem) targetNavItem.classList.add("active");
}

setActiveSection("start-here");

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveSection(item.dataset.section);
  });
});

// ── Location theme switcher ───────────────────────────────────────────────
// All possible theme class names — used to remove the old one before adding
// the new one when switching locations.
const themes = ["theme-rhode-island", "theme-arizona", "theme-tokyo", "theme-dublin"];

const themeButtons = document.querySelectorAll("[data-theme]");

function setTheme(themeName, animate = true) {
  const swap = () => {
    // Remove any existing theme class from <body>
    themes.forEach((t) => document.body.classList.remove(t));

    // Add the new theme class
    document.body.classList.add(themeName);

    // Mark the correct button as active
    themeButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === themeName);
    });

    // Remember the choice so it persists on page reload
    localStorage.setItem("theme", themeName);
  };

  if (!animate) {
    swap();
    return;
  }

  // Fade out → swap background image → fade back in
  document.body.style.opacity = "0";
  setTimeout(() => {
    swap();
    document.body.style.opacity = "1";
  }, 200);
}

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => setTheme(btn.dataset.theme));
});

// On page load, restore the last chosen theme without animating
const savedTheme = localStorage.getItem("theme") || "theme-rhode-island";
setTheme(savedTheme, false);
