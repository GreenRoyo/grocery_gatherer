import { CATEGORIES } from '@/app/constants/dataMap';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Category = {
  id: string;
  name: string;
  image?: ImageSourcePropType;
};

export default function CategoryListScreen() {
  const router = useRouter();
  const renderItem = ({ item }: { item: Category }) => (
    // ？
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(`/browse/category/${item.id}`)}
    >
      {/* <ImageBackground
        source={item.image ?? require('@/app/assets/default.jpg')}
        style={styles.background}
        imageStyle={{ borderRadius: 8 }}
        resizeMode="contain"  // 关键：保证图片完整显示，等比缩放
      ></ImageBackground> */}
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // 两列网格
        columnWrapperStyle={styles.row} // 行样式，间距
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  item: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 20,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 150,
  },
  title: {
    fontSize: 16,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
