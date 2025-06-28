// Target both .image-container and .fade-in elements
const fadeElements = document.querySelectorAll('.image-container, .fade-in');

function handleScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerPoint) {
      el.classList.add('show');
    }
  });
}

// Initial check when page loads
handleScroll();

// Event listener for scrolling
window.addEventListener('scroll', handleScroll);

const parallaxImage = document.querySelector('.image-container');

function handleParallax() {
  const scrollY = window.scrollY;
  if (parallaxImage) {
    parallaxImage.style.backgroundPositionY = `${scrollY * 0.3}px`;
  }
}

// Call Parallax on scroll
window.addEventListener('scroll', handleParallax);

// Scroll-To-Top Button
const scrollButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});
scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

if (lightbox && lightboxImage && lightboxClose) {
  document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', e => {
      lightboxImage.src = e.target.src;
      lightbox.style.display = 'flex';
    });
  });
  
  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
}
fetch('./research.json')