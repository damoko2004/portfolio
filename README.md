# Portfolio — Dikers Amoko

Site vitrine bilingue (FR / EN) construit avec [Astro](https://astro.build).
Statique, sans base de données, sans framework JS côté client : sept pages
générées, deux petits scripts (menu mobile, copie de l'e-mail).

Nouveau sur Astro ? Lisez **[GUIDE-ASTRO.md](GUIDE-ASTRO.md)** : prise en main
pas à pas au terminal, git et déploiement.

| Page | FR | EN |
|---|---|---|
| Accueil | `/` | `/en/` |
| Prestations | `/prestations/` | `/en/services/` |
| Étude de cas RTE | `/etudes-de-cas/rte/` | `/en/case-studies/rte/` |

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # génère dist/
npm run preview  # sert dist/ en local
```

Node 18.20 ou plus récent (Node 22 recommandé).

## Ce qu'il faut compléter avant de publier

Tout se passe dans **`src/data/content.ts`**, en haut du fichier :

| Champ | À faire |
|---|---|
| `SITE_URL` et `BASE_PATH` | Adresse de publication. Déjà réglées sur GitHub Pages. À ne changer que si vous renommez le dépôt ou prenez un nom de domaine. |
| `links.linkedin` | **Vérifier l'URL** — elle a été devinée à partir du nom, c'est le seul lien non confirmé. |
| `public/robots.txt` | Remplacer l'URL du sitemap par `SITE_URL`. |
| `src/assets/portrait.jpg` | Déposer votre photo (voir plus bas). |

Les liens des deux ouvrages, de la boutique ebook, du package statAfrikR (CRAN,
R-universe, documentation), du dépôt GitHub et du certificat blockchain
vérifiable sont déjà en place.

Le CV est dans `public/cv/Dikers-Amoko-CV-fr.pdf`. Pour une version anglaise,
déposez le fichier à côté et pointez `links.cvEn` dessus.

## Modifier le contenu

`src/data/content.ts` est la source unique de vérité : deux objets, `fr` et `en`,
de structure identique. Les composants ne contiennent aucun texte en dur, donc
ajouter une mission ou une compétence se fait uniquement dans ce fichier.

TypeScript force les deux langues à rester alignées : si vous ajoutez une clé en
français sans l'ajouter en anglais, `npm run build` échoue. C'est voulu.

## Design

Deux surfaces alternées — le vert pin profond pour les sections d'affirmation
(hero, publications, contact), le papier pour les sections de lecture — et un
seul accent, l'or, réservé aux signaux. Deux familles : **Newsreader** pour les
titres, **Archivo** pour le texte courant, toutes deux auto-hébergées via
Fontsource (aucune requête vers Google Fonts, donc rien à déclarer au RGPD).

Tous les jetons de design sont dans `src/styles/global.css`, sous `:root` :
changer `--pine` et `--gold` suffit à changer l'identité du site.

Une seule animation, au chargement du hero, désactivée si le visiteur a demandé
la réduction des animations.

## Image de partage

`public/og.png` (1200 × 630) est générée par `scripts/make-og.py`. Pour la
régénérer après un changement de texte :

```bash
python3 scripts/make-og.py
```

Le script utilise Pillow et les polices DejaVu du système. Si vous préférez une
image faite dans un outil de design, remplacez simplement le fichier.

## Déployer

Le site est publié sur **GitHub Pages**, à `https://damoko2004.github.io/portfolio/`.

Tout `git push` sur `main` déclenche le workflow `.github/workflows/pages.yml` :
installation des dépendances, `npm run build`, publication. Comptez deux à trois
minutes.

Réglage à faire une seule fois, côté GitHub : Settings → Pages → Source →
**GitHub Actions** (et non « Deploy from a branch »). Le dépôt doit être public,
sauf plan payant.

### Si vous renommez le dépôt

Le site vit dans un sous-dossier du domaine, donc le nom du dépôt fait partie de
l'URL. Changez `BASE_PATH` dans `src/data/content.ts` — par exemple `/mon-site/`
pour un dépôt nommé `mon-site` — et la ligne `Sitemap:` de `public/robots.txt`.

### Si vous prenez un nom de domaine

C'est le moment où le sous-dossier disparaît. Dans `src/data/content.ts` :

```ts
export const SITE_URL = 'https://dikersamoko.fr';
export const BASE_PATH = '/';
```

Puis déclarez le domaine dans Settings → Pages → Custom domain, et ajoutez un
fichier `public/CNAME` contenant la seule ligne `dikersamoko.fr`.

### Construire pour une autre cible

Deux variables d'environnement permettent de produire une variante sans toucher
au code :

```bash
PUBLIC_BASE_PATH=/ PUBLIC_SITE_URL=https://exemple.fr npm run build
```

`netlify.toml` est conservé dans le dépôt : il suffirait à republier sur Netlify
si besoin, avec ces variables.

## Ajouter un formulaire de contact

Le site donne l'adresse et le téléphone en clair plutôt qu'un formulaire : moins
de friction, aucun service tiers. Si vous voulez tout de même un formulaire sur
Netlify, ajoutez ceci dans `src/components/Contact.astro` — Netlify le détecte au
build, sans backend :

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <p class="visually-hidden"><label>Ne pas remplir <input name="bot-field" /></label></p>
  <label>Nom <input type="text" name="name" required /></label>
  <label>E-mail <input type="email" name="email" required /></label>
  <label>Message <textarea name="message" rows="5" required></textarea></label>
  <button class="btn btn--gold" type="submit">Envoyer le message</button>
</form>
```

## Ajouter votre portrait

Déposez simplement le fichier :

```bash
cp votre-photo.jpg src/assets/portrait.jpg
```

Le hero le détecte au build et l'affiche, optimisé en AVIF/WebP par Astro. Tant
qu'aucun fichier n'est présent, un monogramme s'affiche à la place — le site
reste publiable en l'état.

Formats acceptés : `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`. Cadrage vertical,
ratio proche de 4:5, 1000 px de large au minimum. Le traitement noir et blanc
s'applique automatiquement ; pour le retirer, supprimez la ligne
`filter: grayscale(1) contrast(1.05);` dans `src/components/Hero.astro`.

## La règle de confidentialité de l'étude de cas

`src/data/case-rte.ts` s'ouvre sur un commentaire qui fixe la règle appliquée à
tout le fichier : décrire le problème, la méthode, l'architecture et les choix
d'ingénierie — ne publier **aucune valeur**. Pas de flux, pas de prix, pas de
volume, pas de seuil calibré, pas de capture d'un livrable réel.

Le visuel de la page est une reconstitution générée à partir de séries
synthétiques (générateur à graine fixe dans `src/components/EmailMock.astro`),
signalée comme telle par un bandeau. **Ne remplacez jamais ces séries par des
données réelles**, même anonymisées : c'est ce qui rend la page publiable sans
autorisation.

Si vous ajoutez une étude de cas pour un autre client, copiez `case-rte.ts` et
gardez son commentaire d'en-tête.

## Structure

```
src/
  data/
    content.ts           texte de l'accueil, FR et EN
    services.ts          texte de la page prestations
    case-rte.ts          texte de l'étude de cas (voir la règle plus haut)
  layouts/Base.astro     head, SEO, données structurées Person
  components/
    Header.astro         navigation, section active, menu mobile
    Hero.astro           déclaration en trois verbes, portrait, métadonnées
    Chain.astro          les quatre étapes de la chaîne
    Roles.astro          les trois casquettes
    GenAI.astro          encart IA générative
    Experience.astro     les quatre missions
    Publications.astro   ouvrages, boutique et package CRAN
    Skills.astro         compétences et stack
    Background.astro     expériences antérieures, formation, certificat
    Contact.astro        coordonnées
    Footer.astro
    PageHead.astro       bandeau de titre des pages internes
    ServicesBody.astro   corps de la page prestations
    CaseRteBody.astro    corps de l'étude de cas
    EmailMock.astro      reconstitution du livrable, données synthétiques
  assets/                portrait.jpg à déposer ici
  pages/
    index.astro                    /
    prestations.astro              /prestations/
    etudes-de-cas/rte.astro        /etudes-de-cas/rte/
    en/index.astro                 /en/
    en/services/index.astro        /en/services/
    en/case-studies/rte.astro      /en/case-studies/rte/
    404.astro
```

## Accessibilité et performance

- Un seul `h1` par page, hiérarchie de titres continue.
- Lien d'évitement, focus visible, menu mobile piloté par `aria-expanded`.
- Contrastes vérifiés au niveau AA sur les deux surfaces.
- `prefers-reduced-motion` respecté.
- Aucun JavaScript bloquant, polices auto-hébergées en `font-display: swap`.
- Feuille de style d'impression : la page se transforme en CV lisible en noir et
  blanc via Ctrl/Cmd + P.
