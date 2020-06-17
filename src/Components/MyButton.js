import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';


const MyButton = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={styles.buttonstyle} onPress={props.myPress}>
        <Text>EKLE</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonstyle: {
    backgroundColor: '#ebebe0',
    padding: 20,
    margin: 15,
    borderRadius: 20,
    width: Dimensions.get('window').width / 4,
    alignItems: 'center',
  },
});
export default MyButton;
