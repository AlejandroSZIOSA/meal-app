import { Pressable, View, Text, StyleSheet } from "react-native";
// This custom component define how an item from the list will look like :)
// Props comes from the dummy-data
function CategoryGridTile ({title, color}){
  return( 
    <View style={styles.gridItem}>
      <Pressable>
        <Text>{title}</Text>

      </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height:150,
    borderRadius: 8,
    elevation: 4, //This is for Android devices , a shadow :)
  },
});