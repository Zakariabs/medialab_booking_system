import { createClient } from '@/utils/supabase/server';
import { Product } from '@/types/Product';
import React from 'react';
import ReserveButton from '@/components/ReserveButton'; // Ensure this path is correct
import Image from 'next/image';
import productImage from '@/assets/default.webp';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function Page({ params }: { params: { id: string } }) {
  if (!params || !params.id) {
    return <div className="text-red-500">Product ID is not provided</div>;
  }

  const supabase = createClient();
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single();
  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (!product) {
    return <div className="text-red-500">Product not found</div>;
  }

  return (
      <div className="bg-[cyan] flex flex-col justify-center items-center  w-[300px] h-[800px] ">
        <div className="flex flex-col justify-center gap-2">
        <div className="bg-white rounded-3xl p-10 border-2 border-aqua-400">
          <Image
            alt={product.name}
            className="object-cover"
            height={150}
            src={productImage} // Use the product ID to construct the image path
            width={400}
          />
        </div>
        <h1 className="font-bold text-3xl ml-4">{product.name}</h1>
        <p className="ml-4">{product.description}</p>
        <p className="ml-4">Category ID: {product.category_id}</p>
        <p className="ml-4">{product.stock} units</p>
        <p className="ml-4">Available: {product.is_available ? 'Yes' : 'No'}</p>
      </div>

        <ReserveButton />
        <Link href="http://localhost:3000/protected">
          <Button>Go back to Home</Button>
          </Link>
    </div>
  );
}
