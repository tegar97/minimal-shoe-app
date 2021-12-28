import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NikeGray} from '../../assets';
function ShoeItem({index}: any) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginTop: index % 2 === 0 ? 41 : 0}}>
      <View style={styles.ShoeItemImageWrapper}>
        <Image
          source={require('./../../assets/icons/Nike_shoe.png')}
          style={{width: 100, height: 109}}
        />
        <View style={styles.ProductLogo}>
          <NikeGray style={{width: 35, height: 12}} />
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={styles.price}>$239.80</Text>
        <View style={{marginTop: 2}}>
          <Text style={styles.description}>Nike Air Max 90</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ShoeItemImageWrapper: {
    backgroundColor: '#F6F6F6',
    borderRadius: 25,
    width: 170,
    height: 182,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProductLogo: {
    display: 'flex',
    position: 'absolute',
    zIndex: 2,
    bottom: 20,
    right: 8,
  },
  price: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 15,
    color: '#000',
  },
  description: {
    fontFamily: 'Gilroy-Bold',
    color: '#000',
    opacity: 0.6,
    fontSize: 14,
  },
});
export default ShoeItem;
