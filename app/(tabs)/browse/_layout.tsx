import { Stack } from 'expo-router';

export default function BrowseLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}} />
      <Stack.Screen name="category/[id]" options={{ title: 'Items' }} />
      <Stack.Screen name="category/[id]/item/[itemId]" options={{ title: 'Item Details' }} />
    </Stack>
  );
}
