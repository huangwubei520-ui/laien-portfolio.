const works = [
  {
    title: "Smart Living KV",
    meta: "Product campaign / Visual direction",
    year: "2025",
    src: "assets/work-01.jpg",
    ratio: 1.778,
    x: -0.28,
    y: -0.14,
    w: 480,
    focus: 0.04,
    speed: 2.05,
    z: -80,
    rotate: -7,
  },
  {
    title: "Winter Utility KV",
    meta: "Seasonal product story",
    year: "2025",
    src: "assets/work-02.jpg",
    ratio: 1.778,
    x: 0.24,
    y: 0.08,
    w: 540,
    focus: 0.11,
    speed: 1.92,
    z: -180,
    rotate: 5,
  },
  {
    title: "CES Launch KV",
    meta: "Launch visual / Global event",
    year: "2025",
    src: "assets/work-03.jpg",
    ratio: 1.778,
    x: -0.04,
    y: 0.25,
    w: 600,
    focus: 0.18,
    speed: 2.2,
    z: 80,
    rotate: 2,
  },
  {
    title: "HDH003 Brand KV",
    meta: "Brand campaign system",
    year: "2025",
    src: "assets/work-04.jpg",
    ratio: 1.778,
    x: 0.34,
    y: -0.2,
    w: 430,
    focus: 0.245,
    speed: 1.8,
    z: -240,
    rotate: 9,
  },
  {
    title: "HPF012 KV",
    meta: "Product hero composition",
    year: "2025",
    src: "assets/work-05.jpg",
    ratio: 1.778,
    x: -0.34,
    y: 0.18,
    w: 460,
    focus: 0.31,
    speed: 2.28,
    z: -140,
    rotate: -9,
  },
  {
    title: "KMF004 High Speed",
    meta: "Performance-led KV",
    year: "2025",
    src: "assets/work-06.jpg",
    ratio: 1.778,
    x: 0.08,
    y: -0.04,
    w: 620,
    focus: 0.375,
    speed: 1.96,
    z: 120,
    rotate: -2,
  },
  {
    title: "WML Heaters EU",
    meta: "Regional product launch",
    year: "2025",
    src: "assets/work-07.jpg",
    ratio: 1.778,
    x: 0.33,
    y: 0.22,
    w: 470,
    focus: 0.44,
    speed: 2.1,
    z: -120,
    rotate: 8,
  },
  {
    title: "Summer Major KV",
    meta: "Seasonal campaign / Key art",
    year: "2025",
    src: "assets/work-08.jpg",
    ratio: 1.396,
    x: -0.24,
    y: -0.2,
    w: 420,
    focus: 0.505,
    speed: 1.82,
    z: -210,
    rotate: -5,
  },
  {
    title: "Summer AC KV",
    meta: "Cooling season campaign",
    year: "2025",
    src: "assets/work-09.jpg",
    ratio: 1.396,
    x: 0.16,
    y: 0.08,
    w: 480,
    focus: 0.57,
    speed: 2.04,
    z: 60,
    rotate: 5,
  },
  {
    title: "KWF002 Water Filter",
    meta: "Product benefit story",
    year: "2025",
    src: "assets/work-10.jpg",
    ratio: 1.779,
    x: -0.36,
    y: 0.22,
    w: 520,
    focus: 0.635,
    speed: 2.22,
    z: -160,
    rotate: 7,
  },
  {
    title: "Water Filter Family",
    meta: "Dark product lineup KV",
    year: "2025",
    src: "assets/work-11.jpg",
    ratio: 2.164,
    x: 0.04,
    y: -0.18,
    w: 650,
    focus: 0.7,
    speed: 1.88,
    z: 150,
    rotate: -3,
  },
  {
    title: "Humidifier Line",
    meta: "Product line visual",
    year: "2025",
    src: "assets/work-12.jpg",
    ratio: 1.778,
    x: 0.34,
    y: 0.18,
    w: 430,
    focus: 0.765,
    speed: 2.16,
    z: -230,
    rotate: -8,
  },
  {
    title: "Milk Frother KV",
    meta: "Lifestyle product story",
    year: "2025",
    src: "assets/work-13.jpg",
    ratio: 1.778,
    x: -0.14,
    y: 0.02,
    w: 540,
    focus: 0.83,
    speed: 1.98,
    z: 40,
    rotate: 4,
  },
  {
    title: "Heater Product Line",
    meta: "Lineup campaign key visual",
    year: "2025",
    src: "assets/work-14.jpg",
    ratio: 1.778,
    x: -0.34,
    y: -0.22,
    w: 470,
    focus: 0.895,
    speed: 2.18,
    z: -170,
    rotate: -7,
  },
  {
    title: "Air Conditioner KV",
    meta: "Product launch visual",
    year: "2025",
    src: "assets/work-15.jpg",
    ratio: 1.92,
    x: 0.22,
    y: 0.14,
    w: 620,
    focus: 0.96,
    speed: 1.84,
    z: 110,
    rotate: 3,
  },
];

