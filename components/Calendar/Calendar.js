import Link from 'next/link';
import React from 'react';
import { CalendarStyle } from './Calendar.styled';
import CalendarItem from './CalendarItem';

const Calendar = ({ posts }) => {
  return (
    <CalendarStyle>
      <div className="container">
        {posts.map(({ _id, title = '', slug = '', publishedAt, endroit = '' }) =>
          slug ? (
            <Link key={_id} href={`/spectacles/${slug.current}`} passHref>
              <CalendarItem publishedAt={publishedAt} endroit={endroit} />
            </Link>
          ) : null
        )}
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
