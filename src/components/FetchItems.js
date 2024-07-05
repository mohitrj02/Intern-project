import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './ItemList';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import '../App.css'; 

const FetchItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriterion, setSortCriterion] = useState('title');
  const [visibleItemsCount, setVisibleItemsCount] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortCriterion === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortCriterion === 'price') {
      return a.price - b.price;
    } else if (sortCriterion === 'reviews') {
      return b.rating.rate - a.rating.rate;
    } else {
      return 0;
    }
  });

  const handleLoadMore = () => {
    setVisibleItemsCount(prevCount => prevCount + 9); 
  };

  const visibleItems = sortedItems.slice(0, visibleItemsCount);

  if (loading) {
    return <div className="message">Loading...</div>;
  }

  return (
    <div className="container">
      
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="sort-options">
        <SortOptions setSortCriterion={setSortCriterion} />
      </div>
      <ItemList items={visibleItems} />
      {visibleItemsCount < sortedItems.length && (
        <div className="load-more">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default FetchItems;
