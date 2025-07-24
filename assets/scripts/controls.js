<script>
let side = "left"; // default loop side

document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "l") {
    centerX = 250; // left loop center
    side = "left";
  } else if (e.key.toLowerCase() === "r") {
    centerX = 550; // right loop center
    side = "right";
  }
});
</script>
