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
    sire: "Ch Benno vh Folconsnest CH Lux., BH, AD, ZTP, VPG1, HD+/-, ED frei (Belgium)",
    dam: "Ch Legion Anomaly",
    bio: "Legion Chevy of Spartan was the Foundation female of our breeding program. She was bred via artificial insemination from Ch Anomaly and Ch Benno van het Folconsnest, combining proven South African champion bloodlines with influential European genetics. Chevy possessed excellent breed type, sound structure and quality that made her an outstanding female.",
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
    bio: "Bred from Legion Chevy of Spartan and the world renowned Ch Arzadon Tayson (Denmark). She was the result of our first experience using frozen semen, making her a particularly special milestone in the development of our breeding program. Born via Caesarean section in the early hours of the morning as part of a litter of seven puppies, Chloe was a clone of her father Arzadon Tayson and matured into an extremely powerful female with exceptional breed type, strong bone, and a commanding presence. Her strong head, powerful structure, and unmistakable breed character have been passed down to future generations within our kennel.",
    photos: [
      "images/rottweiler-chloe-stacked-stance-front.jpeg",
      "images/rottweiler-chloe-stacked-stance.jpeg",
      "images/rottweiler-chloe-alert-stance.jpeg",
      "images/rottweiler-chloe-competition.jpeg",
      "images/rottweiler-chloe-walking.jpeg"
    ]
  },
  {
    name: "Spartan Fergi \u2018Bella\u2019",
    tag: "Female",
    dob: "05 Dec 2014",
    sire: "Champ from Royal Breed (Serbia)",
    dam: "Spartan Chloe",
    bio: "Spartan Fergi, affectionately known as Bella, was bred from Spartan Chloe and Champ from Royal Breed (Import Serbia). She was one of only three puppies in her litter and quickly developed into an exceptional female. Bella was a large and powerful bitch, standing taller and carrying more substance than many males. Despite her impressive size, she possessed a soft, outgoing temperament. Bella also proved herself to be an outstanding brood bitch, producing large, healthy litters and demonstrating excellent maternal instincts. Due to her remarkable fertility, Bella regularly produced litters of up to 13 puppies. To ensure her long term health and wellbeing, we chose to retire her after only two litters. Her contribution to our breeding program was significant, and her influence continues through her offspring today.",
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
    bio: "Torbit Ella of Spartan Rottweilers is the youngest female in our kennel and represents the future of Spartan Rottweilers. Ella possesses a pedigree that combines many of my favorite bloodlines. Her mother is a daughter of Cochise from Royal Breed (Serbia), while her father carries the renowned Timitor bloodline (Serbia). This unique combination has produced a female with exceptional breed type, a strong and powerful head, a short muzzle, an excellent topline, compact and deep, rich mahogany markings. In addition to her impressive structure and appearance, Ella has an energetic and confident personality. She displays a balance prey drive and is rarely seen without her favourite pink ball.",
    photos: [
      "images/rottweiler-torbit-ella-sitting-park.jpeg",
      "images/rottweiler-torbit-ella-sitting-side.jpeg",
      "images/rottweiler-torbit-ella-puppy.jpeg",
      "images/rottweiler-torbit-ella-pup-blanket.jpeg",
      "images/rottweiler-torbit-ella-ty.jpeg",
      "images/rottweiler-torbit-ella-on-couch.jpeg",
      "images/rottweiler-torbit-ella-on-couch-ball.jpeg"
    ]
  },
  {
    name: "Spartan Brandy",
    tag: "Bred by Us",
    dob: "08 Nov 2013",
    sire: "Legion Gibson — son of CH Arzadon Tayson (Denmark)",
    dam: "Legion Chevy — daughter of CH Benno v.h. Folconsnest (Belgium)",
    bio: "Spartan Brandy is a correct, strong female with excellent breed type, beautiful head, strong bone, sound structure, and effortless movement. A successful line breeding that reinforces the quality, temperament, and type we strive to preserve at Spartan Rottweilers.",
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
    bio: "Spartan Achilles, affectionately known as Tyson, was bred from our very first litter out of Chevy of Spartan and Chanteur Salute, a direct son of Ch. Chanteur Dokai. Standing at 67 cm, Tyson was a powerful male with exceptional bone, a strong masculine head, and rich dark markings. He combined the best qualities of both German and traditional South African bloodlines, resulting in a dog of impressive type and presence. Despite his imposing appearance, Tyson was a loving and loyal companion. He possessed a stable temperament, was affectionate with his family, and naturally protective when the situation required it. Tyson remains a special part of Spartan Rottweilers' history as one of the standout males from our foundation breeding program.",
    photos: [
      "images/rottweiler-achillies-tyson-sitting.jpeg",
      "images/rottweiler-achillies-tyson-laying.jpeg",
      "images/rottweiler-achillies-tyson-laying-grass.jpeg",
      "images/rottweiler-achillies-tyson-sitting-pool.jpeg"
    ]
  },
  {
    name: "Spartan Frank \u2018Bear\u2019",
    tag: "Stud Male",
    dob: "05 Dec 2014",
    sire: "Champ from Royal Breed (Serbia)",
    dam: "Spartan Chloe",
    bio: "Bear was bred from Spartan Chloe and Champ from Royal Breed (Import Serbia). Bear lived by my brother, Wayne Mullany, and was one of the most impressive males we produced. Standing at an impressive 68 cm, Bear possessed exceptional size, strong bone, and an extremely powerful head that was second to none. His presence alone was enough to turn heads, yet beneath his intimidating appearance was a gentle and affectionate dog with a wonderful temperament. Bear adored children and other dogs and was deeply devoted to his family. My brother often referred to him as one of his own children. Whether spending time with the family or relaxing beside the braai, Bear was always close by, making him a much loved companion and a memorable representative of the Spartan bloodline.",
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
    dam: "Spartan Chloe (Daughter of Arzadon Tayson (Denmark))",
    bio: "From a repeat litter of only three pups. A powerful, robust male with exceptional substance, strong bone, and an impressive head.",
    photos: [
      "images/rottweiler-jackson-laying.jpeg",
      "images/rottweiler-jackson-pup-with-other-dog.jpeg",
      "images/rottweiler-jackson-puppy-laying.jpeg"
    ]
  },
  {
    name: "Spartan Astrix",
    tag: "Male Bred by Us",
    dob: "28 Feb 2008",
    sire: "Chanteur Salute",
    dam: "Legion Chevy of Spartan",
    bio: "Astrix shares the same parents as Achilles and carries the same powerful qualities. A substantial male with strong bone, excellent head type, sound structure, and the strength and presence we value in our Rottweilers.",
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
  const targetSrc = photos[currentPhoto];

  // Count/arrows update immediately — only the image swap is delayed
  lbCount.textContent = (currentPhoto + 1) + ' / ' + photos.length;
  const showArrows = photos.length > 1;
  lbPrev.style.display = showArrows ? 'flex' : 'none';
  lbNext.style.display = showArrows ? 'flex' : 'none';
  lbCount.style.display = showArrows ? 'block' : 'none';

  // Fully clear the old bitmap, not just hide it — fading opacity alone can
  // still leave the old pixels composited in Safari during the transition,
  // which is what caused a previous photo to "ghost" in around the edges
  // of the new one on some phones. Removing the src forces the browser to
  // actually drop that frame before the new one loads in.
  lbImg.classList.add('loading');
  lbImg.removeAttribute('src');
  setTimeout(() => {
    lbImg.onload = () => lbImg.classList.remove('loading');
    lbImg.src = targetSrc;
    lbImg.alt = currentDog.name + ' — photo ' + (currentPhoto + 1) + ' of ' + photos.length;
  }, 160);
}

/* Handover note: compress/resize photos before adding to images/ —
   aim for under ~250KB each, longest edge ~1100px (nothing on this
   site displays a photo larger than ~500px, even on retina screens).
   Tools: Squoosh or TinyPNG (both free, browser-based). */
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
