import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Adidas, Jordan, Nike, Purma} from '../../assets';
import {item} from './BrandList';

// eslint-disable-next-line @typescript-eslint/no-shadow

function Logo({data}: any) {
  console.log(data);
  if (data === 'adidas') {
    return <Adidas />;
  } else if (data === 'purma') {
    return <Purma />;
  } else if (data === 'jordan') {
    return <Jordan />;
  } else if (data === 'Nike') {
    return <Nike />;
  } else {
    return <Text>No Logo</Text>;
  }
}
// eslint-disable-next-line @typescript-eslint/no-shadow
function BrandItem({item}: item) {
  return (
    <View style={styles.brandItemContainer}>
      <Logo data={item?.item?.name} />
    </View>
  );
}

const styles = StyleSheet.create({
  brandItemContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 70,
  },
});
export default BrandItem;
