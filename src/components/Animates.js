import React from 'react'
import styled from 'styled-components'
const Animates = () => {
  return (
    <Wrapper>
      <div className='outer'>
        <h1 className='animates'>
          G I E MAME DOUSSOU &nbsp;
          <div className='inner'>
            <span>
              <br />
              G I E MAME DOUSSOU
              <br />
              CONTACTEZ NOUS
              <br />
              AU 77 706-25-56
              <br />
            </span>
          </div>
        </h1>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .outer {
    position: relative;
    /* margin-top: 300px;
  margin-left:600px */
  }
  .animates {
    font-size: 1rem;
    color: var(--clr-black);
  }
  .inner {
    position: absolute;
    border: 0px solid var(--clr-white);
    height: 50px;
    line-height: 50px;
    font-size: 1.5rem;
    text-transform: uppercase;
    overflow: hidden;
    display: inline-block;
    left: 0;
  }
  .inner span {
    animation: animate 20s ease infinite;
    position: relative;
    color: var(--clr-primary-11);
  }
  @keyframes animate {
    0%,
    100% {
      top: 0;
    }
    20% {
      top: 0px;
    }
    25% {
      top: -50px;
    }
    45% {
      top: -50px;
    }
    50% {
      top: -100px;
    }
    70% {
      top: -100px;
    }
    75% {
      top: -150px;
    }
    95% {
      top: -150px;
    }
  }
`
export default Animates
