import React from 'react'

const Home = () => {
  return (
    <>
    HeroBanner
    <div>
      <h2>Best Selling products</h2>
      <p>Speakers of Many Variations</p>
    </div>
    <div>
     { ['Product 1','Product 2','Product 3'].map((product)=>product)}
    </div>

    Footer
    </>
  )
}

export default Home