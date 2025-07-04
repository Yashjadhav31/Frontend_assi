'use client';
import { useCartStore } from '@/lib/abc';

export default function ProductModal({ product, onClose }: { product: any; onClose: () => void }) {
  const { addToCart } = useCartStore();



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded w-[90%] max-w-xl relative">
        <button className="absolute top-2 right-2" onClick={onClose}>✖</button>
        <img src={product.image} className="h-48 mx-auto" />
        <h2 className="text-xl font-bold mt-2">{product.title}</h2>
        <p className="text-sm">{product.description}</p>
        <p className="font-bold mt-2">${product.price}</p>
        <button
           onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 mt-3 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
