import React from 'react'
import styled from 'styled-components'
import b1 from '../assets/b1.png'

const ThirthCategories = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='thirth-categories-container'>
          <article className='thirth-categories-details'>
            <h3>
              De La Charcuterie Faite Maison Et Des Producteurs Locaux Pour Des
              Aperos Gourmands
            </h3>
            <h2>Choisir Et Acheter Un Poulailler</h2>
            <p>
              Avant l'arrivée de vos poules, vous devez penser à l'élément
              essentiel de leur future vie chez vous : le poulailler. Que vous
              choisissiez de l'acheter ou de le construire vous-même, votre
              choix va dépendre de l’espace disponible sur votre terrain, du
              nombre de poules envisagé et de l’élevage souhaité. Si vous devez
              acheter votre poulailler sur internet, faites attention aux petits
              prix : les poulaillers pas chers sont souvent de qualité et
              sécurité médiocres, vous mettriez alors vos poules en danger...
              veuillez toujours considérer les avis des internautes ayant acheté
              le produit. Le poulailler en bois reste la meilleure alternative
              si on pense protection de l’environnement et recyclage, même si le
              plastique peut aussi être recyclé. L’enclos s’avère nécessaire,
              c’est pourquoi il vaut mieux opter pour un poulailler avec enclos.
              Plastique ou bois, chaque sorte de poulailler présente ses
              avantages et ses inconvénients. Pour le poulailler en plastique,
              on peut de suite imaginer qu’il reste très facile à entretenir,
              c’est là son principal avantage. C’est un poulailler recyclable
              qui convient beaucoup plus aux citadins, soit donc au milieu
              urbain, il est prêt à poser et ne nécessite aucune préparation de
              travaux. Le poulailler en bois mérite un entretien régulier comme
              tout ce qui est en bois, et ce, même pour les bois les plus
              résistants. Cependant, sur le plan esthétique il sait s’adapter à
              tous les environnements, c’est pourquoi et très souvent il est
              privilégié. Effectivement, le poulailler en bois reste le modèle
              le plus prisé sur le marché. Design épuré, le bois est un
              excellent isolant thermique et acoustique. Ainsi les poules sont
              bien protégées de l’humidité, du plein soleil et des courants
              d’air. Le prix d’un poulailler en bois comparé à celui en
              plastique reste également très compétitif.
            </p>
          </article>
        </div>
        <article>
          <img src={b1} alt='' className='img-third' />
        </article>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .img-third {
    width: 100%;
  }

  
`
export default ThirthCategories