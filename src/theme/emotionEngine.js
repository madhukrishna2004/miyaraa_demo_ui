const THEMES = ["calm", "joy", "reflective"];

export function getDailyTheme(userId) {
  try {
    const d = new Date();
    const daySeed = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    const base = (userId ? userId.toString() : "") + "|" + daySeed;
    let h = 0;
    for (let i = 0; i < base.length; i++) {
      h = (h << 5) - h + base.charCodeAt(i);
      h |= 0;
    }
    const idx = Math.abs(h) % THEMES.length;
    return THEMES[idx];
  } catch (e) {
    return "calm";
  }
}

export function themeClassForKey(key) {
  if (!key) return "theme-calm";
  return `theme-${key}`;
}
