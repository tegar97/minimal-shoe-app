import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Back, More} from '../../assets';

function DetailHeader({navigation}: any) {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Back style={{width: 24, height: 24}} />
      </TouchableOpacity>
      <More style={{width: 24, height: 24}} />
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 29,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default DetailHeader;
