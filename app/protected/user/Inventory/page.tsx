// app/notes/page.tsx
'use client';
import { supabase } from '@/lib/supabaseClient';
import { Product } from '@/types/Product';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import productImage from '../../../../assets/1.jpg';


export default function NotesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        setProducts(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 mt-28">
      {products.map((product) => (
        <div key={product.id}>
          <Card className="max-w-sm rounded-lg border-2 border-aqua-500 p-4">
            <div className="relative w-200 h-150">
              <Image
                alt={product.name}
                className="mx-auto"
                layout="fill"
                objectFit="cover"
                src={productImage} // Assuming images is an array
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-bold">{product.name}</p>
              <p className="text-sm">{product.description}</p>
              <p className="text-sm">{product.is_available}</p>
              <Link href={`Products/${product.id}`}>
                <Button className="mt-2 border bg-aqua" variant="destructive">
                  Select
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
