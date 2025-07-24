<script>
const canvas = document.getElementById("cyclistCanvas");
const ctx = canvas.getContext("2d");

const cyclist = new Image();
cyclist.src = "{{ 'assets/images/Cyclist.png' | relative_url }}"; 

let angle = 0;
let centerX = 400;
let centerY = 200;
let radius = 150;

function animateCyclist() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate position on loop
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.drawImage(cyclist, -20, -20, 40, 40);
  ctx.restore();

  angle += 0.01;
  requestAnimationFrame(animateCyclist);
}

cyclist.onload = () => animateCyclist();
</script>
