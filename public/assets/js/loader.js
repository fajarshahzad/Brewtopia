// Show loader for at least 1 seconds
window.addEventListener("load", function() {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1000); // 1000ms = 1 seconds
});
