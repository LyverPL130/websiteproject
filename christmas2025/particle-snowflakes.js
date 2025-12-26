const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let width, height, snowflakes;

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    snowflakes = [];
    for (let i = 0; i < 150; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 4 + 1,
            speed: Math.random() * 3 + 1,
            opacity: Math.random()
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

    snowflakes.forEach(flake => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();

        flake.y += flake.speed;
        flake.x += Math.sin(flake.y / 30); 

        if (flake.y > height) {
            flake.y = -10;
            flake.x = Math.random() * width;
        }
    });

    requestAnimationFrame(draw);
}

window.addEventListener('resize', init);
init();
draw();
const alert_message = document.getElementById('alert-message');
const body = document.body;
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        // 直向模式
        alert_message.classList.add('open');
        body.classList.add('no-scroll');
    } else {
        // 橫向模式
        alert_message.classList.remove('open');
        body.classList.remove('no-scroll');
    }
}

window.addEventListener('resize', checkOrientation);

checkOrientation();
const button = document.getElementById('close');
button.addEventListener('click', function() { 
    alert_message.classList.remove('open')
    body.classList.remove('no-scroll');
});