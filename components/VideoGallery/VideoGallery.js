import React from 'react';
import { VideoGalleryContainer, Header, Footer, Content, IframeContainer } from './VideoGalleryStyled';

const VideoGallery = () => {
  return (
    <VideoGalleryContainer>
      
      <Content>
        <h2>Dans les nacelles de Pourpour 2018</h2>
        {/* <IframeContainer> */}
        <iframe src="https://player.vimeo.com/video/303897944?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        {/* </IframeContainer> */}

        {/* <h2> Dans une rulle ...</h2>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffanfare.pourpour%2Fposts%2Fpfbid0PDiGHdiewQUx8rbkFMhPmXygETdiEG8GgqECKkeT6GyAq8hLtbJitz83ha3kydx4l&show_text=true&width=500" width="500" height="373" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}

        <h2>Tango de l'avion 2016</h2>
        {/* <IframeContainer> */}
        <iframe src="https://player.vimeo.com/video/168682522?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        {/* </IframeContainer> */}
        <h2>Cabarets sous les arbres au Parc des Faubourgs 2011-2015</h2>
        {/* <IframeContainer> */}
        <iframe src="https://player.vimeo.com/video/58679616?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe src="https://player.vimeo.com/video/52633016?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe src="https://player.vimeo.com/video/73329450?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe src="https://player.vimeo.com/video/104759093?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe src="https://player.vimeo.com/video/73322897?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        {/* </IframeContainer> */}
        <h2>Cabaret de la nuit blanche 2013</h2>
        {/* <IframeContainer> */}
        <iframe src="https://player.vimeo.com/video/61775378?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe src="https://player.vimeo.com/video/61773861?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        {/* </IframeContainer> */}
        <h2>La Pourpour à Guadalajara, Mexique 2012</h2>
        {/* <IframeContainer> */}
        <iframe src="https://player.vimeo.com/video/434240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        {/* </IframeContainer> */}
      </Content>
    </VideoGalleryContainer>
  );
};

export default VideoGallery;
