# Prendre la main sur Astro — guide pas à pas

Écrit pour quelqu'un qui vit dans un terminal et connaît git, mais qui n'a jamais
touché à Astro. Vous n'avez pas besoin de savoir React : ce projet n'en contient
pas une ligne.

---

## 0. Prérequis

```bash
node --version    # il faut 18.20+, idéalement 22
npm --version
git --version
```

Si Node manque ou est trop vieux, passez par nvm :

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
exec $SHELL
nvm install 22
nvm use 22
```

---

## 1. Lancer le projet

```bash
cd portfolio-dikers
npm install          # une seule fois, crée node_modules/
npm run dev          # démarre le serveur de développement
```

Ouvrez `http://localhost:4321`. Laissez cette commande tourner dans un onglet de
terminal : dès que vous enregistrez un fichier, la page se recharge toute seule.

`Ctrl + C` pour arrêter.

---

## 2. Les cinq choses à comprendre sur Astro

### a. Un fichier `.astro` a deux parties

```astro
---
// Partie haute : le « frontmatter ».
// Du JavaScript/TypeScript qui s'exécute au moment du BUILD, sur votre machine.
// Jamais dans le navigateur du visiteur.
const nom = 'Dikers';
const missions = ['RTE', 'LCL', 'INSEE'];
---

<!-- Partie basse : le HTML. On y injecte les variables avec des accolades. -->
<h1>Bonjour {nom}</h1>
<ul>
  {missions.map((m) => <li>{m}</li>)}
</ul>
```

C'est tout le langage. `{ }` pour insérer une valeur, `.map()` pour répéter un
bloc, `{condition && <p>…</p>}` pour afficher sous condition.

### b. `src/pages/` définit les URL

Astro ne demande aucune configuration de routage. Le chemin du fichier **est**
l'URL :

| Fichier | URL |
|---|---|
| `src/pages/index.astro` | `/` |
| `src/pages/prestations.astro` | `/prestations/` |
| `src/pages/etudes-de-cas/rte.astro` | `/etudes-de-cas/rte/` |
| `src/pages/en/index.astro` | `/en/` |

Créer une page = créer un fichier. Rien d'autre à déclarer.

### c. Les composants sont de simples fichiers importés

Un composant dans `src/components/` n'est pas une page : il n'a pas d'URL. On
l'importe et on l'utilise comme une balise HTML :

```astro
---
import Hero from '../components/Hero.astro';
---
<Hero lang="fr" />
```

Ce qu'on lui passe (`lang="fr"`) s'appelle une **prop**. Le composant la récupère
avec `const { lang } = Astro.props;`.

### d. Le CSS d'un composant est automatiquement isolé

Dans `Hero.astro`, une balise `<style>` en bas du fichier ne s'applique **qu'à ce
composant**. Astro ajoute un attribut unique à chaque élément. Vous ne pouvez pas
casser une autre section en modifiant celle-ci.

Le CSS partagé (couleurs, typographie, grille) est dans
`src/styles/global.css`, importé une seule fois par `src/layouts/Base.astro`.

### e. `public/` et `src/assets/` ne font pas la même chose

- **`public/`** : copié tel quel dans le site final. Le PDF du CV, le favicon,
  `robots.txt`. On y accède par `/cv/mon-cv.pdf`. Aucune optimisation.
- **`src/assets/`** : traité par Astro. Une image y est convertie en WebP/AVIF,
  redimensionnée, et son nom reçoit une empreinte pour le cache. On l'utilise
  via `import` et le composant `<Image>`.

Règle simple : **une image → `src/assets/`, un document à télécharger →
`public/`**.

---

## 3. Votre boucle de travail quotidienne

Trois onglets de terminal :

```bash
# Onglet 1 — le serveur, qui tourne en continu
npm run dev

# Onglet 2 — vos commandes git
git status

# Onglet 3 — votre éditeur, ou vim
```

Avant chaque commit, vérifiez que le site se construit vraiment. Le serveur de
dev est plus permissif que le build :

