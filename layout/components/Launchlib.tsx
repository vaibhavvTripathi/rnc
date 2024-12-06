import React, {ReactNode, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {ChartType} from '../models/Charttype';

const data: Array<{label: string; value: ChartType}> = [
  {label: 'Line Chart', value: 'Line Chart'},
  {label: 'Pie Chart', value: 'Pie Chart'},
  {label: 'Bar Chart', value: 'Bar Chart'},
];

const Launchlib = ({children}: {children: ReactNode}) => {
  return (
    <ScrollView style={{padding: 4}}>
      <Text style={{fontSize: 32, marginHorizontal: 'auto', marginTop: 20}}>
        rn-charts-lite
      </Text>
      <View style={{paddingBottom: 100}}>{children}</View>
    </ScrollView>
  );
};

const DropDown = () => {
  const [value, setValue] = useState<ChartType>('Line Chart');

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
    />
  );
};

export default Launchlib;
const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
