import { createClient } from '@/utils/supabase/server';
import { Product } from '@/types/Product';

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Category ID: {product.category_id}</p>
      <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
      <p>Available: {product.is_available ? 'Yes' : 'No'}</p>
    </div>
  );
}
