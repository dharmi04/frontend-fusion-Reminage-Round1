import React, { useState } from 'react';
import './breakfast.css';

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
  {
    name: 'Egg McMuffin®',
    type: 'Breakfast',
    description: 'A toasted English muffin with a freshly cracked egg, lean Canadian bacon, and melted cheese.',
    price: '₹120',
    vegNonVeg: 'Non-Veg',
    ingredients: ['English Muffin', 'Egg', 'Canadian Bacon', 'Cheese'],
    nutrients: {
      calories: '300 Kcal',
      protein: '18g',
      fat: '12g',
      carbs: '30g',
      sugar: '3g'
    },
    advantages: ['High in protein', 'Low in sugar']
  },
  {
    name: 'Sausage McMuffin®',
    type: 'Breakfast',
    description: 'A toasted English muffin with a savory hot sausage and melted cheese.',
    price: '₹130',
    vegNonVeg: 'Non-Veg',
    ingredients: ['English Muffin', 'Sausage', 'Cheese'],
    nutrients: {
      calories: '400 Kcal',
      protein: '14g',
      fat: '26g',
      carbs: '29g',
      sugar: '2g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Sausage McMuffin® with Egg',
    type: 'Breakfast',
    description: 'A toasted English muffin with a savory hot sausage, a freshly cracked egg, and melted cheese.',
    price: '₹150',
    vegNonVeg: 'Non-Veg',
    ingredients: ['English Muffin', 'Sausage', 'Egg', 'Cheese'],
    nutrients: {
      calories: '450 Kcal',
      protein: '21g',
      fat: '28g',
      carbs: '30g',
      sugar: '2g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Sausage Biscuit',
    type: 'Breakfast',
    description: 'A warm buttermilk biscuit with a savory hot sausage.',
    price: '₹140',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Buttermilk Biscuit', 'Sausage'],
    nutrients: {
      calories: '430 Kcal',
      protein: '11g',
      fat: '27g',
      carbs: '35g',
      sugar: '2g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Sausage Biscuit with Egg',
    type: 'Breakfast',
    description: 'A warm buttermilk biscuit with a savory hot sausage and a freshly cracked egg.',
    price: '₹160',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Buttermilk Biscuit', 'Sausage', 'Egg'],
    nutrients: {
      calories: '480 Kcal',
      protein: '14g',
      fat: '29g',
      carbs: '35g',
      sugar: '2g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Bacon, Egg & Cheese McGriddles®',
    type: 'Breakfast',
    description: 'Soft, warm griddle cakes with the taste of maple syrup, crispy bacon, fluffy egg, and melty American cheese.',
    price: '₹180',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Griddle Cakes', 'Bacon', 'Egg', 'Cheese'],
    nutrients: {
      calories: '420 Kcal',
      protein: '17g',
      fat: '20g',
      carbs: '45g',
      sugar: '15g'
    },
    advantages: ['High in protein', 'Good source of calcium']
  },
  {
    name: 'Sausage McGriddles®',
    type: 'Breakfast',
    description: 'Soft, warm griddle cakes with the taste of maple syrup and savory hot sausage.',
    price: '₹170',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Griddle Cakes', 'Sausage'],
    nutrients: {
      calories: '430 Kcal',
      protein: '11g',
      fat: '24g',
      carbs: '45g',
      sugar: '15g'
    },
    advantages: ['Good source of protein', 'Good source of iron']
  },
  {
    name: 'Sausage, Egg & Cheese McGriddles®',
    type: 'Breakfast',
    description: 'Soft, warm griddle cakes with the taste of maple syrup, savory sausage, fluffy egg, and melty American cheese.',
    price: '₹200',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Griddle Cakes', 'Sausage', 'Egg', 'Cheese'],
    nutrients: {
      calories: '550 Kcal',
      protein: '20g',
      fat: '31g',
      carbs: '45g',
      sugar: '15g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Big Breakfast®',
    type: 'Breakfast',
    description: 'Scrambled eggs, sausage, a warm biscuit, and crispy hash browns.',
    price: '₹250',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Eggs', 'Sausage', 'Biscuit', 'Hash Browns'],
    nutrients: {
      calories: '740 Kcal',
      protein: '25g',
      fat: '48g',
      carbs: '53g',
      sugar: '2g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Big Breakfast® with Hotcakes',
    type: 'Breakfast',
    description: 'Scrambled eggs, sausage, a warm biscuit, crispy hash browns, and hotcakes with syrup and butter.',
    price: '₹300',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Eggs', 'Sausage', 'Biscuit', 'Hash Browns', 'Hotcakes', 'Syrup', 'Butter'],
    nutrients: {
      calories: '920 Kcal',
      protein: '27g',
      fat: '49g',
      carbs: '99g',
      sugar: '36g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Hotcakes',
    type: 'Breakfast',
    description: 'Three golden brown hotcakes with syrup and butter.',
    price: '₹200',
    vegNonVeg: 'Veg',
    ingredients: ['Hotcakes', 'Syrup', 'Butter'],
    nutrients: {
      calories: '350 Kcal',
      protein: '8g',
      fat: '9g',
      carbs: '58g',
      sugar: '16g'
    },
    advantages: ['Good source of carbohydrates', 'Low in fat']
  },
  {
    name: 'Hotcakes and Sausage',
    type: 'Breakfast',
    description: 'Three golden brown hotcakes with syrup, butter, and a savory hot sausage.',
    price: '₹250',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Hotcakes', 'Syrup', 'Butter', 'Sausage'],
    nutrients: {
      calories: '520 Kcal',
      protein: '14g',
      fat: '24g',
      carbs: '58g',
      sugar: '16g'
    },
    advantages: ['Good source of protein', 'Good source of carbohydrates']
  },
  {
    name: 'Sausage Burrito',
    type: 'Breakfast',
    description: 'A warm flour tortilla filled with scrambled eggs, sausage, melted cheese, green chiles, and onions.',
    price: '₹180',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Flour Tortilla', 'Eggs', 'Sausage', 'Cheese', 'Green Chiles', 'Onions'],
    nutrients: {
      calories: '290 Kcal',
      protein: '12g',
      fat: '16g',
      carbs: '24g',
      sugar: '1g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Hash Browns',
    type: 'Breakfast',
    description: 'Crispy and golden brown hash browns.',
    price: '₹100',
    vegNonVeg: 'Veg',
    ingredients: ['Potatoes', 'Vegetable Oil', 'Salt'],
    nutrients: {
      calories: '140 Kcal',
      protein: '1g',
      fat: '9g',
      carbs: '15g',
      sugar: '0g'
    },
    advantages: ['Low in sugar', 'Good source of carbohydrates']
  },
  {
    name: 'Fruit & Maple Oatmeal',
    type: 'Breakfast',
    description: 'A blend of 100% natural whole grain oats with diced apples, cranberries, and two kinds of raisins.',
    price: '₹150',
    vegNonVeg: 'Veg',
    ingredients: ['Whole Grain Oats', 'Apples', 'Cranberries', 'Raisins'],
    nutrients: {
      calories: '290 Kcal',
      protein: '5g',
      fat: '4g',
      carbs: '58g',
      sugar: '18g'
    },
    advantages: ['Good source of fiber', 'Low in fat']
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
          {items.map(item => (
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
