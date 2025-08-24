import React, { createContext, useContext, useState } from 'react';

type GroceryItem = {
  id: string;
  name: string;
  purchased: boolean;
};

type ShoppingListContextType = {
  list: GroceryItem[];
  addItem: (item: GroceryItem) => void;
  removeItem: (id: string) => void;
  togglePurchased: (id: string) => void;
};

const ShoppingListContext = createContext<ShoppingListContextType | null>(null);

export const ShoppingListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [list, setList] = useState<GroceryItem[]>([]);

  const addItem = (item: GroceryItem) => {
    setList(prev => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setList(prev => prev.filter(i => i.id !== id));
  };

  const togglePurchased = (id: string) => {
    setList(prev =>
      prev.map(i => (i.id === id ? { ...i, purchased: !i.purchased } : i))
    );
  };

  return (
    <ShoppingListContext.Provider value={{ list, addItem, removeItem, togglePurchased }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = () => {
  const ctx = useContext(ShoppingListContext);
  if (!ctx) throw new Error('useShoppingList must be used inside ShoppingListProvider');
  return ctx;
};
