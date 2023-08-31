import { Pressable, View, Text } from "react-native";

// This custom component define how an item from the list will look like :)
// Props comes from the dummy-data
function CategoryGridTile ({title, color}){
  return( 
    <View>
      <Pressable>
        <Text>{title}</Text>

      </Pressable>
    </View>
  )
}

export default CategoryGridTile;