// eslint-disable-next-line no-unused-vars
import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className='container'>
      <div className='news'>
        <div className='flip-container '>
          <div className='flip-card'>
            <div className='div1 flip-card-front '>
              McDonald’s to hire 5,000 people, double stores in North, East India
            </div>
            <div className='flip-card-back bg-slate-400'>
              McDonald's is set to hire 5,000 new employees as part of its ambitious expansion plan to double the number of stores in North and East India. This move aims to strengthen the company's presence in these regions and cater to the growing demand for quick-service restaurants. The expansion will not only provide more employment opportunities but also contribute to the local economy. By opening more outlets, McDonald's intends to make its delicious and affordable food more accessible to a larger audience, ensuring a stronger foothold in the competitive fast-food market.
            </div>
          </div>
        </div>
        <div className='div2'>
          <div className='flip-container'>
            <div className='flip-card'>
              <div className='div2-1 flip-card-front'>
                Kartik Aaryan becomes the face of McDonald’s India
              </div>
              <div className='flip-card-back bg-yellow-500'>
                Popular actor Kartik Aaryan will represent McDonald's in its latest advertising campaigns, bringing a fresh and vibrant face to the brand.
              </div>
            </div>
          </div>
          <div className='flip-container'>
            <div className='flip-card'>
              <div className='div2-2 flip-card-front'>
                McDonald’s India – North & East strikes a chord with its new campaign “We Get It”
              </div>
              <div className='flip-card-back bg-gray-500'>
                The new campaign “We Get It” focuses on understanding and catering to the local tastes and preferences of the Indian market.
              </div>
            </div>
          </div>
        </div>
        <div className='div3'>
          <div className='flip-container'>
            <div className='flip-card'>
              <div className='div3-1 flip-card-front'>
                McDonald’s India North and East to set up global music platform
              </div>
              <div className='flip-card-back bg-red-600'>
                McDonald's is set to launch a global music platform aimed at supporting and promoting talents. 
              </div>
            </div>
          </div>
          <div className='flip-container'>
            <div className='flip-card'>
              <div className='div3-2 flip-card-front'>
                McDonald’s eyes 5-fold rise in no. of city outlets
              </div>
              <div className='flip-card-back bg-orange-400'>
                With a massive expansion plan, McDonald's aims to increase the number of its city outlets.
              </div>
            </div>
          </div>
          <div className='flip-container'>
            <div className='flip-card'>
              <div className='div3-3 flip-card-front'>
                McDonald’s India Adds This Classic Appetiser To Its Menu
              </div>
              <div className='flip-card-back bg-yellow-400'>
                McDonald's India introduces a beloved classic appetiser to its menu, bringing a taste of nostalgia to its customers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
