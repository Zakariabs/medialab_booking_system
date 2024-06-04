// api/UseProducts.ts
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Product } from '../../types/Product';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let { data, error } = await supabase
          .from<Product>('products')
          .select('*');

        if (error) {
          throw error;
        }

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
