import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
// This custom component define how an item from the list will look like :)
// Props comes from the dummy-data
// onPress prop is a pointer how trigger when pressable is enabled
function CategoryGridTile ({title, color, onPress}){
  return(
    <View style={styles.gridItem}>
      <Pressable 
        android_ripple={{color:'#ccc'}}
        //Destructuring + condition "pressed" :)
        style={({pressed})=>[
          styles.button, 
          pressed ? styles.buttonPressed : null, ]}
        //trigger when pressable is enabled
        onPress={onPress}  
      >
        {/** Destructuring background colors :) */}
        <View style={[styles.innerContainer,{backgroundColor: color}]}>
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
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible' , // This fix problem with android_ripple effect
  },
  innerContainer: {
    flex: 1, // It takes all available space
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // fix a problem with corners
  },
  button: {
    flex: 1,
  },
  buttonPressed:{
    opacity: 0.5,

  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});