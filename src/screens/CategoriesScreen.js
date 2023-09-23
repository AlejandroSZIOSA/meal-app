import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

//The form of how the item will renders :)


//Using destructing Navigation Special Prop :)
//Changing the position of the functions, the objective is all functions get access to the Navigation Prop
function CategoriesScreen({navigation}){

  function renderCategoryItem(itemData){
    function pressHandler(){
      navigation.navigate("MealsOverview");
    }
    return (
      <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        //Navigate between Screens :)
        onPress={pressHandler}
      />
    )
  }

  return (
  <FlatList 
    data={CATEGORIES} 
    KeyExtractor={(item) => item.id}
    renderItem={renderCategoryItem } // Calls to a function   
    numColumns={2}
  />
  );
}
export default CategoriesScreen;