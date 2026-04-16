// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Form submit

function sendEmail(e) {
  e.preventDefault();

  const form = e.target;

  emailjs.send("service_yodfvhf", "template_0go4iy4", {
    from_name: form[0].value,
    email: form[2].value,
    message: form[3].value
  })
  .then(() => {
    const btn = form.querySelector('button');
    btn.textContent = '✅ Message Sent!';
    btn.style.background = '#10b981';
    form.reset();
  })
  .catch(() => {
    alert("Error sending ❌");
  });
}


