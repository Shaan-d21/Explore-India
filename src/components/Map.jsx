import React from 'react';
import { MapPin } from 'lucide-react';

const Map = ({ location, destinationName }) => {
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin`;

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}&query_place_id=${destinationName}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-50 border-b">
        <h3 className="font-semibold text-lg text-gray-900 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-orange-500" />
          Location
        </h3>
      </div>
      <div className="relative">
        {/* Embedded Google Map */}
        <iframe
          src={googleMapsUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${destinationName} Location`}
        />
        
        {/* Overlay with coordinates */}
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-md">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Coordinates:</span> {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </p>
        </div>
        
        {/* Open in Google Maps Button */}
        <button
          onClick={openInGoogleMaps}
          className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-200 text-sm font-medium"
        >
          Open in Maps
        </button>
      </div>
    </div>
  );
};

export default Map;