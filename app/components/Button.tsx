import { useShoppingList } from '@/app/context/ShoppingListContext';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
type Props = {
    label: string;
    itemId: string;
};

export default function Button({ label, itemId }: Props) {
    const { addItem } = useShoppingList();
    const router = useRouter();
    const handleAdd = () => {
        addItem({
          id: itemId,
          name: itemId, 
          purchased: false
        });
        alert(`已将 ${itemId} 加入购物车`);
        router.back();
      };
  return (
    <View
    style={[
      styles.buttonContainer,
      { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
    ]}>
    <Pressable
      style={[styles.button, { backgroundColor: '#fff' }]}
      onPress={handleAdd}>
      <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
    </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
});
