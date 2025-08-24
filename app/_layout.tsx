import { Stack } from "expo-router";
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ShoppingListProvider } from "./context/ShoppingListContext";

export default function RootLayout() {
  useEffect(() => {
    // 注册 Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);
  return (
    <ShoppingListProvider>
      <HelmetProvider>
        <Helmet>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" href="/logo512.png" />
          <style>{`
            @font-face {
              font-family: 'Ionicons';
              src: url('/fonts/Ionicons.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }
          `}</style>
        </Helmet>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
      </HelmetProvider>
    </ShoppingListProvider>
  );
}
