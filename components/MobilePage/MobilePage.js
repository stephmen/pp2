import React from "react";
import { PourPourLogo } from '/components';
import { CenteredContainer } from './MobilePage.styled';
import Image from 'next/image';

const MobilePage = () => {

  const handleClick = (imageUrl) => {
    console.log(`Clicked image with URL: ${imageUrl}`);
  }

  return (
    
      <CenteredContainer>
        <Image src="/images/image7.jpg" alt="image7" width={400} height={300} onClick={() => handleClick('/images/image7.jpg')} />
        <PourPourLogo className='logo' size="24rem" margintop='1rem'/>
        <p>{"Un groupe de musique unique qui est né de la fusion de différents groupes artistiques à Montréal dans les années 70 et 80. Après une pause, le groupe s'est reformé en 1995 avec de nouveaux membres et est aujourd'hui composé de 19 musiciens talentueux. Leur musique mélange différents genres avec des sons colorés et romantiques, invitant petits et grands à danser dans une salle de spectacle ou dans une ruelle près de chez vous. Ils ont sorti cinq albums et ont joué dans de nombreux spectacles au Québec et à l&apos;étranger"}</p>
        <iframe src="https://player.vimeo.com/video/73329450?portrait=0&byline=0" frameBorder="0" allow="autoplay; fullScreen; picture-in-picture" allowFullScreen layout="fill" />
      </CenteredContainer>
    
  );
}

export default MobilePage;
