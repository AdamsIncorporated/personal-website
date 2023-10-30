const particleContainer = document.querySelector('.particle-container');

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
  particle.style.animationDelay = `${Math.random() * 2}s`;
  particleContainer.appendChild(particle);
}

// Create a number of particles
const numParticles = 100;
for (let i = 0; i < numParticles; i++) {
  createParticle();
}
