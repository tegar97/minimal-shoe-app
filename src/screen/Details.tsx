import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DetailHeader from '../component/atoms/DetailHeader';
import Swiper from 'react-native-swiper';
import {NikeBig} from '../assets';
import ColorSelect from '../component/molecules/ColorSelect';
import SizePicker from '../component/atoms/SizePicker';

function Details({navigation}) {
  return (
    <ScrollView>
      <View style={styles.DetailContainer}>
        <DetailHeader navigation={navigation} />
        <View
          style={{
            display: 'flex',
            height: 400,
            paddingLeft: 7,
            paddingRight: 7,
            width: '100%',
            marginTop: 20,
          }}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            activeDot={
              <View
                style={{
                  backgroundColor: '#fff',
                  opacity: 1,
                  width: 35,
                  height: 6,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }
            dot={
              <View
                style={{
                  backgroundColor: '#000',
                  opacity: 0.2,
                  width: 20,
                  height: 6,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }>
            <View style={styles.slide}>
              <NikeBig style={styles.backLogo} />
              <Image
                source={require('./../assets/images/Niki_Shoe_Big.png')}
                style={{width: 281, height: 308, zIndex: 2}}
              />
            </View>
            <View style={styles.slide}>
              <NikeBig style={styles.backLogo} />
              <Image
                source={require('./../assets/images/Nike_Shoe_Big_Dual.png')}
                style={{width: 281, height: 308, zIndex: 2}}
              />
            </View>
            <View style={styles.slide}>
              <NikeBig style={styles.backLogo} />
              <Image
                source={require('./../assets/images/Nike_Shoe_Big_Back.png')}
                style={{width: 281, height: 308, zIndex: 2}}
              />
            </View>
          </Swiper>
        </View>
        <View style={{marginTop: 20, paddingLeft: 28, paddingRight: 28}}>
          <Text style={styles.Title}>Nike Air Max 90</Text>
          <Text style={styles.price}>$239.80</Text>
          <Text style={styles.description}>
            A pillar of sneaker culture, the Nike Air Max 90 remains one of the
            most significant designs since the brand’s founding. And while its
            OG colorways are some of the most significant.
          </Text>
          <View style={styles.SettingContainer}>
            <View style={styles.ColorList}>
              <ColorSelect color="#29605D" gapLeft={0} />
              <ColorSelect color="#5B8EA3" gapLeft={13} />
              <ColorSelect color="#746A36" gapLeft={13} />
              <ColorSelect color="#2E2E2E" gapLeft={13} />
            </View>
            <SizePicker />
          </View>
          <View style={{marginTop: 26, borderRadius: 15}}>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: '#ffff', fontFamily: 'Gilroy-Bold'}}>
                Add To bag
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  DetailContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#ffff',
  },
  wrapper: {
    display: 'flex',
    borderRadius: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeee',
    borderRadius: 20,
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  backLogo: {
    zIndex: 1,
    position: 'absolute',
  },
  Title: {
    fontSize: 23,
    fontFamily: 'Gilroy-Bold',
    color: 'black',
  },
  price: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'Gilroy-Medium',
  },
  description: {
    fontSize: 15,
    color: 'black',
    opacity: 0.4,
    marginTop: 8,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  ColorList: {
    display: 'flex',
    flexDirection: 'row',
  },
  SettingContainer: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 2,
  },
});
export default Details;
