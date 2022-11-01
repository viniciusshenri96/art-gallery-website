"use strict";

// API geolocation
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    const map = L.map("map").setView(coords, 17);

    L.tileLayer("https://tile.osm.ch/switzerland/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on("click", function (eventMap) {
      const { lat, lng } = eventMap.latlng;
      L.marker([lat, lng]).addTo(map);
    });
  },
  function () {
    console.log("I didn't find your location");
  }
);

// Revealing Elements on Scroll
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
