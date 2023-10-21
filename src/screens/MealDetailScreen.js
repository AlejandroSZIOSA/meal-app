import { View,Text,Image, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";


function MealDetailScreen ({route}){
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal)=> meal.id === mealId);

  return(
    <View>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
      <Text style={styles.title}> {selectedMeal.title}</Text>
      <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      {/* Reusable code  */}
      <Subtitle>ingredients</Subtitle>

      {/* Reusable code with a list :)  */}
      <List data={selectedMeal.ingredients}/>

      {/* Reusable code  */}
      <Subtitle>Steps</Subtitle>

      {/* Reusable code with a list :)  */}
      <List data={selectedMeal.steps}/>

    </View>
  )
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height:350,
  },
  title:{
    fontWeight: 'bold',
    fontSize:24,
    margin:8,
    textAlign:'center',
    color:'brown',
  },
  detailText:{
    color:'green',
    fontSize:18,
  },

});