```bash
npm run build
```

Si `npm run build` passe, le déploiement passera.

---

## 4. Premier exercice : changer un texte

**Tout le texte du site est dans trois fichiers**, jamais dans les composants :

- `src/data/content.ts` — la page d'accueil
- `src/data/services.ts` — la page prestations
- `src/data/case-rte.ts` — l'étude de cas

Chacun contient deux objets, `fr` et `en`, de structure identique.

Ouvrez `src/data/content.ts`, cherchez `ctaPrimary` et changez sa valeur :

```ts
ctaPrimary: 'Voir mes missions',
```

Enregistrez, regardez le navigateur : le bouton a changé. Vous n'avez touché
aucun composant.

**Piège utile à connaître** : si vous ajoutez une clé dans `fr` sans l'ajouter
dans `en`, `npm run build` échoue. C'est volontaire — le fichier déclare
`const en: typeof fr`, ce qui force les deux langues à rester alignées. Vous ne
publierez jamais une page anglaise à trous.

---

## 5. Deuxième exercice : ajouter une mission

Dans `src/data/content.ts`, dans `fr.experience.jobs`, copiez un bloc existant et
adaptez-le :

```ts
{
  period: '01/2027 — aujourd’hui',
  role: 'Votre rôle',
  org: 'Le client',
  sector: 'Le secteur',
  context: 'Une phrase de contexte.',
  bullets: [
    'Premier point.',
    'Deuxième point.',
  ],
  stack: ['R', 'SQL'],
},
```

Faites la même chose dans `en.experience.jobs`, puis `npm run build`. La mission
apparaît, avec sa colonne de métadonnées et ses étiquettes. Aucun composant à
modifier : c'est le principe de ce projet.

---

## 6. Git : mettre le projet sous contrôle de version

Le `.gitignore` est déjà écrit (`node_modules/`, `dist/`, `.astro/`).

```bash
cd portfolio-dikers
git init
git add .
git commit -m "Portfolio initial"
```

Créez un dépôt vide sur GitHub (sans README, sans .gitignore : vous les avez
déjà), puis :

```bash
git remote add origin git@github.com:damoko2004/portfolio.git
git branch -M main
git push -u origin main
```

### Votre rythme ensuite

```bash
git switch -c contenu/nouvelle-mission   # une branche par sujet
# ... vous éditez ...
npm run build                            # vérification avant commit
git add -A
git commit -m "Ajoute la mission X"
git push -u origin contenu/nouvelle-mission
```

Vous ouvrez une pull request sur GitHub, ou vous fusionnez directement :

```bash
git switch main
git merge contenu/nouvelle-mission
git push
```

Le seul commit qu'on regrette est celui qui contient `node_modules/`. Vérifiez
une fois avec `git status` que ce dossier n'apparaît pas.

---

## 7. Déployer sur Netlify

### La bonne méthode : brancher le dépôt

