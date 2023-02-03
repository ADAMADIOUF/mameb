import React from 'react'
import styled from 'styled-components'
import img1 from "../assets/valeur1.png"
import img2 from '../assets/chicken.png'
import img3 from '../assets/duck.png'
import img4 from '../assets/pigeon.png'
import img5 from '../assets/rabbit.png'



const FirstCategories = () => {
  return (
    <Wrapper>
      <div className='firscategories'>
        <img src={img1} alt='' />
        <div className='firstcategories-details'>
          <h3>
            <span>GOÛTEZ À LA SAVEUR DU TERROIRCHEZ</span> CHEZ MAME DOUSSO
          </h3>
          <p>
            C’est avec un immense plaisir que je vous invite à découvrir ma
            production de volailles et de foie gras. J’élève dans ma ferme,des
            chèvres ,des moutons ,des canards,des poulets, et des pintades,des
            lapins issues de la région. A travers ma gastronomie, je vous
            propose des produits de qualité, d’une saveur exceptionnelle. Pour
            découvrir la diversité de mes produits, n’hésitez pas à visiter mon
            exploitation. Je vous garantis une expérience gustative
            enrichissante.
          </p>
        </div>
        <div className='firstcategories-container'>
          <article>
            <img src={img2} alt='' />
            <h3>Poulet</h3>
          </article>
          <article>
            <img src={img3} alt='' />
            <h3>Canard</h3>
          </article>
          <article>
            <img src={img4} alt='' />
            <h3>Pigeon</h3>
          </article>
          <article>
            <img src={img5} alt='' />
            <h3>Lapin</h3>
          </article>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .firscategories {
    background: #fff;
  }
  .firscategories img {
    width: 100%;
  }
  .firstcategories-details {
    margin-top: 5rem;
    padding: 1rem;
  }
  .firstcategories-details span {
    color: var(--clr-primary-3);
    font-weight: 800;
    font-size: 2rem;
  }
  .firstcategories-container {
    margin-top: 5rem;
  }
  .firstcategories-container img {
    width: 100%;
  }
   @media (min-width: 576px) {
  .firstcategories-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
  }
 }

  @media (min-width: 992px) {
    .firstcategories-details {
      margin: 0 auto;
      max-width: 45rem;
    }
    .firstcategories-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
export default FirstCategories
