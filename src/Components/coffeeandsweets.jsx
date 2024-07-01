import React, { useState } from 'react';
import './coffeeandsweets.css';

// Importing menuItems from provided data
const items= [
    {
      category: 'McCafé® Coffees',
      items: [
        {
          name: 'Caramel Macchiato',
          description: 'Espresso with vanilla-flavored syrup and steamed milk, topped with caramel drizzle.',
          price: 4.99,
          details: 'Indulge in the rich flavors of espresso combined with vanilla syrup, steamed milk, and a decadent caramel drizzle on top.',
          ingredients: ['Espresso', 'Vanilla-flavored syrup', 'Steamed milk', 'Caramel drizzle']
        },
        {
          name: 'Cappuccino',
          description: 'Espresso with a layer of velvety milk foam.',
          price: 3.99,
          details: 'Enjoy a classic cappuccino, crafted with a perfect balance of espresso and frothy milk foam.',
          ingredients: ['Espresso', 'Milk foam']
        },
        {
          name: 'Caramel Cappuccino',
          description: 'Cappuccino with caramel flavor syrup.',
          price: 4.49,
          details: 'A delightful twist on the traditional cappuccino, infused with sweet caramel flavor syrup.',
          ingredients: ['Espresso', 'Caramel flavor syrup', 'Milk foam']
        },
        {
          name: 'French Vanilla Cappuccino',
          description: 'Cappuccino with French vanilla flavor syrup.',
          price: 4.49,
          details: 'Experience the smooth taste of French vanilla combined with espresso and velvety milk foam.',
          ingredients: ['Espresso', 'French vanilla flavor syrup', 'Milk foam']
        },
        {
          name: 'Mocha Latte',
          description: 'Espresso with steamed milk, chocolate syrup, and topped with whipped cream.',
          price: 4.79,
          details: 'Treat yourself to a creamy mocha latte, featuring espresso, steamed milk, chocolate syrup, and a generous dollop of whipped cream.',
          ingredients: ['Espresso', 'Steamed milk', 'Chocolate syrup', 'Whipped cream']
        },
        {
          name: 'Americano',
          description: 'Espresso shots topped with hot water for a rich, robust flavor.',
          price: 3.49,
          details: 'Savor the bold flavor of espresso combined with hot water, perfect for those who prefer their coffee strong and full-bodied.',
          ingredients: ['Espresso', 'Hot water']
        },
        {
          name: 'Premium Roast Coffee',
          description: 'Freshly brewed coffee.',
          price: 2.99,
          details: 'Enjoy our freshly brewed coffee, made from premium coffee beans for a smooth and satisfying taste.',
          ingredients: ['Freshly brewed coffee']
        },
        {
          name: 'Iced Caramel Macchiato',
          description: 'Espresso with vanilla-flavored syrup, milk, and ice, topped with caramel drizzle.',
          price: 4.99,
          details: 'Cool down with an iced caramel macchiato, featuring espresso, vanilla syrup, milk, ice, and a drizzle of caramel on top.',
          ingredients: ['Espresso', 'Vanilla-flavored syrup', 'Milk', 'Ice', 'Caramel drizzle']
        },
        {
          name: 'Iced Mocha',
          description: 'Espresso with milk, chocolate syrup, and ice, topped with whipped cream.',
          price: 4.79,
          details: 'Refresh yourself with an iced mocha, blending espresso, milk, chocolate syrup, ice, and whipped cream for a delightful treat.',
          ingredients: ['Espresso', 'Milk', 'Chocolate syrup', 'Ice', 'Whipped cream']
        },
        {
          name: 'Iced Coffee',
          description: 'Chilled coffee over ice.',
          price: 3.49,
          details: 'Enjoy the crisp taste of chilled coffee over ice, perfect for a refreshing break on a warm day.',
          ingredients: ['Chilled coffee', 'Ice']
        },
        {
          name: 'Iced Caramel Coffee',
          description: 'Chilled coffee with caramel flavor syrup over ice.',
          price: 3.99,
          details: 'Cool off with iced caramel coffee, combining chilled coffee with sweet caramel flavor syrup served over ice.',
          ingredients: ['Chilled coffee', 'Caramel flavor syrup', 'Ice']
        },
        {
          name: 'Iced French Vanilla Coffee',
          description: 'Chilled coffee with French vanilla flavor syrup over ice.',
          price: 3.99,
          details: 'Delight in the smooth taste of iced French vanilla coffee, featuring chilled coffee infused with French vanilla flavor syrup over ice.',
          ingredients: ['Chilled coffee', 'French vanilla flavor syrup', 'Ice']
        },
        {
          name: 'McCafé® Latte',
          description: 'Espresso with steamed milk.',
          price: 3.99,
          details: 'Experience the creamy texture of our McCafé® latte, blending espresso with steamed milk for a satisfying coffee drink.',
          ingredients: ['Espresso', 'Steamed milk']
        },
        {
          name: 'Iced Latte',
          description: 'Espresso with milk over ice.',
          price: 4.49,
          details: 'Cool down with an iced latte, combining espresso with milk served over ice for a refreshing beverage.',
          ingredients: ['Espresso', 'Milk', 'Ice']
        },
        {
          name: 'Caramel Latte',
          description: 'Espresso with steamed milk and caramel flavor syrup.',
          price: 4.49,
          details: 'Indulge in a caramel latte, featuring espresso, steamed milk, and a touch of caramel flavor syrup for a sweet and creamy coffee experience.',
          ingredients: ['Espresso', 'Steamed milk', 'Caramel flavor syrup']
        },
        {
          name: 'Iced Caramel Latte',
          description: 'Espresso with milk and caramel flavor syrup over ice.',
          price: 4.99,
          details: 'Enjoy the refreshing taste of iced caramel latte, combining espresso, milk, and caramel flavor syrup served over ice.',
          ingredients: ['Espresso', 'Milk', 'Caramel flavor syrup', 'Ice']
        },
        {
          name: 'French Vanilla Latte',
          description: 'Espresso with steamed milk and French vanilla flavor syrup.',
          price: 4.49,
          details: 'Savor the rich flavor of French vanilla latte, crafted with espresso, steamed milk, and French vanilla flavor syrup.',
          ingredients: ['Espresso', 'Steamed milk', 'French vanilla flavor syrup']
        },
        {
          name: 'Iced French Vanilla Latte',
          description: 'Espresso with milk and French vanilla flavor syrup over ice.',
          price: 4.99,
          details: 'Cool off with iced French vanilla latte, blending espresso, milk, and French vanilla flavor syrup served over ice.',
          ingredients: ['Espresso', 'Milk', 'French vanilla flavor syrup', 'Ice']
        },
        {
          name: 'Caramel Frappé',
          description: 'Blended ice, milk, and caramel flavor syrup, topped with whipped cream and caramel drizzle.',
          price: 5.49,
          details: 'Treat yourself to a caramel frappé, blending ice, milk, and caramel flavor syrup, topped with whipped cream and caramel drizzle.',
          ingredients: ['Ice', 'Milk', 'Caramel flavor syrup', 'Whipped cream', 'Caramel drizzle']
        },
        {
          name: 'Mocha Frappé',
          description: 'Blended ice, milk, and chocolate syrup, topped with whipped cream.',
          price: 5.49,
          details: 'Indulge in a mocha frappé, blending ice, milk, and chocolate syrup, topped with a swirl of whipped cream for a delightful treat.',
          ingredients: ['Ice', 'Milk', 'Chocolate syrup', 'Whipped cream']
        }
      ]
    },
    {
      category: 'Sweets & Treats',
      items: [
        {
          name: 'McFlurry® with OREO® Cookies',
          description: 'Vanilla soft serve with OREO® cookie pieces blended in.',
          price: 3.99,
          details: 'Enjoy creamy vanilla soft serve blended with OREO® cookie pieces, creating a delightful McFlurry® treat.',
          ingredients: ['Vanilla soft serve', 'OREO® cookie pieces']
        },
        {
          name: 'McFlurry® with M&M\'S® Candies',
          description: 'Vanilla soft serve with M&M\'S® candies blended in.',
          price: 3.99,
          details: 'Savor vanilla soft serve mixed with colorful M&M\'S® candies, offering a flavorful McFlurry® dessert experience.',
          ingredients: ['Vanilla soft serve', 'M&M\'S® candies']
        },
        {
          name: 'Vanilla Cone',
          description: 'Creamy vanilla soft serve in a crispy cone.',
          price: 1.49,
          details: 'Enjoy our classic vanilla soft serve in a crispy cone, offering a simple and satisfying ice cream treat.',
          ingredients: ['Vanilla soft serve', 'Crispy cone']
        },
        {
          name: 'Chocolate Shake',
          description: 'Creamy chocolate shake made with our vanilla soft serve.',
          price: 3.49,
          details: 'Treat yourself to a creamy chocolate shake, blended with our signature vanilla soft serve for a rich and indulgent dessert.',
          ingredients: ['Vanilla soft serve', 'Chocolate syrup', 'Milk', 'Whipped cream']
        },
        {
          name: 'Vanilla Shake',
          description: 'Classic vanilla shake made with our vanilla soft serve.',
          price: 3.49,
          details: 'Indulge in the timeless flavor of our vanilla shake, crafted with our smooth vanilla soft serve for a deliciously sweet treat.',
          ingredients: ['Vanilla soft serve', 'Milk', 'Whipped cream']
        },
        {
          name: 'Strawberry Shake',
          description: 'Refreshing strawberry shake made with our vanilla soft serve.',
          price: 3.49,
          details: 'Enjoy the fruity taste of our strawberry shake, blending our vanilla soft serve with a burst of strawberry flavor for a delightful treat.',
          ingredients: ['Vanilla soft serve', 'Strawberry syrup', 'Milk', 'Whipped cream']
        },
        {
          name: 'Hot Fudge Sundae',
          description: 'Creamy vanilla soft serve topped with hot fudge sauce and whipped cream.',
          price: 2.99,
          details: 'Delight in our hot fudge sundae, featuring creamy vanilla soft serve drizzled with rich hot fudge sauce and topped with whipped cream.',
          ingredients: ['Vanilla soft serve', 'Hot fudge sauce', 'Whipped cream']
        },
        {
          name: 'Hot Caramel Sundae',
          description: 'Creamy vanilla soft serve topped with warm caramel sauce and whipped cream.',
          price: 2.99,
          details: 'Savor our hot caramel sundae, featuring creamy vanilla soft serve smothered in warm caramel sauce and finished with a dollop of whipped cream.',
          ingredients: ['Vanilla soft serve', 'Warm caramel sauce', 'Whipped cream']
        },
        {
          name: 'Baked Apple Pie',
          description: 'Warm pie filled with sliced apples in a flaky crust, served hot.',
          price: 1.89,
          details: 'Indulge in our baked apple pie, filled with tender sliced apples in a flaky crust, served piping hot for a comforting dessert.',
          ingredients: ['Sliced apples', 'Flaky crust']
        },
        {
          name: 'Chocolate Chip Cookie',
          description: 'Soft and chewy cookie loaded with delicious chocolate chips.',
          price: 0.99,
          details: 'Enjoy our chocolate chip cookie, baked to perfection with a soft and chewy texture, and loaded with delicious chocolate chips.',
          ingredients: ['Chocolate chips', 'Butter', 'Sugar', 'Flour', 'Egg', 'Vanilla extract', 'Baking soda']
        }
      ]
    }
  ];

  const thingsToPrint = [
    'Caramel Macchiato',
    'Cappuccino',
    'McFlurry® with OREO® Cookies',
    'Vanilla Cone',
    'Chocolate Shake',
    'Strawberry Shake'
  ];
  
  const CoffeeAndSweetsMenu = () => {
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
              <p>{selectedItem.description}</p>
              <p>Price: ${selectedItem.price}</p>
              <p>Details: {selectedItem.details}</p>
              <p>Ingredients: {selectedItem.ingredients.join(', ')}</p>
            </div>
          ) : (
            <p>Click on an item to see its details</p>
          )}
        </div>
        <div className='sidebar'>
          {items.map(category => (
            <div key={category.category}>
              <h3>{category.category}</h3>
              {category.items.map(item => (
                <div key={item.name} onClick={() => handleItemClick(item)}>
                  {item.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CoffeeAndSweetsMenu;