1. Sur [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import
   an existing project** → GitHub → choisissez le dépôt.
2. Netlify lit `netlify.toml` : commande `npm run build`, dossier `dist`. Ne
   changez rien.
3. **Deploy site**.

À partir de là, chaque `git push` sur `main` republie le site tout seul, en une
minute environ. Chaque pull request reçoit une URL de prévisualisation.

### Ensuite, faites ces trois choses

1. **Renommez le site** : Site settings → Change site name. Vous obtenez
   `votre-nom.netlify.app`.
2. **Reportez cette URL** dans `src/data/content.ts` (`SITE_URL`) et dans
   `public/robots.txt`. Sans ça, les balises canoniques et le sitemap pointent
   vers une adresse qui n'existe pas.
3. **Nom de domaine** : si vous en achetez un, Domain settings → Add a domain.
   Netlify gère le certificat HTTPS automatiquement.

### La méthode rapide, sans git

```bash
npm run build
```

Puis glissez le dossier `dist` sur
[app.netlify.com/drop](https://app.netlify.com/drop). Pratique pour un essai,
mais vous perdez l'historique et le déploiement automatique.

---

## 8. Ajouter votre portrait

Le hero affiche pour l'instant un monogramme. Dès que vous déposez une image, il
la prend automatiquement :

```bash
cp ~/photos/dikers.jpg src/assets/portrait.jpg
npm run dev
```

Le fichier doit s'appeler exactement `portrait`, avec l'extension `.jpg`,
`.jpeg`, `.png`, `.webp` ou `.avif`. Astro détecte sa présence au build via
`import.meta.glob` — aucune ligne de code à modifier.

**Conseils pour la photo** : cadrage vertical (portrait), ratio proche de 4:5,
au moins 1000 px de large, arrière-plan sobre, regard vers l'objectif. Le site
applique un traitement noir et blanc pour rester cohérent avec la palette. Si
vous préférez la couleur, retirez la ligne `filter: grayscale(1) contrast(1.05);`
dans `src/components/Hero.astro`.

---

## 9. Ajouter une page complète

Exemple : une page « Formations » à l'adresse `/formations/`.

```bash
touch src/pages/formations.astro
```

```astro
---
import Base from '../layouts/Base.astro';
import PageHead from '../components/PageHead.astro';
---

<Base
  lang="fr"
  title="Formations — Dikers Amoko"
  description="Sessions de formation sur mesure en data science et IA générative."
  altFr="/formations/"
  altEn="/en/training/"
>
  <PageHead
    eyebrow="Formations"
    title="Transmettre ce que j'applique en mission"
    lede="Une phrase de présentation."
  />

  <section class="section">
    <div class="wrap">
      <p class="prose">Votre contenu.</p>
    </div>
  </section>
</Base>
```

Les classes `section`, `wrap`, `prose`, `btn`, `tag` viennent de
`global.css` : vous héritez de la mise en page sans écrire de CSS.

Pour l'ajouter au menu, une ligne dans `src/data/content.ts` :

```ts
{ href: '/formations/', label: 'Formations' },
```

Créez ensuite `src/pages/en/training/index.astro` sur le même modèle, sinon le
sélecteur de langue mènera à une page 404.

---

## 10. Lire les erreurs

Astro affiche les erreurs directement dans le navigateur, avec le fichier et la
ligne. Les trois que vous rencontrerez :

| Message | Cause | Correction |
|---|---|---|
| `Property 'xxx' does not exist on type` | Une clé ajoutée en `fr` mais pas en `en` | Ajoutez-la dans les deux |
| `Unexpected token` dans un `.ts` | Une virgule ou une accolade manquante | Regardez la ligne indiquée et les deux au-dessus |
| `Cannot find module '../components/X.astro'` | Chemin relatif faux | Comptez les `../` depuis le fichier courant |

Une apostrophe française dans une chaîne : utilisez toujours l'apostrophe typo­
graphique `’` (comme dans tout le projet), jamais `'`, qui fermerait la chaîne.

---

## 11. Commandes de référence

```bash
npm run dev        # serveur local, rechargement automatique
npm run build      # construit dist/ — à lancer avant chaque push
npm run preview    # sert dist/ pour vérifier le résultat final
npx astro check    # vérification TypeScript complète (lent, optionnel)

python3 scripts/make-og.py   # régénère l'image de partage

git status
git add -A && git commit -m "message"
git push
```

---

## 12. Où aller ensuite

- La documentation d'Astro est courte et bien faite :
  [docs.astro.build](https://docs.astro.build)
- Les trois notions qui vous serviront le jour où vous voudrez aller plus loin :
  les **collections de contenu** (pour tenir un blog en Markdown), les **routes
  dynamiques** (`[slug].astro`, pour générer une page par étude de cas), et les
  **îlots** (charger du JavaScript uniquement sur un composant précis).

Vous n'en avez besoin d'aucune pour faire vivre ce site. Tant que vos
modifications restent du texte, tout se passe dans les trois fichiers de
`src/data/`.
