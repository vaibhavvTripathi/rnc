import React from 'react';
import Svg, {Line, Text} from 'react-native-svg';

interface NumericalAxisProps {
  totalDivisions: number;
  maxHeight: number;
  chartHeight: number;
}


const NumericalAxis: React.FC<NumericalAxisProps> = ({
  totalDivisions,
  maxHeight,
  chartHeight,
}) => {
  const unit = maxHeight / Math.max(totalDivisions, 1);

  const yDivisions = Array.from(
    {length: totalDivisions + 1},
    (_, i) => i * unit,
  ).reverse();
  const getYValue = (index: number) => {
    if (index === yDivisions.length - 1) {
      return (chartHeight / totalDivisions) * index;
    } else if (index === 0) {
      return (chartHeight / totalDivisions) * index + 10;
    }
    return (chartHeight / totalDivisions) * index + 5;
  };
  return (
    <Svg width={50} height={chartHeight}>
      <Line
        x1={50} // Adjust position to the far right of the Y axis
        y1={0}
        x2={50}
        y2={chartHeight}
        stroke="black" // Line color
        strokeWidth={1} // Line thickness
      />
      {yDivisions.map((value, index) => (
        <Text x={12} y={getYValue(index)} key={index}>
          {value.toFixed(2)}
        </Text>
      ))}
    </Svg>
  );
};

export default NumericalAxis;
