import React from 'react';
import imgHouse1 from '../../img/house-1.jpeg';
import imgHouse2 from '../../img/house-2.jpeg';
import imgHouse3 from '../../img/house-3.jpeg';
import imgHouse4 from '../../img/house-4.jpeg';
import imgHouse5 from '../../img/house-5.jpeg';
import imgHouse6 from '../../img/house-6.jpeg';

export default () => {
  return (
    <section class="homes">
    <div class="home">
      <img src={imgHouse1} alt="House 1" class="home__img" />
      <svg class="home__like">
        <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
      </svg>
      <h5 class="home__name">Beautiful Family House</h5>
      <div class="home__location">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>USA</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>5 rooms</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-expand"></use>
        </svg>
        <p>325 m<sup>2</sup> </p>
      </div>
      <div class="home__price">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-key"></use>
        </svg>
        <p>$1,300,000</p>
      </div>
      <button class="btn home__btn">Contact realtor</button>
    </div>

    <div class="home">
      <img src={imgHouse2} alt="House 2" class="home__img" />
      <svg class="home__like">
        <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
      </svg>
      <h5 class="home__name">Modern Glass Villa</h5>
      <div class="home__location">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>Canada</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>6 rooms</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-expand"></use>
        </svg>
        <p>451 m<sup>2</sup> </p>
      </div>
      <div class="home__price">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-key"></use>
        </svg>
        <p>$2,770,000</p>
      </div>
      <button class="btn home__btn">Contact realtor</button>
    </div>

    <div class="home">
      <img src={imgHouse3} alt="House 3" class="home__img" />
      <svg class="home__like">
        <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
      </svg>
      <h5 class="home__name">Cozy Country House</h5>
      <div class="home__location">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>UK</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>4 rooms</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-expand"></use>
        </svg>
        <p>257 m<sup>2</sup> </p>
      </div>
      <div class="home__price">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-key"></use>
        </svg>
        <p>$500,001</p>
      </div>
      <button class="btn home__btn">Contact realtor</button>
    </div>

    <div class="home">
      <img src={imgHouse4} alt="House 4" class="home__img" />
      <svg class="home__like">
        <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
      </svg>
      <h5 class="home__name">Large Rustical Villa</h5>
      <div class="home__location">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>Portugal</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>6 rooms</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-expand"></use>
        </svg>
        <p>481 m<sup>2</sup> </p>
      </div>
      <div class="home__price">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-key"></use>
        </svg>
        <p>$1,359,000</p>
      </div>
      <button class="btn home__btn">Contact realtor</button>
    </div>

    <div class="home">
      <img src={imgHouse5} alt="House 5" class="home__img" />
      <svg class="home__like">
        <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
      </svg>
      <h5 class="home__name">Majestic Palace House</h5>
      <div class="home__location">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>UKR</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>18 rooms</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-expand"></use>
        </svg>
        <p>3250 m<sup>2</sup> </p>
      </div>
      <div class="home__price">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-key"></use>
        </svg>
        <p>$8,300,000</p>
      </div>
      <button class="btn home__btn">Contact realtor</button>
    </div>

    <div class="home">
      <img src={imgHouse6} alt="House 6" class="home__img" />
      <svg class="home__like">
        <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
      </svg>
      <h5 class="home__name">Modern Family Apartment</h5>
      <div class="home__location">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>MD</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>3 rooms</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-expand"></use>
        </svg>
        <p>183 m<sup>2</sup> </p>
      </div>
      <div class="home__price">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-key"></use>
        </svg>
        <p>$250,000</p>
      </div>
      <button class="btn home__btn">Contact realtor</button>
    </div>

  </section>
  )
}
