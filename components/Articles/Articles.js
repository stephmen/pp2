import Link from 'next/link';
import React from 'react';
import { ArticlesStyle } from './Articles.styled';
import { ExtraitDePresseComponent } from './ExtraitDePresseComponent'
import Image from 'next/image';

const Articles = (props) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <ArticlesStyle>
      <div className='container'>
        {props.posts.map(({ _id, title = '', slug = '', publishedAt = '' }) =>
          slug ? (
            <Link key={_id} href='/spectacles/[slug]' as={`/spectacles/${slug.current}`}>
              <div key={_id} className='row'>
                <div className='date'>Le {new Date(publishedAt).toLocaleDateString('fr-FR', options)}</div>
                <div className='location'>{title}</div>
                <div className='title'>
                  Info
                </div>

              </div>

            </Link>
          ) : null
          )}
            <h1>TEST</h1>
           <ExtraitDePresseComponent />
      </div>
    </ArticlesStyle>
  );
};

export default Articles;
