import React, { useState } from 'react';
import './beveragemenu.css';

const items = [
  {
    name: 'Strawberry Fizz',
    type: 'Beverage',
    description: 'Enjoy Sprite with a twist of strawberry flavour. Refreshing and perfectly sweet! Contains no fruit. Contains added flavour.',
    price: '₹103',
    volume: '300 ml',
    calories: '139 Kcal'
  },
  {
    name: 'Green Apple Lemon Fizz',
    type: 'Beverage',
    description: 'Try Sprite with green apple and lemon flavour. It’s zesty, and refreshingly bold! Contains no fruit. Contains added flavour.',
    price: '₹103',
    volume: '308 ml',
    calories: '161 Kcal'
  },
  {
    name: 'Lotus Biscoff Frappe',
    type: 'Beverage',
    description: 'A tall glass of creamy indulgence with the unique taste and texture of Lotus Biscoff',
    price: '₹291',
    volume: '359 ml',
    calories: '564 Kcal'
  },
  {
    name: 'Cappuccino Coffee (S)',
    type: 'Coffee',
    description: 'A refreshing espresso shot of 100% Arabica beans, topped with steamed milk froth.',
    price: '₹165',
    volume: '236ml',
    calories: '125 Kcal'
  },
  {
    name: 'Cappuccino Coffee (R)',
    type: 'Coffee',
    description: 'A refreshing espresso shot of 100% Arabica beans, topped with steamed milk froth.',
    price: '₹215₹200',
    volume: '473ml',
    calories: '184 Kcal'
  },
  {
    name: 'Hot Chocolate (S)',
    type: 'Coffee',
    description: 'Sinfully creamy chocolate whisked with silky steamed milk',
    price: '₹184',
    volume: '223 ml',
    calories: '239 Kcal'
  },
  {
    name: 'Hot Chocolate (R)',
    type: 'Coffee',
    description: 'Sinfully creamy chocolate whisked with silky steamed milk',
    price: '₹216',
    volume: '259 ml',
    calories: '297 Kcal'
  },
  {
    name: 'Latte Coffee (S)',
    type: 'Coffee',
    description: 'A classic combination of the signature McCafe espresso, smooth milk, steamed and frothed',
    price: '₹170',
    volume: '236.5 ml',
    calories: '148 Kcal'
  },
  {
    name: 'Latte Coffee (R)',
    type: 'Coffee',
    description: 'A classic combination of the signature McCafe espresso, smooth milk, steamed and frothed',
    price: '₹215₹200',
    volume: '307.5 ml',
    calories: '190 Kcal'
  },
  {
    name: 'Mocha Coffee (S)',
    type: 'Coffee',
    description: 'A delight of ground Arabica espresso, chocolate syrup and steamed milk',
    price: '₹210',
    volume: '242.5 ml',
    calories: '186 Kcal'
  },
  {
    name: 'Mocha Coffee (R)',
    type: 'Coffee',
    description: 'A delight of ground Arabica espresso, chocolate syrup and steamed milk',
    price: '₹236',
    volume: '311.5 ml',
    calories: '244 Kcal'
  },
  {
    name: 'Berry Lemonade Regular',
    type: 'Beverage',
    description: 'A refreshing drink, made with the delicious flavors of berries. 354 ml.',
    price: '₹132',
    volume: '310 ml',
    calories: '104 Kcal'
  },
  {
    name: 'Chocolate Flavoured Shake',
    type: 'Beverage',
    description: 'The classic sinful Chocolate Flavoured Shake, a treat for anytime you need one. Now in new, convenient and delivery friendly packaging',
    price: '₹175',
    volume: '259 ml',
    calories: '271 Kcal'
  },
  {
    name: 'Strawberry Shake',
    type: 'Beverage',
    description: 'An all-time favourite treat bringing together the perfect blend of creamy vanilla soft serve and strawberry flavour. Now in new, convenient and delivery friendly packaging',
    price: '₹175',
    volume: '259 ml',
    calories: '256 Kcal'
  },
  {
    name: 'American Mud Pie Shake',
    type: 'Beverage',
    description: 'Creamy and rich with chocolate and blended with nutty brownie bits for that extra thick goodness',
    price: '₹195',
    volume: '317 ml',
    calories: '398 Kcal'
  },
  {
    name: 'Mango Smoothie',
    type: 'Beverage',
    description: 'A delicious mix of mangoes, soft serve mix and blended ice',
    price: '₹210',
    volume: '280 ml',
    calories: '231 Kcal'
  },
  {
    name: 'Mixed Berry Smoothie',
    type: 'Beverage',
    description: 'A mix of mixed berries, blended together with our creamy soft serve',
    price: '₹215₹210',
    volume: '290 ml',
    calories: '235 Kcal'
  },
  {
    name: 'Mocha Frappe',
    type: 'Beverage',
    description: 'The perfect mix of indulgence and bold flavours. Enjoy a delicious blend of coffee, chocolate sauce, and soft serve',
    price: '₹278',
    volume: '312.5 ml',
    calories: '376 Kcal'
  },
  {
    name: 'McCafe-Ice Coffee',
    type: 'Coffee',
    description: 'Classic coffee poured over ice with soft serve for a refreshing pick-me-up',
    price: '₹215₹200',
    volume: '291.5 ml',
    calories: '185 Kcal'
  },
  {
    name: 'Ice Americano Coffee',
    type: 'Coffee',
    description: 'Signature Arabica espresso shot mixed with ice for an energizing experience',
    price: '₹180',
    volume: '266.5 ml',
    calories: '13 Kcal'
  },
  {
    name: 'Chocolate Frappe',
    type: 'Beverage',
    description: 'An indulgent treat of chocolate sauce & Oreo cookies blended with soft serve, ice & topped with whipped cream',
    price: '₹278',
    volume: '314 ml',
    calories: '481 Kcal'
  },
  {
    name: 'Americano Coffee (S)',
    type: 'Coffee',
    description: 'Refreshing cup of bold and robust espresso made with our signature 100% Arabica beans, combined with hot water',
    price: '₹170',
    volume: '276.5 ml',
    calories: '13 Kcal'
  },
  {
    name: 'McCafe-Classic Coffee',
    type: 'Coffee',
    description: 'An irresistible blend of our signature espresso and soft serve with whipped cream on top, a timeless combination! Now in a new, convenient and delivery friendly packaging.',
    price: '₹215',
    volume: '327.5 ml',
    calories: '392 Kcal'
  },
  {
    name: 'Americano Coffee (R)',
    type: 'Coffee',
    description: 'Refreshing cup of bold and robust espresso made with our signature 100% Arabica beans, combined with hot water',
    price: '₹190',
    volume: '347.5 ml',
    calories: '23 Kcal'
  },
  {
    name: 'Moroccan Mint Green Tea (R)',
    type: 'Tea',
    description: 'Freshly-brewed refreshing tea with hint of Moroccan Mint flavour',
    price: '₹190',
    volume: '330 ml',
    calories: '7 Kcal'
  },
  {
    name: 'English Breakfast Tea',
    type: 'Tea',
    description: 'For when you want your time to enjoy long, slow sips of the wholesome English Breakfast tea',
    price: '₹159',
    volume: '279 ml',
    calories: '10 Kcal'
  },
  {
    name: 'Flat White Coffee',
    type: 'Coffee',
    description: 'Our signature McCafe espresso made with 100% Arabica beans, blended with steamed milk',
    price: '₹173',
    volume: '266.5 ml',
    calories: '167 Kcal'
  },
  {
    name: 'Strawberry Green Tea (S)',
    type: 'Tea',
    description: 'Freshly-brewed refreshing tea with fruity Strawberry flavour',
    price: '₹153',
    volume: '279 ml',
    calories: '7 Kcal'
  },
  {
    name: 'Coke',
    type: 'Beverage',
    description: 'The perfect companion to your burger, fries and everything nice.',
    price: '₹103',
    volume: '394 ml',
    calories: '151 Kcal'
  },
  {
    name: 'Fanta',
    type: 'Beverage',
    description: 'Add a zest of refreshing orange to your meal.',
    price: '₹103',
    volume: '394 ml',
    calories: '179 Kcal'
  },
  {
    name: 'Sprite',
    type: 'Beverage',
    description: 'The perfect companion to your burger, fries and everything nice.',
    price: '₹103',
    volume: '394 ml',
    calories: '165 Kcal'
  },
  {
    name: 'Coke zero can',
    type: 'Beverage',
    description: 'The perfect diet companion to your burger, fries and everything nice. Regular serving size, 300 Ml.',
    price: '₹67',
    volume: '330 ml',
    calories: '0.99 Kcal'
  },
  {
    name: 'Mixed Fruit Beverage',
    type: 'Beverage',
    description: 'Made with puree, pulp & juice from 6 delicious fruits',
    price: '₹75',
    volume: '180 ml',
    calories: '72 Kcal'
  },
  {
    name: 'Vedica Zen Water Bottle',
    type: 'Beverage',
    description: 'A bottle of pure water to refresh yourself.',
    price: '₹45',
    volume: '500 ml',
    calories: '0 Kcal'
  }
];

const BurgerMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='container1'>
      <div className='container2'>
        {selectedItem ? (
          <div className='item-info'>
            <h2>{selectedItem.name}</h2>
            <p>Type: {selectedItem.type}</p>
            <p>{selectedItem.description}</p>
            <p>Price: {selectedItem.price}</p>
            <p>Volume: {selectedItem.volume}</p>
            <p>Calories: {selectedItem.calories}</p>
          </div>
        ) : (
          <p>Click on an item to see its details</p>
        )}
      </div>
      <div className='sidebar'>
        <div className='category'>
          <h3>Beverages</h3>
          {items.filter(item => item.type === 'Beverage').map(item => (
            <div key={item.name} onClick={() => handleItemClick(item)}>
              {item.name}
            </div>
          ))}
        </div>
        <div className='category'>
          <h3>Coffees</h3>
          {items.filter(item => item.type === 'Coffee').map(item => (
            <div key={item.name} onClick={() => handleItemClick(item)}>
              {item.name}
            </div>
          ))}
        </div>
        <div className='category'>
          <h3>Teas</h3>
          {items.filter(item => item.type === 'Tea').map(item => (
            <div key={item.name} onClick={() => handleItemClick(item)}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
