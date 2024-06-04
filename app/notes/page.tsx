// app/notes/page.tsx
'use client';
import { supabase } from '@/lib/supabaseClient';
import { Product } from '../types/Product';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

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
          <Card className="max-w-sm rounded-lg border-2 border-red-500 p-4">
            <img
              alt={product.name}
              className="mx-auto"
              height="150"
              src={product.images} // Assuming images is an array
              style={{
                aspectRatio: "200/150",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="mt-4 text-center">
              <p className="font-bold">{product.name}</p>
              <p className="text-sm">{product.description}</p>
              <p className="text-sm">{product.is_available}</p>
              <Link href={`/note/${product.id}`}>
                <Button className="mt-2" variant="destructive">
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
