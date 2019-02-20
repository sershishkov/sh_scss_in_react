import React from 'react';
import imgRealtor1 from '../../img/realtor-1.jpeg';
import imgRealtor2 from '../../img/realtor-2.jpeg';
import imgRealtor3 from '../../img/realtor-3.jpeg';

export default () => {
  return (
    <div className="realtors">
    
    <h3 className="heading-3">Top 3 realtors </h3>

    <div className="realtors__list">
      <img src={imgRealtor1} alt="Realtor 1" className="realtors__img"/>
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
        <p className="realtors__sold">245 houses sold</p>
      </div>
      <img src={imgRealtor2} alt="Realtor 2" className="realtors__img"/>
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">Kim Brown</h4>
        <p className="realtors__sold">210 houses sold</p>
      </div>
      <img src={imgRealtor3} alt="Realtor 3" className="realtors__img"/>
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
        <p className="realtors__sold">175 houses sold</p>
      </div>
    </div>

  </div>
  )
}
