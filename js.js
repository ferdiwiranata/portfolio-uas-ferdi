function scrollDown() {
    alert("Welcome to Cyber Portfolio 🚀");
}

/* Subtle background animation */
let hue = 0;
function bgAnimate() {
  document.body.style.background = `hsl(${hue},40%,5%)`;
  hue = (hue + 0.1) % 360;
  requestAnimationFrame(bgAnimate);
}
bgAnimate();

// ===== Simple Particles (Lightweight) =====
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: Math.random() * 0.5,
        dy: Math.random() * 0.5
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00eaff";

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x > canvas.width) p.x = 0;
        if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(drawParticles);
}

drawParticles();

const boxes = document.querySelectorAll('.about-box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

boxes.forEach(box => observer.observe(box));

function scrollToAbout() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
}

const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  const sc = window.scrollY;

  // Navbar shrink
  navbar.classList.toggle("shrink", sc > 80);

  // Navbar hide
  if (sc > lastScroll && sc > 150) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }
  lastScroll = sc;

  // Project reveal
  projectCards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });

  // About reveal
  if (about.getBoundingClientRect().top < window.innerHeight * 0.7) {
    about.classList.add("active");
  }
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Pesan berhasil dikirim!");
    contactForm.reset();
});

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
const trail = document.querySelector('.cursor-trail');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
let trailX = 0, trailY = 0;

/* MOUSE MOVE */
document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

/* SMOOTH FOLLOW */
function animate() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    trailX += (mouseX - trailX) * 0.08;
    trailY += (mouseY - trailY) * 0.08;

    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    trail.style.left = trailX + 'px';
    trail.style.top = trailY + 'px';

    requestAnimationFrame(animate);
}
animate();

/* MAGNETIC + GLITCH */
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.classList.add('active', 'glitch');
    });

    el.addEventListener('mouseleave', () => {
        ring.classList.remove('active', 'glitch');
    });

    el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        ringX += (x - ringX) * 0.25;
        ringY += (y - ringY) * 0.25;
    });
});

/* ===== 3D PARALLAX ===== */
const tilt = document.querySelector('[data-tilt]');

document.addEventListener('mousemove', e => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;

    tilt.style.transform = `
        rotateY(${x}deg)
        rotateX(${y}deg)
    `;
});

/* ===== MAGNETIC BUTTON ===== */
document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0,0)';
    });
});

// ABOUT reveal effect
const about = document.querySelector('.about-max');


document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top

    const rx = ((y / r.height) - 0.5) * -12
    const ry = ((x / r.width) - 0.5) * 12

    card.style.transform =
      `translateY(-18px) rotateX(${rx}deg) rotateY(${ry}deg)`
  })

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)'
  })
})

const form = document.getElementById('contactForm')
const toast = document.getElementById('toast')

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('mousemove', e => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        link.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translate(0,0)';
    });
});

document.querySelector('.logo').addEventListener('mouseenter', () => {
    document.querySelector('.logo').classList.add('glitch');
});
document.querySelector('.logo').addEventListener('mouseleave', () => {
    document.querySelector('.logo').classList.remove('glitch');
});

const isMobile = window.innerWidth < 768;

if (isMobile) {
  document.querySelector('#particles')?.remove();
  document.body.classList.add('mobile-lite');
}

const hoverSound = new Audio("assets/hover.mp3");
  
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();