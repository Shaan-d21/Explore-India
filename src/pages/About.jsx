import React from 'react';
import { Heart, Globe, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We are passionate travelers who believe in discovering the hidden gems of incredible India.'
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'Our team consists of local experts who know the best spots, from popular attractions to hidden treasures.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We build a community of travelers who share experiences and help each other discover amazing places.'
    },
    {
      icon: Award,
      title: 'Curated Content',
      description: 'Every destination is carefully researched and curated to provide you with authentic travel experiences.'
    }
  ];

  const team = [
    {
      name: 'Arjun Sharma',
      role: 'Founder & Travel Expert',
      bio: 'Travel enthusiast with 15+ years exploring India',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Priya Patel',
      role: 'Content Curator',
      bio: 'Cultural historian and storyteller',
      image: 'https://images.pexels.com/photos/20454417/pexels-photo-20454417.jpeg'
    },
    {
      name: 'Raj Kumar',
      role: 'Adventure Guide',
      bio: 'Mountain climber and outdoor adventure specialist',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Explore India
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Dedicated to showcasing the incredible diversity and beauty of India, 
            from world-famous landmarks to hidden gems waiting to be discovered.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              India is a land of extraordinary diversity - from the snow-capped peaks of the Himalayas 
              to the pristine beaches of the South, from ancient temples that echo with centuries of 
              devotion to bustling modern cities that never sleep. Our mission is to help travelers 
              discover not just the iconic destinations like the Taj Mahal, but also the hidden treasures 
              that make India truly incredible.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that every corner of India has a story to tell, a culture to experience, 
              and memories to create. Through carefully curated content, local insights, and authentic 
              experiences, we aim to be your trusted companion in exploring the real India.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just a travel platform - we're your gateway to authentic Indian experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate travelers and local experts dedicated to sharing India's wonders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Authenticity
              </h3>
              <p className="text-gray-700">
                We showcase the real India - its genuine culture, traditions, and experiences 
                that make each destination unique and memorable.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We promote responsible tourism that respects local communities, cultures, 
                and environments for future generations to enjoy.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Accessibility
              </h3>
              <p className="text-gray-700">
                Travel should be for everyone. We provide comprehensive information to help 
                travelers of all backgrounds and budgets explore India.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-700">
                We believe in building connections between travelers and local communities, 
                fostering mutual understanding and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered incredible India with our help. 
            Your next adventure awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/destinations"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Destinations
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;