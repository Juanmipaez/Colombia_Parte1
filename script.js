// script.js
const sections = document.querySelectorAll('.parallax-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.3 });
sections.forEach(section => observer.observe(section));

// Modales
const openModal = id => document.getElementById(id).style.display = 'flex';
const closeModal = id => document.getElementById(id).style.display = 'none';
document.querySelectorAll('.btn-info').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.target)));
document.querySelectorAll('.close').forEach(span => span.addEventListener('click', () => closeModal(span.dataset.target)));
window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) e.target.style.display = 'none';
});
