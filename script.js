/* ===================================================================
   SPARTAN ROTTWEILERS — Site behaviour
   Dog data below is transcribed directly from the client's own copy.
   To add/edit a dog: edit the DOGS array — the gallery and the
   lightbox "pedigree card" both render from this single source.
   =================================================================== */

const DOGS = [
  {
    name: "Legion Chevy of Spartan",
    tag: "Foundation Female",
    dob: "13 Dec 2005",
    sire: "Ch Benno vh Folconsnest (Belgium)",
    dam: "Ch Legion Anomaly",
    bio: "Our foundation female, bred via artificial insemination combining proven South African champion bloodlines with influential European genetics. Excellent breed type, sound structure, A2A2 hips, and the cornerstone of everything we've bred since.",
    photos: [
      "images/rottweiler-legion-chevy-competition.jpeg",
      "images/rottweiler-legion-chevy-alert-stance.jpeg",
      "images/rottweiler-legion-chevy-back-yard.jpeg",
      "images/rottweiler-legion-chevy-pool.jpeg"
    ]
  },
  {
    name: "Spartan Chloe",
    tag: "Female",
    dob: "04 Jul 2012",
    sire: "Ch Arzadon Tayson (Denmark)",
    dam: "Legion Chevy of Spartan",
    bio: "Bred from Chevy and the world-renowned Arzadon Tayson, using frozen semen for the first time in our program. A powerful, confident female with a strong head and commanding presence — her influence still shows in the dogs we produce today.",
    photos: [
      "images/rottweiler-chloe-stacked-stance-front.jpeg",
      "images/rottweiler-chloe-stacked-stance.jpeg",
      "images/rottweiler-chloe-alert-stance.jpeg",
      "images/rottweiler-chloe-competition.jpeg",
      "images/rottweiler-chloe-walking.jpeg",
    ]
  },
  {
    name: "Spartan Fergi \u2018Bella\u2019",
    tag: "Female",
    dob: "05 Dec 2014",
    sire: "Champ from Royal Breed (Serbia)",
    dam: "Spartan Chloe",
    bio: "A large, powerful female with a soft, outgoing temperament. An outstanding brood bitch with excellent maternal instincts — retired after two litters to protect her long-term health.",
    photos: [
      "images/rottweiler-fergi-bella-alert-stance.jpeg",
      "images/rottweiler-fergie-bella-alert.jpeg",
      "images/rottweiler-fergie-bella-laying.jpeg",
      "images/rottweiler-fergie-bella-strolling.jpeg"
    ]
  },
  {
    name: "Torbit Ella of Spartan",
    tag: "Youngest Female",
    dob: "03 Jul 2023",
    sire: "Thanos Van Wiesenstadt (Serbia)",
    dam: "Torbrit Quera",
    bio: "The future of Spartan Rottweilers. Exceptional breed type, a strong head, short muzzle, and rich mahogany markings, paired with an energetic, confident personality — rarely seen without her favourite pink ball.",
    photos: [
      "images/rottweiler-torbit-ella-sitting-park.jpeg",
      "images/rottweiler-torbit-ella-sitting.jpeg",
      "images/rottweiler-torbit-ella-on-couch.jpeg",
      "images/rottweiler-torbit-ella-puppy.jpeg"
    ]
  },
  {
    name: "Spartan Brandy",
    tag: "Bred by Us",
    dob: "08 Nov 2013",
    sire: "Legion Gibson",
    dam: "Legion Chevy of Spartan",
    bio: "A correct female with excellent breed type, a beautiful head, sound structure, and free-flowing movement — a strong example of successful line breeding within our program.",
    photos: [
      "images/rottweiler-brandy-alert-stance-side.jpeg",
      "images/rottweiler-brandy-alert-stance.jpeg",
      "images/rottweiler-brandy-puppy.jpeg"
    ]
  },
  {
    name: "Spartan Achilles \u2018Tyson\u2019",
    tag: "Stud Male",
    dob: "28 Feb 2008",
    sire: "Chanteur Salute",
    dam: "Legion Chevy of Spartan",
    bio: "From our very first litter. A powerful male standing 67cm, with exceptional bone and a strong masculine head, combining German and South African bloodlines. Loyal and stable in temperament despite his imposing size.",
    photos: [
      "images/rottweiler-achillies-tyson-sitting.jpeg",
      "images/rottweiler-achillies-tyson-laying.jpeg",
      "images/rottweiler-achillies-tyson-laying-grass.jpeg",
      "images/rottweiler-achillies-tyson-sitting-pool.jpeg"
    ]
  },
  {
    name: "Spartan Frank \u2018Bear\u2019",
    tag: "Sire",
    dob: "05 Dec 2014",
    sire: "Champ from Royal Breed (Serbia)",
    dam: "Spartan Chloe",
    bio: "Standing 68cm with exceptional size and one of the most powerful heads we've produced. Gentle and affectionate despite his presence — deeply devoted to family and adored by children.",
    photos: [
      "images/rottweiler-frank-bear-playing.jpeg",
      "images/rottweiler-frank-bear-puppy.jpeg"
    ]
  },
  {
    name: "Spartan Jackson",
    tag: "Male Bred by us",
    dob: "05 Jan 2018",
    sire: "Champ from Royal Breed (Serbia)",
    dam: "Spartan Chloe",
    bio: "From a repeat litter of only three pups. A powerful, robust male with exceptional substance, strong bone, and an impressive head.",
    photos: [
      "images/rottweiler-jackson-laying.jpeg",
      "images/rottweiler-jackson-pup-with-other-dog.jpeg",
      "images/rottweiler-jackson-puppy-laying.jpeg"
    ]
  },
  {
    name: "Spartan Astrix",
    tag: "Profile Coming Soon",
    dob: "",
    sire: "",
    dam: "",
    bio: "Full pedigree details for Astrix are being added — check back soon.",
    photos: [
      "images/rottweiler-astrix-alert-stance.jpeg",
      "images/rottweiler-astrix-playing.jpeg"
    ]
  }
];

