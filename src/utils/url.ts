/**
 * Préfixe un chemin interne avec le chemin de base du site.
 *
 * Le site est publié à deux endroits :
 *   - Netlify, à la racine du domaine        -> base '/'
 *   - GitHub Pages, sous /portfolio/          -> base '/portfolio/'
 *
 * Tous les liens internes doivent passer par cette fonction, sinon la version
 * GitHub Pages pointe dans le vide. Les ancres (#contact) et les URL externes
 * sont renvoyées telles quelles.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}

/** Chemin de la page courante, débarrassé du préfixe de base. */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && pathname.startsWith(base)) {
    return pathname.slice(base.length) || '/';
  }
  return pathname;
}
