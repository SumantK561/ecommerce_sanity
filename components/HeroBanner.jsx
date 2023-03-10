import React from 'react';
import Card from './UI/Card';

const HeroBanner = ({ bannerContent }) => {

  return (
    <div className="hero-banner-container">
      <div>
        <h3>Product that meet</h3>
        <h1 className='text-gray-50'>YOUR Need </h1>
        <div className="hero-banner-image mt-12 max-w-lg">
          <Card bannerContent = {bannerContent}/>
        </div>

        {/* <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default HeroBanner