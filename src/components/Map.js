import React from 'react'
import styled from 'styled-components'
const Map = () => {
  return (
    <Wrapper>
      <section className='map-home '>
        <div className='map-container'>
          <article className='maps'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7714.698680087568!2d-17.28866114082686!3d14.805639149268789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1a099ead8f641%3A0xafe03d9672352e37!2sTIVAOUANE%20PEULH%2C%20Senegal!5e0!3m2!1sen!2sus!4v1675448351077!5m2!1sen!2sus'
              width='600'
              height='450'
              
            ></iframe>
          </article>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .map-home {
    margin-top: 5rem;
    position: relative;
  }
  iframe {
    width: 100%;
    height: 400px;
    position: relative;
  }
  .maps {
    border: 1px solid var(--clr-white);
    box-shadow: var(--light-shadow);
    padding: 1rem;
  }
`
export default Map