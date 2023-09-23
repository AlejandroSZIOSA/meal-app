import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

//The form of how the item will renders :)


//Using destructing Navigation Special Prop :)
//Changing the position of the functions
function CategoriesScreen({navigation}){
  function renderCategoryItem(itemData){
    function pressHandler(){
    }
    return (
      <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        
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