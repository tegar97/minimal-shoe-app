import React from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import TitleText from '../molecules/TitleText';
import ShoeItem from './ShoeItem';

function Shoe({navigation}: any) {
  console.log(navigation);
  return (
    <View style={styles.ShoeContainer}>
      <TitleText size={20} color="#000">
        Popular
      </TitleText>
      <View style={styles.ShoeWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('ShoeDetail')}>
          <ShoeItem index={1} />
        </TouchableOpacity>
        <ShoeItem index={2} />
        <ShoeItem index={3} />
        <ShoeItem index={4} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ShoeContainer: {
    marginTop: 39,
  },
  ShoeWrapper: {
    marginTop: 23,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Shoe;
