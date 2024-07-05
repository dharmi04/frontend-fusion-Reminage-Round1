
import React from 'react';
import fries from '../assets/fries.jpg'
import burger from '../assets/burger.jpg'
import Mcflurry from '../assets/Mcflurry.jpg'
const CustomerEngagement = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-6xl  font-bold mb-6 text-red-600 text-center justify-center ">Customer Engagement</h2>
      
      {/* Polls and Quizzes */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Polls and Quizzes</h3>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-black bg-opacity-40 backdrop-blur-lg shadow-md text-white rounded-lg p-6 w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4">What is your favorite McDonald's menu item?</h4>
            <form className="space-y-4 text-white">
              <div>
                <input type="radio" id="big-mac" name="favorite-item" value="Big Mac" className="mr-2"/>
                <label htmlFor="big-mac" className="text-white">Big Mac</label>
              </div>
              <div>
                <input type="radio" id="fries" name="favorite-item" value="Fries" className="mr-2"/>
                <label htmlFor="fries" className="text-white">Fries</label>
              </div>
              <div>
                <input type="radio" id="mcflurry" name="favorite-item" value="McFlurry" className="mr-2"/>
                <label htmlFor="mcflurry" className="text-white">McFlurry</label>
              </div>
              <div>
                <input type="radio" id="nuggets" name="favorite-item" value="Nuggets" className="mr-2"/>
                <label htmlFor="nuggets" className="text-white">Chicken Nuggets</label>
              </div>
              <button type="submit" className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">Submit</button>
            </form>
          </div>
          
          <div className="bg-black bg-opacity-40 backdrop-blur-lg shadow-md text-white rounded-lg p-6 w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4">How often do you visit McDonald's?</h4>
            <form className="space-y-4 text-white">
              <div>
                <input type="radio" id="daily" name="visit-frequency" value="Daily" className="mr-2"/>
                <label htmlFor="daily" className="text-white">Daily</label>
              </div>
              <div>
                <input type="radio" id="weekly" name="visit-frequency" value="Weekly" className="mr-2"/>
                <label htmlFor="weekly" className="text-white">Weekly</label>
              </div>
              <div>
                <input type="radio" id="monthly" name="visit-frequency" value="Monthly" className="mr-2"/>
                <label htmlFor="monthly" className="text-white">Monthly</label>
              </div>
              <div>
                <input type="radio" id="rarely" name="visit-frequency" value="Rarely" className="mr-2"/>
                <label htmlFor="rarely" className="text-white">Rarely</label>
              </div>
              <button type="submit" className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">Submit</button>
            </form>
          </div>

          <div className="bg-black bg-opacity-40 backdrop-blur-lg shadow-md text-white rounded-lg p-6 w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4">Which new item would you like to see on the menu?</h4>
            <form className="space-y-4 text-white">
              <div>
                <input type="radio" id="vegan-burger" name="new-item" value="Vegan Burger" className="mr-2"/>
                <label htmlFor="vegan-burger" className="text-white">Vegan Burger</label>
              </div>
              <div>
                <input type="radio" id="spicy-fries" name="new-item" value="Spicy Fries" className="mr-2"/>
                <label htmlFor="spicy-fries" className="text-white">Spicy Fries</label>
              </div>
              <div>
                <input type="radio" id="fruit-smoothie" name="new-item" value="Fruit Smoothie" className="mr-2"/>
                <label htmlFor="fruit-smoothie" className="text-white">Fruit Smoothie</label>
              </div>
              <div>
                <input type="radio" id="chicken-wrap" name="new-item" value="Chicken Wrap" className="mr-2"/>
                <label htmlFor="chicken-wrap" className="text-white">Chicken Wrap</label>
              </div>
              <button type="submit" className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>
      </div>
      
      {/* User-generated Content */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">User-generated Content</h3>
        <div className="bg-black shadow-md text-white rounded-lg p-6">
          <p className="text-gray-300 mb-4">We love seeing your McDonald's moments! Share your experiences on social media with the hashtag <span className="font-bold text-yellow-500">#MyMcDonalds</span> for a chance to be featured on our website and social media channels.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
              <img src={burger} alt="User Content 1" className="rounded-lg mb-2"/>
              <p className="text-gray-300 text-2xl">Loved the new seasonal burger! #MyMcDonalds</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
              <img src={fries} alt="User Content 2" className="rounded-lg mb-2"/>
              <p className="text-gray-300 text-2xl">Enjoying my fries with friends. #MyMcDonalds</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
              <img src={Mcflurry} alt="User Content 3" className="rounded-lg mb-2"/>
              <p className="text-gray-300 text-2xl">McFlurry on a sunny day! #MyMcDonalds</p>
            </div>
            {/* Add more user-generated content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerEngagement;
