// types.ts
export interface Product {
    id: number;
    created_at: string;
    productCategory: string | null;
    productName: string;
    description: string | null;
    Stock: number;
    IsAvailable: boolean | null;
  }
  