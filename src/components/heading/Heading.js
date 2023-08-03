import React from 'react'
import style from './Heading.module.css'

function Heading() {
    return (

        <div className={style.Heading} >
            <h6>Welcome to Buletin</h6>
            <h4>Craft narratives✍️ that ignite <span  className={style.red} > inspiration💡</span>,<br />
               <span  className={style.red}> Knowledge 📕</span>, and   <span  className={style.red}>entertainment 🎬</span> 
            </h4>


        </div>
    )
}

export default Heading
