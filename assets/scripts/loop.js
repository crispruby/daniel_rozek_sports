<script>
const canvas = document.getElementById("loopCanvas");
const ctx = canvas.getContext("2d");

// Infinity loop path
function drawTrack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#888";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(250, 200, 100, 0, Math.PI * 2); // Left circle
  ctx.arc(550, 200, 100, 0, Math.PI * 2); // Right circle
  ctx.stroke();
}

// Cyclist image setup
const cyclist = new Image();
cyclist.src = "{{ 'assets/images/CyclistLoopFigure.png' | relative_url }}";

// Position
let angle = 0;
let side = "left"; // left or right loop

function animateCyclist() {
  drawTrack();

  const radius = 100;
  const centerX = side === "left" ? 250 : 550;
  const centerY = 200;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.drawImage(cyclist, -20, -20, 40, 40);
  ctx.restore();

  angle += 0.02;
  requestAnimationFrame(animateCyclist);
}

// Key control
document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "l") side = "left";
  else if (e.key.toLowerCase() === "r") side = "right";
});

// Kickstart animation
cyclist.onload = () => animateCyclist();
</script>
