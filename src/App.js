import React, { useState } from "react";
import MyButton from "./Components/MyButton";
import MyInput from "./Components/MyInput";
import LıstItem from "./Components/LıstItem";

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const App = (props) => {
  const [entry, setEntry] = useState("");
  const [list, setList] = useState([]);
  onChange = (text) => {
    setEntry(text);
  };
  addToList = () => {
    let newList = [...list];
    newList.push({ todo: entry, isDone: false });
    setList(newList);
  };
  
  return (
    <SafeAreaView style={styles.container} >
      <View >
        <View style={{justifyContent:"flex-start"}}>
         <FlatList 
         keyExtractor={(item, index) => index.toString()}
         data={list}
         renderItem={({item})=>
          <LıstItem data={item}></LıstItem>
        }></FlatList>
        </View>
        <MyInput ınputChange={onChange}></MyInput>
        <MyButton myPress={addToList}></MyButton>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#F8F8FF",
  },
  button:{
    backgroundColor:"#e6f2ff",
    borderRadius:10,
    padding:10,
    margin:10,
    flexDirection:"row"
  }
});

export default App;
