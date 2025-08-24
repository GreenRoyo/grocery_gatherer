import { ImageSourcePropType } from 'react-native';

export type CategoryItem = {
  id: string;
  name: string;
  image?: ImageSourcePropType;
};

export type Category = {
  id: string;
  name: string;
  items: CategoryItem[];
};

export const CATEGORIES: Category[] = [
  {
    id: 'vegetables',
    name: 'Vegetables',
    items: []
  },
  {
    id: 'fruits',
    name: 'Fruits',
    items: [
      { id: 'fruits-f1', name: 'Blueberry', image: require('../assets/blueberry.jpg') },
      { id: 'fruits-f2', name: 'Raspberry', image: require('../assets/raspberry.jpg') },
      { id: 'fruits-f3', name: 'Avocado', image: require('../assets/avocado.jpg') },
      { id: 'fruits-f4', name: 'Tangerine' },
      { id: 'fruits-f5', name: 'Bananas' },
      { id: 'fruits-f6', name: 'Lychee' },
      { id: 'fruits-f7', name: 'Strawberry' },
      { id: 'fruits-f8', name: 'Grape' },
      { id: 'fruits-f9', name: 'Cherry Tomato' },
      { id: 'fruits-f10', name: 'Watermelon' },
      { id: 'fruits-f11', name: 'Guava' },
      { id: 'fruits-f12', name: 'Mangosteen' },
      { id: 'fruits-f13', name: 'Dragon Fruit' },
      { id: 'fruits-f14', name: 'Pineapple' }
    ]
  },
  {
    id: 'meat-seafood',
    name: 'Meat & Seafood',
    items: [
      { id: 'meat-m1', name: 'Beef' },
      { id: 'meat-m2', name: 'Chicken Thighs' },
      { id: 'meat-m3', name: 'Chicken Breast' },
      { id: 'meat-m4', name: 'Prawn' },
      { id: 'meat-m5', name: 'Salmon' },
      { id: 'meat-m6', name: 'Pork Ribs' },
      { id: 'meat-m7', name: 'Pork Belly' }
    ]
  },
  {
    id: 'dairy-eggs',
    name: 'Dairy & Eggs',
    items: [
      { id: 'dairy-d1', name: 'Cream Cheese' },
      { id: 'dairy-d2', name: 'Egg' },
      { id: 'dairy-d3', name: 'Soya Yogurt' },
      { id: 'dairy-d4', name: 'Soya Milk' },
      { id: 'dairy-d5', name: 'Tofu' },
      { id: 'dairy-d6', name: 'Butter' },
      { id: 'dairy-d7', name: 'Cheddar Cheese' },
      { id: 'dairy-d8', name: 'Century Egg' }
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    items: [
      { id: 'beverages-b1', name: 'Tea' },
      { id: 'beverages-b2', name: 'Coconut Water' },
      { id: 'beverages-b3', name: 'Electrolyte Water' }
    ]
  },
  {
    id: 'condiments',
    name: 'Condiments',
    items: []
  },
  {
    id: 'convenience',
    name: 'Convenience',
    items: [
      { id: 'convenience-c1', name: 'Crisps' },
      { id: 'convenience-c2', name: 'Spicy Prince Snack' },
      { id: 'convenience-c3', name: 'Shin Ramen' },
      { id: 'convenience-c4', name: 'Samyang Hot Chicken Ramen' },
      { id: 'convenience-c5', name: 'Alkaline Noodles' },
      { id: 'convenience-c6', name: 'Sliced Bread' },
      { id: 'convenience-c7', name: 'Bread' }
    ]
  },
  {
    id: 'frozen',
    name: 'Frozen',
    items: [
      { id: 'frozen-f1', name: 'Har Gow' },
      { id: 'frozen-f2', name: 'Wonton' },
      { id: 'frozen-f3', name: 'Siu Mai' },
      { id: 'frozen-f4', name: 'Edemame' },
      { id: 'frozen-f5', name: 'Fried Chicken' },
      { id: 'frozen-f6', name: 'Dumplings' }
    ]
  },
  {
    id: 'cupboard',
    name: 'Cupboard',
    items: []
  },
  {
    id: 'household',
    name: 'Household',
    items: [
      { id: 'household-h1', name: 'Paper Towel' },
      { id: 'household-h2', name: 'Tissue' },
      { id: 'household-h3', name: 'Toilet Paper' },
      { id: 'household-h4', name: 'Toothpaste' },
      { id: 'household-h5', name: 'Toothbrush' },
      { id: 'household-h6', name: 'Facial Cleanser' },
      { id: 'household-h7', name: 'Shampoo' },
      { id: 'household-h8', name: 'Shower Gel' },
      { id: 'household-h9', name: 'Sanitary Pads' },
      { id: 'household-h10', name: 'Tampons' },
      { id: 'household-h11', name: 'Cotton Pads' },
      { id: 'household-h12', name: 'Washing-up Liquid' },
      { id: 'household-h13', name: 'Laundry Pods' },
      { id: 'household-h14', name: 'Cling Film' },
      { id: 'household-h15', name: 'Resealable Bags' },
      { id: 'household-h16', name: 'Parchment Paper' },
      { id: 'household-h17', name: 'Tin Foil' },
      { id: 'household-h18', name: 'Wet Wipes' }
    ]
  }
];
