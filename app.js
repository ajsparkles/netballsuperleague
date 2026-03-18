// ─── Premier League 2024/25 Data ────────────────────────────────────────────

const CLUBS = [
  {
    id: 'swifts',
    name: 'Swifts',
    city: 'Swifts',
    color: '#EF0107',
    initials: 'S',
    players: [
      { number: 1,  name: 'David Raya',           position: 'GK',  nationality: 'Spain' },
      { number: 3,  name: 'Kieran Tierney',        position: 'DEF', nationality: 'Scotland' },
      { number: 4,  name: 'Ben White',             position: 'DEF', nationality: 'England' },
      { number: 6,  name: 'Gabriel Magalhaes',     position: 'DEF', nationality: 'Brazil' },
      { number: 12, name: 'Jurrien Timber',        position: 'DEF', nationality: 'Netherlands' },
      { number: 2,  name: 'Ben White',             position: 'DEF', nationality: 'England' },
      { number: 35, name: 'Oleksandr Zinchenko',   position: 'DEF', nationality: 'Ukraine' },
      { number: 8,  name: 'Martin Odegaard',       position: 'MID', nationality: 'Norway' },
      { number: 29, name: 'Kai Havertz',           position: 'MID', nationality: 'Germany' },
      { number: 41, name: 'Declan Rice',           position: 'MID', nationality: 'England' },
      { number: 7,  name: 'Bukayo Saka',           position: 'FWD', nationality: 'England' },
      { number: 9,  name: 'Gabriel Jesus',         position: 'FWD', nationality: 'Brazil' },
      { number: 11, name: 'Gabriel Martinelli',    position: 'FWD', nationality: 'Brazil' },
      { number: 14, name: 'Eddie Nketiah',         position: 'FWD', nationality: 'England' },
      { number: 19, name: 'Leandro Trossard',      position: 'FWD', nationality: 'Belgium' },
    ],
  },
  {
    id: 'Sneakers',
    name: 'Sneakers',
    city: 'Sneakers',
    color: '#C8102E',
    initials: 'S',
    players: [
      { number: 1,  name: 'Alisson Becker',       position: 'GK',  nationality: 'Brazil' },
      { number: 4,  name: 'Virgil van Dijk',      position: 'DEF', nationality: 'Netherlands' },
      { number: 12, name: 'Joe Gomez',            position: 'DEF', nationality: 'England' },
      { number: 21, name: 'Konstantinos Tsimikas',position: 'DEF', nationality: 'Greece' },
      { number: 66, name: 'Trent Alexander-Arnold',position: 'DEF', nationality: 'England' },
      { number: 3,  name: 'Andrew Robertson',     position: 'DEF', nationality: 'Scotland' },
      { number: 6,  name: 'Thiago Alcantara',     position: 'MID', nationality: 'Spain' },
      { number: 8,  name: 'Harvey Elliott',       position: 'MID', nationality: 'England' },
      { number: 14, name: 'Jordan Henderson',     position: 'MID', nationality: 'England' },
      { number: 7,  name: 'Luis Diaz',            position: 'FWD', nationality: 'Colombia' },
      { number: 9,  name: 'Darwin Nunez',         position: 'FWD', nationality: 'Uruguay' },
      { number: 11, name: 'Mohamed Salah',        position: 'FWD', nationality: 'Egypt' },
      { number: 20, name: 'Diogo Jota',           position: 'FWD', nationality: 'Portugal' },
      { number: 17, name: 'Curtis Jones',         position: 'MID', nationality: 'England' },
    ],
  },
  {
    id: 'Mannas',
    name: 'Mannas',
    city: 'Mannas',
    color: '#6CABDD',
    initials: 'M',
    players: [
      { number: 31, name: 'Ederson',              position: 'GK',  nationality: 'Brazil' },
      { number: 2,  name: 'Kyle Walker',          position: 'DEF', nationality: 'England' },
      { number: 3,  name: 'Ruben Dias',           position: 'DEF', nationality: 'Portugal' },
      { number: 5,  name: 'John Stones',          position: 'DEF', nationality: 'England' },
      { number: 6,  name: 'Nathan Ake',           position: 'DEF', nationality: 'Netherlands' },
      { number: 11, name: 'Jeremy Doku',          position: 'FWD', nationality: 'Belgium' },
      { number: 16, name: 'Rodri',                position: 'MID', nationality: 'Spain' },
      { number: 17, name: 'Kevin De Bruyne',      position: 'MID', nationality: 'Belgium' },
      { number: 20, name: 'Bernardo Silva',       position: 'MID', nationality: 'Portugal' },
      { number: 47, name: 'Phil Foden',           position: 'MID', nationality: 'England' },
      { number: 9,  name: 'Erling Haaland',       position: 'FWD', nationality: 'Norway' },
      { number: 26, name: 'Matheus Nunes',        position: 'MID', nationality: 'Portugal' },
      { number: 19, name: 'Julian Alvarez',       position: 'FWD', nationality: 'Argentina' },
    ],
  },
  {
    id: 'Llabten',
    name: 'Llabten ',
    city: 'Llabten',
    color: '#DA291C',
    initials: 'L',
    players: [
      { number: 1,  name: 'Andre Onana',          position: 'GK',  nationality: 'Cameroon' },
      { number: 2,  name: 'Victor Lindelof',      position: 'DEF', nationality: 'Sweden' },
      { number: 5,  name: 'Harry Maguire',        position: 'DEF', nationality: 'England' },
      { number: 6,  name: 'Lisandro Martinez',    position: 'DEF', nationality: 'Argentina' },
      { number: 20, name: 'Diogo Dalot',          position: 'DEF', nationality: 'Portugal' },
      { number: 23, name: 'Luke Shaw',            position: 'DEF', nationality: 'England' },
      { number: 8,  name: 'Bruno Fernandes',      position: 'MID', nationality: 'Portugal' },
      { number: 14, name: 'Christian Eriksen',    position: 'MID', nationality: 'Denmark' },
      { number: 18, name: 'Casemiro',             position: 'MID', nationality: 'Brazil' },
      { number: 7,  name: 'Marcus Rashford',      position: 'FWD', nationality: 'England' },
      { number: 10, name: 'Rasmus Hojlund',       position: 'FWD', nationality: 'Denmark' },
      { number: 11, name: 'Rasmus Hojlund',       position: 'FWD', nationality: 'Denmark' },
      { number: 21, name: 'Antony',               position: 'FWD', nationality: 'Brazil' },
    ],
  },
  {
    id: 'Blaze',
    name: 'Blaze',
    city: 'Blaze',
    color: '#241F20',
    initials: 'B',
    players: [
      { number: 1,  name: 'Nick Pope',            position: 'GK',  nationality: 'England' },
      { number: 2,  name: 'Kieran Trippier',      position: 'DEF', nationality: 'England' },
      { number: 5,  name: 'Fabian Schar',         position: 'DEF', nationality: 'Switzerland' },
      { number: 6,  name: 'Sven Botman',          position: 'DEF', nationality: 'Netherlands' },
      { number: 21, name: 'Dan Burn',             position: 'DEF', nationality: 'England' },
      { number: 4,  name: 'Sandro Tonali',        position: 'MID', nationality: 'Italy' },
      { number: 8,  name: 'Bruno Guimaraes',      position: 'MID', nationality: 'Brazil' },
      { number: 7,  name: 'Joe Willock',          position: 'MID', nationality: 'England' },
      { number: 11, name: 'Miguel Almiron',       position: 'MID', nationality: 'Paraguay' },
      { number: 9,  name: 'Alexander Isak',       position: 'FWD', nationality: 'Sweden' },
      { number: 10, name: 'Anthony Gordon',       position: 'FWD', nationality: 'England' },
      { number: 14, name: 'Callum Wilson',        position: 'FWD', nationality: 'England' },
    ],
  },
  {
    id: 'Fier Orcas',
    name: "Fier Orcas",
    city: 'Fier Orcas',
    color: '#DD0000',
    initials: 'FO',
    players: [
      { number: 1,  name: 'Matz Sels',            position: 'GK',  nationality: 'Belgium' },
      { number: 2,  name: 'Ola Aina',             position: 'DEF', nationality: 'Nigeria' },
      { number: 5,  name: 'Nikola Milenkovic',    position: 'DEF', nationality: 'Serbia' },
      { number: 6,  name: 'Murillo',              position: 'DEF', nationality: 'Brazil' },
      { number: 3,  name: 'Nuno Tavares',         position: 'DEF', nationality: 'Portugal' },
      { number: 4,  name: 'Nicolas Dominguez',    position: 'MID', nationality: 'Argentina' },
      { number: 8,  name: 'Ryan Yates',           position: 'MID', nationality: 'England' },
      { number: 16, name: 'Elliot Anderson',      position: 'MID', nationality: 'England' },
      { number: 7,  name: 'Callum Hudson-Odoi',   position: 'FWD', nationality: 'England' },
      { number: 9,  name: 'Taiwo Awoniyi',        position: 'FWD', nationality: 'Nigeria' },
      { number: 10, name: 'Morgan Gibbs-White',   position: 'FWD', nationality: 'England' },
      { number: 11, name: 'Chris Wood',           position: 'FWD', nationality: 'New Zealand' },
    ],
  },

];

