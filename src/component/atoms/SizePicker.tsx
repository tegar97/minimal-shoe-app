import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DropDown} from '../../assets';
function SizePicker() {
  return (
    <TouchableOpacity style={styles.Picker}>
      <Text
        style={{
          color: 'black',
        }}>
        Choose Size
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Picker: {
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    padding: 12,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    width: 147,
  },
});

export default SizePicker;
