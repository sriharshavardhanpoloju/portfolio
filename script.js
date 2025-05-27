// Animate fade-up sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-up');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;

      // Optional: Add a delay based on index
      entry.target.style.transitionDelay = `${index * 0.1}s`;

      // Trigger fade-in
      entry.target.classList.add('appear');

      // Stop observing this element
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
