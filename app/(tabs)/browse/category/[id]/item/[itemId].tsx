import Button from '@/app/components/Button';
import ImageViewer from '@/app/components/ImageViewer';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from "react-native";
const PlaceholderImage = require('@/app/assets/default.jpg')
export default function ItemDetailScreen() {
    const { itemId } = useLocalSearchParams<{ itemId: string }>();
  return (
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} />
          </View>
          
          <View style={styles.footerContainer}>
            <Button label='ADD' itemId={ itemId } />
          </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    },
  text: {
    color: '#000',
    },
  footerContainer: {
    paddingTop:30,
    },
    imageContainer: {
      paddingTop: 28,
  }
})
