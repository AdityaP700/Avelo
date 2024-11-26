import React from 'react';
import { Star } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Emma K.",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      rating: 5,
      review: "Obsessed with my new fits! 😍 The sustainable packaging was such a vibe, and the quality is literally unmatched! #AveloForever",
      date: "2 days ago"
    },
    {
      name: "Alex J.",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      rating: 5,
      review: "Finally found a brand that gets me! The inclusive sizing is everything, and I feel so confident in these pieces! ✨",
      date: "1 week ago"
    },
    {
      name: "Mia L.",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      rating: 5,
      review: "No cap, best fashion decision ever! 💯 Love how they care about sustainability and still keep it high-key stylish!",
      date: "2 weeks ago"
    },
    {
      name: "Jordan T.",
      location: "Melbourne, AUS",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      rating: 5,
      review: "The authenticity of this brand is unreal! 🔥 Love supporting a company that actually walks the talk on sustainability.",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">The Avelo Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of fashion-forward individuals who are redefining style with purpose. 
            Here's what our community has to say! 💫
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-2">{review.review}</p>
              
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
