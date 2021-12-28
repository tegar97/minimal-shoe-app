import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Notification} from '../../assets';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.fontMain}>Sneakrs</Text>
      <Notification style={styles.notify} />
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 39,
  },
  fontMain: {
    fontFamily: 'Gilroy-Bold',
    color: 'black',
    fontSize: 23,
  },
  notify: {
    width: 25,
    height: 28,
  },
});
export default Header;
