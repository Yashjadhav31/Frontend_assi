'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api';
import { useFilterStore } from '@/lib/abc';
import ProductCard from './ProductCard';

export default function ProductGrid() {
 const { data: products = [] } = useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts,
});
  const { search, category } = useFilterStore();

  const filtered = products.filter((product: any) =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? product.category === category : true)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {filtered.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
