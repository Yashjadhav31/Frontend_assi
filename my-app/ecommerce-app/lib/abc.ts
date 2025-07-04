import { create } from 'zustand';

type FilterState = {
  search: string;
  category: string;
  setSearch: (val: string) => void;
  setCategory: (val: string) => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  search: '',
  category: '',
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
}));


type CartState = {
  cart: number[];
  addToCart: (id: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (id) =>
    set((state) => ({
      cart: state.cart.includes(id) ? state.cart : [...state.cart, id],
    })),
}));
