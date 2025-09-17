//index.js
// 1. Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");
  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay);

  function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
    hamburger.classList.add("active");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  hamburger.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);

  // When click link in menu -> auto close
  document.querySelectorAll(".menu .links").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});


// 2. Audio Control
const music = document.getElementById("background-music");
const musicBtn = document.getElementById("music-toggle-btn");
const musicIcon = musicBtn.querySelector("i");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicIcon.classList.remove("fa-volume-mute");
    musicIcon.classList.add("fa-volume-up");
  } else {
    music.pause();
    musicIcon.classList.remove("fa-volume-up");
    musicIcon.classList.add("fa-volume-mute");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  music.muted = true;
  music.play(); 
  musicIcon.classList.remove("fa-volume-up");
  musicIcon.classList.add("fa-volume-mute");

  document.body.addEventListener(
    "click",
    () => {
      music.muted = false;
    },
    { once: true }
  ); 
});

// 3. Card hover sound effect and modal functionality
const cards = document.querySelectorAll('.port-card');
const hoverSound = document.getElementById('hoverSound');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play();
    }
  });

  card.addEventListener('click', () => {
    const targetId = card.getAttribute('data-target');
    const modal = document.getElementById(targetId);

    if (modal) {
      modal.classList.add('active');
    }
  });
});

// 4. Add close functionality for all modals
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.port-card');
  const closeBtns = document.querySelectorAll('.popup .close-btn');
  const overlays = document.querySelectorAll('.popup .overlay');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.getAttribute('data-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add('active');
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.popup');
      if (modal) {
        modal.classList.remove('active');
      }
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      const modal = overlay.closest('.popup');
      if (modal) {
        modal.classList.remove('active');
      }
    });
  });
});



// 6. Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 7. Image Slider
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  slides.style.transform = `translateX(${-index * 400}px)`; 
}

prev.addEventListener("click", () => showSlide(index - 1));
next.addEventListener("click", () => showSlide(index + 1));
