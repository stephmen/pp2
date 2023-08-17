// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../../client'
import { ShowStyle } from '../../components/Styled-Component/spectacle.styled'


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

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
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
      <div>
    <ShowStyle>
      <Image className="fond" src="/pp4/spectacles/page2_fond_solo_spectacles1.png" alt="image7" fill={true}  /> 
      <h1 className="title">{title}  </h1>
      <h2 className="date">{new Date(publishedAt).toLocaleDateString('fr-FR',options)}</h2>
      <h2 className="endroit">{endroit}  </h2>

      <h2 className="adress">{nocivique} {rue} {ville}</h2>
      <img src={urlFor(mainImage).width(550).url()}/>
      {/* <div className="block"> */}
      <BlockContent 
        className="block"
        blocks={body}
        // imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
      {/* </div> */}
    </ShowStyle>
    </div>
  )
}

const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
const query = groq`*[_type == "spectacle" && slug.current == $slug][0]`
Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post