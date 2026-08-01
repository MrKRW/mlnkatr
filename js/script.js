/* ==========================================================================
   Maha Lanka Tours — shared script.js (vanilla ES6+)
   Covers: header scroll state, mobile nav, scroll reveal, tour data,
   category tabs / filters, quick-view modal, plan-my-trip stepper,
   itinerary cost estimator, testimonials carousel, hero search widget,
   contact + booking form simulation, newsletter signup.
   ========================================================================== */

/* ---------- Shared tour package data ---------- */
const TOURS = [
  {
    id: 'royal-cultural',
    name: "The Royal Cultural Heritage Tour",
    duration: "6 Days / 5 Nights",
    days: 6,
    category: "Cultural",
    price: 850,
    image: "images/sigiriya_rock.png",
    badge: "BESTSELLER",
    rating: "4.9",
    reviews: 128,
    highlights: ["Climb UNESCO Sigiriya Rock Fortress", "Visit Dambulla Golden Cave Temple", "Experience Temple of the Tooth Relic in Kandy"],
    summary: "Explore Sigiriya, Dambulla & Kandy Sacred Temples",
    itinerary: [
      "Arrive Colombo, private transfer to Sigiriya, evening at leisure.",
      "Climb the Sigiriya rock fortress and explore the frescoes and water gardens.",
      "Dambulla Cave Temple, then onward to Polonnaruwa's ancient ruins.",
      "Minneriya National Park jeep safari for the elephant gathering.",
      "Kandy city tour and evening ceremony at the Temple of the Sacred Tooth Relic.",
      "Leisurely morning, transfer to Colombo for departure."
    ],
    includes: ["Private A/C vehicle throughout", "Boutique heritage accommodation", "Daily breakfast & dinner", "English-speaking chauffeur guide", "All entrance permits", "Elephant gathering jeep safari"]
  },
  {
    id: 'ella-highlands',
    name: "Ella & Hill Country Highlands Escape",
    duration: "5 Days / 4 Nights",
    days: 5,
    category: "Adventure & Nature",
    price: 720,
    image: "images/ella_nine_arch.png",
    badge: "TOP SCENIC",
    rating: "4.95",
    reviews: 94,
    highlights: ["Famous Kandy to Ella Observation Train", "Nine Arch Bridge Photo Walk", "Hike Little Adam's Peak"],
    summary: "Cloud forests, waterfalls & scenic blue train ride",
    itinerary: [
      "Arrive, transfer to Kandy, riverside dinner and rest.",
      "Board the iconic Kandy–Ella scenic train through tea country.",
      "Sunrise hike up Little Adam's Peak and visit the Nine Arch Bridge.",
      "Guided tea plantation & factory tour, tasting session included.",
      "Ravana Waterfalls, then transfer to Colombo for departure."
    ],
    includes: ["Private A/C vehicle & 2nd-class reserved train tickets", "Boutique hill-country accommodation", "Daily breakfast & dinner", "Chauffeur guide", "Tea factory tour & tasting", "Hiking guide for Little Adam's Peak"]
  },
  {
    id: 'southern-paradise',
    name: "Southern Paradise & Blue Whale Safari",
    duration: "7 Days / 6 Nights",
    days: 7,
    category: "Beach & Wildlife",
    price: 980,
    image: "images/mirissa_beach_whale.png",
    badge: "POPULAR",
    rating: "4.88",
    reviews: 156,
    highlights: ["Mirissa Private Catamaran Whale Watching", "Galle Dutch Fort Sunset Rampart Walk", "Stilt Fishermen of Koggala"],
    summary: "Golden beaches, Galle Fort & oceanic giants",
    itinerary: [
      "Arrive Colombo, transfer to Bentota, water sports session.",
      "Free morning, transfer to Galle, sunset walk on the fort ramparts.",
      "Early blue whale watching boat excursion from Mirissa.",
      "Unawatuna beach day and visit to a coastal turtle hatchery.",
      "Snorkelling excursion and coastal village exploration.",
      "Coastal relaxation day, spa treatment included.",
      "Transfer to Colombo for departure."
    ],
    includes: ["Private A/C vehicle throughout", "Beachfront boutique villas", "Daily breakfast & dinner", "Whale watching boat charter", "Turtle hatchery entry", "One spa treatment"]
  },
  {
    id: 'yala-wildlife',
    name: "Yala Wildlife & Wild Ceylon Odyssey",
    duration: "4 Days / 3 Nights",
    days: 4,
    category: "Wildlife & Safari",
    price: 690,
    image: "images/yala_leopard_safari.png",
    badge: "WILDLIFE",
    rating: "4.9",
    reviews: 112,
    highlights: ["Yala National Park 4x4 Jeep Safari", "Spot Leopards, Elephants & Sloth Bears", "Luxury Glamping Experience"],
    summary: "The highest leopard density on earth & luxury tented camps",
    itinerary: [
      "Arrive, transfer to Udawalawe, visit the Elephant Transit Home.",
      "Full-day 4x4 jeep safari in Yala National Park (morning & evening game drives).",
      "Second Yala safari at dawn tracking leopards and sloth bears, luxury glamping overnight.",
      "Morning at leisure, transfer to Colombo for departure."
    ],
    includes: ["4x4 safari jeep with tracker guide", "Luxury glamping & lodge accommodation", "Daily breakfast & dinner", "Two Yala National Park safaris", "Udawalawe Elephant Transit Home entry", "All park permits"]
  },
  {
    id: 'luxury-honeymoon',
    name: "Luxury Honeymoon & Island Indulgence",
    duration: "8 Days / 7 Nights",
    days: 8,
    category: "Luxury & Romance",
    price: 1650,
    image: "images/luxury_honeymoon_villa.png",
    badge: "ROMANCE",
    rating: "5.0",
    reviews: 84,
    highlights: ["Tea Trails Scenic Candlelight Dinner", "Couples Spa & Wellness Retreat", "Private Beach Cabana Stay"],
    summary: "An eight-day indulgence across the island's most romantic settings",
    itinerary: [
      "Arrive Colombo, optional private helicopter transfer to the hill country.",
      "Tea Trails bungalow stay, candlelight dinner overlooking the estate.",
      "Guided nature walk and couples spa treatment.",
      "Transfer to Kandy, private Temple of the Tooth evening ceremony.",
      "Scenic transfer to the south coast, private beach cabana check-in.",
      "Sunset catamaran cruise along the coastline.",
      "Full day of leisure, optional snorkelling or whale watching.",
      "Farewell breakfast, transfer to Colombo for departure."
    ],
    includes: ["Private luxury vehicle", "5-star boutique & tea bungalow accommodation", "Daily breakfast, one candlelight dinner", "Private beach cabana access", "Couples spa treatment", "Private temple ceremony access"]
  },
  {
    id: 'galle-heritage',
    name: "Galle Fort & Coastal Heritage Explorer",
    duration: "3 Days / 2 Nights",
    days: 3,
    category: "Cultural",
    price: 450,
    image: "images/galle_dutch_fort.png",
    badge: "HERITAGE",
    rating: "4.8",
    reviews: 62,
    highlights: ["Guided Walk Through UNESCO Galle Fort", "Stay in a Restored Colonial Villa", "Traditional Southern Cooking Class"],
    summary: "Discover colonial history and vibrant coastal culture",
    itinerary: [
      "Arrive, transfer to Galle, check into a restored Dutch colonial villa.",
      "Guided walking tour of the fort's ramparts, museums, and hidden alleys.",
      "Morning cooking class, afternoon at leisure, transfer to Colombo."
    ],
    includes: ["Private A/C vehicle", "Colonial villa accommodation", "Daily breakfast", "Expert local guide in Galle", "Cooking class"]
  }
];

