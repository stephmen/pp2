//https://www.npmjs.com/package/react-flickr-lightbox

import React from 'react';
import Image from 'next/image'
import FlickrLightbox from 'react-flickr-lightbox';
import styled from 'styled-components';

const PhotoStyle = styled.div`
width: 930px;
margin: auto;
position: relative;
left:.8rem;
top: 5rem;

.flickr{
    z-index: -1;
}

.preLoad{
position: fixed;
width: 40px;
height: auto;
margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
left: 0;
right: 0;
}

`

export default function Photo() {
    
    
    return(
        <PhotoStyle>
        <FlickrLightbox className="flickr" api_key='f4e750e492da5ecc812fe2a8a5a19e8c' user_id='dmar_qc' searchTerm='FanfarePourpour' limit={20}  />
        <FlickrLightbox className="flickr" api_key='f4e750e492da5ecc812fe2a8a5a19e8c'  searchTerm='Pourpour'   />
        <Image className="preLoad" src="preloader.gif"></Image>
        </PhotoStyle>

    )
}

