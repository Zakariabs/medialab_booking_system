"use client";
import React from "react";

import { Card } from "@/components/ui/card";

import UseProducts from "../../api/UseProducts";
import { Button } from "@/components/ui/button";
import Link from "next/link";





export default function Page() {
  const products = UseProducts();

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 mt-28">
      {products &&
        products.products.map((product) => (
          <div key={product.id}>
            <Card className="max-w-sm rounded-lg border-2 border-cyan-500 p-4">
              <img
                alt="Handycam CX405 camcorder"
                className="mx-auto"
                height="150"
                src={product.images[0]}
                style={{
                  aspectRatio: "200/150",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="mt-4 text-center">
                <p className="font-bold">{product.title} -</p>
                <p className="text-sm">{product.description}</p>
                <Link href={`/product/${product.id}`}>
                  <Button className="mt-2" variant="destructive" style={{ background: "cyan" }}>
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
