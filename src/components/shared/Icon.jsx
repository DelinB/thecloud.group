import React from 'react';

/* ---------- ICONS ---------- */
const ICONS = {
  arrow:     <path d="M5 12h14M13 6l6 6-6 6" />,
  check:     <path d="M20 6L9 17l-5-5" />,
  x:         <path d="M18 6L6 18M6 6l12 12" />,
  storm:     <path d="M17.5 19a4.5 4.5 0 100-9 6 6 0 00-11.6 1.5A4 4 0 006 19h11.5zM13 12l-3 5h4l-3 5" />,
  hurricane: <path d="M9.6 4.6A2 2 0 1111 8H2M12.6 19.4A2 2 0 1014 16H2M17.7 7.7A2.5 2.5 0 1119.5 12H2" />,
  spark:     <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />,
  shield:    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />,
  clock:     <path d="M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2" />,
  bot:       <path d="M12 6v2M6 10h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zM9 14v2M15 14v2M2 14h2M20 14h2" />,
  zap:       <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  chart:     <path d="M3 3v18h18M7 14l4-4 3 3 5-6" />,
  message:   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />,
  mail:      <path d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zM4 7l8 6 8-6" />,
  search:    <path d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 110-14.4 7.2 7.2 0 010 14.4z" />,
  code:      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />,
  compass:   <path d="M12 22a10 10 0 100-20 10 10 0 000 20zM15.5 8.5l-2 4.5-4.5 2 2-4.5 4.5-2z" />,
  filecheck: <path d="M6 2h8l4 4v16H6a2 2 0 01-2-2V4a2 2 0 012-2zM14 2v5h5M8 15l2.2 2.2L15 12.5" />,
  pen:       <path d="M13 6l5 5M4 20l3.5-.8L19.3 7.4a2.1 2.1 0 10-3-3L4.5 16.2 4 20z" />,
  database:  <path d="M12 8c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3zM21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />,
  heart:     <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />,
  dollar:    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
  truck:     <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2 2 0 100-4 2 2 0 000 4zM18.5 21a2 2 0 100-4 2 2 0 000 4z" />,
  users:     <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
  activity:  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  bag:       <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
};

export function Icon({ name, className, style }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}
