/**
 * sketch-fx.js v5 — Interactions « crayonnées » du portfolio
 * ---------------------------------------------------------------------------
 * 1. Tache de peinture verte qui suit la souris (fondu piloté en JS).
 * 2. Remplissage vert opaque des cartes : part du point d'ENTRÉE,
 *    revient par le point de SORTIE, jamais de reset visuel.
 * 3. Rotation 3D douce autour du centre (±5° X, ±7° Y, ±2° Z), lissée.
 *
 * ANTI-FLICKER + ANTI-BLOCAGE (v5) :
 * — Aucun mouseover/mouseout : quand la carte s'incline, ces events « voient »
 *   une géométrie déplacée et se déclenchent en boucle.
 * — La v4 mettait le rectangle de la carte EN CACHE à l'entrée : dès que la
 *   page scrollait ou que le layout bougeait, ce rectangle devenait faux et
 *   le survol restait « collé » à la première carte pour toujours.
 * — Ici on recalcule la géométrie PLATE de la carte à CHAQUE mousemove via
 *   offsetLeft/offsetTop + offsetWidth/offsetHeight : ces valeurs décrivent
 *   la carte SANS transform (l'inclinaison ne les fausse pas) et SANS cache
 *   (le scroll ne les fausse pas non plus). Immuable = zéro flicker, frais =
 *   zéro blocage.
 * ---------------------------------------------------------------------------
 */
