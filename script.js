// Portfolio Simonne Houeto — script.js
// Réseaux sociaux, menu mobile, apparition au défilement, lien actif, formulaire de contact.

(() => {
  'use strict';

  /* =====================================================================
     RÉSEAUX SOCIAUX — source unique, seul endroit à modifier.
     Alimente les icônes de la barre du bas du footer.
       url : adresse complète du profil (https://…)
     Tant que « url » est vide, l'icône reste visible mais non cliquable :
     aucun lien cassé, aucune fausse URL.
     ===================================================================== */
  const SOCIAL_LINKS = {
    github: { name: 'GitHub', url: 'https://github.com/Simonne101' },
    linkedin: { name: 'LinkedIn', url: 'https://www.linkedin.com/in/simonne-houeto-48743426a' },
    facebook: { name: 'Facebook', url: 'https://www.facebook.com/smn.ade' },
    // Numéro de la section Contact (+229 01 97 41 73 00)
    whatsapp: { name: 'WhatsApp', url: 'https://wa.me/2290197417300?text=Bonjour%20Simonne%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio.' },
  };

  // Logos officiels (Simple Icons)
  const SOCIAL_ICONS = {
    github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
    facebook: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  };

  function isValidUrl(value) {
    try {
      return new URL(value).protocol === 'https:';
    } catch {
      return false;
    }
  }

  const iconsMount = document.getElementById('social-links');
  if (iconsMount) {
    Object.entries(SOCIAL_LINKS).forEach(([key, { name, url }]) => {
      if (!SOCIAL_ICONS[key]) return;
      const href = (url || '').trim();
      let icon;
      if (isValidUrl(href)) {
        icon = document.createElement('a');
        icon.className = 'social-icon';
        icon.href = href;
        icon.target = '_blank';
        icon.rel = 'noopener noreferrer';
        icon.setAttribute('aria-label', key === 'whatsapp' ? 'M’écrire sur WhatsApp (nouvel onglet)' : `Voir mon profil ${name} (nouvel onglet)`);
      } else {
        icon = document.createElement('span');
        icon.className = 'social-icon is-pending';
        icon.setAttribute('role', 'img');
        icon.setAttribute('aria-label', name);
      }
      icon.dataset.tooltip = name;
      icon.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="${SOCIAL_ICONS[key]}"/></svg>`;
      iconsMount.appendChild(icon);
    });
  }

  /* ---------- Année du copyright ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
    document.body.style.overflow = '';
  }

  function openMenu() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fermer le menu');
    document.body.style.overflow = 'hidden';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) closeMenu();
      else openMenu();
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1023) closeMenu();
    });
  }

  /* ---------- Apparition au défilement ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Lien de navigation actif au défilement ---------- */
  const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const headerH =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 68;

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
          });
        });
      },
      { rootMargin: `-${headerH + 1}px 0px -70% 0px`, threshold: 0 },
    );
    sections.forEach((section) => spyObserver.observe(section));
  }

  /* ---------- Copier l'adresse email ----------
     Pas de lien mailto: — sans logiciel de messagerie configuré, Windows ouvre
     Edge. L'adresse reste affichée en clair et se copie en un clic.
     Délégation : couvre aussi les boutons insérés dans les messages du formulaire. */
  document.addEventListener('click', async (event) => {
    const btn = event.target.closest('.copy-btn[data-copy]');
    if (!btn) return;
    const label = btn.querySelector('.copy-label');
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
    } catch {
      return; // presse-papiers indisponible (http, permissions) : l'adresse reste lisible
    }
    btn.classList.add('is-copied');
    btn.setAttribute('aria-label', 'Adresse email copiée');
    if (label) label.textContent = 'Copiée';
    setTimeout(() => {
      btn.classList.remove('is-copied');
      btn.setAttribute('aria-label', 'Copier l’adresse email');
      if (label) label.textContent = 'Copier';
    }, 2200);
  });

  /* ---------- Formulaire de contact ----------
     L'envoi passe par sendMessage(). Pour l'activer, renseigner l'URL du
     service dans l'attribut data-endpoint du <form> (ex. Formspree :
     https://formspree.io/f/xxxxxxx). La requête part en JSON (POST) et toute
     réponse 2xx est considérée comme un succès. Sans endpoint, rien n'est
     envoyé et le visiteur en est clairement informé. */
  const form = document.getElementById('contact-form');
  if (!form) return;

  const CONTACT_EMAIL = 'simonnehoueto44@gmail.com';
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const status = document.getElementById('cf-status');
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitLabel = submitBtn.querySelector('.btn-label');
  const fields = {
    name: form.elements.name,
    email: form.elements.email,
    subject: form.elements.subject,
    message: form.elements.message,
  };
  const loadedAt = Date.now();
  let submitted = false;
  let sending = false;

  const rules = {
    name: (v) =>
      !v ? 'Indiquez votre nom.' : v.length < 2 ? 'Votre nom doit contenir au moins 2 caractères.' : '',
    email: (v) =>
      !v ? 'Indiquez votre adresse email.' : !EMAIL_RE.test(v) ? 'Cette adresse email ne semble pas valide.' : '',
    message: (v) =>
      !v
        ? 'Écrivez votre message.'
        : v.length < 10
          ? 'Votre message est un peu court (10 caractères minimum).'
          : '',
  };

  function validateField(name) {
    const input = fields[name];
    const error = rules[name](input.value.trim());
    const errorEl = document.getElementById(`${input.id}-error`);
    input.setAttribute('aria-invalid', error ? 'true' : 'false');
    errorEl.textContent = error;
    return !error;
  }

  function validateAll() {
    const invalid = Object.keys(rules).filter((name) => !validateField(name));
    if (invalid.length) fields[invalid[0]].focus();
    return invalid.length === 0;
  }

  // Après une première tentative, les erreurs se mettent à jour pendant la saisie
  Object.keys(rules).forEach((name) => {
    fields[name].addEventListener('input', () => submitted && validateField(name));
    fields[name].addEventListener('blur', () => submitted && validateField(name));
  });

  function showStatus(state, html) {
    status.dataset.state = state;
    status.innerHTML = html;
    status.hidden = false;
  }

  function setLoading(isLoading) {
    sending = isLoading;
    form.classList.toggle('is-loading', isLoading);
    form.setAttribute('aria-busy', String(isLoading));
    submitBtn.disabled = isLoading;
    submitLabel.textContent = isLoading ? 'Envoi en cours…' : 'Envoyer le message';
  }

  async function sendMessage(endpoint, data) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } finally {
      clearTimeout(timer);
    }
  }

  const mailLink =
    `<strong>${CONTACT_EMAIL}</strong> ` +
    `<button type="button" class="copy-btn copy-btn-inline" data-copy="${CONTACT_EMAIL}" aria-label="Copier l’adresse email">` +
    `<span class="copy-label">Copier</span></button>`;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;
    submitted = true;
    status.hidden = true;

    if (!validateAll()) return;

    // Protection basique : champ piège rempli ou envoi quasi instantané = robot
    if (form.elements.website.value || Date.now() - loadedAt < 2500) return;

    const endpoint = form.dataset.endpoint.trim();
    if (!endpoint) {
      showStatus(
        'info',
        `L’envoi en ligne n’est pas encore activé : votre message <strong>n’a pas été envoyé</strong>. ` +
          `Écrivez-moi directement à ${mailLink}, je vous répondrai rapidement.`,
      );
      return;
    }

    const data = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      subject: fields.subject.value.trim(),
      message: fields.message.value.trim(),
      _subject: `Portfolio — ${fields.subject.value.trim() || 'Nouveau message'}`,
    };

    setLoading(true);
    try {
      await sendMessage(endpoint, data);
      form.reset();
      submitted = false;
      Object.values(fields).forEach((input) => input.removeAttribute('aria-invalid'));
      showStatus('success', 'Merci ! Votre message a bien été envoyé. Je vous réponds dans les plus brefs délais.');
    } catch {
      showStatus(
        'error',
        `Le message n’a pas pu être envoyé (problème de connexion ou de service). ` +
          `Réessayez dans un instant ou écrivez-moi à ${mailLink}.`,
      );
    } finally {
      setLoading(false);
    }
  });
})();
