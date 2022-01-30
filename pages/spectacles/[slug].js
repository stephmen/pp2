// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
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
    ville
  } = {...props}
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <ShowStyle>
    
      <h1 class="title">{title}  {new Date(publishedAt).toLocaleDateString('fr-FR',options)}</h1>
      {/* <h2>Addresse:</h2> */}
      <h2 class="adress">{nocivique} {rue} {ville}</h2>
      <img src={urlFor(mainImage).width(550).url()}/>
      <div class="block">
      <BlockContent 
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
      </div>
    </ShowStyle>
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