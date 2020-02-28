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
import {store} from 'src/stores/companiesStore';
declare var global: {HermesInternal: null | {}};

const mocks = [
  {
    symbol: 'WIX',
    companyName: 'Wix.com Ltd.',
    price: 145.43,
    change: 1.11,
    changePercent: 0.7691,
  },
  {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
    price: 323.39,
    change: 3.78,
    changePercent: 1.1827,
  },
  {
    symbol: 'TSLA',
    companyName: 'Tesla Inc.',
    price: 777.385,
    change: 3.005,
    changePercent: 0.3881,
  },
  {
    symbol: 'MSFT',
    companyName: 'Microsoft Corporation',
    price: 183.29,
    change: -1.15,
    changePercent: -0.6235,
  },
  {
    symbol: 'BMWYY',
    companyName: 'Bayerische Motoren Werke Aktiengesellschaft',
    price: 23.39,
    change: 0.19,
    changePercent: 0.819,
  },
];

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={s.cardListContainer}>
          <ScrollView style={{flex: 1, paddingTop: 20}}>
            {mocks.map(stock => (
              <Card key={stock.symbol} stock={stock} />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'red',
            borderRadius: 50,
            position: 'absolute',
            bottom: 20,
            right: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}>
          <Text style={{color: 'white', fontSize: 36}}>+</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const Card = (props: any) => (
  <View style={s.cardContainer}>
    <View style={s.cardSymbol}>
      <Text>{props.stock.symbol}</Text>
    </View>
    <View style={s.carDescription}>
      <Text>{props.stock.companyName}</Text>
    </View>
  </View>
);

const s = StyleSheet.create({
  cardContainer: {
    height: 150,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  cardSymbol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  carDescription: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
  cardListContainer: {
    flex: 1,
  },
});
//const styles = StyleSheet.create({});

export default App;
