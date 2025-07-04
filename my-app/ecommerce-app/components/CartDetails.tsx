'use client';
import { useCartStore } from '@/lib/abc';

export default function CartDetails() {
  const { cart, increaseQty, decreaseQty, getTotal } = useCartStore();

  if (cart.length === 0) {
    return <p className="text-center mt-4 text-gray-500">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-4">
      {cart.map(({ product, quantity }) => (
        <div key={product.id} className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.title} className="h-12 w-12 object-contain" />
            <div>
              <p className="font-semibold">{product.title}</p>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(product.id)}
              className="bg-gray-300 px-2 py-1 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => increaseQty(product.id)}
              className="bg-gray-300 px-2 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="text-right font-bold text-lg">
        Total: ${getTotal().toFixed(2)}
      </div>
    </div>
  );
}
