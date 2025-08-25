import React, { createContext, useContext, useEffect, useState } from 'react';
import { addDoc, collection, db, deleteDoc, doc, onSnapshot, query, updateDoc } from '../firebase/firebase';

type GroceryItem = {
  id: string;
  name: string;
  purchased: boolean;
};

type ShoppingListContextType = {
  list: GroceryItem[];
  addItem: (name: string) => void;
  removeItem: (id: string) => void;
  togglePurchased: (id: string) => void;
};

const ShoppingListContext = createContext<ShoppingListContextType | null>(null);

export const ShoppingListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [list, setList] = useState<GroceryItem[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'groceryItems'));
    const unsubscribe = onSnapshot(q, snapshot => {
      const items: GroceryItem[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as GroceryItem[];
      setList(items);
    });
    return () => unsubscribe();
  }, []);

  const addItem = async (name: string) => {
    try {
      await addDoc(collection(db, 'groceryItems'), { name, purchased: false });
    } catch (e) {
      console.error(e);
    }
  };

  const removeItem = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'groceryItems', id));
    } catch (e) {
      console.error(e);
    }
  };

  const togglePurchased = async (id: string) => {
    try {
      const item = list.find(i => i.id === id);
      if (!item) return;
      await updateDoc(doc(db, 'groceryItems', id), { purchased: !item.purchased });
    } catch (e) {
      console.error(e);
    }
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

// import React, { createContext, useContext, useState } from 'react';

// type GroceryItem = {
//   id: string;
//   name: string;
//   purchased: boolean;
// };

// type ShoppingListContextType = {
//   list: GroceryItem[];
//   addItem: (item: GroceryItem) => void;
//   removeItem: (id: string) => void;
//   togglePurchased: (id: string) => void;
// };

// const ShoppingListContext = createContext<ShoppingListContextType | null>(null);

// export const ShoppingListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [list, setList] = useState<GroceryItem[]>([]);

//   const addItem = (item: GroceryItem) => {
//     setList(prev => [...prev, item]);
//   };

//   const removeItem = (id: string) => {
//     setList(prev => prev.filter(i => i.id !== id));
//   };

//   const togglePurchased = (id: string) => {
//     setList(prev =>
//       prev.map(i => (i.id === id ? { ...i, purchased: !i.purchased } : i))
//     );
//   };

//   return (
//     <ShoppingListContext.Provider value={{ list, addItem, removeItem, togglePurchased }}>
//       {children}
//     </ShoppingListContext.Provider>
//   );
// };

// export const useShoppingList = () => {
//   const ctx = useContext(ShoppingListContext);
//   if (!ctx) throw new Error('useShoppingList must be used inside ShoppingListProvider');
//   return ctx;
// };
