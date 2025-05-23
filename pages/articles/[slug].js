// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
// import Image from 'next/image'
import Image from 'next/legacy/image';
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../../client'
import { ArticleStyle } from '../../components/Styled-Component/article.styled'
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
    auteur,
    source,
  } = {...props}
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div>
      <Header />
      <BackgroundImage>
        <Image className="fond" src="/pp4/spectacles/page2_fond_solo_spectacles1.png" alt="image7" layout='fill' objectFit='cover' />
      </BackgroundImage>
      <ArticleStyle>
        <h1 className="title">{title}  </h1>
        <h1 className="title">Par {auteur}, {source} </h1>
        <h2 className="date">{new Date(publishedAt).toLocaleDateString('fr-FR', options)}</h2>

        <div className="text-and-image-container">
          {/* Text Content */}
          <div className="text-content">
            <BlockContent
              className="block"
              blocks={body}
              {...client.config()}
            />
          </div>
          {/* Image */}
          <img src={urlFor(mainImage).width(550).url()} alt={title} />
        </div>

      </ArticleStyle>
    </div>
  )
}


const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
const query = groq`*[_type == "article" && slug.current == $slug][0]`
Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post