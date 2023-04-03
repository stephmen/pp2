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
    <div className='container'>
   
    
    
    
    
    <header>
    <div className="col">
      <h3>Date</h3></div>
    <div className="col"><h3>Spectacle</h3></div>
    <div className="col"><h3> Endroit</h3></div>
    <div className="col"><h3> + Info</h3></div>
    </header>
    
    
    
    
    {props.posts.map(
      ({ _id, title = '', slug = '', publishedAt, endroit
      = '' }) =>
      slug && (
        <div className='row'>
        
        <div  className="col"> {new Date(publishedAt).toLocaleDateString('fr-FR',options)} 
        </div>
        <div className="col"> {title} </div>      
        <div className="col"> {endroit} </div>
        <div className="col">
        <Link key={_id} href="/spectacles/[slug]" as={`/spectacles/${slug.current}`}>
        <img src="/LesAmisCrop/sue3.png"  height="50" className="rotate-img"/>
        </Link>
        </div>
        </div>
        ))}
    

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








