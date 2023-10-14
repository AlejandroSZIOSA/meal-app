import { View,FlatList, StyleSheet } from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useLayoutEffect } from 'react';

// Using prop route for pass data between stacks navigation
// ALT: Can use useRoute Hook to :) if a information is not register as StackScreen
function MealsOverviewScreen({route,navigation}){
  //Using the object :)
  const catId = route.params.categoryId;

  //Create a function that se if a category exist!
  const displayMeals = MEALS.filter( (mealItem) => { 
    // indexOf = -1 if there are not category
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //setOptions Navigator
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find( (category)=> category.id === catId).title;

    navigation.setOptions({
      title: categoryTitle
    });

  },[catId,navigation]);


  //Create a function that is connected to yhe flatlist and call a Component
  function renderMealItem(itemData){
    // help constant
    const item= itemData.item;
    
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }

    // Passing Props to the MealItem component
    return (
      // Passing multiple Props as once :)
      <MealItem {...mealItemProps}
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