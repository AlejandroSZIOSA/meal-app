import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

//Using Navigation stack
import { NavigationContainer } from '@react-navigation/native';



import CategoriesScreen from './src/screens/CategoriesScreen';

export default function App() {
  return (
    <>
      {/* style statusbar light*/}
      <StatusBar style='light'/>
      <CategoriesScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
