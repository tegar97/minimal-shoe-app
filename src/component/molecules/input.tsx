import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Search} from '../../assets';

function Input() {
  return (
    <View style={styles.inputContainer}>
      <Search style={styles.Search} />
      <TextInput
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
        style={styles.input}
        placeholder="Search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  Search: {
    position: 'absolute',
    zIndex: 2,
    top: 15,
    left: 15,
    width: 20,
    height: 20,
  },
  input: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#EEEEEE',
    color: '#000',
    paddingLeft: 45,
    paddingRight: 20,
    fontFamily: 'Gilroy-SemiBold',
  },
});
export default Input;
