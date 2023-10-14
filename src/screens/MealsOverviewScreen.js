import { View,FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


// Using prop route for pass data between stacks navigation
// ALT: Can use useRoute Hook to :) if a information is not register as StackScreen
function MealsOverviewScreen({route}){
  //Using the object :)
  const catId = route.params.categoryId;

  //Create a function that se if a category exist!
  const displayMeals = MEALS.filter( (mealItem) => { 
    // indexOf = -1 if there are not category
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //Create a function that is connected to yhe flatlist and call a Component
  function renderMealItem(itemData){
    // Passing Props to the MealItem component
    return (
      <MealItem 
        title={itemData.item.title} 
        imageUrl={itemData.item.imageUrl}
      />
    )
  }


  return(
    <View style={styles.container}>
      <FlatList 
        data={displayMeals} 
        keyExtractor={(item)=> item.id}
        renderItem={renderMealItem} 
      />
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