// Tiny inline icon set (no external icon lib dependency)
const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ICONS = {
  mic: (p) => (
    <svg {...base} {...p}><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" /><path d="M12 19v3M8 22h8" /></svg>
  ),
  code: (p) => (
    <svg {...base} {...p}><path d="m8 8-4 4 4 4M16 8l4 4-4 4" /></svg>
  ),
  award: (p) => (
    <svg {...base} {...p}><circle cx="12" cy="8" r="6" /><path d="M9 14 7 22l5-3 5 3-2-8" /></svg>
  ),
  users: (p) => (
    <svg {...base} {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" /><circle cx="17.5" cy="9" r="2.8" /><path d="M22 20c0-2.6-1.9-4.7-4.5-5.4" /></svg>
  ),
  trophy: (p) => (
    <svg {...base} {...p}><path d="M8 3h8v5a4 4 0 0 1-8 0V3Z" /><path d="M8 4H4v2a4 4 0 0 0 4 4M16 4h4v2a4 4 0 0 1-4 4" /><path d="M12 12v4M8 21h8M9 21v-3h6v3" /></svg>
  ),
  gift: (p) => (
    <svg {...base} {...p}><rect x="3" y="8" width="18" height="13" rx="1" /><path d="M3 12h18M12 8v13" /><path d="M12 8C9 8 8 6.5 8 5a2.5 2.5 0 0 1 4-2c0 0 0 3 0 5Zm0 0c3 0 4-1.5 4-3a2.5 2.5 0 0 0-4-2c0 0 0 3 0 5Z" /></svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
  ),
  twitter: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.9 3H22l-7.5 8.6L23 21h-6.9l-5.4-6.6L4.4 21H1.3l8-9.2L1 3h7.1l4.9 6.1L18.9 3Zm-1.2 16.2h1.7L7.4 4.7H5.6l12.1 14.5Z"/></svg>
  ),
}

export function Icon({ name, className = 'h-6 w-6' }) {
  const Cmp = ICONS[name]
  if (!Cmp) return null
  return Cmp({ className })
}
