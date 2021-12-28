import React from 'react';
import {Text} from 'react-native';

export type Props = {
  children: string;
  size: number;
  color: string;
};
const TitleText: React.FC<Props> = ({size, color, children}) => {
  return <Text style={StyleText(size, color)}>{children}</Text>;
};

const StyleText = function (size: number, color: string) {
  return {
    fontSize: size,
    color: color,
    fontFamily: 'Gilroy-Bold',
  };
};

export default TitleText;
