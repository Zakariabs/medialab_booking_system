import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import ProductDetails from '../components/ProductDetails';

const ProductPage = ({ product }) => {
  return (
    <div className="p-4">
      <ProductDetails product={product} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await axios.get(`http://localhost:3000/api/products/${id}`);

  return {
    props: {
      product: response.data,
    },
  };
};

export default ProductPage;
