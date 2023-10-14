import { View,Pressable,Text, Image, StyleSheet,Platform } from "react-native";

function MealItem ({title, imageUrl, duration,complexity, affordability}){
  return(
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image source ={{uri: imageUrl}} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m </Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem:{
    margin:16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible' , // This fix problem with android_ripple effect
    backgroundColor:'white',
    elevation: 4, //for android devices
    shadowColor: 'black', //This works in IOS device , a shadow :)
    shadowOpacity:0.35, //This works in IOS device , a shadow :)
    shadowOffset:{width:0, height:2}, //This works in IOS device , a shadow :)
    shadowRadius:16, //This works in IOS device , a shadow :)
  },

  image: {
    width:'100%',
    height:200,
  },

  title:{
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:18,
    padding:8,
  },

  details:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding:8,
  },
  
  detailItem:{
    marginHorizontal:4,
    fontSize: 12,
  },
})