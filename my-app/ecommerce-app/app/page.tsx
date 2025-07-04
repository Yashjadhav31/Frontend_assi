import ProductGrid from '@/components/ProductGrid';
import AddProductForm from '@/components/AddProductForm';
import CartIcon from '@/components/CartIcon';
import CategoryFilter from '@/components/CategoryFilter';

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <CategoryFilter />
      </div>
      <ProductGrid />
      <AddProductForm />
      <CartIcon />
    </main>
  );
}
