import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/v1.png'
import img2 from '../assets/v2.png'
import img3 from '../assets/v3.jpeg'
import img4 from '../assets/v4.jpeg'
import img5 from '../assets/v8.png'
import img6 from '../assets/c1.png'
import img7 from '../assets/c2.png'


const SecondCategories = () => {
  return (
    <Wrapper>
      <div className='secondcategories'>
        <div className='secondcategories-container'>
          <article className='f1'>
            <img src={img1} alt='' />
          </article>
          <article className='f2'>
            <img src={img2} alt='' />
          </article>
          <article className='f3'>
            <img src={img3} alt='' />
          </article>
          <article className='f4'>
            <img src={img4} alt='' />
          </article>
          <article className='f5'>
            <img src={img5} alt='' />
          </article>
        </div>
        <div className='secondcategories-container-deux'>
          <article>
            <img src={img6} alt='' />
          </article>
          <article>
            <img src={img7} alt='' />
          </article>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

.secondcategories{
 margin-top:5rem;
}
.secondcategories img{
 width:100%;
}
@media (min-width:768px) {
  .secondcategories-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5rem;
  }
}
@media (min-width:992px) {
  .secondcategories-container{
    grid-template-columns: repeat(3,1fr);
  }
}
@media (min-width:1170px) {
  .secondcategories-container{
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: repeat(4,200px);
    grid-template-areas:
    "a a a b b  c c"
    "a a a e e  c c"
    "d  d d e e  f f"
    "d  d d e e f f"
   
  }
  .secondcategories-container img{
    height: 100%;
  }
  .f1{
    grid-area: a;
  }
  .f2{
    grid-area: b;
  }
  .f3{
    grid-area: c;
  }
  .f4{
    grid-area: d;
  }
  .f5{
    grid-area: e;
  }
  .secondcategories-container-deux img{
   width:100%;
  }
  .secondcategories-container-deux{
   margin-top:5rem;
  }
  
`
export default SecondCategories
