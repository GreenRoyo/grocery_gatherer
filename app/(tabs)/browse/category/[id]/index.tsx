import { CATEGORIES } from '@/app/constants/dataMap';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FlatList, ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ItemListScreen() {
  type CategoryItem = {
    id: string;
    name: string;
    image?: ImageSourcePropType;
  };
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  // console.log('id from params:', id);
  // const data = CATEGORIES_DATA[id] || [];
  // console.log('CATEGORIES_DATA:', CATEGORIES_DATA);
  const category = CATEGORIES.find(cat => cat.id === id);
  const data = category?.items || [];

  const renderItem = ({ item }: { item: CategoryItem }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(`/browse/category/${id}/item/${item.name}`)}
    >
       <ImageBackground
          source={item.image ?? require('@/app/assets/default.jpg')}
          style={styles.background}
          imageStyle={{ borderRadius: 8 }}
          resizeMode="contain"  // 关键：保证图片完整显示，等比缩放
        >
      <View style={styles.overlay}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </ImageBackground>
      </TouchableOpacity>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {id} </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // 两列网格
        columnWrapperStyle={styles.row} // 行样式，间距
        contentContainerStyle={{ padding: 16 }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 20,
  },
  item: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    aspectRatio: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});