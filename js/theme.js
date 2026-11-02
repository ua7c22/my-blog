// theme.js —— 粒子背景动画
(function () {
    var canvas = document.createElement('canvas');
    canvas.id = 'bg-particles';
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var W, H, dots = [];

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var N = 70;
    for (var i = 0; i < N; i++) {
        dots.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 1.6 + 0.4,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35
        });
    }

    function loop() {
        ctx.clearRect(0, 0, W, H);
        for (var i = 0; i < dots.length; i++) {
            var d = dots[i];
            d.x += d.vx;
            d.y += d.vy;
            if (d.x < 0 || d.x > W) d.vx *= -1;
            if (d.y < 0 || d.y > H) d.vy *= -1;
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 212, 255, 0.45)';
            ctx.fill();
        }
        requestAnimationFrame(loop);
    }
    loop();
})();
