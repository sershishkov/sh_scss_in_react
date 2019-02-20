import React from 'react';
import imgStory1 from '../../img/story-1.jpeg';
import imgStory2 from '../../img/story-2.jpeg';


export default () => {
  return (
    <div className="story__pictures">
      <img src={imgStory1} alt="Couple with new house" className="story__img--1" />
      <img src={imgStory2} alt="New house" className="story__img--2" />
    </div>
  )
}
