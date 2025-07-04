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


type CartItem = {
  product: any; // Replace 'any' with proper Product type if needed
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (product: any) => void;
  increaseQty: (productId: number) => void;
  decreaseQty: (productId: number) => void;
  getTotal: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.product.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { product, quantity: 1 }],
        };
      }
    }),
  increaseQty: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQty: (productId) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
  getTotal: () => {
    return get().cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  },
  
}));
