import React, { useState } from 'react';
import './chickensandwich.css';

const items = [
  {
    name: 'Bacon, Egg & Cheese Biscuit',
    type: 'Breakfast',
    description: 'A warm, buttermilk biscuit, fluffy scrambled egg, melted cheese, and crispy bacon.',
    price: '₹150',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Buttermilk Biscuit', 'Egg', 'Cheese', 'Bacon'],
    nutrients: {
      calories: '450 Kcal',
      protein: '19g',
      fat: '24g',
      carbs: '36g',
      sugar: '2g'
    },
    advantages: ['High in protein', 'Good source of calcium']
  },
  // Other breakfast items here...

  {
    name: 'McCrispy™',
    type: 'Chicken & Fish Sandwich',
    description: 'A crispy chicken fillet with lettuce and mayo on a toasted bun.',
    price: '₹200',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Chicken Fillet', 'Lettuce', 'Mayonnaise', 'Bun'],
    nutrients: {
      calories: '400 Kcal',
      protein: '22g',
      fat: '20g',
      carbs: '40g',
      sugar: '5g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Deluxe McCrispy™',
    type: 'Chicken & Fish Sandwich',
    description: 'A crispy chicken fillet with lettuce, tomato, mayo, and cheese on a toasted bun.',
    price: '₹250',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Chicken Fillet', 'Lettuce', 'Tomato', 'Mayonnaise', 'Cheese', 'Bun'],
    nutrients: {
      calories: '500 Kcal',
      protein: '25g',
      fat: '25g',
      carbs: '45g',
      sugar: '6g'
    },
    advantages: ['High in protein', 'Good source of calcium']
  },
  {
    name: 'Spicy McCrispy™',
    type: 'Chicken & Fish Sandwich',
    description: 'A spicy crispy chicken fillet with lettuce and mayo on a toasted bun.',
    price: '₹220',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Spicy Chicken Fillet', 'Lettuce', 'Mayonnaise', 'Bun'],
    nutrients: {
      calories: '420 Kcal',
      protein: '22g',
      fat: '22g',
      carbs: '40g',
      sugar: '5g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Spicy Deluxe McCrispy™',
    type: 'Chicken & Fish Sandwich',
    description: 'A spicy crispy chicken fillet with lettuce, tomato, mayo, and cheese on a toasted bun.',
    price: '₹270',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Spicy Chicken Fillet', 'Lettuce', 'Tomato', 'Mayonnaise', 'Cheese', 'Bun'],
    nutrients: {
      calories: '520 Kcal',
      protein: '25g',
      fat: '27g',
      carbs: '45g',
      sugar: '6g'
    },
    advantages: ['High in protein', 'Good source of calcium']
  },
  {
    name: 'Filet-O-Fish®',
    type: 'Chicken & Fish Sandwich',
    description: 'A fish fillet with tartar sauce and cheese on a steamed bun.',
    price: '₹200',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Fish Fillet', 'Tartar Sauce', 'Cheese', 'Steamed Bun'],
    nutrients: {
      calories: '380 Kcal',
      protein: '14g',
      fat: '18g',
      carbs: '38g',
      sugar: '5g'
    },
    advantages: ['Good source of protein', 'Low in sugar']
  },
  {
    name: 'McChicken®',
    type: 'Chicken & Fish Sandwich',
    description: 'A crispy chicken patty with lettuce and mayo on a toasted bun.',
    price: '₹180',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Chicken Patty', 'Lettuce', 'Mayonnaise', 'Bun'],
    nutrients: {
      calories: '400 Kcal',
      protein: '14g',
      fat: '22g',
      carbs: '40g',
      sugar: '5g'
    },
    advantages: ['Good source of protein', 'Good source of iron']
  }
];

const BreakfastMenu = () => {
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
            <p>Veg/Non-Veg: {selectedItem.vegNonVeg}</p>
            <p>Ingredients: {selectedItem.ingredients.join(', ')}</p>
            <p>Calories: {selectedItem.nutrients.calories}</p>
            <p>Protein: {selectedItem.nutrients.protein}</p>
            <p>Fat: {selectedItem.nutrients.fat}</p>
            <p>Carbs: {selectedItem.nutrients.carbs}</p>
            <p>Sugar: {selectedItem.nutrients.sugar}</p>
            <p>Advantages: {selectedItem.advantages.join(', ')}</p>
          </div>
        ) : (
          <p>Click on an item to see its details</p>
        )}
      </div>
      <div className='sidebar'>
        <div className='category'>
          <h3>Breakfast</h3>
          {items.filter(item => item.type === 'Breakfast').map(item => (
            <div key={item.name} onClick={() => handleItemClick(item)}>
              {item.name}
            </div>
          ))}
        </div>
        <div className='category'>
          <h3>Chicken & Fish Sandwiches</h3>
          {items.filter(item => item.type === 'Chicken & Fish Sandwich').map(item => (
            <div key={item.name} onClick={() => handleItemClick(item)}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BreakfastMenu;
