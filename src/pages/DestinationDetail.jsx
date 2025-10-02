import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MapPin, Calendar, IndianRupee, Star, Clock, Camera } from 'lucide-react';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import { destinationsData } from '../data/destinationsData';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinationsData.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPopularityColor(destination.popularity)}`}>
                {destination.popularity} Popularity
              </span>
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {destination.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              {destination.name}
            </h1>
            <div className="flex items-center text-white text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{destination.state}, {destination.region} India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {destination.overview}
              </p>
            </div>

            {/* Top Attractions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Attractions</h2>
              <div className="space-y-4">
                {destination.attractions.map((attraction, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-700">
                      {attraction.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Festivals & Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Local Festivals & Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.festivals.map((festival, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-1">{festival}</h3>
                    <p className="text-sm text-orange-700">Cultural celebration</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Camera className="h-6 w-6 mr-2 text-orange-500" />
                Photo Gallery
              </h2>
              <Gallery images={destination.images} destinationName={destination.name} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Best Time</span>
                  </div>
                  <span className="font-medium text-gray-900">{destination.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <IndianRupee className="h-5 w-5 mr-2" />
                    <span>Budget</span>
                  </div>
                  <span className="font-medium text-gray-900">{getBudgetIcon(destination.budget)} {destination.budget}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Popularity</span>
                  </div>
                  <span className="font-medium text-gray-900">{destination.popularity}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Region</span>
                  </div>
                  <span className="font-medium text-gray-900">{destination.region} India</span>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <Map location={destination.location} destinationName={destination.name} />

            {/* Call to Action */}
            <div className="bg-orange-500 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Plan Your Visit</h3>
              <p className="mb-4 opacity-90">
                Ready to explore {destination.name}? Get travel tips and booking information.
              </p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Travel Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;