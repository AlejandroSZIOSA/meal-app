import { View,Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

// Using prop route for pass data between stacks navigation
// ALT: Can use useRoute Hook to :) if a information is not register as StackScreen
function MealsOverviewScreen({route}){
  //Using the object :)
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter( (mealItem) => { 
    // indexOf = -1 if there are not category
    return mealItem.categoryId.indexOf(catId) >= 0;
  });

  
  return(
    <View style={styles.container}>
      <Text> Meals Overview Screen - {catId}</Text>
    </View>
  );

}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 16,
  }
});