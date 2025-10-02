import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Building, Waves, Church, TreePine, Camera } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import { destinationsData } from '../data/destinationsData';

const Home = () => {
  const featuredDestinations = destinationsData.slice(0, 6);

  const categories = [
    { name: 'Nature', icon: TreePine, color: 'bg-green-500', description: 'Pristine landscapes & wildlife' },
    { name: 'Historical', icon: Building, color: 'bg-amber-500', description: 'Ancient monuments & heritage' },
    { name: 'Adventure', icon: Mountain, color: 'bg-red-500', description: 'Thrilling outdoor experiences' },
    { name: 'Spiritual', icon: Church, color: 'bg-purple-500', description: 'Sacred places & temples' },
    { name: 'Beaches', icon: Waves, color: 'bg-blue-500', description: 'Coastal paradise & islands' },
    { name: 'Hill Stations', icon: Mountain, color: 'bg-indigo-500', description: 'Cool mountain retreats' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover India
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              Beyond the Taj Mahal
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Explore the incredible diversity of India - from ancient temples to pristine beaches, 
              from snow-capped mountains to vibrant cultures. Find your next adventure in the land of endless wonders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/destinations"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-200"
              href='https://www.youtube.com/watch?v=rTDaZoDDW5g' target='_blank'>
                Watch Video
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover India's diverse attractions across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.name}
                  to={`/destinations?category=${category.name}`}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked destinations that showcase India's incredible diversity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-300">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">6</div>
              <div className="text-gray-300">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-300">Attractions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">29</div>
              <div className="text-gray-300">States Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;