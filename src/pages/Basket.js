import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import { StoreContext } from '../context-and-reducer/StoreContext';

const Basket = () => {
  const { Products, total } = useContext(StoreContext);

  return (
    <div>
      <Navbar />
      <div>
        {Products && Products.length > 0 ? (
          <div>
            {Products.map((product, index) => (
              <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
                <p>{product.name}</p>
                <p>${product.price.toFixed(2)}</p>
              </div>
            ))}
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
        ) : (
          <p>Your basket is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Basket;
