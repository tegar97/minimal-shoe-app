import React from 'react';
import {StyleSheet, View} from 'react-native';
import TitleText from '../molecules/TitleText';
import BrandList from './BrandList';

function Brand() {
  return (
    <View style={styles.brandContainer}>
      <TitleText size={20} color="#000">
        Top Brands
      </TitleText>
      <View style={{marginTop: 12}}>
        <BrandList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  brandContainer: {
    marginTop: 30,
  },
});

export default Brand;
