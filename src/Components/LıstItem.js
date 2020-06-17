import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, StyleSheet,Text } from "react-native";

const LıstItem = (props) => {
  const [done,setDone] = useState(false);
  myPress = () =>{
      setDone(!done)
  }
  return (
    <SafeAreaView>
      <View >
        <TouchableOpacity style={done ? styles.buttonDone : styles.buttonUnDone}onPress={myPress}>
          <View style={styles.container}>
            <View style={styles.dot}></View>
            <Text>{props.data.todo}</Text>
            <Text>{done ? "YAPILDI" : "YAPILMADI"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    dot : {
        width:10,
        height:10,
        backgroundColor:'black',
        borderRadius:10,
        
    },
    buttonDone : {
    
        backgroundColor:'#adebad',
        margin:5,
        padding:10,
        borderRadius:10

    },
    buttonUnDone : {
    
        backgroundColor:'#ff4d4d',
        margin:5,
        padding:10,
        borderRadius:10

    },
    container :{
        flexDirection:'row',
        justifyContent:'space-between'

    }

})
export default LıstItem;
