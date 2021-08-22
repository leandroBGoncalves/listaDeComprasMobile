import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TelaLogin from './src/components/login/';
import AppLoading from 'expo-app-loading';
import { Sora_100Thin, Sora_400Regular, Sora_600SemiBold, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_100Thin,
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <TelaLogin />
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE8D6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
