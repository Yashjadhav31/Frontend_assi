import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import AddProductForm from '@/components/AddProductForm';
import CartIcon from '@/components/CartIcon';
import CartDetails from '@/components/CartDetails'; // if you use cart details

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <CategoryFilter />
      </div>
      <ProductGrid />
      <CartDetails />
      <AddProductForm />
      <CartIcon />
    </main>
  );
}
