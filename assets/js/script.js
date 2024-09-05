// Hero Section Video Play/Pause Btn Functionality
const heroVideo = document.querySelector(
  ".hero_section .hero_video_container video"
);
const heroVideoBtn = document.querySelector(
  ".hero_section .hero_video_container .play-pause-btn"
);

heroVideoBtn.addEventListener("click", () => {
  heroVideoBtn.classList.toggle("paused");
  if (heroVideoBtn.classList.contains("paused")) {
    heroVideo.pause();
  } else {
    heroVideo.play();
  }
});

// Animated Services Cards Play/Pause Functionality

const servicesCardsElem = document.querySelector(
  ".services_cards_a_container > ul"
);
const servicesCardsAnimBtn = document.querySelector(
  ".services_cards_a_container > .play-pause-btn"
);

servicesCardsAnimBtn.addEventListener("click", () => {
  servicesCardsAnimBtn.classList.toggle("paused");
  servicesCardsElem.classList.toggle("paused");
});
