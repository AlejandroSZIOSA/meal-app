import { Pressable, View, Text, StyleSheet } from "react-native";
// This custom component define how an item from the list will look like :)
// Props comes from the dummy-data
function CategoryGridTile ({title, color}){
  return( 
    <View style={styles.gridItem}>
      <Pressable android_ripple={{color:'#ccc'}} style={styles.button}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1, // It takes all available space
    margin: 16,
    height:150,
    borderRadius: 8,
    elevation: 4, //This works in ANDROID device , a shadow :)
    backgroundColor:'white', //This fix shadow problem in IOS device
    shadowColor: 'black', //This works in IOS device , a shadow :)
    shadowOpacity:0.25, //This works in IOS device , a shadow :)
    shadowOffset:{width:0, height:2}, //This works in IOS device , a shadow :)
    shadowRadius:8, //This works in IOS device , a shadow :)
    overflow: 'hidden', // This fix problem with android_ripple effect
  },
  innerContainer: {
    flex: 1, // It takes all available space
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});