(function () {
  'use strict';

  const FINE_POINTER = window.matchMedia('(pointer: fine)').matches;
  const EDGE_MARGIN = 8; // tolérance en px autour du rectangle plat

  /* =======================================================================
     ÉTAT GLOBAL
     ======================================================================= */
  const fx = {
    hover: null,        // carte survolée
    modalOpen: false,
    mouseMoved: false,
    lastX: 0, lastY: 0,

    // Tache
    hx: -500, hy: -500, htx: -500, hty: -500,
    hop: 0, htop: 0,

    // Tilt de la carte survolée
    rx: 0, ry: 0, rz: 0,        // rotation actuelle
    trx: 0, try_: 0, trz: 0     // rotation cible
  };

  const halo = document.createElement('div');
  halo.id = 'cursor-halo';
  document.body.appendChild(halo);

  /* =======================================================================
     GÉOMÉTRIE PLATE : calculée à la demande, JAMAIS en cache.
     offsetLeft/offsetTop/offsetWidth/offsetHeight décrivent la carte sans
     son transform. On convertit en coordonnées viewport via le rect du
     offsetParent (les parents ne s'inclinent jamais, eux).
     ======================================================================= */
  function flatRect(card) {
    const op = card.offsetParent;
    if (!op) return null;
    const base = op.getBoundingClientRect();
    return {
      left: base.left + card.offsetLeft,
      top: base.top + card.offsetTop,
      right: base.left + card.offsetLeft + card.offsetWidth,
      bottom: base.top + card.offsetTop + card.offsetHeight,
      width: card.offsetWidth,
      height: card.offsetHeight
    };
  }

  function pointInRect(x, y, r, margin) {
    const m = margin || 0;
    return r &&
      x >= r.left - m && x <= r.right + m &&
      y >= r.top - m && y <= r.bottom + m;
  }

  /* =======================================================================
     MODALES : on coupe toute interaction carte pendant une modale
     ======================================================================= */
  function checkModals() {
    fx.modalOpen = !!document.querySelector('.modal-backdrop.active');
    if (fx.modalOpen && fx.hover) leaveCard(fx.hover, fx.lastX, fx.lastY);
  }
  try {
    new MutationObserver(checkModals).observe(document.body, {
      subtree: true, childList: false, attributes: true, attributeFilter: ['class']
    });
  } catch (err) { /* MutationObserver indisponible : fallback silencieux */ }

  /* =======================================================================
     REMPLISSAGE VERT (clip-path animé en continu)
     ======================================================================= */
  function maxRadius(rect, x, y) {
    const dx = Math.max(x - rect.left, rect.right - x);
    const dy = Math.max(y - rect.top, rect.bottom - y);
    return Math.sqrt(dx * dx + dy * dy) * 1.02 + 8;
  }

  function tweenRadius(card, from, to, durationMs, onDone) {
    if (card._fillRaf) cancelAnimationFrame(card._fillRaf);
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      const r = from + (to - from) * eased;
      card._fillRadius = r;
      card.style.setProperty('--fill-r', r.toFixed(1) + 'px');
      if (p < 1) {
        card._fillRaf = requestAnimationFrame(step);
      } else {
        card._fillRaf = null;
        if (onDone) onDone();
      }
    };
    card._fillRaf = requestAnimationFrame(step);
  }

  function ensureFillLayer(card) {
    if (!card._fillLayer || !card._fillLayer.isConnected) {
      const fill = document.createElement('div');
      fill.className = 'sketch-fill';
      card.prepend(fill);
      card._fillLayer = fill;
    }
  }

  function enterCard(card, x, y) {
    if (fx.modalOpen) return;
    fx.hover = card;

    const rect = flatRect(card) || card.getBoundingClientRect();
    card.style.setProperty('--fill-x', (x - rect.left).toFixed(1) + 'px');
    card.style.setProperty('--fill-y', (y - rect.top).toFixed(1) + 'px');
    ensureFillLayer(card);
    tweenRadius(card, card._fillRadius || 0, maxRadius(rect, x, y), 420);

    card.style.transition = 'background 0.25s ease, border-color 0.25s ease';
    // Le tilt part de la rotation actuelle (souvent 0) vers les cibles :
    // on ne remet PAS les cibles à zéro ici, le mousemove suivant s'en charge.
  }

  function leaveCard(card, x, y) {
    if (!card) return;
    const rect = flatRect(card);
    const px = rect ? (x - rect.left) : card._fillPointX || 0;
    const py = rect ? (y - rect.top) : card._fillPointY || 0;
    card.style.setProperty('--fill-x', px.toFixed(1) + 'px');
    card.style.setProperty('--fill-y', py.toFixed(1) + 'px');
    tweenRadius(card, card._fillRadius || 0, 0, 380, () => {
      card.classList.remove('is-filled');
    });
    card.style.transition = '';
    card.style.transform = '';
    if (fx.hover === card) {
      fx.hover = null;
      fx.trx = fx.try_ = fx.trz = 0;
    }
  }

  /* =======================================================================
     PILOTAGE : mousemove + géométrie plate recalculée (zéro cache,
     zéro mouseover/out, zéro cooldown nécessaire)
     ======================================================================= */
  function handleMove(x, y) {
    fx.lastX = x;
    fx.lastY = y;
    fx.mouseMoved = true;
    fx.htx = x;
    fx.hty = y;

    if (fx.modalOpen) {
      if (fx.hover) leaveCard(fx.hover, x, y);
      return;
    }

    // Carte active mais détachée du DOM (re-render) : on purge.
    if (fx.hover && !fx.hover.isConnected) {
      fx.hover = null;
    }

    // 1) La carte active contient-elle encore la souris (géométrie FRAÎCHE) ?
    if (fx.hover) {
      const r = flatRect(fx.hover);
      if (r && pointInRect(x, y, r, EDGE_MARGIN)) {
        // Cibles de rotation d'après la géométrie plate du moment.
        const pctX = (x - (r.left + r.width / 2)) / (r.width / 2);
        const pctY = (y - (r.top + r.height / 2)) / (r.height / 2);
        const cl = (v) => Math.max(-1, Math.min(1, v));
        fx.trx = -cl(pctY) * 5;
        fx.try_ = cl(pctX) * 7;
        fx.trz = -cl(pctX) * cl(pctY) * 2;
        return;
      }
      // Vraie sortie : on quitte immédiatement (la géométrie est fraîche,
      // aucune confirmation n'est nécessaire).
      leaveCard(fx.hover, x, y);
    }

    // 2) Une autre carte contient-elle la souris ? (recherche géométrique,
    //    l'event.target peut être faussé par le halo ou des imbrications)
    const cards = document.querySelectorAll('.apple-card');
    let found = null;
    for (let i = 0; i < cards.length; i++) {
      const c = cards[i];
      if (!c.isConnected) continue;
      const r = flatRect(c);
      if (r && pointInRect(x, y, r, 0)) { found = c; break; }
    }
    if (found) {
      enterCard(found, x, y);
      // Cible initiale du tilt, calculée dans la foulée.
      const r = flatRect(found);
      const pctX = (x - (r.left + r.width / 2)) / (r.width / 2);
      const pctY = (y - (r.top + r.height / 2)) / (r.height / 2);
      const cl = (v) => Math.max(-1, Math.min(1, v));
      fx.trx = -cl(pctY) * 5;
      fx.try_ = cl(pctX) * 7;
      fx.trz = -cl(pctX) * cl(pctY) * 2;
    }
  }

  if (FINE_POINTER) {
    document.addEventListener('mousemove', (e) => {
      handleMove(e.clientX, e.clientY);
    }, { passive: true });

    // Le scroll déplace les cartes sous la souris immobile : on rejoue.
    window.addEventListener('scroll', () => {
      if (fx.mouseMoved) handleMove(fx.lastX, fx.lastY);
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      if (fx.hover) leaveCard(fx.hover, fx.lastX, fx.lastY);
    });
  }

  /* =======================================================================
     BOUCLE UNIQUE : tache (position + opacité) et tilt interpolé
     ======================================================================= */
  function loop() {
    fx.hx += (fx.htx - fx.hx) * 0.2;
    fx.hy += (fx.hty - fx.hy) * 0.2;
    halo.style.transform = `translate(${fx.hx.toFixed(1)}px, ${fx.hy.toFixed(1)}px)`;

    fx.htop = (FINE_POINTER && fx.mouseMoved && !fx.hover && !fx.modalOpen) ? 1 : 0;
    fx.hop += (fx.htop - fx.hop) * 0.12;
    halo.style.opacity = fx.hop.toFixed(3);

    if (fx.hover && fx.hover.isConnected) {
      fx.rx += (fx.trx - fx.rx) * 0.22;
      fx.ry += (fx.try_ - fx.ry) * 0.22;
      fx.rz += (fx.trz - fx.rz) * 0.22;
      fx.hover.style.transform =
        'perspective(1000px) translateY(-2px) ' +
        `rotateX(${fx.rx.toFixed(2)}deg) ` +
        `rotateY(${fx.ry.toFixed(2)}deg) ` +
        `rotateZ(${fx.rz.toFixed(2)}deg)`;
    }

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
