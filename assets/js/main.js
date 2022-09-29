"use strict";

const section = document.querySelector(".section-gallery");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");

  observer.unobserve(entry);
};

const sectionObserve = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

section.classList.add("section-hidden");
sectionObserve.observe(section);