const scene = document.querySelector(".scene");
const archiveGrid = document.querySelector(".archive-grid");
const cursor = document.querySelector(".cursor");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxMeta = document.querySelector("#lightbox-meta");
const closeLightboxButton = document.querySelector(".lightbox-close");

const state = {
  pointerX: 0,
  pointerY: 0,
  smoothX: 0,
  smoothY: 0,
  activeIndex: 0,
  width: window.innerWidth,
  height: window.innerHeight,
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const pad = (number) => String(number + 1).padStart(2, "0");

works.forEach((work, index) => {
  const button = document.createElement("button");
  button.className = "work-card";
  button.type = "button";
  button.style.setProperty("--ratio", work.ratio);
  button.setAttribute("aria-label", `Open ${work.title}`);
  button.innerHTML = `
    <img src="${work.src}" alt="${work.title}" loading="${index < 4 ? "eager" : "lazy"}" />
    <span class="work-label">
      <span>${work.title}</span>
      <span>${pad(index)}</span>
    </span>
  `;
  button.addEventListener("click", () => openLightbox(index));
  button.addEventListener("mouseenter", () => cursor?.classList.add("is-active"));
  button.addEventListener("mouseleave", () => cursor?.classList.remove("is-active"));
  scene.appendChild(button);
  work.el = button;

  const archiveButton = document.createElement("button");
  archiveButton.className = "archive-card";
  archiveButton.type = "button";
  archiveButton.setAttribute("aria-label", `Open ${work.title}`);
  archiveButton.innerHTML = `
    <img src="${work.src}" alt="${work.title}" loading="lazy" />
    <span class="archive-caption">
      <strong>${work.title}</strong>
      <span>${pad(index)}</span>
    </span>
  `;
  archiveButton.addEventListener("click", () => openLightbox(index));
  archiveButton.addEventListener("mouseenter", () => cursor?.classList.add("is-active"));
  archiveButton.addEventListener("mouseleave", () => cursor?.classList.remove("is-active"));
  archiveGrid.appendChild(archiveButton);
});

function updateActiveWork(nextIndex) {
  if (nextIndex === state.activeIndex) {
    return;
  }

  works[state.activeIndex]?.el.classList.remove("is-near");
  state.activeIndex = nextIndex;
  works[nextIndex].el.classList.add("is-near");
}

function render(now = 0) {
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  state.smoothX += (state.pointerX - state.smoothX) * 0.07;
  state.smoothY += (state.pointerY - state.smoothY) * 0.07;

  const mobile = state.width < 680;
  const centerX = state.width / 2;
  const centerY = state.height * (mobile ? 0.51 : 0.5);
  const baseSize = mobile
    ? clamp(state.width * 0.25, 86, 116)
    : clamp(state.width * 0.096, 118, 178);
  const orbitX = state.width * (mobile ? 0.62 : 0.56);
  const orbitY = state.height * (mobile ? 0.46 : 0.55);
  const autoOrbit = state.reducedMotion ? 0 : now * 0.00012;
  let activeIndex = state.activeIndex;
  let activeScore = Infinity;

  works.forEach((work, index) => {
    const ring = 0.82 + (index % 5) * 0.085;
    const phase = (Math.PI * 2 * index) / works.length + (index % 2) * 0.18;
    const angle = phase + autoOrbit;
    const depth = (Math.sin(angle) + 1) / 2;
    const width = baseSize * (0.76 + (index % 4) * 0.11) * (0.88 + depth * 0.42);
    const height = width / 1.14;
    const cardCenterX =
      centerX +
      Math.cos(angle) * orbitX * ring +
      Math.cos(angle * 2.1) * state.width * 0.024 +
      state.smoothX * (mobile ? 8 : 24) * (0.65 + depth);
    const cardCenterY =
      centerY +
      Math.sin(angle) * orbitY * ring +
      Math.sin(angle * 1.72) * state.height * 0.036 +
      state.smoothY * (mobile ? 7 : 20) * (0.65 + depth);
    const clearZone = Math.hypot(
      (cardCenterX - centerX) / (state.width * (mobile ? 0.38 : 0.29)),
      (cardCenterY - centerY) / (state.height * (mobile ? 0.24 : 0.25)),
    );
    const centerFade = clamp((clearZone - 0.72) / 0.42, 0.12, 1);
    const lowerFade = clamp((state.height - cardCenterY + state.height * 0.05) / (state.height * 0.28), 0.08, 1);
    const opacity = clamp((0.26 + depth * 0.72) * centerFade * lowerFade, 0.06, 1);
    const blur = state.reducedMotion ? 0 : clamp((1 - depth) * 1.5 + (1 - centerFade) * 4.2, 0, 5.4);
    const brightness = clamp(0.9 + depth * 0.16, 0.82, 1.06);
    const rotateX = state.smoothY * -2.8 + (depth - 0.5) * 10;
    const rotateY = state.smoothX * 3.2 + Math.cos(angle) * 9;
    const rotateZ = work.rotate + Math.sin(angle) * 11;
    const scale = clamp(0.78 + depth * 0.34, 0.68, 1.12);
    const x = cardCenterX - width / 2;
    const y = cardCenterY - height / 2;
    const frontDistance = Math.abs(Math.atan2(Math.sin(angle - Math.PI / 2), Math.cos(angle - Math.PI / 2)));
    const score = frontDistance - depth * 0.18 + (1 - centerFade) * 0.4;

    if (score < activeScore) {
      activeScore = score;
      activeIndex = index;
    }

    work.el.style.setProperty("--card-w", `${width}px`);
    work.el.style.opacity = opacity;
    work.el.style.filter = `blur(${blur}px) brightness(${brightness})`;
    work.el.style.transform = `
      translate3d(${x}px, ${y}px, ${depth * 120}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      rotateZ(${rotateZ}deg)
      scale(${scale})
    `;
    work.el.style.zIndex = String(Math.round(100 + depth * 160));
  });

  updateActiveWork(activeIndex);
  requestAnimationFrame(render);
}

function openLightbox(index) {
  const work = works[index];
  lightboxImage.src = work.src;
  lightboxImage.alt = work.title;
  lightboxTitle.textContent = work.title;
  lightboxMeta.textContent = `${work.meta} / ${work.year}`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  closeLightboxButton.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

window.addEventListener("pointermove", (event) => {
  state.pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
  state.pointerY = (event.clientY / window.innerHeight - 0.5) * 2;

  if (cursor) {
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
  }
});

window.addEventListener("resize", () => {
  state.width = window.innerWidth;
  state.height = window.innerHeight;
});

closeLightboxButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

works[0].el.classList.add("is-near");
requestAnimationFrame(render);
