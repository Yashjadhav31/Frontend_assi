'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/lib/api';
import { useFilterStore } from '@/lib/abc';

export default function CategoryFilter() {
  const { data: categories = [] } = useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
  const { category, setCategory } = useFilterStore();

  return (
     <select
      className="border px-4 py-2 rounded"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
     >
      <option value="">All Categories</option>
      {categories.map((cat: string) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}
