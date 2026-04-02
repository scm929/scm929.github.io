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
