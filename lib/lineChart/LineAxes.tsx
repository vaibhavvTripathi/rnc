import React from 'react';
import {View, Text} from 'react-native';

interface YAxisProps {
  totalDivisions: number;
  maxHeight: number;
  chartHeight: number;
}
interface XAxisProps {
  points: Array<string>;
  chartWidth: number;
}

export const XAxis: React.FC<XAxisProps> = ({points, chartWidth}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        width: chartWidth,
        justifyContent: 'space-between',
        alignContent: 'flex-start',
      }}>
      {points.map((value, index) => (
        <Text key={index}>{value}</Text>
      ))}
    </View>
  );
};

const YAxis: React.FC<YAxisProps> = ({
  totalDivisions,
  maxHeight,
  chartHeight,
}) => {
  const unit = maxHeight / Math.max(totalDivisions, 1);

  // Calculate the prefix sum (y-positions) array
  const yDivisions = Array.from(
    {length: totalDivisions + 1},
    (_, i) => (i + 1) * unit - unit,
  ).reverse();
  return (
    <View
      style={{
        display: 'flex',
        // gap: chartHeight / Math.max(totalDivisions, 1),
        height: chartHeight,
        // borderWidth: 1,
        justifyContent: 'space-between',
        borderRightWidth: 1,
        paddingRight: 5,
      }}>
      {yDivisions.map((value, index) => (
        <Text key={index}>{value.toFixed(2)}</Text>
      ))}
    </View>
  );
};

export default YAxis;
