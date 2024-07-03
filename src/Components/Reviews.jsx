import React, { useState, useEffect } from 'react';


const reviews = [
  {
    id: 1,
    name: 'John Doe',
    location: 'New York, NY',
    rating: 5,
    title: 'Excellent Service',
    content: 'I recently visited McDonald s and had a fantastic experience. The staff was incredibly friendly and efficient, ensuring that my order was prepared quickly and accurately. The food was fresh, hot, and delicious. I especially enjoyed the new limited-time burger—they really know how to innovate their menu! The restaurant was clean and well-maintained, making it a pleasant place to dine. I will definitely be returning soon!',
  },
  {
    id: 2,
    name: 'Jane Roe',
    location: 'Los Angeles, CA',
    rating: 5,
    title: 'Highly Professional',
    content: 'McDonald s has always been a reliable go-to for a quick and satisfying meal. Their fries are consistently crispy and perfectly salted, and the Big Mac never disappoints. The service is usually quick, even during busy times. I appreciate their effort in offering healthier options like salads and fruit. The app is also a great addition, making it easy to order ahead and earn rewards. Overall, McDonald s continues to be a top choice for fast food.',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    location: 'Chicago, IL',
    rating: 4,
    title: 'Good Experience',
    content: 'Overall, a good experience. The waiting time was a bit long, but the quality of care made up for it. Dr. Smith is very knowledgeable.',
  },
  {
    id: 4,
    name: 'Lisa Brown',
    location: 'Houston, TX',
    rating: 5,
    title: 'Best Dental Clinic',
    content: 'My experience at McDonald s was a mixed bag. The food was good, as expected—my Quarter Pounder with Cheese was juicy and flavorful. However, the service was a bit slow, and my order was initially incorrect. The staff corrected it promptly, but it was still a bit frustrating. The dining area could have been cleaner, but it was a busy time, so I understand. Overall, it s a convenient option, but there is room for improvement.',
  },
  {
    id: 5,
    name: 'Mark Green',
    location: 'Phoenix, AZ',
    rating: 4,
    title: 'Great Care',
    content: 'McDonald s is a classic for a reason. The food is tasty, especially their breakfast menu. I love the Egg McMuffin and hash browns. That said, the quality can be inconsistent. Sometimes the fries are perfect, other times they re lukewarm. The service is generally good, but I ve had a few experiences with long wait times. The mobile app is great for deals and skipping the line. It is a solid choice for fast food, but do not expect perfection every time.',
  },
//   {
//     id: 6,
//     name: 'Anna Black',
//     location: 'Miami, FL',
//     rating: 5,
//     title: 'Fantastic Service',
//     content: 'Dr. Smith is the best dentist I have ever been to. The service was fantastic and the clinic was very clean.',
//   },
];

const Reviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleReviews(1);
      } else if (window.innerWidth < 1024) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + visibleReviews) % reviews.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - visibleReviews + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='p-8 ' id="reviews">
      <h1 className="text-center font-semibold text-3xl lg:text-5xl text-footer mb-10 mt-10">What do our customers say about us?</h1>
      <div className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-4 py-10">
            <button onClick={handlePrev} className="text-2xl text-white font-bold">&#8592;</button>
            <div className="flex space-x-4 overflow-hidden">
              {reviews.slice(startIndex, startIndex + visibleReviews).map((review) => (
                <div key={review.id} className="p-4 border rounded-lg shadow-md w-64 sm:w-80">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="text-xl font-bold">{review.name[0]}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{review.name}</div>
                      <div className="text-sm text-gray-200">{review.location}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {Array(review.rating).fill().map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.906c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.977-2.89a1 1 0 00-1.176 0l-3.977 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.084 10.1c-.783-.57-.381-1.81.588-1.81h4.906a1 1 0 00.95-.69L9.049 2.927z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    {/* <div className="mt-2 font-semibold text-white">{review.title}</div> */}
                    <div className="text-white">{review.content}</div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleNext} className="text-2xl text-white font-bold">&#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;