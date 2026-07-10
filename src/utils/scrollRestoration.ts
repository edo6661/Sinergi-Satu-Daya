const scrollKey = (path: string) => `scroll:${path}`;

export function saveScrollPosition(path: string) {
  sessionStorage.setItem(scrollKey(path), String(window.scrollY));
}

export function restoreScrollPosition(path: string): boolean {
  const saved = sessionStorage.getItem(scrollKey(path));
  if (saved === null) return false;

  sessionStorage.removeItem(scrollKey(path));
  const y = Number.parseInt(saved, 10);
  const scroll = () => window.scrollTo(0, y);
  requestAnimationFrame(() => {
    scroll();
    requestAnimationFrame(scroll);
  });
  return true;
}
