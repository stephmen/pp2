import Link from 'next/link';
import React from 'react';
import { CalendarStyle } from './Calendar.styled';
import { ExtraitDePresseComponent } from './ExtraitDePresseComponent'
import Image from 'next/image';

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
                <div className='date'>Le {new Date(publishedAt).toLocaleDateString('fr-FR', options)}</div>
                <div className='location'>{endroit}</div>
                <div className='info'>
                  Info
                </div>

              </div>

            </Link>
          ) : null
          )}
           {/* <ExtraitDePresseComponent /> */}
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
