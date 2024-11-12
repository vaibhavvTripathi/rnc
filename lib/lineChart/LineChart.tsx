import React from 'react';
import {ScrollView, View} from 'react-native';
import Svg, {G, Line} from 'react-native-svg';
import NumericalAxis from './components/NumericalAxis';
import {DataLine} from './components/Dataline';
import {Labels} from './components/Labels';
import CategoricalAxis from './components/CategoricalAxis';
import {HorizontalDivisions, VerticalDivisions} from './components/Divisions';

export interface NumericalAxisType {
  data: Array<number>;
  strokeColor: string;
  strokeWidth: number;
}
interface LineChartProps {
  catergoricalAxis: Array<string>;
  numericalAxes: NumericalAxisType[];
  chartHeight?: number;
  minChartWidth?: number;
  modifyToolTipLabel?: (x: string, y: number) => string;
  xUnit?: number;
  showToolTip?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({
  numericalAxes,
  catergoricalAxis,
  chartHeight = 300,
  minChartWidth = 0,
  modifyToolTipLabel = (x, y) => `(${x},${y})`,
  xUnit = 70,
  showToolTip = false,
}) => {
  const chartWidth = Math.max(catergoricalAxis.length * xUnit, minChartWidth);
  const totalYDivisions = Math.floor(chartHeight / 50);
  const max = Math.max(...numericalAxes.map(na => na.data).flat());
  const yUnit = max / totalYDivisions;
  const maxYValue = max + yUnit;
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <NumericalAxis
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
                chartHeight={chartHeight}
                xUnit={xUnit}
              />
            </G>
            <G>
              {numericalAxes.map((na, index) => {
                return (
                  <DataLine
                    numericalAxisValues={na}
                    xUnit={xUnit}
                    chartHeight={chartHeight}
                    maxYValue={maxYValue}
                    key={index}
                  />
                );
              })}
              {showToolTip &&
                numericalAxes.map((na, index) => {
                  return (
                    <Labels
                      numericalAxisValues={na}
                      xUnit={xUnit}
                      chartHeight={chartHeight}
                      maxYValue={maxYValue}
                      modifyToolTipLabel={modifyToolTipLabel}
                      key={index}
                      categoricalAxis={catergoricalAxis}
                    />
                  );
                })}
            </G>
          </Svg>
          <CategoricalAxis categoricalAxis={catergoricalAxis} xUnit={xUnit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default LineChart;
