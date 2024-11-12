import React from 'react';
import {Polyline} from 'react-native-svg';
import {NumericalAxisType} from '../LineChart';

interface DatalineProps {
  numericalAxisValues: NumericalAxisType;
  xUnit: number;
  chartHeight: number;
  maxYValue: number;
}
export const DataLine = ({
  numericalAxisValues,
  xUnit,
  maxYValue,
  chartHeight,
}: DatalineProps) => {
  const points = numericalAxisValues.data.map((d, index) => {
    return {
      y: chartHeight - (chartHeight * d) / maxYValue,
      x: xUnit * index,
    };
  });
  return (
    <Polyline
      points={points.map(p => [p.x, p.y]).join(' ')}
      fill="none"
      stroke={numericalAxisValues.strokeColor}
      strokeWidth={numericalAxisValues.strokeWidth}
    />
  );
};
