// ─── Premier League 2024/25 Data ────────────────────────────────────────────

const CLUBS = [
  {
    id: 'arsenal',
    name: 'Arsenal',
    city: 'London',
    color: '#EF0107',
    initials: 'AFC',
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
    id: 'astonvilla',
    name: 'Aston Villa',
    city: 'Birmingham',
    color: '#670E36',
    initials: 'AVFC',
    players: [
      { number: 1,  name: 'Emiliano Martinez',    position: 'GK',  nationality: 'Argentina' },
      { number: 5,  name: 'Tyrone Mings',         position: 'DEF', nationality: 'England' },
      { number: 12, name: 'Lucas Digne',          position: 'DEF', nationality: 'France' },
      { number: 15, name: 'Ezri Konsa',           position: 'DEF', nationality: 'England' },
      { number: 30, name: 'Matty Cash',           position: 'DEF', nationality: 'Poland' },
      { number: 4,  name: 'Douglas Luiz',         position: 'MID', nationality: 'Brazil' },
      { number: 7,  name: 'John McGinn',          position: 'MID', nationality: 'Scotland' },
      { number: 8,  name: 'Youri Tielemans',      position: 'MID', nationality: 'Belgium' },
      { number: 38, name: 'Boubacar Kamara',      position: 'MID', nationality: 'France' },
      { number: 10, name: 'Emiliano Buendia',     position: 'FWD', nationality: 'Argentina' },
      { number: 11, name: 'Leon Bailey',          position: 'FWD', nationality: 'Jamaica' },
      { number: 20, name: 'Moussa Diaby',         position: 'FWD', nationality: 'France' },
      { number: 9,  name: 'Ollie Watkins',        position: 'FWD', nationality: 'England' },
      { number: 32, name: 'Morgan Rogers',        position: 'FWD', nationality: 'England' },
    ],
  },
  {
    id: 'bournemouth',
    name: 'Bournemouth',
    city: 'Bournemouth',
    color: '#DA291C',
    initials: 'AFC',
    players: [
      { number: 1,  name: 'Neto',                 position: 'GK',  nationality: 'Brazil' },
      { number: 2,  name: 'Adam Smith',           position: 'DEF', nationality: 'England' },
      { number: 5,  name: 'Lloyd Kelly',          position: 'DEF', nationality: 'England' },
      { number: 6,  name: 'Chris Mepham',         position: 'DEF', nationality: 'Wales' },
      { number: 33, name: 'Milos Kerkez',         position: 'DEF', nationality: 'Hungary' },
      { number: 4,  name: 'Lewis Cook',           position: 'MID', nationality: 'England' },
      { number: 8,  name: 'David Brooks',         position: 'MID', nationality: 'Wales' },
      { number: 10, name: 'Ryan Christie',        position: 'MID', nationality: 'Scotland' },
      { number: 28, name: 'Philip Billing',       position: 'MID', nationality: 'Denmark' },
      { number: 7,  name: 'Marcus Tavernier',     position: 'FWD', nationality: 'England' },
      { number: 9,  name: 'Dominic Solanke',      position: 'FWD', nationality: 'England' },
      { number: 11, name: 'Dango Ouattara',       position: 'FWD', nationality: 'Burkina Faso' },
      { number: 19, name: 'Evanilson',            position: 'FWD', nationality: 'Brazil' },
    ],
  },
  {
    id: 'brentford',
    name: 'Brentford',
    city: 'London',
    color: '#e30613',
    initials: 'BFC',
    players: [
      { number: 1,  name: 'Mark Flekken',         position: 'GK',  nationality: 'Netherlands' },
      { number: 2,  name: 'Aaron Hickey',         position: 'DEF', nationality: 'Scotland' },
      { number: 5,  name: 'Ethan Pinnock',        position: 'DEF', nationality: 'Jamaica' },
      { number: 6,  name: 'Pontus Jansson',       position: 'DEF', nationality: 'Sweden' },
      { number: 30, name: 'Rico Henry',           position: 'DEF', nationality: 'England' },
      { number: 8,  name: 'Mathias Jensen',       position: 'MID', nationality: 'Denmark' },
      { number: 15, name: 'Frank Onyeka',         position: 'MID', nationality: 'Nigeria' },
      { number: 19, name: 'Christian Norgaard',   position: 'MID', nationality: 'Denmark' },
      { number: 40, name: 'Vitaly Janelt',        position: 'MID', nationality: 'Germany' },
      { number: 7,  name: 'Keane Lewis-Potter',   position: 'FWD', nationality: 'England' },
      { number: 9,  name: 'Ivan Toney',           position: 'FWD', nationality: 'England' },
      { number: 10, name: 'Bryan Mbeumo',         position: 'FWD', nationality: 'Cameroon' },
      { number: 11, name: 'Yoane Wissa',          position: 'FWD', nationality: 'DR Congo' },
    ],
  },
  {
    id: 'brighton',
    name: 'Brighton',
    city: 'Brighton',
    color: '#0057B8',
    initials: 'BHAFC',
    players: [
      { number: 1,  name: 'Jason Steele',         position: 'GK',  nationality: 'England' },
      { number: 2,  name: 'Joel Veltman',         position: 'DEF', nationality: 'Netherlands' },
      { number: 5,  name: 'Lewis Dunk',           position: 'DEF', nationality: 'England' },
      { number: 23, name: 'Pervis Estupinan',     position: 'DEF', nationality: 'Ecuador' },
      { number: 29, name: 'Igor',                 position: 'DEF', nationality: 'Brazil' },
      { number: 8,  name: 'Yves Bissouma',        position: 'MID', nationality: 'Mali' },
      { number: 10, name: 'Alexis Mac Allister',  position: 'MID', nationality: 'Argentina' },
      { number: 20, name: 'Julio Enciso',         position: 'MID', nationality: 'Paraguay' },
      { number: 22, name: 'Tariq Lamptey',        position: 'MID', nationality: 'Ghana' },
      { number: 7,  name: 'Solly March',          position: 'FWD', nationality: 'England' },
      { number: 9,  name: 'Danny Welbeck',        position: 'FWD', nationality: 'England' },
      { number: 11, name: 'Kaoru Mitoma',         position: 'FWD', nationality: 'Japan' },
      { number: 18, name: 'Facundo Buonanotte',   position: 'FWD', nationality: 'Argentina' },
    ],
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    city: 'London',
    color: '#034694',
    initials: 'CFC',
    players: [
      { number: 1,  name: 'Robert Sanchez',       position: 'GK',  nationality: 'Spain' },
      { number: 6,  name: 'Thiago Silva',         position: 'DEF', nationality: 'Brazil' },
      { number: 18, name: 'Malo Gusto',           position: 'DEF', nationality: 'France' },
      { number: 26, name: 'Levi Colwill',         position: 'DEF', nationality: 'England' },
      { number: 33, name: 'Wesley Fofana',        position: 'DEF', nationality: 'France' },
      { number: 7,  name: 'Raheem Sterling',      position: 'MID', nationality: 'England' },
      { number: 8,  name: 'Enzo Fernandez',       position: 'MID', nationality: 'Argentina' },
      { number: 17, name: 'Conor Gallagher',      position: 'MID', nationality: 'England' },
      { number: 25, name: 'Moises Caicedo',       position: 'MID', nationality: 'Ecuador' },
      { number: 10, name: 'Mykhailo Mudryk',      position: 'FWD', nationality: 'Ukraine' },
      { number: 11, name: 'Noni Madueke',         position: 'FWD', nationality: 'England' },
      { number: 19, name: 'Nicolas Jackson',      position: 'FWD', nationality: 'Senegal' },
      { number: 29, name: 'Armando Broja',        position: 'FWD', nationality: 'Albania' },
    ],
  },
  {
    id: 'crystalpalace',
    name: 'Crystal Palace',
    city: 'London',
    color: '#1B458F',
    initials: 'CPFC',
    players: [
      { number: 1,  name: 'Sam Johnstone',        position: 'GK',  nationality: 'England' },
      { number: 2,  name: 'Joel Ward',            position: 'DEF', nationality: 'England' },
      { number: 5,  name: 'Marc Guehi',           position: 'DEF', nationality: 'England' },
      { number: 6,  name: 'Joachim Andersen',     position: 'DEF', nationality: 'Denmark' },
      { number: 3,  name: 'Tyrick Mitchell',      position: 'DEF', nationality: 'England' },
      { number: 4,  name: 'Cheick Doucoure',      position: 'MID', nationality: 'Mali' },
      { number: 8,  name: 'Jefferson Lerma',      position: 'MID', nationality: 'Colombia' },
      { number: 14, name: 'Adam Wharton',         position: 'MID', nationality: 'England' },
      { number: 11, name: 'Eberechi Eze',         position: 'FWD', nationality: 'England' },
      { number: 17, name: 'Michael Olise',        position: 'FWD', nationality: 'France' },
      { number: 22, name: 'Odsonne Edouard',      position: 'FWD', nationality: 'France' },
      { number: 9,  name: 'Jean-Philippe Mateta', position: 'FWD', nationality: 'France' },
    ],
  },
  {
    id: 'everton',
    name: 'Everton',
    city: 'Liverpool',
    color: '#003399',
    initials: 'EFC',
    players: [
      { number: 1,  name: 'Jordan Pickford',      position: 'GK',  nationality: 'England' },
      { number: 2,  name: 'Seamus Coleman',       position: 'DEF', nationality: 'Ireland' },
      { number: 5,  name: 'Michael Keane',        position: 'DEF', nationality: 'England' },
      { number: 6,  name: 'James Tarkowski',      position: 'DEF', nationality: 'England' },
      { number: 18, name: 'Ashley Young',         position: 'DEF', nationality: 'England' },
      { number: 4,  name: 'Abdoulaye Doucoure',   position: 'MID', nationality: 'France' },
      { number: 14, name: 'Amadou Onana',         position: 'MID', nationality: 'Belgium' },
      { number: 21, name: 'Andre Gomes',          position: 'MID', nationality: 'Portugal' },
      { number: 10, name: 'Dwight McNeil',        position: 'FWD', nationality: 'England' },
      { number: 7,  name: 'Idrissa Gueye',        position: 'MID', nationality: 'Senegal' },
      { number: 9,  name: 'Dominic Calvert-Lewin',position: 'FWD', nationality: 'England' },
      { number: 11, name: 'Beto',                 position: 'FWD', nationality: 'Portugal' },
    ],
  },
  {
    id: 'fulham',
    name: 'Fulham',
    city: 'London',
    color: '#000000',
    initials: 'FFC',
    players: [
      { number: 1,  name: 'Bernd Leno',           position: 'GK',  nationality: 'Germany' },
      { number: 2,  name: 'Kenny Tete',           position: 'DEF', nationality: 'Netherlands' },
      { number: 3,  name: 'Antonee Robinson',     position: 'DEF', nationality: 'USA' },
      { number: 5,  name: 'Tosin Adarabioyo',     position: 'DEF', nationality: 'England' },
      { number: 6,  name: 'Calvin Bassey',        position: 'DEF', nationality: 'Nigeria' },
      { number: 4,  name: 'Andreas Pereira',      position: 'MID', nationality: 'Brazil' },
      { number: 8,  name: 'Tom Cairney',          position: 'MID', nationality: 'Scotland' },
      { number: 18, name: 'Harrison Reed',        position: 'MID', nationality: 'England' },
      { number: 7,  name: 'Bobby Decordova-Reid', position: 'FWD', nationality: 'Jamaica' },
      { number: 9,  name: 'Rodrigo Muniz',        position: 'FWD', nationality: 'Brazil' },
      { number: 10, name: 'Alex Iwobi',           position: 'FWD', nationality: 'Nigeria' },
      { number: 11, name: 'Willian',              position: 'FWD', nationality: 'Brazil' },
    ],
  },
  {
    id: 'ipswich',
    name: 'Ipswich Town',
    city: 'Ipswich',
    color: '#003B85',
    initials: 'ITFC',
    players: [
      { number: 1,  name: 'Arijanet Muric',       position: 'GK',  nationality: 'Kosovo' },
      { number: 5,  name: 'Sam Morsy',            position: 'MID', nationality: 'Egypt' },
      { number: 6,  name: 'Jacob Greaves',        position: 'DEF', nationality: 'England' },
      { number: 2,  name: 'Nathan Broadhead',     position: 'FWD', nationality: 'Wales' },
      { number: 8,  name: 'Massimo Luongo',       position: 'MID', nationality: 'Australia' },
      { number: 10, name: 'Omari Hutchinson',     position: 'FWD', nationality: 'England' },
      { number: 11, name: 'Wes Burns',            position: 'FWD', nationality: 'Wales' },
      { number: 14, name: 'Jack Clarke',          position: 'FWD', nationality: 'England' },
      { number: 19, name: 'Conor Chaplin',        position: 'FWD', nationality: 'England' },
      { number: 9,  name: 'Liam Delap',           position: 'FWD', nationality: 'England' },
      { number: 4,  name: 'Axel Tuanzebe',        position: 'DEF', nationality: 'DR Congo' },
      { number: 3,  name: 'Leif Davis',           position: 'DEF', nationality: 'England' },
    ],
  },
  {
    id: 'leicester',
    name: 'Leicester City',
    city: 'Leicester',
    color: '#003090',
    initials: 'LCFC',
    players: [
      { number: 1,  name: 'Mads Hermansen',       position: 'GK',  nationality: 'Denmark' },
      { number: 4,  name: 'Wout Faes',            position: 'DEF', nationality: 'Belgium' },
      { number: 5,  name: 'Jannik Vestergaard',   position: 'DEF', nationality: 'Denmark' },
      { number: 2,  name: 'James Justin',         position: 'DEF', nationality: 'England' },
      { number: 3,  name: 'Victor Kristiansen',   position: 'DEF', nationality: 'Denmark' },
      { number: 6,  name: 'Conor Coady',          position: 'DEF', nationality: 'England' },
      { number: 8,  name: 'Boubakary Soumare',    position: 'MID', nationality: 'France' },
      { number: 10, name: 'James Maddison',       position: 'MID', nationality: 'England' },
      { number: 14, name: 'Wilfred Ndidi',        position: 'MID', nationality: 'Nigeria' },
      { number: 7,  name: 'Harvey Barnes',        position: 'FWD', nationality: 'England' },
      { number: 9,  name: 'Jamie Vardy',          position: 'FWD', nationality: 'England' },
      { number: 11, name: 'Abdul Fatawu',         position: 'FWD', nationality: 'Ghana' },
    ],
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    city: 'Liverpool',
    color: '#C8102E',
    initials: 'LFC',
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
    id: 'mancity',
    name: 'Manchester City',
    city: 'Manchester',
    color: '#6CABDD',
    initials: 'MCFC',
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
    id: 'manutd',
    name: 'Manchester United',
    city: 'Manchester',
    color: '#DA291C',
    initials: 'MUFC',
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
    id: 'newcastle',
    name: 'Newcastle United',
    city: 'Newcastle',
    color: '#241F20',
    initials: 'NUFC',
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
    id: 'nottmforest',
    name: "Nottingham Forest",
    city: 'Nottingham',
    color: '#DD0000',
    initials: 'NFFC',
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
  {
    id: 'southampton',
    name: 'Southampton',
    city: 'Southampton',
    color: '#D71920',
    initials: 'SFC',
    players: [
      { number: 1,  name: 'Aaron Ramsdale',       position: 'GK',  nationality: 'England' },
      { number: 2,  name: 'Kyle Walker-Peters',   position: 'DEF', nationality: 'England' },
      { number: 5,  name: 'Jack Stephens',        position: 'DEF', nationality: 'England' },
      { number: 6,  name: 'Jan Bednarek',         position: 'DEF', nationality: 'Poland' },
      { number: 3,  name: 'Ryan Manning',         position: 'DEF', nationality: 'Ireland' },
      { number: 4,  name: 'Joe Aribo',            position: 'MID', nationality: 'Nigeria' },
      { number: 8,  name: 'Flynn Downes',         position: 'MID', nationality: 'England' },
      { number: 14, name: 'Stuart Armstrong',     position: 'MID', nationality: 'Scotland' },
      { number: 7,  name: 'Tyler Dibling',        position: 'FWD', nationality: 'England' },
      { number: 9,  name: 'Adam Armstrong',       position: 'FWD', nationality: 'England' },
      { number: 10, name: 'Ben Brereton Diaz',    position: 'FWD', nationality: 'Chile' },
    ],
  },
  {
    id: 'spurs',
    name: 'Tottenham Hotspur',
    city: 'London',
    color: '#132257',
    initials: 'THFC',
    players: [
      { number: 1,  name: 'Guglielmo Vicario',    position: 'GK',  nationality: 'Italy' },
      { number: 2,  name: 'Pedro Porro',          position: 'DEF', nationality: 'Spain' },
      { number: 5,  name: 'Pierre-Emile Hojbjerg',position: 'MID', nationality: 'Denmark' },
      { number: 6,  name: 'Cristian Romero',      position: 'DEF', nationality: 'Argentina' },
      { number: 22, name: 'Emerson Royal',        position: 'DEF', nationality: 'Brazil' },
      { number: 33, name: 'Ben Davies',           position: 'DEF', nationality: 'Wales' },
      { number: 4,  name: 'Rodrigo Bentancur',    position: 'MID', nationality: 'Uruguay' },
      { number: 14, name: 'Destiny Udogie',       position: 'DEF', nationality: 'Italy' },
      { number: 7,  name: 'Son Heung-min',        position: 'FWD', nationality: 'South Korea' },
      { number: 9,  name: 'Dominic Solanke',      position: 'FWD', nationality: 'England' },
      { number: 10, name: 'James Maddison',       position: 'MID', nationality: 'England' },
      { number: 17, name: 'Richarlison',          position: 'FWD', nationality: 'Brazil' },
      { number: 20, name: 'Brennan Johnson',      position: 'FWD', nationality: 'Wales' },
    ],
  },
  {
    id: 'westham',
    name: 'West Ham United',
    city: 'London',
    color: '#7A263A',
    initials: 'WHUFC',
    players: [
      { number: 1,  name: 'Lukasz Fabianski',     position: 'GK',  nationality: 'Poland' },
      { number: 2,  name: 'Ben Johnson',          position: 'DEF', nationality: 'England' },
      { number: 5,  name: 'Kurt Zouma',           position: 'DEF', nationality: 'France' },
      { number: 6,  name: 'Angelo Ogbonna',       position: 'DEF', nationality: 'Italy' },
      { number: 33, name: 'Aaron Cresswell',      position: 'DEF', nationality: 'England' },
      { number: 8,  name: 'Tomas Soucek',         position: 'MID', nationality: 'Czech Republic' },
      { number: 15, name: 'Edson Alvarez',        position: 'MID', nationality: 'Mexico' },
      { number: 26, name: 'Lucas Paqueta',        position: 'MID', nationality: 'Brazil' },
      { number: 18, name: 'Mohammed Kudus',       position: 'MID', nationality: 'Ghana' },
      { number: 7,  name: 'Jarrod Bowen',         position: 'FWD', nationality: 'England' },
      { number: 9,  name: 'Michail Antonio',      position: 'FWD', nationality: 'Jamaica' },
      { number: 11, name: 'Said Benrahma',        position: 'FWD', nationality: 'Algeria' },
    ],
  },
  {
    id: 'wolves',
    name: 'Wolverhampton',
    city: 'Wolverhampton',
    color: '#FDB913',
    initials: 'WFC',
    players: [
      { number: 1,  name: 'Jose Sa',              position: 'GK',  nationality: 'Portugal' },
      { number: 2,  name: 'Matt Doherty',         position: 'DEF', nationality: 'Ireland' },
      { number: 5,  name: 'Max Kilman',           position: 'DEF', nationality: 'England' },
      { number: 15, name: 'Craig Dawson',         position: 'DEF', nationality: 'England' },
      { number: 37, name: 'Rayan Ait-Nouri',      position: 'DEF', nationality: 'Algeria' },
      { number: 4,  name: 'Mario Lemina',         position: 'MID', nationality: 'Gabon' },
      { number: 8,  name: 'Joao Gomes',          position: 'MID', nationality: 'Brazil' },
      { number: 23, name: 'Jean-Ricner Bellegarde',position: 'MID', nationality: 'France' },
      { number: 7,  name: 'Pedro Neto',           position: 'FWD', nationality: 'Portugal' },
      { number: 9,  name: 'Matheus Cunha',        position: 'FWD', nationality: 'Brazil' },
      { number: 11, name: 'Hwang Hee-chan',       position: 'FWD', nationality: 'South Korea' },
      { number: 20, name: 'Pablo Sarabia',        position: 'FWD', nationality: 'Spain' },
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
