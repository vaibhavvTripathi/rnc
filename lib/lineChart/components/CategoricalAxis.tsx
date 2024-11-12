import React from 'react';
import Svg, {Text} from 'react-native-svg';

type CategoricalAxisProps = {
  categoricalAxis: Array<string>;
  xUnit: number;
};
const CategoricalAxis = ({categoricalAxis, xUnit}: CategoricalAxisProps) => {
  return (
    <Svg height={20}>
      
      {categoricalAxis.map((c, index) => {
        return (
          <Text y={10} x={index * xUnit - (index !== 0 ? 5 : 0)} key={index}>
            {c}
          </Text>
        );
      })}
    </Svg>
  );
};

export default CategoricalAxis;
