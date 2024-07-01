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
              Back Content 1
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
                Back Content 2
              </div>
            </div>
          </div>
          <div className='flip-container'>
            <div className='flip-card'>
              <div className='div2-2 flip-card-front'>
              McDonald’s India – North & East strikes a chord with its new campaign “We Get It”
              </div>
              <div className='flip-card-back bg-gray-500'>
                Back Content 3
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
                Back Content 4
              </div>
            </div>
          </div>
          <div className='flip-container'>
            <div className='flip-card'>
              <div className='div3-2 flip-card-front'>
              McDonald’s eyes 5-fold rise in no. of city outlets
              </div>
              <div className='flip-card-back bg-orange-400'>
                Back Content 5
              </div>
            </div>
          </div>
          <div className='flip-container'>
            <div className='flip-card'>
              <div className='div3-3 flip-card-front'>
              McDonald’s India Adds This Classic Appetiser To Its Menu
              </div>
              <div className='flip-card-back bg-yellow-400' >
                Back Content 6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
