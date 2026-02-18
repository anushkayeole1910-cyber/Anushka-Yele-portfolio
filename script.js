const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e=>{
glow.style.left = e.pageX+"px";
glow.style.top = e.pageY+"px";

});
// Hamburger menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}

