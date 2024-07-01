import React, { useState } from 'react';
import './meals.css';

const items = [
  {
    name: 'Chicken Surprise Burger Combo',
    type: 'Combo Meal',
    description: 'Chicken Surprise Burger Combo + Fries (M) + Drink of your choice.',
    price: '₹237',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Chicken Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '850 Kcal',
      protein: '30g',
      fat: '40g',
      carbs: '100g',
      sugar: '25g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Mexican McAloo Tikki Double Patty Burger Combo',
    type: 'Combo Meal',
    description: 'Mexican McAloo Tikki burger with double patty + Fries (M) + Coke (M)',
    price: '₹243',
    vegNonVeg: 'Veg',
    ingredients: ['Mexican McAloo Tikki Double Patty Burger', 'Fries', 'Coke'],
    customisable: true,
    nutrients: {
      calories: '900 Kcal',
      protein: '25g',
      fat: '35g',
      carbs: '120g',
      sugar: '30g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'McAloo Tikki Double Patty Burger Combo',
    type: 'Combo Meal',
    description: 'McAloo Tikki Double patty Burger + Fries (M) + Beverage of your choice in a reusable bottle.',
    price: '₹226',
    vegNonVeg: 'Veg',
    ingredients: ['McAloo Tikki Double Patty Burger', 'Fries', 'Beverage'],
    customisable: true,
    nutrients: {
      calories: '850 Kcal',
      protein: '20g',
      fat: '30g',
      carbs: '110g',
      sugar: '25g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'Mexican McAloo Tikki Burger Combo',
    type: 'Combo Meal',
    description: 'Mexican McAloo Tikki Burger + Fries (M) + Beverage of your choice in a reusable bottle.',
    price: '₹190',
    vegNonVeg: 'Veg',
    ingredients: ['Mexican McAloo Tikki Burger', 'Fries', 'Beverage'],
    customisable: true,
    nutrients: {
      calories: '800 Kcal',
      protein: '18g',
      fat: '28g',
      carbs: '100g',
      sugar: '24g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'McAloo Tikki Burger Combo',
    type: 'Combo Meal',
    description: 'McAloo Tikki Burger + Fries (M) + Beverage of your choice in a reusable bottle.',
    price: '₹190',
    vegNonVeg: 'Veg',
    ingredients: ['McAloo Tikki Burger', 'Fries', 'Beverage'],
    customisable: true,
    nutrients: {
      calories: '750 Kcal',
      protein: '16g',
      fat: '25g',
      carbs: '95g',
      sugar: '20g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'McSpicy Deluxe Chicken Double Patty Burger Combo',
    type: 'Combo Meal',
    description: 'McSpicy Deluxe Chicken double patty Burger + Fries (M) + Drink of your choice.',
    price: '₹428',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McSpicy Deluxe Chicken Double Patty Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '1000 Kcal',
      protein: '40g',
      fat: '50g',
      carbs: '110g',
      sugar: '28g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'McSpicy Chicken Double Patty Burger Combo',
    type: 'Combo Meal',
    description: 'McSpicy Chicken double patty Burger + Fries (M) + Drink of your choice.',
    price: '₹409',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McSpicy Chicken Double Patty Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '950 Kcal',
      protein: '38g',
      fat: '48g',
      carbs: '105g',
      sugar: '27g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'McChicken Double Patty Burger Combo',
    type: 'Combo Meal',
    description: 'McChicken Burger double patty burger + Fries (M) + Drink of your choice in a reusable bottle.',
    price: '₹343',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McChicken Double Patty Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '880 Kcal',
      protein: '36g',
      fat: '45g',
      carbs: '100g',
      sugar: '26g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'McVeggie Double Patty Burger Combo',
    type: 'Combo Meal',
    description: 'McVeggie double patty burger + Fries (M) + Drink of your Choice in a reusable bottle.',
    price: '₹319',
    vegNonVeg: 'Veg',
    ingredients: ['McVeggie Double Patty Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '820 Kcal',
      protein: '24g',
      fat: '38g',
      carbs: '95g',
      sugar: '23g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'Veg Surprise Burger Combo',
    type: 'Combo Meal',
    description: 'Veg Surprise Burger Combo + Fries (M) + Drink of your choice.',
    price: '₹228',
    vegNonVeg: 'Veg',
    ingredients: ['Veg Surprise Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '800 Kcal',
      protein: '22g',
      fat: '35g',
      carbs: '100g',
      sugar: '25g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'McSpicy Deluxe Paneer Burger Combo',
    type: 'Combo Meal',
    description: 'McSpicy Deluxe Paneer Burger + Fries (M) + Drink of your choice.',
    price: '₹361',
    vegNonVeg: 'Veg',
    ingredients: ['McSpicy Deluxe Paneer Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '900 Kcal',
      protein: '28g',
      fat: '45g',
      carbs: '95g',
      sugar: '25g'
    },
    advantages: ['High in protein', 'Good source of calcium']
  },
  {
    name: 'McSpicy Deluxe Chicken Burger Combo',
    type: 'Combo Meal',
    description: 'McSpicy Deluxe Chicken Burger + Fries (M) + Drink of your choice.',
    price: '₹370',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McSpicy Deluxe Chicken Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '950 Kcal',
      protein: '38g',
      fat: '48g',
      carbs: '105g',
      sugar: '27g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'McCheese Burger Chicken Combo',
    type: 'Combo Meal',
    description: 'McCheese Chicken Burger + Fries (M) + Beverage of your Choice in a reusable bottle.',
    price: '₹385',
    originalPrice: '₹503',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McCheese Chicken Burger', 'Fries', 'Beverage'],
    customisable: true,
    nutrients: {
      calories: '920 Kcal',
      protein: '35g',
      fat: '47g',
      carbs: '110g',
      sugar: '28g'
    },
    advantages: ['High in protein', 'Good source of calcium']
  },
  {
    name: 'McCheese Burger Veg Combo',
    type: 'Combo Meal',
    description: 'McCheese Veg Burger + Fries (M) + Beverage of your Choice in a reusable bottle.',
    price: '₹385',
    originalPrice: '₹484',
    vegNonVeg: 'Veg',
    ingredients: ['McCheese Veg Burger', 'Fries', 'Beverage'],
    customisable: true,
    nutrients: {
      calories: '850 Kcal',
      protein: '26g',
      fat: '42g',
      carbs: '100g',
      sugar: '25g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'Corn & Cheese Burger Combo',
    type: 'Combo Meal',
    description: 'Corn & Cheese Burger + Fries (M) + Coke. Customizable, delicious meal.',
    price: '₹299',
    originalPrice: '₹367',
    vegNonVeg: 'Veg',
    ingredients: ['Corn & Cheese Burger', 'Fries', 'Coke'],
    customisable: true,
    nutrients: {
      calories: '850 Kcal',
      protein: '24g',
      fat: '38g',
      carbs: '105g',
      sugar: '28g'
    },
    advantages: ['High in fiber', 'Good source of calcium']
  },
  {
    name: 'Grilled Cheese and Chicken Burger Combo',
    type: 'Combo Meal',
    description: 'Grilled Chicken & Cheese Burger + Fries (M) + Coke. Customizable, delicious meal.',
    price: '₹304',
    originalPrice: '₹355',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Grilled Cheese and Chicken Burger', 'Fries', 'Coke'],
    customisable: true,
    nutrients: {
      calories: '870 Kcal',
      protein: '36g',
      fat: '42g',
      carbs: '110g',
      sugar: '26g'
    },
    advantages: ['High in protein', 'Good source of calcium']
  },
  {
    name: 'McVeggie Burger Combo',
    type: 'Combo Meal',
    description: 'McVeggie + Fries (M) + Drink of your Choice in a reusable bottle.',
    price: '₹279',
    originalPrice: '₹379',
    vegNonVeg: 'Veg',
    ingredients: ['McVeggie Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '800 Kcal',
      protein: '24g',
      fat: '35g',
      carbs: '100g',
      sugar: '23g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'McChicken Burger Combo',
    type: 'Combo Meal',
    description: 'McChicken Burger + Fries (M) + Drink of your choice in a reusable bottle.',
    price: '₹305',
    originalPrice: '₹366',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McChicken Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '850 Kcal',
      protein: '34g',
      fat: '40g',
      carbs: '100g',
      sugar: '26g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Filet-O-Fish Burger Combo',
    type: 'Combo Meal',
    description: 'Filet-O-Fish Burger + Fries (M) + Drink of your choice.',
    price: '₹350',
    originalPrice: '₹407',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Filet-O-Fish Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '800 Kcal',
      protein: '30g',
      fat: '35g',
      carbs: '95g',
      sugar: '24g'
    },
    advantages: ['High in protein', 'Good source of omega-3']
  },
  {
    name: 'McSpicy Chicken Burger Combo',
    type: 'Combo Meal',
    description: 'McSpicy Chicken Burger + Fries (M) + Drink of your choice.',
    price: '₹351',
    originalPrice: '₹430',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McSpicy Chicken Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '870 Kcal',
      protein: '36g',
      fat: '42g',
      carbs: '100g',
      sugar: '26g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'McSpicy Premium Burger Chicken Combo',
    type: 'Combo Meal',
    description: 'McSpicy Premium Chicken Burger + Fries (M) + Drink of your choice.',
    price: '₹385',
    originalPrice: '₹482',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McSpicy Premium Chicken Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '950 Kcal',
      protein: '38g',
      fat: '48g',
      carbs: '105g',
      sugar: '27g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Veg Maharaja Mac Burger Combo',
    type: 'Combo Meal',
    description: 'Double decker Veg Maharaja Mac+ Fries (M) + Drink of your Choice.',
    price: '₹385',
    originalPrice: '₹442',
    vegNonVeg: 'Veg',
    ingredients: ['Veg Maharaja Mac', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '1000 Kcal',
      protein: '30g',
      fat: '45g',
      carbs: '120g',
      sugar: '30g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'Chicken Maharaja Mac Burger Combo',
    type: 'Combo Meal',
    description: 'Double decker Chicken Maharaja Mac + Fries (M) + Drink of your Choice.',
    price: '₹385',
    originalPrice: '₹480',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Chicken Maharaja Mac', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '1100 Kcal',
      protein: '40g',
      fat: '50g',
      carbs: '120g',
      sugar: '32g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Big Spicy Chicken Wrap Combo',
    type: 'Combo Meal',
    description: 'Big Spicy Chicken Wrap + Fries (M) + Drink of your choice.',
    price: '₹370',
    originalPrice: '₹461',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Big Spicy Chicken Wrap', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '950 Kcal',
      protein: '38g',
      fat: '45g',
      carbs: '110g',
      sugar: '28g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Masala McEgg Burger Combo',
    type: 'Combo Meal',
    description: 'Masala McEgg + Fries (M) + Drink of your Choice.',
    price: '₹225',
    originalPrice: '₹290',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Masala McEgg Burger', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '750 Kcal',
      protein: '28g',
      fat: '30g',
      carbs: '90g',
      sugar: '20g'
    },
    advantages: ['High in protein', 'Good source of vitamins']
  },
  {
    name: '9 Pc Chicken Nuggets Combo',
    type: 'Combo Meal',
    description: '9 Pc Chicken Nuggets + Fries (M) + Drink of your choice.',
    price: '₹387',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Chicken Nuggets', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '900 Kcal',
      protein: '35g',
      fat: '45g',
      carbs: '100g',
      sugar: '28g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'Chicken McNuggets 6 Pcs Combo',
    type: 'Combo Meal',
    description: 'Chicken McNuggets + Fries (M) + Drink of your choice.',
    price: '₹347',
    originalPrice: '₹383',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Chicken McNuggets', 'Fries', 'Drink'],
    customisable: true,
    nutrients: {
      calories: '850 Kcal',
      protein: '30g',
      fat: '40g',
      carbs: '95g',
      sugar: '25g'
    },
    advantages: ['High in protein', 'Good source of iron']
  },
  {
    name: 'McVeggie Burger Happy Meal',
    type: 'Combo Meal',
    description: 'McVeggie Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book.',
    price: '₹306',
    vegNonVeg: 'Veg',
    ingredients: ['McVeggie Burger', 'Sweet Corn', 'Fruit Beverage', 'Book'],
    customisable: true,
    nutrients: {
      calories: '700 Kcal',
      protein: '18g',
      fat: '30g',
      carbs: '85g',
      sugar: '20g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'McChicken Burger Happy Meal',
    type: 'Combo Meal',
    description: 'McChicken Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book.',
    price: '₹327',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McChicken Burger', 'Sweet Corn', 'Fruit Beverage', 'Book'],
    customisable: true,
    nutrients: {
      calories: '750 Kcal',
      protein: '25g',
      fat: '35g',
      carbs: '90g',
      sugar: '22g'
    },
    advantages: ['High in protein', 'Good source of vitamins']
  },
  {
    name: '4 Pc Chicken Nuggets Happy Meal',
    type: 'Combo Meal',
    description: '4 Pc Chicken Nuggets + Sweet Corn + B Natural Mixed Fruit Beverage + Book.',
    price: '₹268',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Chicken Nuggets', 'Sweet Corn', 'Fruit Beverage', 'Book'],
    customisable: true,
    nutrients: {
      calories: '650 Kcal',
      protein: '20g',
      fat: '30g',
      carbs: '75g',
      sugar: '18g'
    },
    advantages: ['High in protein', 'Good source of vitamins']
  },
  {
    name: 'McAloo Tikki Burger Happy Meal',
    type: 'Combo Meal',
    description: 'McAloo Tikki Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book.',
    price: '₹211',
    vegNonVeg: 'Veg',
    ingredients: ['McAloo Tikki Burger', 'Sweet Corn', 'Fruit Beverage', 'Book'],
    customisable: true,
    nutrients: {
      calories: '650 Kcal',
      protein: '18g',
      fat: '25g',
      carbs: '80g',
      sugar: '18g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'McEgg Burger Happy Meal',
    type: 'Combo Meal',
    description: 'McEgg Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book.',
    price: '₹237',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McEgg Burger', 'Sweet Corn', 'Fruit Beverage', 'Book'],
    customisable: true,
    nutrients: {
      calories: '700 Kcal',
      protein: '22g',
      fat: '28g',
      carbs: '80g',
      sugar: '20g'
    },
    advantages: ['High in protein', 'Good source of vitamins']
  },
  {
    name: '2 Pc Chicken Nuggets Happy Meal',
    type: 'Combo Meal',
    description: '2 Pc Chicken Nuggets + Sweet Corn + B Natural Mixed Fruit Beverage + Book.',
    price: '₹220',
    vegNonVeg: 'Non-Veg',
    ingredients: ['Chicken Nuggets', 'Sweet Corn', 'Fruit Beverage', 'Book'],
    customisable: true,
    nutrients: {
      calories: '600 Kcal',
      protein: '15g',
      fat: '25g',
      carbs: '70g',
      sugar: '18g'
    },
    advantages: ['High in protein', 'Good source of vitamins']
  },
  {
    name: 'Birthday Party Package - McVeggie',
    type: 'Combo Meal',
    description: '5 McVeggie Burger + 5 Sweet Corn + 5 B Natural Mixed Fruit Beverage + 5 Soft Serve (M) + Book.',
    price: '₹2,197',
    vegNonVeg: 'Veg',
    ingredients: ['McVeggie Burger', 'Sweet Corn', 'Fruit Beverage', 'Soft Serve', 'Book'],
    customisable: true,
    nutrients: {
      calories: '3500 Kcal',
      protein: '90g',
      fat: '150g',
      carbs: '425g',
      sugar: '100g'
    },
    advantages: ['High in fiber', 'Good source of vitamins']
  },
  {
    name: 'Birthday Party Package - McChicken',
    type: 'Combo Meal',
    description: '5 McChicken Burger + 5 Sweet Corn + 5 B Natural Mixed Fruit Beverage + 5 Soft Serve (M) + Book.',
    price: '₹2,197',
    vegNonVeg: 'Non-Veg',
    ingredients: ['McChicken Burger', 'Sweet Corn', 'Fruit Beverage', 'Soft Serve', 'Book'],
    customisable: true,
    nutrients: {
      calories: '3750 Kcal',
      protein: '125g',
      fat: '160g',
      carbs: '450g',
      sugar: '110g'
    },
    advantages: ['High in protein', 'Good source of vitamins']
  },
  {
    name: 'Jain Meal - McCheese Burger Veg Combo',
    type: 'Combo Meal',
    description: 'McCheese Burger Veg, Classic Corn, Cheese Dip, McFlurry Oreo (Small) with a beverage of your choice in a reusable bottle.',
    price: '₹417',
    vegNonVeg: 'Veg',
    ingredients: ['McCheese Burger Veg', 'Classic Corn', 'Cheese Dip', 'McFlurry Oreo', 'Beverage'],
    customisable: true,
    nutrients: {
      calories: '950 Kcal',
      protein: '28g',
      fat: '40g',
      carbs: '120g',
      sugar: '35g'
    },
    advantages: ['High in fiber', 'Good source of calcium']
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
            <p>Veg/Non-Veg: {selectedItem.vegNonVeg}</p>
            <p>Ingredients: {selectedItem.ingredients.join(', ')}</p>
            {selectedItem.customisable && <p>Customisable: Yes</p>}
            <p>Calories: {selectedItem.nutrients.calories}</p>
            <p>Protein: {selectedItem.nutrients.protein}</p>
            <p>Fat: {selectedItem.nutrients.fat}</p>
            <p>Carbs: {selectedItem.nutrients.carbs}</p>
          </div>
        ) : (
          <p>Click on an item to see its details</p>
        )}
      </div>
      <div className='sidebar'>
  <div className='category'>
    <h3>Combo Meals</h3>
    {items.filter(item => item.type === 'Combo Meal').map(item => (
      <div key={item.name} onClick={() => handleItemClick(item)}>
        {item.name}
      </div>
    ))}
  </div>
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
};

export default BurgerMenu;
