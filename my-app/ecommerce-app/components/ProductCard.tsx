'use client';
import { useState } from 'react';
import ProductModal from './ProductModal';

export default function ProductCard({ product }: { product: any }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="border p-4 rounded shadow cursor-pointer" onClick={() => setOpen(true)}>
        <img src={product.image} alt={product.title} className="h-40 mx-auto" />
        <h3 className="mt-2 font-bold">{product.title}</h3>
        <p className="text-sm">${product.price}</p>
      </div>
      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </>
  );
}
