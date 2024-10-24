import React from 'react';
import {ScrollView, View} from 'react-native';
import Svg, {Polyline, G, Line} from 'react-native-svg';
import YAxis, {XAxis} from './LineAxes';

interface LineChartProps {
  catergoricalAxis: Array<string>;
  numericalAxes: {
    [key: string]: {
      data: Array<number>;
      strokeColor: string;
      strokeWidth: number;
    };
  };
  chartHeight: number;
  minChartWidth: number;
}

const LineChart: React.FC<LineChartProps> = ({
  numericalAxes,
  catergoricalAxis,
  chartHeight,
  minChartWidth,
}) => {
  const maxYValue = Math.max(
    ...Object.values(numericalAxes)
      .map(i => i.data)
      .flat(),
  );
  const chartWidth = Math.max(catergoricalAxis.length * 70, minChartWidth);
  const totalYDivisions = Math.floor(chartHeight / 100);
  const linesData = Object.values(numericalAxes).map(data => {
    return {
      data: data.data
        .filter((_, i) => i < catergoricalAxis.length)
        .map((d, i) => {
          return {
            categoricalAxisValue: catergoricalAxis[i],
            numericalAxisValue: d,
          };
        }),
      strokeWidth: data.strokeWidth,
      strokeColor: data.strokeColor,
    };
  });
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <YAxis
        maxHeight={maxYValue}
        totalDivisions={totalYDivisions}
        chartHeight={chartHeight}
      />
      <ScrollView horizontal style={{display: 'flex'}}>
        <View>
          <Svg height={chartHeight} width={chartWidth}>
            <G>
              <Line
                x1={0}
                y1={chartHeight}
                x2={chartWidth}
                y2={chartHeight}
                stroke="#000"
                strokeWidth="2"
              />
            </G>

            <G>
              <HorizontalDivisions
                totalYDivisions={totalYDivisions}
                chartHeight={chartHeight}
                chartWidth={chartWidth}
              />

              <VerticalDivisions
                categoricalAxis={catergoricalAxis}
                chartWidth={chartWidth}
                chartHeight={chartHeight}
              />
            </G>
            {linesData.map(d => (
              <DataLine
                data={d.data}
                chartHeight={chartHeight}
                chartWidth={chartWidth}
                maxYValue={maxYValue}
                strokeColor={d.strokeColor}
                strokeWidth={d.strokeWidth}
              />
            ))}
          </Svg>
          <XAxis points={catergoricalAxis} chartWidth={chartWidth} />
        </View>
      </ScrollView>
    </View>
  );
};

export default LineChart;

interface DatalineProps {
  data: Array<{categoricalAxisValue: string; numericalAxisValue: number}>;
  chartHeight: number;
  maxYValue: number;
  chartWidth: number;
  strokeColor: string;
  strokeWidth: number;
}
const DataLine = ({
  data,
  chartHeight,
  maxYValue,
  chartWidth,
  strokeColor,
  strokeWidth,
}: DatalineProps) => {
  const scaledYData = data.map(
    d => chartHeight * (d.numericalAxisValue / maxYValue),
  );
  const points = scaledYData
    .map((yValue, index) => {
      const x = +(index * chartWidth) / (data.length - 1);
      const y = chartHeight - yValue;
      return `${x},${y}`;
    })
    .join(' ');
  return (
    <Polyline
      points={points}
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  );
};

const VerticalDivisions = ({
  categoricalAxis,
  chartWidth,
  chartHeight,
}: {
  categoricalAxis: Array<string>;
  chartWidth: number;
  chartHeight: number;
}) => {
  return (
    <>
      {categoricalAxis.map((_, index) => {
        const x = (index * chartWidth) / (categoricalAxis.length - 1);
        return (
          <Line
            key={`vertical-${index}`}
            x1={x}
            y1={0}
            x2={x}
            y2={chartHeight}
            stroke="#E0E0E0"
            strokeWidth="1"
          />
        );
      })}
    </>
  );
};
const HorizontalDivisions = ({
  totalYDivisions,
  chartHeight,
  chartWidth,
}: {
  totalYDivisions: number;
  chartHeight: number;
  chartWidth: number;
}) => {
  return (
    <>
      {/* Horizontal grid lines (already present) */}
      {Array.from({length: Math.max(totalYDivisions, 1)}).map((_, index) => (
        <Line
          key={`horizontal-${index}`}
          x1={0}
          y1={chartHeight * (index / Math.max(totalYDivisions, 1))}
          x2={chartWidth}
          y2={chartHeight * (index / Math.max(totalYDivisions, 1))}
          stroke="#E0E0E0"
          strokeWidth="1"
        />
      ))}
    </>
  );
};
