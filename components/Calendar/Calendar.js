import Link from 'next/link'
import React, { useState, useRef } from "react";
import { CalendarStyle } from "./Calendar.styled";



const Calendar = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  
  return(
    <CalendarStyle>
    
    <h1 className="titre" >Nos prochains spectacles:</h1>
    {/* <h4 className="info">Pour plus d&apos;informations cliquez sur les dates</h4> */}
    <div className="spectacle">
    {props.posts.map(
      ({ _id, title = '', slug = '', publishedAt, endroit
      = '' }) =>
      slug && (
        <Link key={_id} href="/spectacles/[slug]" as={`/spectacles/${slug.current}`}>
        <li key={_id}> {new Date(publishedAt).toLocaleDateString('fr-FR',options)} 
        <br/>
        <span> {title} </span>
        <br/>
        <span> {endroit} </span> 
        </li>
        </Link>
        ))}
    </div>
    <div className="info">
    </div>
    </CalendarStyle>
    )
    
  }
  
//   Calendar.getInitialProps = async () => ({
//   posts: await client.fetch(groq`
//     *[_type == "post" && publishedAt < now()]
//   `)
// })

export default Calendar;








