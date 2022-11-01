import React from 'react'
import aboutimg from '../images/aboutsus.png'
import './Aboutus.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import PortfolioCard from '../components/PortfolioCard'


const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 1rem;
    position relative;
    &:hover, &:focus {
      color: yellow;
    }
    &:active{
      color: red;
    }
  `;

const Aboutus = () => {
  return (
    <div className='tocol'>
      <div className="torow">
        <div>
          <img src={aboutimg} style={{maxWidth:"500px"}}></img>  
        </div>
        <div>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, itaque eius fugiat quo saepe quasi voluptatum, quas ea, numquam quisquam sunt! At, itaque eius fugiat quo saepe quasi voluptatum, quas ea, numquam quisquam sunt! At, itaque eius fugiat quo saepe quasi voluptatum, quas ea, numquam quisquam sunt! At, itaque eius fugiat quo saepe quasi voluptatum, quas ea, numquam quisquam sunt! Eveniet minus deleniti in nesciunt voluptatem ratione sit! Optio ut porro voluptates magnam commodi dicta tenetur cupiditate, necessitatibus nobis est inventore nisi nemo perferendis quidem adipisci iste suscipit error.</p>
          
          <button className='todev'><a href="#developers">See Developers  <i class="bi bi-arrow-right"></i></a></button>
        </div>
      </div>
      <div id='developers' className='developers'>
          <PortfolioCard/>
      </div>
    </div>
  )
}

export default Aboutus
