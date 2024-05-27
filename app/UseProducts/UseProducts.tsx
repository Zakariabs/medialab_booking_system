"use client"
import React, { useEffect, useState } from 'react'
import { ProductData } from '../types/Product';

export default function UseProducts(): ProductData | null {
    const [products, setProducts] = useState<ProductData | null>(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data: ProductData = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts();

    }, []);

    return products;
}