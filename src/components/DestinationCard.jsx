import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, IndianRupee, Star } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  const getBudgetIcon = (budget) => {
    switch (budget) {
      case 'Budget-friendly':
        return '₹';
      case 'Moderate':
        return '₹₹';
      case 'Expensive':
        return '₹₹₹';
      default:
        return '₹';
    }
  };

  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case 'High':
        return 'text-green-600 bg-green-100';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'Low':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPopularityColor(destination.popularity)}`}>
            {destination.popularity}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs font-medium">
            {destination.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
            {destination.name}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{destination.state}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.overview}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-xs">{destination.bestTime}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <IndianRupee className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">{getBudgetIcon(destination.budget)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {destination.festivals.slice(0, 2).map((festival, index) => (
              <span
                key={index}
                className="bg-orange-50 text-orange-700 px-2 py-1 rounded-full text-xs"
              >
                {festival}
              </span>
            ))}
          </div>
          <Link
            to={`/destination/${destination.id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;