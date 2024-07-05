import React from 'react';
import '../App.css';

const ItemList = ({ items, lastItemRef }) => {
  if (items.length === 0) {
    return <div className="message">No products found...</div>;
  }

  return (
    <div className="item-list">
      {items.map((item, index) => {
        if (items.length === index + 1) {
          return (
            <div key={item.id} className="card" ref={lastItemRef}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <div className="bottom-info">
                <p className="rating">Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
                <p className="price">${item.price}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <div className="bottom-info">
                <p className="rating">Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
                <p className="price">${item.price}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ItemList;
