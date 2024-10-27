import React, { useState, useEffect } from 'react';
import Header from '../componemt/Heder';
import './ListOrder.css';

function ListOrder() {
  const [desserts, setDesserts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7222/api/Desserts');
        if (response.ok) {
          const data = await response.json();
          setDesserts(data);
          setLoading(false);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className='home-container-order'>
      <div className="list-container">
        <h2>List Order</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-container">
            {desserts.map((dessert, index) => (
              <div className="card" key={index}>
                <h3>{dessert.name}</h3>
                <p>Price: {dessert.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default ListOrder;