/* ---------- Utilities ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const fmtUSD = (n) => `$${n.toLocaleString('en-US')}`;

/* ---------- Header scroll + mobile nav ---------- */
function initHeader() {
  const header = $('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const burger = $('.hamburger');
  const mobileNav = $('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('is-open');
      mobileNav.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    $$('.mobile-nav a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
    }));
  }

  // Mark active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  $$('.main-nav a, .mobile-nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = $$('.reveal-up, .pkg-card');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view', 'reveal');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

/* ---------- Lazy load background images (data-bg) ---------- */
function initLazyBg() {
  const items = $$('[data-bg]');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.backgroundImage = entry.target.dataset.bg;
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' });
  items.forEach(el => io.observe(el));
}

/* ---------- Package card rendering ---------- */
function pkgCardHTML(t) {
  return `
  <article class="tour-card-new reveal-up" data-category="${t.category}" data-price="${t.price}" data-days="${t.days}">
    <a href="tour-detail.html?id=${t.id}" style="display:block;text-decoration:none;color:inherit;">
      <div class="tour-card-img-wrap">
        <img src="${t.image}" alt="${t.name}">
        <div class="tour-badge-top">${t.badge}</div>
        <div class="tour-price-badge">$${t.price} <span>/ person</span></div>
      </div>
    </a>
    <div class="tour-card-body">
      <div class="tour-meta">
        <span style="display:flex;align-items:center;gap:4px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${t.duration}</span>
        <span class="tour-meta-stars">★ ${t.rating} <span>(${t.reviews})</span></span>
      </div>
      <h3 style="cursor:pointer"><a href="tour-detail.html?id=${t.id}" style="color:inherit;text-decoration:none;">${t.name}</a></h3>
      <p class="sub">${t.summary}</p>
      <ul class="tour-includes">
        ${t.highlights.slice(0,3).map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div style="display:flex;gap:10px;margin-top:16px;padding-top:14px;border-top:1px solid var(--border-soft);">
        <a href="tour-detail.html?id=${t.id}" class="btn btn-primary btn-sm" style="flex:1;justify-content:center;">View Details</a>
        <button class="btn btn-ghost btn-sm" data-quickview="${t.id}" style="flex:1;">Quick View</button>
      </div>
    </div>
  </article>`;
}


