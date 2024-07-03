import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import './menu.css';
import VanillaTilt from 'vanilla-tilt';
import breakfast from './menu_images/breakfast.png';
import chicken from './menu_images/chicken_burger-removebg-preview.png';
import burger from './menu_images/burger.png';
import friesandsides from './menu_images/friesandsides-removebg-preview.png';
import sweets from './menu_images/sweets-removebg-preview.png';
import drinks from './menu_images/drinks.png';
import nuggets from './menu_images/nugglets-removebg-preview.png';
import happymeal from './menu_images/download-removebg-preview.png';
import mccafe from './menu_images/mccafe.png';
import dollarmenu from './menu_images/file.png';

const Example = () => {
  return (
    <div className="example-container">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="carousel-container">
        <motion.div style={{ x }} className="carousel">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(cardRef.current, {
      max: 20,
      speed: 300,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <div ref={cardRef} key={card.id} className="card" data-tilt data-tilt-glare>
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="card-background"
      ></div>
      <div className="card-content">
        <h2 className="card-title">{card.title}</h2>
        <p className="card-variety">{card.varietyOptions}</p>
        <p className="card-nutritional">{card.nutritionalOverview}</p>
        <button className='checkout'>Checkout Category</button>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: burger,
    title: "Burgers",
    varietyOptions: "Explore our delicious burger options, crafted for every taste.",
    nutritionalOverview: "Check the nutritional information and dietary options here.",
    id: 1,
  },
  {
    url: chicken,
    title: "Chicken & Fish",
    varietyOptions: "Try our crispy chicken sandwiches and Filet-O-Fish favorites.",
    nutritionalOverview: "Find the protein-packed nutritional details right here.",
    id: 2,
  },
  {
    url: breakfast,
    title: "Breakfast",
    varietyOptions: "Start your day with our breakfast sandwiches and platters.",
    nutritionalOverview: "Review hearty options and nutritional details for breakfast.",
    id: 3,
  },
  {
    url: friesandsides,
    title: "Fries & Sides",
    varietyOptions: "Enjoy our range of snacks and sides anytime of the day.",
    nutritionalOverview: "See the delicious sides and snack options' nutrition info.",
    id: 4,
  },
  {
    url: sweets,
    title: "Sweets and Treats",
    varietyOptions: "Satisfy your sweet tooth with our delightful dessert choices.",
    nutritionalOverview: "Check the nutritional info and indulge in sweet treats.",
    id: 5,
  },
  {
    url: drinks,
    title: "Beverages",
    varietyOptions: "Cool down or perk up with our refreshing beverage selection.",
    nutritionalOverview: "Discover refreshing options and nutritional beverage info.",
    id: 6,
  },
  {
    url: nuggets,
    title: "McNuggets",
    varietyOptions: "Enjoy our famous McNuggets, crispy outside, tender inside.",
    nutritionalOverview: "Review nutritional info and serving sizes for McNuggets.",
    id: 7,
  },
  {
    url: happymeal,
    title: "Happy Meal",
    varietyOptions: "Fun meals for kids with a toy in every box, just for them.",
    nutritionalOverview: "Explore balanced options and nutrition for Happy Meals.",
    id: 8,
  },
  {
    url: mccafe,
    title: "McCafe",
    varietyOptions: "Enjoy our McCafe beverages and pastries anytime you wish.",
    nutritionalOverview: "Discover nutritional details of McCafe offerings here.",
    id: 9,
  },
  {
    url: dollarmenu,
    title: "Dollar Menu",
    varietyOptions: "Affordable choices from our Dollar Menu, easy on the wallet.",
    nutritionalOverview: "Check nutritional information for our value menu items.",
    id: 10,
  },
];
