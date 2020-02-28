/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={s.header} />
        <View style={s.body}>
          <Day color={'#92D7E7'} />
          <Day color={'#FFC74C'} />
          <Day color={'#A17B94'} />
          <Day color={'#EE6A54'} />
          <Day color={'#ABC177'} />
        </View>
      </View>
    </>
  );
};
const Day = (props: {color: string}) => {
  return (
    <View style={{flex: 1, backgroundColor: props.color}}>
      <View style={s.dayHeader} />
      <View style={s.dayFooter}>
        <Text style={s.label}>Mon</Text>
        <Text style={s.label}>24^</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: '#00bbd6',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  dayHeader: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.13)',
  },
  dayFooter: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  label: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
});
//const styles = StyleSheet.create({});

export default App;
