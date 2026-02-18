const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e=>{
glow.style.left = e.pageX+"px";
glow.style.top = e.pageY+"px";

});
<script>
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
</script>
