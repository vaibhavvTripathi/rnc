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
              data: [],
              strokeColor: 'blue',
              strokeWidth: 2,
            },
          ]}
          xUnit={120}
          chartHeight={500}
          showToolTip={true}
        />
      </Launchlib>
    </SafeAreaView>
  );
}

export default App;
