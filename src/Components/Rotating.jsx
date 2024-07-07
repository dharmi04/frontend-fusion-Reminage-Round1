/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Rotating.css"

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
                /* background-image: */
                /* repeating-linear-gradient(
                    to right, transparent 0 100px,
                    #25283b22 100px 101px
                ),
                repeating-linear-gradient(
                    to bottom, transparent 0 100px,
                    #25283b22 100px 101px
                ); */
              }
              body::before {
                position: absolute;
                width: min(1400px, 90vw);
                top: 10%;
                left: 50%;
                height: 90%;
                transform: translateX(-50%);
                content: '';
                /* background-image: url('/Online Shopping.png'); */
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
                <img src="src/assets/Burger-1.png" alt="" />
              </div>
              <div className="item" style={{ "--position": 2 }}>
                <img src="src/assets/Dishes.png" alt="" />
              </div>
              <div className="item" style={{ "--position": 3 }}>
                <img src="src/assets/FastFood.png" alt="" />
              </div>
              <div className="item" style={{ "--position": 4 }}>
                <img src="src/assets/FlavorfulWrap.png" alt="" />
              </div>
              <div className="item" style={{ "--position": 5 }}>
                <img src="src/assets/Cola.png" alt="" />
              </div>
              <div className="item" style={{ "--position": 6 }}>
                <img src="src/assets/FrenchFries.png" alt="" />
              </div>
              <div className="item" style={{ "--position": 7 }}>
                <img src="src/assets/OrangeJuice.png" alt="" />
              </div>
              <div className="item" style={{ "--position": 8 }}>
                <img src="src/assets/FriedChicken.png" alt="" />
              </div>
              <div className="item" style={{ "--position": 9 }}>
                <img src="src/assets/HotDog.png" alt="" />
              </div>
              <div className="item" style={{ "--position": 10 }}>
                <img src="src/assets/CornedBeef.png" alt="" />
              </div>
            </div>
            <div className="content">
              <div className="model">
              <p className='text-7xl font-serif text-gray-700 mt-10'>Welcome to MacDonalds</p>
                <p className='text-7xl font-serif text-gray-700 mt-10'>Enjoy our delicious meals!</p>
              </div>
            </div>
          </div>
        </>
      );
}

export default Rotating