import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import CategoriesScreen from './src/screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <CategoriesScreen/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
