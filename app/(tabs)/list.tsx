import { useShoppingList } from '@/app/context/ShoppingListContext';
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Item = {
  id: string;
  name: string;
  purchased: boolean;
};



export default function List() {
  const { list, removeItem, togglePurchased } = useShoppingList();
  const renderItem = ({ item }: { item: Item }) => (
    <View
      style={[
        styles.itemBox,
        item.purchased && styles.purchasedItem, // 已购买时加绿色背景
      ]}
    >
      {/* 点击文字切换已购买状态 */}
      <TouchableOpacity
        style={styles.itemContent}
        onPress={()=>togglePurchased(item.id)}      
      >
        <Text style={styles.text}>
          {item.name} {item.purchased ? "(已购买)" : "(未购买)"}
        </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.deleteButton}
              onPress={()=>removeItem(item.id)}
          >
              <Text style={styles.deleteText}>❌</Text>
          </TouchableOpacity>
        
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* 未购买 */}
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>未购买</Text>
        <FlatList
          data={list.filter((item) => !item.purchased)}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

      {/* 已购买 */}
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>已购买</Text>
        <FlatList
          data={list.filter((item) => item.purchased)}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#000",
  },
  text: {
    color: "#000",
  },
  itemBox: {
    flexDirection: "row", // 横向排列（文字 + 按钮）
    alignItems: "center",
    padding: 12,
    backgroundColor: "lightblue",
    marginTop: 10,
    borderRadius: 8,
    justifyContent: "space-between",
  },
  itemContent: {
    flex: 1, // 占满剩余空间
  },
  purchasedItem: {
    backgroundColor: "#c8e6c9",
  },
  deleteButton: {
    marginLeft: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: "#ff5252",
    borderRadius: 4,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
