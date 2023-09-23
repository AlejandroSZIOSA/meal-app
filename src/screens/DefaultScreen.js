
// Not Implemented yet
// <Stack.Navigator initialRouteName="Default">
import { View, Text, StyleSheet } from "react-native";

function DefaultScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.textStyle}> Default Screen</Text>
    </View>
  );
}
export default DefaultScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },
  textStyle:{
    color: 'white',
    fontSize: 10,
  }
});