import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

//The form of how the item will renders :)
function renderCategoryItem(itemData){
  return (
    <CategoryGridTile 
      title={itemData.item.title} 
      color={itemData.item.color}
    />
  )
}

function CategoriesScreen(){

  return (
  <FlatList 
    data={CATEGORIES} 
    KeyExtractor={(item) => item.id}
    renderItem={renderCategoryItem } // Calls to a function   
  />
  );
}
export default CategoriesScreen;