function renderPackages(container, list) {
  if (!container) return;
  container.innerHTML = list.map(pkgCardHTML).join('') || `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted)">No tours match those filters — try widening your search.</p>`;
  initReveal();
  bindQuickViewButtons();
}

/* ---------- Tabs (homepage featured) ---------- */
function initTabs() {
  const tabBar = $('.tab-bar');
  const grid = $('#featured-grid');
  if (!tabBar || !grid) return;
  renderPackages(grid, TOURS.slice(0, 5));
  tabBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    $$('.tab-btn', tabBar).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.category;
    const filtered = cat === 'All' ? TOURS : TOURS.filter(t => t.category === cat);
    renderPackages(grid, filtered);
  });
}

/* ---------- Full filter/sort (tours.html) ---------- */
function initTourFilters() {
  const grid = $('#tours-grid');
  if (!grid) return;
  renderPackages(grid, TOURS);

  const pills = $$('.filter-pill-btn');
  pills.forEach(btn => btn.addEventListener('click', () => {
    pills.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.category;
    let list = cat === 'All' ? TOURS : TOURS.filter(t => t.category === cat);
    renderPackages(grid, list);
  }));

  // Support legacy dropdown if it exists (e.g. on old tours page)
  const catSel = $('#filter-category');
  const sortSel = $('#filter-sort');
  const countEl = $('#result-count');

  function applyLegacy() {
    let list = [...TOURS];
    if (catSel && catSel.value !== 'All') list = list.filter(t => t.category === catSel.value);
    if (sortSel) {
      if (sortSel.value === 'price-asc') list.sort((a,b) => a.price - b.price);
      if (sortSel.value === 'price-desc') list.sort((a,b) => b.price - a.price);
      if (sortSel.value === 'duration') list.sort((a,b) => a.days - b.days);
    }
    renderPackages(grid, list);
    if (countEl) countEl.textContent = `${list.length} tour${list.length !== 1 ? 's' : ''} found`;
  }
  [catSel, sortSel].forEach(el => el && el.addEventListener('change', applyLegacy));
}

/* ---------- Quick-view modal ---------- */
function bindQuickViewButtons() {
  $$('[data-quickview]').forEach(btn => {
    btn.addEventListener('click', () => openQuickView(btn.dataset.quickview));
  });
}

function openQuickView(id) {
  const t = TOURS.find(x => x.id === id);
  if (!t) return;
  const overlay = $('#quickview-overlay');
  if (!overlay) return;
  $('#qv-title', overlay).textContent = t.name;
  $('#qv-media', overlay).className = `modal-hero ${t.grad}`;
  $('#qv-summary', overlay).textContent = t.summary;
  $('#qv-itinerary', overlay).innerHTML = t.itinerary.map((step, i) =>
    `<div class="itinerary-day"><div class="day-num">D${i+1}</div><p>${step}</p></div>`).join('');
  $('#qv-includes', overlay).innerHTML = t.includes.map(i => `<li>${i}</li>`).join('');
  $('#qv-price', overlay).textContent = `${fmtUSD(t.price)} per person`;
  $('#qv-book', overlay).href = `contact.html?tour=${encodeURIComponent(t.name)}`;
  openModal(overlay);
}

/* ---------- Generic modal open/close ---------- */
function openModal(overlay) {
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const closeBtn = $('.modal-close', overlay);
  closeBtn && closeBtn.focus();
}
function closeModal(overlay) {
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function initModalDismiss() {
  $$('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('.modal-close')) closeModal(overlay);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') $$('.modal-overlay.is-open').forEach(closeModal);
  });
}

