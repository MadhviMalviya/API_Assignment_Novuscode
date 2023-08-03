import React from 'react'
import style from './Footer.module.css'
import {BsFacebook} from 'react-icons/bs'
import {ImLinkedin} from 'react-icons/im'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
function Footer() {
    return (

        <div className={style.mainfooter} >
            <div className={style.Footer} >

                <div className={style.footheading} ><h4>Buletin</h4>
                    <p> Craft narratives that ignite inspiration,<br />
                        Knowledge, and entertainment.</p>
                        <div className={style.icons}> 
                        <BsFacebook size={32} color='red' />
                        <AiFillTwitterCircle  size={32}  color='red'/>
                        <ImLinkedin size={32}  color='red'/>
                        <FaInstagramSquare size={32} color='red'/> 
                        </div>

                    <p className={style.copyright}>Copyright @2023 Buletin.</p>

                </div>


                <div className={style.list} >
                    <ul><h5>Business</h5>
                        <li>Startup</li>
                        <li>Employee</li>
                        <li>Success</li>
                        <li>Videos</li>
                        <li>Markets</li>


                    </ul>
                    <ul><h5>Technology</h5>
                        <li>Innovate</li>
                        <li>Gadget</li>
                        <li>Innovative Cities</li>
                        <li>Upstarts</li>
                        <li>Future Tech</li>


                    </ul>
                    <ul><h5>Travel</h5>
                        <li>Destinations</li>
                        <li>Food & Drink</li>
                        <li>stay</li>
                        <li>News</li>
                        <li>Videos</li>
                    </ul>

                    <ul><h5>Sports</h5>
                        <li>Football</li>
                        <li>Tennis</li>
                        <li>Golf</li>
                        <li>Motorsports</li>
                        <li>Esports</li>
                    </ul>
                    <ul><h5>Entertainment</h5>
                        <li>Movies</li>
                        <li>Artist</li>
                        <li>Television</li>
                        <li>Influencer</li>
                        <li>Viral</li>
                    </ul>
                    <ul><h5>Features</h5>
                        <li>As Equals</li>
                        <li>Call to Earth</li>
                        <li>Freedom</li>
                        <li>Inside Asia</li>
                        <li>2 Degree</li>
                    </ul>
                    <ul><h5>Weather</h5>
                        <li>Climate</li>
                        <li>Season</li>
                        <li>Earthquake</li>
                        <li>Temperature</li>
                        <li>Health</li>
                    </ul>
                    <ul><h5>More</h5>
                        <li>Desigh</li>
                        <li>Mentorship</li>
                        <li>Investment</li>
                        <li>Work for Buletin</li>
                        <li>Support us</li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Footer
