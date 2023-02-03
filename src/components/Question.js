import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <Wrapper>
      <article className='question'>
        <header>
          <h3>{title}</h3>
          <button
            className='btn-question'
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </Wrapper>
  )
  
}
const Wrapper = styled.section`
.question{
  margin-top: 2rem;
}
.question h4{
  color: var(--clr-primary-3);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
.question {
  padding: 1rem 1.5rem;
  border: 2px solid var(--clr-white);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
}
.question h3 {
  text-transform: none;
  line-height: 1.5;
}
.question p {
  color: var(--clr-black);
  margin-bottom: 0;
  margin-top: 0.5rem;
}
.question header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question header h3 {
  margin-bottom: 0;
}
.btn-question {
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-primary-11);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-white);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
}`
export default Question
