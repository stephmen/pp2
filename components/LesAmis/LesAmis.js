import React from 'react'
import { LesAmis } from "./LesAmis.styled"

export default function Amis (props) {

return(  
<LesAmis {...props}>
<img className="logo" src="lesamistransparent.png" />
</LesAmis>
)
}

