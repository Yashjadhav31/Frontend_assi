'use client';
import { useCartStore } from '../lib/abc';

export default function CartIcon() {
  const { cart } = useCartStore();

  return (
    <div className="fixed bottom-5 right-5 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
      🛒 {cart.length}
    </div>
  );
}
