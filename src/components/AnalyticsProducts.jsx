import React, { useEffect, useState } from 'react';

const AnalyticsProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/analytics');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product analytics:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Analytics</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}: {product.sales}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsProducts;