import Image from "next/image";
import { groq } from "groq";
//import { getClient } from "../lib/sanity";
import sanityClient from '../client'

const Photos = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image._id}>
          <Image
            src={image.image.asset.url}
            alt={image.image.alt}
            width={image.image.asset.metadata.dimensions.width}
            height={image.image.asset.metadata.dimensions.height}
          />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const query = groq`
    *[_type == "photo" && published == true]{
      _id,
      "image": image.asset->{
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      }
    }
  `;

  const images = await getClient().fetch(query);

  return {
    props: {
      images,
    },
  };
}

export default Photos;
