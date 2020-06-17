import React from 'react';
import {TextInput, View, StyleSheet, Dimensions} from 'react-native';

const MyInput = props => {
  return (
    <View style={styles.container}>
      <TextInput onChangeText={props.ınputChange} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8FF',
    borderRadius: 20,
    padding: 10,
    margin: 15,
    borderColor: 'grey',
    borderWidth: 1,
  },
});
export default MyInput;
