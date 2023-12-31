import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'
const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="row">
          {/*<Title subtitle='Welcome to E Patsala' title='Best Online Education' />*/}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea reiciendis cum quod maxime dolores atque unde temporibus, corrupti, laudantium voluptate, exercitationem incidunt? Placeat accusamus fugiat reprehenderit sint, quia consectetur.</p>
        <div className="button">
          <button className="primary-btn">
            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
          </button>
          <button >
            VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
          </button>
        </div>
        </div>
      </div>
    </section>
    <div className="margin"></div>
    </>
  )
}

export default Hero