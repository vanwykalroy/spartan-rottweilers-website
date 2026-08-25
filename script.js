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
    photo: "images/rottweiler-legion-chevy-competition.jpeg"
  },
  {
    name: "Spartan Chloe",
    tag: "Female",
    dob: "04 Jul 2012",
    sire: "Ch Arzadon Tayson (Denmark)",
    dam: "Spartan Legion Chevy",
    bio: "Bred from Chevy and the world-renowned Arzadon Tayson, using frozen semen for the first time in our program. A powerful, confident female with a strong head and commanding presence — her influence still shows in the dogs we produce today.",
    photo: "images/rottweiler-chloe-stacked-stance-front.jpeg"
  },
  {
    name: "Spartan Fergi \u2018Bella\u2019",
    tag: "Female",
    dob: "05 Dec 2014",
    sire: "Champ from Royal Breed (Serbia)",
    dam: "Spartan Chloe",
    bio: "A large, powerful female with a soft, outgoing temperament. An outstanding brood bitch with excellent maternal instincts — retired after two litters to protect her long-term health.",
    photo: "images/rottweiler-fergi-bella-alert-stance.jpeg"
  },
  {
    name: "Torbit Ella of Spartan",
    tag: "Youngest Female",
    dob: "03 Jul 2023",
    sire: "Thanos Van Wiesenstadt (Serbia)",
    dam: "Torbrit Quera",
    bio: "The future of Spartan Rottweilers. Exceptional breed type, a strong head, short muzzle, and rich mahogany markings, paired with an energetic, confident personality — rarely seen without her favourite pink ball.",
    photo: "images/rottweiler-torbit-ella-sitting-park.jpeg"
  },
  {
    name: "Spartan Brandy",
    tag: "Bred by Us",
    dob: "08 Nov 2013",
    sire: "Legion Gibson",
    dam: "Spartan Legion Chevy",
    bio: "A correct female with excellent breed type, a beautiful head, sound structure, and free-flowing movement — a strong example of successful line breeding within our program.",
    photo: "images/rottweiler-brandy-alert-stance-side.jpeg"
  },
  {
    name: "Spartan Achilles \u2018Tyson\u2019",
    tag: "Stud Male",
    dob: "28 Feb 2008",
    sire: "Chanteur Salute",
    dam: "Spartan Legion Chevy",
    bio: "From our very first litter. A powerful male standing 67cm, with exceptional bone and a strong masculine head, combining German and South African bloodlines. Loyal and stable in temperament despite his imposing size.",
    photo: "images/rottweiler-achillies-tyson-sitting.jpeg"
  },
  {
    name: "Spartan Frank \u2018Bear\u2019",
    tag: "Sire",
    dob: "05 Dec 2014",
    sire: "Champ from Royal Breed (Serbia)",
    dam: "Spartan Chloe",
    bio: "Standing 68cm with exceptional size and one of the most powerful heads we've produced. Gentle and affectionate despite his presence — deeply devoted to family and adored by children.",
    photo: "images/rottweiler-frank-bear-playing.jpeg"
  },
  {
    name: "Spartan Jackson",
    tag: "Male Bred by us",
    dob: "05 Jan 2018",
    sire: "Champ from Royal Breed (Serbia)",
    dam: "Spartan Chloe",
    bio: "From a repeat litter of only three pups. A powerful, robust male with exceptional substance, strong bone, and an impressive head.",
    photo: "images/rottweiler-jackson-laying.jpeg"
  },
  {
    name: "Spartan Astrix",
    tag: "Profile Coming Soon",
    dob: "",
    sire: "",
    dam: "",
    bio: "Full pedigree details for Astrix are being added — check back soon.",
    photo: "images/rottweiler-astrix-alert-stance.jpeg"
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
    <div class="dog-photo"><img src="${dog.photo}" alt="${dog.name}, ${dog.tag}" loading="lazy"></div>
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
let lastFocused = null;

function openLightbox(i) {
  const dog = DOGS[i];
  lbImg.src = dog.photo;
  lbImg.alt = dog.name;
  lbName.textContent = dog.name;
  lbDob.textContent = dog.dob ? 'Born ' + dog.dob : '';

  lbPedigree.innerHTML = '';
  if (dog.sire) {
    lbPedigree.innerHTML += `<div class="pedigree-row"><dt>Sire</dt><dd>${dog.sire}</dd></div>`;
  }
  if (dog.dam) {
    lbPedigree.innerHTML += `<div class="pedigree-row"><dt>Dam</dt><dd>${dog.dam}</dd></div>`;
  }

  lbBio.textContent = dog.bio;

  lastFocused = document.activeElement;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('lightboxClose').focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
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
