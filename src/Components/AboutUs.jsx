import React from 'react'
import image from '../assets/burger.png'

const AboutUs = () => {
  return (
    <section className="bg-black md:py-12 py-4">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center text-footer mb-8">About Us</h2> */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={image} alt="McDonald's" className="w-auto h-[70vh] rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12 text-white">
            <p className="text-7xl font-poppins font-semibold mb-4">
              The best deals only on our app 
            </p>
            <p className="text-lg mb-4">
              Users on our McDonalds app save an average of 23% per order. Start lovin' it again with free frieson any $1 purchase
            </p>
            <div className="flex space-x-4 mt-8">
      <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
        Get the App
      </button>
      <button className="bg-black text-yellow-500 border-2 border-yellow-500 font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">
        Start Order
      </button>
    </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
