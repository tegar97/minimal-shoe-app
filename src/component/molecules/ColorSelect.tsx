import React from 'react';
import {View} from 'react-native';

type Props = {
  color: string;
  gapLeft: number;
};
function ColorSelect({color, gapLeft}: Props) {
  return (
    <View
      style={{
        width: 33,
        height: 33,
        borderRadius: 100,
        backgroundColor: color,
        marginLeft: gapLeft,
      }}></View>
  );
}

export default ColorSelect;