/* ---------- Plan My Trip modal (multi-step) ---------- */
function initPlanMyTrip() {
  const trigger = $$('[data-open="plan-trip"]');
  const overlay = $('#plan-trip-overlay');
  if (!overlay || !trigger.length) return;

  const state = { interest: null, pace: null, dates: '', travelers: 2, name: '', email: '' };
  let stepIndex = 0;
  const steps = $$('.step', overlay);
  const dots = $$('.stepper .dot', overlay);

  function render() {
    steps.forEach((s, i) => s.classList.toggle('active', i === stepIndex));
    dots.forEach((d, i) => d.classList.toggle('done', i <= stepIndex));
  }

  trigger.forEach(t => t.addEventListener('click', () => { stepIndex = 0; render(); openModal(overlay); }));

  $$('.option-card', overlay).forEach(card => {
    card.addEventListener('click', () => {
      const group = card.dataset.group;
      $$(`.option-card[data-group="${group}"]`, overlay).forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state[group] = card.dataset.value;
    });
  });

  $$('[data-step="next"]', overlay).forEach(btn => btn.addEventListener('click', () => {
    if (stepIndex < steps.length - 1) { stepIndex++; render(); }
    if (stepIndex === steps.length - 1) buildSummary();
  }));
  $$('[data-step="back"]', overlay).forEach(btn => btn.addEventListener('click', () => {
    if (stepIndex > 0) { stepIndex--; render(); }
  }));

  function buildSummary() {
    const summaryEl = $('#plan-summary', overlay);
    if (!summaryEl) return;
    const name = $('#plan-name', overlay)?.value || 'Traveller';
    summaryEl.innerHTML = `
      <p><strong>Interest:</strong> ${state.interest || 'Not specified'}</p>
      <p><strong>Pace:</strong> ${state.pace || 'Not specified'}</p>
      <p><strong>Thanks, ${name}</strong> — our concierge team will reach out within 24 hours with a tailor-made itinerary.</p>
    `;
  }

  const form = $('#plan-trip-form', overlay);
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const successEl = $('#plan-success', overlay);
    successEl && successEl.classList.add('show');
    setTimeout(() => closeModal(overlay), 1800);
  });
}

/* ---------- Itinerary Cost Estimator ---------- */
function initEstimator() {
  const root = $('#estimator');
  if (!root) return;

  const lengthInput = $('#est-length', root);
  const lengthOut = $('#est-length-out', root);
  const groupInput = $('#est-group', root);
  const groupOut = $('#est-group-out', root);
  const tierButtons = $$('.pill-select button', root);
  const priceOut = $('#est-price', root);
  const breakdown = $('#est-breakdown', root);

  const tierRates = { standard: 90, deluxe: 150, luxury: 260 };
  let tier = 'deluxe';

  function calc() {
    const days = parseInt(lengthInput.value, 10);
    const group = parseInt(groupInput.value, 10);
    const rate = tierRates[tier];
    const perPersonPerDay = rate;
    const groupDiscount = group >= 6 ? 0.9 : group >= 4 ? 0.95 : 1;
    const guideFee = 35 * days;
    const subtotal = perPersonPerDay * days * group * groupDiscount;
    const total = Math.round(subtotal + guideFee);
    const perPerson = Math.round(total / group);

    lengthOut.textContent = `${days} day${days > 1 ? 's' : ''}`;
    groupOut.textContent = `${group} traveller${group > 1 ? 's' : ''}`;
    priceOut.innerHTML = `${fmtUSD(total).replace('$','')}<sup></sup>`;
    priceOut.textContent = fmtUSD(total);
    breakdown.innerHTML = `
      <div><span>Accommodation & touring (${tier})</span><span>${fmtUSD(Math.round(subtotal))}</span></div>
      <div><span>Chauffeur guide & fuel</span><span>${fmtUSD(guideFee)}</span></div>
      <div><span>Group discount applied</span><span>${groupDiscount < 1 ? `-${Math.round((1-groupDiscount)*100)}%` : '—'}</span></div>
      <div><strong>Per person</strong><strong>${fmtUSD(perPerson)}</strong></div>
    `;
  }

  tierButtons.forEach(btn => btn.addEventListener('click', () => {
    tierButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tier = btn.dataset.tier;
    calc();
  }));
  [lengthInput, groupInput].forEach(el => el && el.addEventListener('input', calc));
  calc();
}

