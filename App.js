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
          contentStyle:{backgroundColor:'#BC4D4D'},
        }}>
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen}
            options={{ 
              title: 'All Categories',
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
            // Passing dynamic params
            // options={({route,navigation})=>{
            //   const catId=route.params.categoryId;
            //   return{
            //     title:catId,
            //   };

            // }}
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
