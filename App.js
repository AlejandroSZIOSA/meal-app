import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

//Using Navigation stack
import { NavigationContainer } from '@react-navigation/native';

//Import Navigation stack
import { createStackNavigator } from '@react-navigation/stack'


import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';

// Create a Navigation Obj
const Stack = createStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      {/* set upp Navigation */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: '#351401' },
          headerTintColor:'white',
          contentStyle:{backgroundColor: '#3f2f25' },
        }}>
          <Stack.Screen 
          name="MealsCategories" 
          component={CategoriesScreen}
          options={{ 
            title: 'All Categories',
          }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