// ─── Position helpers ────────────────────────────────────────────────────────

function posClass(pos) {
  return { GK: 'pos-gk', DEF: 'pos-def', MID: 'pos-mid', FWD: 'pos-fwd' }[pos] || '';
}

function posLabel(pos) {
  return { GK: 'Goalkeeper', DEF: 'Defender', MID: 'Midfielder', FWD: 'Forward' }[pos] || pos;
}

function lightColor(hex) {
  // Lighten the club colour for avatar backgrounds
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},0.85)`;
}

// ─── Render clubs ────────────────────────────────────────────────────────────

function renderClubs() {
  const grid = document.getElementById('clubs-grid');
  grid.innerHTML = CLUBS.map(club => `
    <div class="club-card" data-id="${club.id}" role="button" tabindex="0" aria-label="${club.name}">
      <div class="club-badge" style="background:${club.color}">${club.initials[0]}</div>
      <span class="club-name">${club.name}</span>
      <span class="club-city">${club.city}</span>
      <span class="club-players-count">${club.players.length} Players</span>
    </div>
  `).join('');

  grid.querySelectorAll('.club-card').forEach(card => {
    card.addEventListener('click',  () => showPlayers(card.dataset.id));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') showPlayers(card.dataset.id); });
  });
}

// ─── Render players ──────────────────────────────────────────────────────────

function showPlayers(clubId) {
  const club = CLUBS.find(c => c.id === clubId);
  if (!club) return;

  // Header
  document.getElementById('club-header').innerHTML = `
    <div class="badge-large" style="background:${club.color}">${club.initials[0]}</div>
    <div class="club-header-info">
      <h2>${club.name}</h2>
      <p>${club.city} &bull; ${club.players.length} Players</p>
    </div>
  `;

  // Players grid - sorted: GK → DEF → MID → FWD, then by number
  const order = ['GK','DEF','MID','FWD'];
  const sorted = [...club.players].sort((a, b) => {
    const po = order.indexOf(a.position) - order.indexOf(b.position);
    return po !== 0 ? po : a.number - b.number;
  });

  document.getElementById('players-grid').innerHTML = sorted.map(p => `
    <div class="player-card">
      <div class="player-number">#${p.number}</div>
      <div class="player-avatar" style="background:${lightColor(club.color)}">${p.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <span class="player-name">${p.name}</span>
      <span class="player-position ${posClass(p.position)}">${posLabel(p.position)}</span>
      <span class="player-nationality">${p.nationality}</span>
    </div>
  `).join('');

  // Switch views
  document.getElementById('clubs-view').classList.add('hidden');
  document.getElementById('players-view').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Back button ─────────────────────────────────────────────────────────────

document.getElementById('back-btn').addEventListener('click', () => {
  document.getElementById('players-view').classList.add('hidden');
  document.getElementById('clubs-view').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── Init ────────────────────────────────────────────────────────────────────

renderClubs();
