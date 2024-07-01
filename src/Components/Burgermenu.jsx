import React, { useState } from 'react';
import './burgermenu.css';

const burgers = [
  {
    name: 'Chicken Surprise Burger',
    type: 'Non-Veg',
    description: 'A delicious chicken burger with a surprise twist.'
  },
  {
    name: 'McSpicy Deluxe Chicken Double Patty Burger',
    type: 'Non-Veg',
    description: 'Double the patty, double the spice!'
  },
  {
    name: 'McSpicy Chicken Double Patty Burger',
    type: 'Non-Veg',
    description: 'Spicy chicken with double patties.'
  },
  {
    name: 'McChicken Double Patty Burger',
    type: 'Non-Veg',
    description: 'Classic McChicken with double patties.'
  },
  {
    name: 'McCheese Burger Chicken',
    type: 'Non-Veg',
    description: 'Cheesy chicken burger.'
  },
  {
    name: 'Grilled Chicken & Cheese Burger',
    type: 'Non-Veg',
    description: 'Grilled chicken with cheese.'
  },
  {
    name: 'McSpicy Premium Chicken Burger',
    type: 'Non-Veg',
    description: 'Premium spicy chicken burger.'
  },
  {
    name: 'McChicken Burger',
    type: 'Non-Veg',
    description: 'Classic McChicken burger.'
  },
  {
    name: 'Filet-O-Fish Burger',
    type: 'Non-Veg',
    description: 'Fish fillet burger.'
  },
  {
    name: 'Chicken Maharaja Mac Burger',
    type: 'Non-Veg',
    description: 'Royal chicken burger.'
  },
  {
    name: 'McSpicy Chicken Burger',
    type: 'Non-Veg',
    description: 'Spicy chicken burger.'
  },
  {
    name: 'Mexican McAloo Tikki Double Patty Burger',
    type: 'Veg',
    description: 'Mexican style aloo tikki with double patties.'
  },
  {
    name: 'McVeggie Double Patty Burger',
    type: 'Veg',
    description: 'Double the veggie patties.'
  },
  {
    name: 'Veg Surprise Burger',
    type: 'Veg',
    description: 'A surprise veggie delight.'
  },
  {
    name: 'McAloo Tikki Double Patty Burger',
    type: 'Veg',
    description: 'Classic aloo tikki with double patties.'
  },
  {
    name: 'McSpicy Deluxe Paneer Burger',
    type: 'Veg',
    description: 'Deluxe spicy paneer burger.'
  },
  {
    name: 'McCheese Burger Veg',
    type: 'Veg',
    description: 'Cheesy veggie burger.'
  },
  {
    name: 'Corn & Cheese Burger',
    type: 'Veg',
    description: 'Corn and cheese burger.'
  },
  {
    name: 'McAloo Tikki Burger',
    type: 'Veg',
    description: 'Classic aloo tikki burger.'
  },
  {
    name: 'McVeggie Burger',
    type: 'Veg',
    description: 'Classic veggie burger.'
  },
  {
    name: 'Mexican McAloo Tikki Burger',
    type: 'Veg',
    description: 'Mexican style aloo tikki burger.'
  },
  {
    name: 'Masala McEgg Burger',
    type: 'Veg',
    description: 'Masala egg burger.'
  },
  {
    name: 'McSpicy Paneer Burger',
    type: 'Veg',
    description: 'Spicy paneer burger.'
  },
  {
    name: 'Big Spicy Chicken Wrap',
    type: 'Wrap',
    description: 'Spicy chicken wrapped in a soft tortilla.'
  },
  {
    name: 'Big Spicy Paneer Wrap',
    type: 'Wrap',
    description: 'Spicy paneer wrapped in a soft tortilla.'
  }
];

const BurgerMenu = () => {
  const [selectedBurger, setSelectedBurger] = useState(null);

  const handleBurgerClick = (burger) => {
    setSelectedBurger(burger);
  };

  return (
    <div className='container1'>
      <div className='container2'>
        {selectedBurger ? (
          <div className='burger-info'>
            <h2>{selectedBurger.name}</h2>
            <p>Type: {selectedBurger.type}</p>
            <p>{selectedBurger.description}</p>
          </div>
        ) : (
          <p>Click on a burger to see its details</p>
        )}
      </div>
      <div className='sidebar'>
        <div className='category'>
          <h3>Non-Veg Burgers</h3>
          {burgers.filter(burger => burger.type === 'Non-Veg').map(burger => (
            <div key={burger.name} onClick={() => handleBurgerClick(burger)}>
              {burger.name}
            </div>
          ))}
        </div>
        <div className='category'>
          <h3>Veg Burgers</h3>
          {burgers.filter(burger => burger.type === 'Veg').map(burger => (
            <div key={burger.name} onClick={() => handleBurgerClick(burger)}>
              {burger.name}
            </div>
          ))}
        </div>
        <div className='category'>
          <h3>Wraps</h3>
          {burgers.filter(burger => burger.type === 'Wrap').map(burger => (
            <div key={burger.name} onClick={() => handleBurgerClick(burger)}>
              {burger.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
