import React from 'react';

const CalendarItem = ({ publishedAt, endroit }) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: userTimeZone, };
  return (
    <div className="row">
      <div className="date">{new Date(publishedAt).toLocaleDateString('fr-FR', options)}</div>
      <div className="location">{endroit}</div>
      <div className="info">Plus d&apos;infos</div>
    </div>
  );
};

export default CalendarItem;
