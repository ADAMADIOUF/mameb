import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import slide from './../dataSlider'

const Slider = () => {
  const [indexSlide, setIndexSlide] = useState(0)

  useEffect(() => {
    const lastIndex = slide.length - 1
    if (indexSlide < 0) {
      setIndexSlide(lastIndex)
    }
    if (indexSlide > lastIndex) {
      setIndexSlide(0)
    }
  })
  useEffect(() => {
    let slider = setInterval(() => {
      setIndexSlide(indexSlide + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  })
  return (
    <Wrapper className='section-slider'>
      <div className='slide'>
        {slide.map((slide, slideIndex) => {
          let slider = 'nextSlide'
          if (slideIndex === indexSlide) {
            slider = 'activeSlide'
          }
          if (
            slideIndex === indexSlide - 1 ||
            (indexSlide === 0 && slideIndex === slide.length - 1)
          ) {
            slider = 'lastSlide'
          }
          const { id, name, title, desc, image } = slide
          return (
            <div key={id}>
              <address className={slider}>
                <img src={image} alt='' className='img-slide' />
              </address>
            </div>
          )
        })}
        
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  .img-slide {
    width: 100%;
    height: 500px;
  }
  .slide {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    text-align: center;

    margin: 2rem auto;
  }

  
  address {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  address.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  address.lastSlide {
    transform: translateX(-100%);
  }
  address.nextSlide {
    transform: translateX(100%);
  }
  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
  }
  @media (min-width: 992px) {
    .img-slide {
      width: 100%;
      height: 100vh;
    }
    
   
  }
`

export default Slider