/* ---------- Testimonials carousel ---------- */
function initCarousel() {
  const carousel = $('.testimonial-carousel');
  if (!carousel) return;
  const slides = $$('.testimonial-slide', carousel);
  const dots = $$('.carousel-dots button', carousel);
  let index = 0;
  let timer;

  function show(i) {
    slides.forEach((s, n) => s.classList.toggle('active', n === i));
    dots.forEach((d, n) => d.classList.toggle('active', n === i));
    index = i;
  }
  function next() { show((index + 1) % slides.length); }

  dots.forEach((d, i) => d.addEventListener('click', () => { show(i); resetTimer(); }));
  function resetTimer() { clearInterval(timer); timer = setInterval(next, 6000); }
  show(0);
  resetTimer();
}

/* ---------- Hero search widget ---------- */
function initHeroSearch() {
  const form = $('#hero-search');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const params = new URLSearchParams(new FormData(form));
    window.location.href = `tours.html?${params.toString()}`;
  });
}

/* ---------- Forms (contact / booking) simulated submit ---------- */
function initFormSim(formId, successId) {
  const form = $(`#${formId}`);
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = $('button[type="submit"]', form);
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending…';
    try {
      // In production this posts to api/contact_submit.php or api/book_tour.php
      await new Promise(res => setTimeout(res, 900));
      $(`#${successId}`)?.classList.add('show');
      form.reset();
    } finally {
      btn.disabled = false;
      btn.textContent = original;
    }
  });
}

/* ---------- Prefill contact form tour field from query string ---------- */
function initTourPrefill() {
  const tourField = $('#contact-tour');
  if (!tourField) return;
  const params = new URLSearchParams(window.location.search);
  const tour = params.get('tour');
  if (tour) {
    [...tourField.options].forEach(o => { if (o.textContent === tour) tourField.value = tour; });
  }
}

/* ---------- Newsletter ---------- */
function initNewsletter() {
  $$('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('input', form);
      const btn = $('button', form);
      if (!input.value) return;
      btn.textContent = 'Subscribed ✓';
      input.value = '';
      setTimeout(() => { btn.textContent = 'Subscribe'; }, 2500);
    });
  });
}

/* ---------- Hero Carousel ---------- */
function initHeroCarousel() {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll('.carousel-card'));
  if (cards.length === 0) return;

  let currentIndex = 0;

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.className = 'carousel-card';
      
      if (i === currentIndex) {
        card.classList.add('active');
      } else if (i === (currentIndex + 1) % cards.length) {
        card.classList.add('next');
      } else if (i === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add('prev');
      }
    });
  }

  updateCarousel();
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }, 4000);
}

/* ---------- Tour Slider ---------- */
function initTourSlider() {
  const container = document.querySelector('.tour-cards-container');
  if (!container) return;
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');

  function slideNext() {
    if (window.innerWidth <= 900) return;
    const cards = container.querySelectorAll('.tour-card');
    if(cards.length === 0) return;
    container.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    const cardWidth = cards[0].offsetWidth;
    container.style.transform = `translateX(calc(-50% - ${cardWidth + 30}px))`;
    
    cards.forEach(c => c.classList.remove('active'));
    if(cards[3]) cards[3].classList.add('active'); 
    
    setTimeout(() => {
      container.style.transition = 'none';
      container.appendChild(cards[0]);
      container.style.transform = 'translateX(-50%)';
    }, 500);
  }

  function slidePrev() {
    if (window.innerWidth <= 900) return;
    const cards = container.querySelectorAll('.tour-card');
    if(cards.length === 0) return;
    container.style.transition = 'none';
    container.prepend(cards[cards.length - 1]);
    const cardWidth = cards[0].offsetWidth;
    container.style.transform = `translateX(calc(-50% - ${cardWidth + 30}px))`;
    
    void container.offsetWidth;
    
    container.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    container.style.transform = 'translateX(-50%)';
    
    const newCards = container.querySelectorAll('.tour-card');
    newCards.forEach(c => c.classList.remove('active'));
    if(newCards[2]) newCards[2].classList.add('active');
  }

  let autoSlide = setInterval(slideNext, 3500);

  if(nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearInterval(autoSlide);
      slideNext();
      autoSlide = setInterval(slideNext, 3500);
    });
  }
  
  if(prevBtn) {
    prevBtn.addEventListener('click', () => {
      clearInterval(autoSlide);
      slidePrev();
      autoSlide = setInterval(slideNext, 3500);
    });
  }
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initReveal();
  initLazyBg();
  initTabs();
  initTourFilters();
  bindQuickViewButtons();
  initModalDismiss();
  initPlanMyTrip();
  initEstimator();
  initCarousel();
  initHeroSearch();
  initFormSim('contact-form', 'contact-success');
  initFormSim('booking-form', 'booking-success');
  initTourPrefill();
  initNewsletter();
  initHeroCarousel();
  initTourSlider();
});
