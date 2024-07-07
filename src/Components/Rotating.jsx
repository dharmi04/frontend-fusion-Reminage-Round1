/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Rotating.css';

// Import images
import Burger1 from '../assets/Burger-1.png';
import Dishes from '../assets/Dishes.png';
import FastFood from '../assets/FastFood.png';
import FlavorfulWrap from '../assets/FlavorfulWrap.png';
import Cola from '../assets/Cola.png';
import FrenchFries from '../assets/FrenchFries.png';
import OrangeJuice from '../assets/OrangeJuice.png';
import FriedChicken from '../assets/FriedChicken.png';
import HotDog from '../assets/HotDog.png';
import CornedBeefComfort from '../assets/CornedBeef.png';

const Rotating = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/burger.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>McDonald's</title>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            cursor: pointer;
          }
          body {
            background-color: #000000;
          }
          body::before {
            position: absolute;
            width: min(1400px, 90vw);
            top: 10%;
            left: 50%;
            height: 90%;
            transform: translateX(-50%);
            content: '';
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: top center;
            pointer-events: none;
          }
        `}
      </style>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>

      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src={Burger1} alt="Burger 1" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={Dishes} alt="Dishes" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={FastFood} alt="Fast Food" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={FlavorfulWrap} alt="Flavorful Wrap" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={Cola} alt="Cola" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={FrenchFries} alt="French Fries" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={OrangeJuice} alt="Orange Juice" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src={FriedChicken} alt="Fried Chicken" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img src={HotDog} alt="Hot Dog" />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <img src={CornedBeefComfort} alt="Corned Beef Comfort" />
          </div>
        </div>
        <div className="content">
          <div className="model">
            <p className="md:text-7xl text-xl font-serif text-gray-700 md:mt-10 mt-0">Welcome to McDonald's</p>
            <p className="md:text-7xl text-xl font-serif text-gray-700 md:mt-10 mt-0">Enjoy our delicious meals!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rotating;
