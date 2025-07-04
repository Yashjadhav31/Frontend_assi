'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from '@/lib/validation';
import { z } from 'zod';

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: z.infer<typeof productSchema>) => {
    console.log('Mock Product Submitted:', data);
    alert('Product submitted (mock only)');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 space-y-4">
      <input {...register('title')} placeholder="Title" className="w-full border p-2 rounded" />
      <p className="text-red-500 text-sm">{errors.title?.message}</p>

      <input {...register('price')} placeholder="Price" className="w-full border p-2 rounded" />
      <p className="text-red-500 text-sm">{errors.price?.message}</p>

      <input {...register('category')} placeholder="Category" className="w-full border p-2 rounded" />
      <p className="text-red-500 text-sm">{errors.category?.message}</p>

      <input {...register('image')} placeholder="Image URL" className="w-full border p-2 rounded" />
      <p className="text-red-500 text-sm">{errors.image?.message}</p>

      <textarea {...register('description')} placeholder="Description" className="w-full border p-2 rounded" />
      <p className="text-red-500 text-sm">{errors.description?.message}</p>

      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded w-full">
        Submit
      </button>
    </form>
  );
}
