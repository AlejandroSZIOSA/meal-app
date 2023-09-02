import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function pressHandler() {

  
}

//The form of how the item will renders :)
function renderCategoryItem(itemData){
  return (
    <CategoryGridTile 
      title={itemData.item.title} 
      color={itemData.item.color}
      //Callback connect and pointing when a category es pressed
      onPress={pressHandler}

    />
  )
}

function CategoriesScreen(){

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