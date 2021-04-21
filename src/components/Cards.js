import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from './images/img-9.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'
import img4 from './images/img-4.jpg'
import img1 from './images/img-1.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Set Sail in the Pacific Ocean visiting Uncharted Waters'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Travel through the Turkish Lands in a Private Tour'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Explore the hidden waterfall deep inside the Amazon Jungle '
              label='Mystery'
              path='/products'
            />
            <CardItem
              src={img1}
              text='Visit California with wonderfull purple skys and white sand'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
