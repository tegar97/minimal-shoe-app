import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Brand from '../component/atoms/Brand';
import Header from '../component/atoms/header';
import Shoe from '../component/atoms/Shoe';
import Input from '../component/molecules/input';

function HomeScreen({navigation}: any) {
  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <Header />
        <View style={{marginTop: 30}}>
          <Input />
        </View>
        <Brand />
        <Shoe navigation={navigation} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    backgroundColor: '#ffff',
    height: '100%',
    paddingLeft: 25,
    paddingRight: 25,
  },
});
export default HomeScreen;
