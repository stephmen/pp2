import Link from 'next/link';
import React from 'react';
import { ArticlesStyle } from './Articles.styled';
import { ExtraitDePresseComponent } from './ExtraitDePresseComponent'
import Background from "../BackGround/BackGround";
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
    <Background src="/pp4/histoire/page_histoire_fond.jpg" alt="image7" />

      <div className='container'>
        {props.posts.map(({ _id, title = '', auteur = '', slug = '', source, publishedAt = '', endroit = '' }) =>
          slug ? (
            <Link key={_id} href='/articles/[slug]' as={`/articles/${slug.current}`}>
              <div key={_id} className='row'>
                <div className='info'>{title}</div>
                <div className='info'>Par {auteur},  {source}</div>
                <div className='date'>Article Paru le: {new Date(publishedAt).toLocaleDateString('fr-FR', options)}</div>
                

              </div>

            </Link>
          ) : null
          )}
           {/* <ExtraitDePresseComponent /> */}
      </div>
    </ArticlesStyle>
  );
};

export default Articles;
