import * as React from 'react';

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart?: () => void;
  closeCart?: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getTotalItems: () => number;
  cartQuantity?: number;
  cartItems: CartItem[];
};

const shoppingCardContext = React.createContext<ShoppingCartContext>(null);

export function useShoppingCardContext() {
  return React.useContext(shoppingCardContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const getItemQuantity = (id: number) => {
    return cartItems.find((e: CartItem) => e.id == id)?.quantity || 0;
  };

  const getTotalItems = (): number => {
    return cartItems.length;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <shoppingCardContext.Provider
      value={{
        getItemQuantity,
        getTotalItems,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
      }}
    >
      {children}
    </shoppingCardContext.Provider>
  );
}
