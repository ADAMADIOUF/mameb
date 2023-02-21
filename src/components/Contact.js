import React from 'react'
import styled from 'styled-components'
import Cimg1 from '../assets/contact1.png'
import Cimg2 from '../assets/contact11.png'
import Cimg3 from '../assets/contact22.png'

import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai'
import Map from './Map'

const Contact = () => {
  return (
    <Wrapper>
    <div className='contacts'>
      <div className='contact'>
        <img src={Cimg1} alt='' />
      </div>
      <p>Pour tout complément d’informations, merci de me contacter.</p>
      <div className='container-links-contact section-center'>
        <div className='contact-contact-links'>
          <img src={Cimg2} alt='' />
          <span>
            <AiOutlineMail />
          </span>
          <h3>nous ecrire:</h3>
          <h5>mambiram706@gmail@gmail.com</h5>
        </div>
        <div className='contact-contact-links'>
          <img src={Cimg3} alt='' />
          <span>
            <AiTwotonePhone />
          </span>
          <h3>nous appeler:</h3>
          <h5>(+221) 77 706 25 56</h5>
        </div>
      </div>
      
      <Map/>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.contact{
  margin-top:5rem;
}
  .contact img {
    width: 100%;
  }
  .contacts p {
    text-align: center;
    font-size: 2rem;
    color: var(--clr-white);
  }
  .contact-contact-links {
    position: relative;
    text-align: center;
  }
  .contact-contact-links img {
    width: 50%;
  }
  .contact-contact-links span {
    position: absolute;
    top: 5rem;
    left: 15rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    background: var(--clr-primary-11);
    border-radius: 100%;
  }
  @media (min-width: 768px) {
    .container-links-contact {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  
`
export default Contact
