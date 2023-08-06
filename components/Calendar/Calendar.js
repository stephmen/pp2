import Link from 'next/link';
import React from 'react';
import { CalendarStyle } from './Calendar.styled';

const Calendar = (props) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <CalendarStyle>
      <div className='container'>
        {props.posts.map(({ _id, title = '', slug = '', publishedAt, endroit = '' }) =>
          slug ? (
            <Link key={_id} href='/spectacles/[slug]' as={`/spectacles/${slug.current}`}>
              <div key={_id} className='row'>
                <div className='date'>{new Date(publishedAt).toLocaleDateString('fr-FR', options)}</div>
                <div className='location'>{endroit}</div>
                <div className='image'>
                  {/* <Link key={_id} href='/spectacles/[slug]' as={`/spectacles/${slug.current}`}>
                    <img src='/LesAmisCrop/sue3.png' height='50' />
                  </Link> */}
                </div>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
