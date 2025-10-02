import React, { createContext, useContext, useState, useEffect } from 'react';
import { destinationsData } from '../data/destinationsData';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [destinations, setDestinations] = useState(destinationsData);
  const [filteredDestinations, setFilteredDestinations] = useState(destinationsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');
  const [selectedPopularity, setSelectedPopularity] = useState('All');

  useEffect(() => {
    let filtered = destinations;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.overview.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(dest => dest.category === selectedCategory);
    }

    // Apply region filter
    if (selectedRegion !== 'All') {
      filtered = filtered.filter(dest => dest.region === selectedRegion);
    }

    // Apply budget filter
    if (selectedBudget !== 'All') {
      filtered = filtered.filter(dest => dest.budget === selectedBudget);
    }

    // Apply popularity filter
    if (selectedPopularity !== 'All') {
      filtered = filtered.filter(dest => dest.popularity === selectedPopularity);
    }

    setFilteredDestinations(filtered);
  }, [destinations, searchQuery, selectedCategory, selectedRegion, selectedBudget, selectedPopularity]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedRegion('All');
    setSelectedBudget('All');
    setSelectedPopularity('All');
  };

  const value = {
    destinations,
    filteredDestinations,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedRegion,
    setSelectedRegion,
    selectedBudget,
    setSelectedBudget,
    selectedPopularity,
    setSelectedPopularity,
    resetFilters
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};