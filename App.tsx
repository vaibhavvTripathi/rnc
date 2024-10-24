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

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Launchlib>
        <LineChart
          catergoricalAxis={['Jan', 'Feb', 'March','Apr','June','July']}
          numericalAxes={{
            'Series 1': {
              data: [10, 15, 20, 25, 12, 13, 14],
              strokeColor: 'red',
              strokeWidth: 2,
            },
            'Series 2': {
              data: [20, 15, 30, 40, 22, 13, 14],
              strokeWidth: 2,
              strokeColor: 'blue',
            },
          }}
          chartHeight={500}
          minChartWidth={200}
        />
      </Launchlib>
    </SafeAreaView>
  );
}

export default App;
