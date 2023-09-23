import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

//Using Navigation stack
import { NavigationContainer } from '@react-navigation/native';

//Import Navigation stack
import { createStackNavigator } from '@react-navigation/stack'


import CategoriesScreen from './src/screens/CategoriesScreen';

// Create a Navigation Obj
const Stack = createStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      {/* set upp Navigation */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
