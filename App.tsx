/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Launchlib from './layout/components/Launchlib';
import {PieChart, Slice} from './lib/pieChart/PieChart';
import BarChart from './lib/barChart/BarChart';
import LineChart from './lib/lineChart/LineChart';
const data: Slice[] = [
  {value: 30, color: '#FF5733', label: {value: 'Mango', color: 'black'}},
  {value: 20, color: '#33FF57', label: {value: 'Orange', color: 'black'}},
  {value: 50, color: '#3357FF', label: {value: 'Peas', color: 'black'}},
  {value: 10, color: 'gray', label: {value: 'Avacado', color: 'black'}},
  {value: 20, color: '#33FF57', label: {value: 'Banana', color: 'black'}},
];
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Launchlib>
        <Text style={{fontSize: 20, marginVertical: 50}}>Simple Bar Chart</Text>
        <BarChart
          catergoricalAxis={['Jan', 'Feb', 'March', 'April', 'May']}
          numericalAxes={[
            {
              data: [100, 233, 322, 122, 34],
              strokeColor: 'blue',
            },
          ]}
          barWidth={100}
          chartHeight={500}
          barGap={20}
          categoricalAxisHeight={50}
          dashedLineGap={20}
          dashedLineWidth={20}
          categoricalLabelTilt={0}
          variant="gradient"
          endOpacity={0.5}
          animationType="timing"
          duration={500}
        />
        <Text style={{fontSize: 20, marginVertical: 50}}>Multi Bar Chart</Text>
        <BarChart
          catergoricalAxis={['Jan', 'Feb', 'March', 'April']}
          numericalAxes={[
            {
              data: [100, 233, 322, 122],
              strokeColor: 'orange',
            },
            {
              data: [70, 263, 222, 122],
              strokeColor: 'pink',
            },
            {
              data: [170, 223, 212, 212],
              strokeColor: 'grey',
            },
          ]}
          barWidth={100}
          chartHeight={500}
          barGap={20}
          categoricalAxisHeight={50}
          dashedLineGap={20}
          dashedLineWidth={20}
          categoricalLabelTilt={0}
          variant="gradient"
          endOpacity={0.5}
          animationType="timing"
          duration={500}
        />
        <Text style={{fontSize: 20, marginVertical: 50}}>
          Simple Line Chart
        </Text>
        <LineChart
          catergoricalAxis={['Jan', 'Feb', 'March', 'April']}
          numericalAxes={[
            {
              data: [100, 133, 122, 122],
              strokeColor: 'red',
              strokeWidth: 2,
            },
          ]}
          xUnit={100}
          chartHeight={300}
          categoricalAxisHeight={50}
          dashedLineGap={20}
          dashedLineWidth={20}
          categoricalLabelTilt={0}
          variant="area"
          showToolTip={true}
          toolTipColor="black"
        />
        <Text style={{fontSize: 20, marginVertical: 50}}>
          Stacked Line Chart
        </Text>
        <LineChart
          catergoricalAxis={['Jan', 'Feb', 'March', 'April', 'May']}
          numericalAxes={[
            {
              data: [100, 133, 122, 122, 121],
              strokeColor: 'pink',
              strokeWidth: 2,
            },
            {
              data: [90, 73, 82, 92, 90],
              strokeColor: 'red',
              strokeWidth: 2,
            },
            {
              data: [20, 43, 42, 42, 69],
              strokeColor: 'grey',
              strokeWidth: 2,
            },
          ]}
          xUnit={100}
          chartHeight={500}
          categoricalAxisHeight={50}
          dashedLineGap={20}
          dashedLineWidth={20}
          categoricalLabelTilt={0}
          variant="area"
          showToolTip={true}
          toolTipColor="black"
        />
        <Text style={{fontSize: 20, marginVertical: 50}}>
          Inscribed Pie Chart
        </Text>
        <PieChart
          size={180}
          data={data}
          variant="inscribed"
          labelFontSize={15}
        />
        <Text style={{fontSize: 20, marginVertical: 50}}>Offset Pie Chart</Text>
        <PieChart size={250} data={data} variant="offset" labelFontSize={15} />
      </Launchlib>
    </SafeAreaView>
  );
}

export default App;