/* ---------- Render dog gallery ---------- */
const grid = document.getElementById('dogGrid');

DOGS.forEach((dog, i) => {
  const card = document.createElement('button');
  card.className = 'dog-card';
  card.setAttribute('data-index', i);
  card.setAttribute('aria-label', 'View ' + dog.name + '\u2019s record');
  card.innerHTML = `
    <div class="dog-photo"><img src="${dog.photos[0]}" alt="${dog.name}, ${dog.tag}" loading="lazy"></div>
    <div class="dog-info">
      <span class="dog-tag">${dog.tag}</span>
      <h3>${dog.name}</h3>
      ${dog.dob ? `<span class="dob">Born ${dog.dob}</span>` : ''}
    </div>
  `;
  card.style.cssText = 'border:none; width:100%; text-align:left; font:inherit; padding:0;';
  card.addEventListener('click', () => openLightbox(i));
  grid.appendChild(card);
});

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbName = document.getElementById('lbName');
const lbDob = document.getElementById('lbDob');
const lbPedigree = document.getElementById('lbPedigree');
const lbBio = document.getElementById('lbBio');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');
const lbCount = document.getElementById('lbCount');
let lastFocused = null;
let currentDog = null;
let currentPhoto = 0;

function renderPhoto() {
  const photos = currentDog.photos;
  lbImg.classList.add('loading');
  lbImg.onload = () => lbImg.classList.remove('loading');
  lbImg.src = photos[currentPhoto];
  lbImg.alt = currentDog.name + ' — photo ' + (currentPhoto + 1) + ' of ' + photos.length;
  lbCount.textContent = (currentPhoto + 1) + ' / ' + photos.length;
  // Hide arrows entirely when there's only one photo — nothing to cycle through
  const showArrows = photos.length > 1;
  lbPrev.style.display = showArrows ? 'flex' : 'none';
  lbNext.style.display = showArrows ? 'flex' : 'none';
  lbCount.style.display = showArrows ? 'block' : 'none';
}

function preloadDogPhotos(dog) {
  // Photo 0 is already loading via renderPhoto() — warm the cache for the rest
  // so clicking next/prev shows an already-downloaded image instead of a fresh fetch.
  dog.photos.slice(1).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function openLightbox(i) {
  currentDog = DOGS[i];
  currentPhoto = 0;
  renderPhoto();
  preloadDogPhotos(currentDog);

  lbName.textContent = currentDog.name;
  lbDob.textContent = currentDog.dob ? 'Born ' + currentDog.dob : '';

  lbPedigree.innerHTML = '';
  if (currentDog.sire) {
    lbPedigree.innerHTML += `<div class="pedigree-row"><dt>Sire</dt><dd>${currentDog.sire}</dd></div>`;
  }
  if (currentDog.dam) {
    lbPedigree.innerHTML += `<div class="pedigree-row"><dt>Dam</dt><dd>${currentDog.dam}</dd></div>`;
  }

  lbBio.textContent = currentDog.bio;

  lastFocused = document.activeElement;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('lightboxClose').focus();
}

function showPrevPhoto() {
  if (!currentDog) return;
  currentPhoto = (currentPhoto - 1 + currentDog.photos.length) % currentDog.photos.length;
  renderPhoto();
}
function showNextPhoto() {
  if (!currentDog) return;
  currentPhoto = (currentPhoto + 1) % currentDog.photos.length;
  renderPhoto();
}
lbPrev.addEventListener('click', showPrevPhoto);
lbNext.addEventListener('click', showNextPhoto);

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrevPhoto();
  if (e.key === 'ArrowRight') showNextPhoto();
});

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
navToggle.addEventListener('click', () => {
  const open = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navList.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

/* ---------- Loader ---------- */
window.addEventListener('load', () => {
  document.getElementById('loader').classList.add('hidden');
});

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
