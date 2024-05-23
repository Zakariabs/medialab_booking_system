import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get('/api/inventory');
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Inventory</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2 border p-2">
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
