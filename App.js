import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import CategoriesScreen from './src/screens/CategoriesScreen';

const Stack = createNativeStackNavigator(); // An object with properties

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="MealCategories"
            //the Component
            component={CategoriesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
