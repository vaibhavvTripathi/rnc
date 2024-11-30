/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Launchlib from './layout/components/Launchlib';
import LineChart from './lib/lineChart/LineChart';
import {PieChart, Slice} from './lib/pieChart/PieChart';
const data: Slice[] = [
  {value: 30, color: '#FF5733', label: {value: 'hii', color: 'red'}},
  {value: 20, color: '#33FF57', label: {value: 'hii', color: 'red'}},
  {value: 50, color: '#3357FF', label: {value: 'hii', color: 'red'}},
  {value: 10, color: 'gray', label: {value: 'hii', color: 'red'}},
  {value: 20, color: '#33FF57', label: {value: 'hii', color: 'red'}},
];
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Launchlib>
        <LineChart
          catergoricalAxis={[
            'Jan',
            'Feb',
            'March',
            'Apr',
            'June',
            'July',
            'Aug',
            'Sept',
          ]}
          numericalAxes={[
            {
              data: [1, 9, 1.5, 1, 4.5, 2, 1, 5],
              strokeColor: 'red',
              strokeWidth: 2,
            },
            {
              data: [12, 21, 12],
              strokeColor: 'blue',
              strokeWidth: 2,
            },
            {
              data: [2, 21, 12],
              strokeColor: 'green',
              strokeWidth: 2,
            },
          ]}
          xUnit={200}
          chartHeight={500}
          showToolTip={true}
          categoricalAxisHeight={14}
        />
        <PieChart size={250} data={data} variant="offset" />
      </Launchlib>
    </SafeAreaView>
  );
}

export default App;
