// ---------------------------------------------------------------------------
// Récupère les téléchargements de statAfrikR sur le miroir CRAN de RStudio et
// écrit src/data/cran-stats.json, lu au moment de la construction du site.
//
// Lancé par le workflow GitHub Actions avant chaque `npm run build`, y compris
// sur la planification horaire. En cas d'échec réseau, le fichier existant est
// conservé tel quel : le site se construit avec les derniers chiffres connus
// plutôt que de casser.
//
// Usage : node scripts/fetch-cran-stats.mjs
// ---------------------------------------------------------------------------

import { readFileSync, writeFileSync } from 'node:fs';

const PACKAGE = 'statAfrikR';
const FIRST_DAY = '2026-04-01'; // première journée de données sur le miroir
const OUT = new URL('../src/data/cran-stats.json', import.meta.url);
const API = 'https://cranlogs.r-pkg.org/downloads/total';

/** Appelle l'API cranlogs et renvoie le nombre de téléchargements. */
async function downloads(period) {
  const response = await fetch(`${API}/${period}/${PACKAGE}`, {
    headers: { accept: 'application/json' },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`${period} : HTTP ${response.status}`);

  // Format de réponse : [{ downloads, start, end, package }]
  const [entry] = await response.json();
  if (!entry || typeof entry.downloads !== 'number') {
    throw new Error(`${period} : réponse inattendue`);
  }
  return entry;
}

function daysBetween(from, to) {
  const ms = new Date(to).getTime() - new Date(from).getTime();
  return Math.max(1, Math.round(ms / 86400000) + 1);
}

try {
  const today = new Date().toISOString().slice(0, 10);

  const [total, month, week] = await Promise.all([
    downloads(`${FIRST_DAY}:${today}`),
    downloads('last-month'),
    downloads('last-week'),
  ]);

  const days = daysBetween(FIRST_DAY, total.end || today);

  const stats = {
    ok: true,
    package: PACKAGE,
    total: total.downloads,
    lastMonth: month.downloads,
    lastWeek: week.downloads,
    perDay: Math.round((total.downloads / days) * 10) / 10,
    since: FIRST_DAY,
    through: total.end || today,
    updatedAt: new Date().toISOString(),
  };

  writeFileSync(OUT, JSON.stringify(stats, null, 2) + '\n', 'utf8');
  console.log(
    `statAfrikR : ${stats.total} téléchargements depuis ${FIRST_DAY}, ` +
      `${stats.lastMonth} sur 30 jours, ${stats.perDay}/jour`
  );
} catch (error) {
  // Un échec ne doit jamais bloquer la publication du site.
  console.warn(`Récupération CRAN impossible : ${error.message}`);
  try {
    const previous = JSON.parse(readFileSync(OUT, 'utf8'));
    console.warn(
      `Conservation des derniers chiffres connus (${previous.total}, ` +
        `relevés le ${previous.updatedAt}).`
    );
  } catch {
    console.warn('Aucun relevé précédent disponible.');
  }
  process.exit(0);
}
