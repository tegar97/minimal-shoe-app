import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Brand} from '../../data/brand';
import BrandItem from './BrandItem';

interface brandTypes {
  item: any;
  name: string;
}
export interface item {
  item: brandTypes;
}
function RowItem(item: item) {
  return (
    <View style={styles.brandGrid}>
      <BrandItem item={item} />
    </View>
  );
}
function BrandList() {
  return (
    <FlatList
      style={styles.videoPlaylist}
      horizontal={true}
      data={Brand}
      renderItem={(item: item) => <RowItem item={item.item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  videoPlaylist: {
    marginTop: 10,
    display: 'flex',
    width: '100%',
  },
  brandGrid: {
    marginRight: 33,
  },
});

export default BrandList;
