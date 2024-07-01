import React, { useEffect, useState } from 'react';
import BurgerLayer from './BurgerLayer';
import topBun from '../images/img1.png';
import lettuce from '../images/img2.png';
import bottomBun from '../images/img3.png';
import happymeal from '../images/585ac0cd4f6ae202fedf293e.png';
import coke from '../images/coke.png';
import './Home.css'
import background from '../images/img4.png';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const maxSeparation = window.innerHeight; // Adjust based on your burger image size and screen size
  const layersCount = 3; // Number of layers in the burger

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const layers = [
    { src: bottomBun, className: 'bottom-bun', initialSpacing: -120, maxSpacing: -230 },
    { src: lettuce, className: 'lettuce', initialSpacing: 0, maxSpacing: 0 },
    { src: topBun, className: 'top-bun', initialSpacing: -150, maxSpacing: -250 }
  ];

  const calculateOffset = (index) => {
    const normalizedScrollY = Math.min(scrollY, maxSeparation); // Cap the scrollY value to maxSeparation
    const layerSpacing = layers[index].initialSpacing + (layers[index].maxSpacing - layers[index].initialSpacing) * (normalizedScrollY / maxSeparation);
    return (index - (layersCount - 1) / 2) * layerSpacing;
  };

  return (
    <div className="App">
      <div className={`burger-container ${scrollY > 0 ? 'center' : ''}`}>
        {layers.map((layer, index) => (
          <BurgerLayer 
            key={index}
            src={layer.src} 
            offset={calculateOffset(index)}
            className={layer.className}
          />
        ))}
      </div>
      <img src={coke} className={`coke ${scrollY > 0 ? 'hide' : ''}`} />
      <img src={happymeal} className={`happymeal ${scrollY > 0 ? 'hide' : ''}`} />
      <img src={background} className={`background ${scrollY > 0 ? 'expand' : 'collapse'}`} />
      <div className='text'>
        <div className='meet'> Meet the </div>
        <div className='erena'>
        <div className='legend'>Legend</div>
        <div className='flavor'>
          <div>of</div>
          <div className='flavor1'>  flavors</div>
        </div>
        </div>
        <div className='mc'>McDonald's</div>
        <div className='line'>
          <div>Where Every Bite is </div>
          <div className='green'> Iconic </div> 
          <div>and Every Meal is a </div>
          <div className='green'> Journey </div>.
        </div>
        <div className='line'>
          <div>Experience the</div>
          <div className='green'>Unmatched</div> 
        </div>
        <div className='line'>Taste that Has Captivated Millions Worldwide!</div>
        </div>
    </div>
  );
};

export default Home;
