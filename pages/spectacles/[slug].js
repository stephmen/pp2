import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/legacy/image';
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../../client'
import { ShowStyle } from '../../components/Styled-Component/spectacle.styled'
import { Header, Burger, Footer, Menu } from '../../components/'
import styled from 'styled-components';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Post = (props) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    mainImage,
    body = [],
    publishedAt,
    nocivique,
    rue,
    ville,
    endroit,
  } = {...props}
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };

  return (
    <div>
      <Header/>
      <BackgroundImage>
        <Image className="fond" src="/pp4/spectacles/page2_fond_solo_spectacles1.png" alt="image7" layout='fill' objectFit='cover' /> 
      </BackgroundImage>
      <ShowStyle>
        <h1 className="title">{title}</h1>
        <h2 className="date">
          {new Date(publishedAt).toLocaleDateString('fr-FR', dateOptions)} 
          {' '}à{' '}
          {new Date(publishedAt).toLocaleTimeString('fr-FR', timeOptions)}
        </h2>
        <h2 className="endroit">{endroit}</h2>
        <h2 className="adress">{nocivique} {rue} {ville}</h2>
        <img src={urlFor(mainImage).width(550).url()}/>
        <BlockContent 
          className="block"
          blocks={body}
          {...client.config()}
        />
      </ShowStyle>
    </div>
  )
}

const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
const query = groq`*[_type == "spectacle" && slug.current == $slug][0]`
Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post
