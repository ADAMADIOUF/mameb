import React,{useState} from 'react'
import styled from 'styled-components'
import A1 from '../assets/tes-b.png'
import img1 from '../assets/about1.webp'
import img2 from '../assets/p.jpeg'
import pimg from '../assets/p1.jpeg'
import pimg2 from '../assets/p2.jpeg'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import about4 from '../assets/about4.png'
import Question from '../components/Question'
import data from '../dataQuestion'
const AboutPage = () => {
   const [questions, setQuestions] = useState(data)
  return (
    <Wrapper>
      <div className='about'>
        <img src={img1} alt='' className='about-first-img' />
        <div className='section-center'>
          <div className='about-details'>
            <h3>
              le <span>GIE Mame Doussou ,</span> Passion et Savoir-Faire
              artisanal familial{' '}
            </h3>
            <h2>L'histoire du GIE Mame Doussou</h2>
            <h4>un savoir-faire artisal familial</h4>
            <p>
              L'Élevage du poulet je l'ai hérité de ma grande mere mame Doussou
              camara qui etait une saint louisaine gres pieu se qui Sadonnait à
              l'Élevage du poulet et parmi ses sujets il y avait un grand coq
              qu'lle appelait Bocar; Bocar était un cousin de mon Grand-père
              Baîdy mon père Semou faisait l'Élevage du poulet ainsi mon oncle
              Léonce Gueye de Saint-Louis donc c'est un héritage puis pour avoir
              de bonnes viandes de qualité ils faut allait vers l'Élevage
              écologique.
            </p>
          </div>
          <img src={img2} alt='' className='img-about' />
        </div>
        <div className='container-about'>
          <article>
            <img src={about1} alt='' />
            <h3>Soutien Des Producteurs Locaux</h3>
          </article>
          <article>
            <img src={about2} alt='' />
            <h3>Maitrise De La Decoupe</h3>
          </article>
          <article>
            <img src={about3} alt='' />
            <h3>Produits Issus Des Circuits Courts</h3>
          </article>
          <article>
            <img src={about4} alt='' />
            <h3>Viandes De Qualite Superieure</h3>
          </article>
        </div>
        <div className='section-center agriculture'>
          <h3>L'agriculture ma passion</h3>
          <div className='agriculture-container'>
            <article>
              <h2>je m'appelle Mam Birame Diouf</h2>
              <p>
                L'économie sénégalaise repose principalement sur le secteur
                agricole, qui emploie plus de 60% de la population active. A cet
                égard, l'Etat du Sénégal a mis en œuvre d'importants programmes
                d'amélioration, de renforcement et de modernisation de la base
                de production agricole à travers les politiques définies dans le
                Plan Sénégal Emergent (PSE), dans sa composante PRACAS
                (Programme d'accélération de la cadence de l'Agriculture
                Sénégalaise), qui vise entre autres l'autosuffisance en riz.
                Grâce à des ressources en eau abondantes et à des terres arables
                adaptées à la production agricole, le potentiel de l'agriculture
                sénégalaise est largement reconnu, notamment dans les secteurs
                céréalier et horticole. Les réussites de ces dernières années
                témoignent de la capacité existante des opérateurs privés
                sénégalais et étrangers. L'agriculture sénégalaise est
                principalement : près de 4 millions d'hectares (19% de la
                superficie du pays), inégalement répartis dans les zones
                éco-géographiques. La mise en valeur agricole ne couvre
                annuellement que 65% de ces terres, soit environ 2,5 millions
                d'hectares ; 98% de ces terres sont cultivées en conditions
                pluviales, ce qui induit une activité agricole fortement exposée
                aux aléas climatiques. L'agriculture est le pilier fondamental
                de la politique de développement du Sénégal, qui réunit toutes
                les conditions favorables au développement d'une agriculture
                compétitive assurant la sécurité alimentaire et des flux
                d'exportation importants vers les marchés à forte valeur
                ajoutée. Spécifiquement, le domaine de l'horticulture -fruits et
                légumes- présente, dans le contexte actuel, les meilleurs atouts
                en termes de croissance et de création de valeur ajoutée. La
                gamme des produits agricoles alimentaires, industriels et
                horticoles est large et offre de nombreuses opportunités
                confirmées pour l'agriculture sénégalaise. Ces produits sont
                l'arachide et les oléagineux, le riz, les céréales (maïs, mil,
                sorgho), l'oignon, la tomate industrielle, les exportations
                horticoles, etc. Cependant, afin d'accélérer réellement et
                significativement le rythme dans un contexte de rareté des
                ressources financières, le Gouvernement du Sénégal a choisi de
                faire un effort de priorisation. Ainsi, le Gouvernement, en
                concertation avec l'ensemble des acteurs, entend concentrer et
                dynamiser ses investissements agricoles sur des produits
                hautement stratégiques pour le Sénégal, touchant l'ensemble du
                monde rural, à savoir le riz, l'oignon, l'arachide et les fruits
                et légumes de contre-saison. L'objectif est d'atteindre un
                volume d'exportation de plus de 200 000 tonnes de fruits et
                légumes à moyen terme, grâce à l'élargissement de la diversité
                des produits " Origine Sénégal ". Une autre ambition pour
                l'horticulture sénégalaise, en particulier, est de contribuer à
                l'autosuffisance nationale en produits maraîchers.
              </p>
            </article>
            <article>
              <img src={pimg} alt='' className='p-img2' />
            </article>
          </div>
          <img src={pimg2} alt='' className='p-img' />
        </div>
        <div className='section-center questions'>
          <h4>questions & reponses</h4>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />
          })}
        </div>
        <div className='about-avantage'>
          <div className='avantage section-center'>
            <div className='container-avantage'>
              <artcile className='avantages a1'>
                <div>
                  <img src={A1} alt='' />
                  <h3>Large choix de produits</h3>
                </div>
              </artcile>
              <artcile className='avantages a2'>
                <div>
                  <img src={A1} alt='' />
                  <h3>Vente directe</h3>
                </div>
              </artcile>
              <artcile className='avantages a3'>
                <div>
                  <img src={A1} alt='' />
                  <h3>Produits de qualité</h3>
                </div>
              </artcile>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .about-first-img {
    width: 300px;
margin-top:5rem;
    
  }
  .p-img{
    width:300px;
    margin-top:5rem;
  }
  .questions{
    margin-top:5rem;
    text-align:center;
  }
  .about-details h3 span {
    color: var(--clr-primary-3);
    font-size: 2rem;
  }
  .img-about {
    width: 300px;
  }
  .container-about {
    margin-top:5rem;
    padding:0.5rem;
    background: #222;
    color: var(--clr-primary-3);
    text-align: center;
  }

  .container-about img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    display: block;
  }
  .agriculture{
    margin-top:5rem;
  }
  .p-img2{
    width:100%
  }
  @media (min-width: 768px) {
    .container-about {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  @media (min-width: 992px) {
    .container-about {
      grid-template-columns: repeat(4, 1fr);
    }
    .p-img{
      width:500px
    }
    .about-first-img {
      width:700px;
      display:block;
      margin:0 auto
      }
  .avantages {
    margin: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
  }
  .avantages:hover {
    transform: scale(1.1);
  }
  .a1,
  .a2,
  .a3 {
    background: var(--clr-white);
    width: 100%;
    height: 200px;
  }
  .avantages {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .avantages img {
    width: 100px;
  }
  .avantages h3 {
    color: var(--clr-black);
  }
  @media (min-width: 768px) {
    .container-avantage {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
`
export default AboutPage
