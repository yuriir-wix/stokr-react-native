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
import {SafeAreaView, ScrollView} from 'react-native';
import Companies from './src/components/companies/companies';
declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Companies />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

//const styles = StyleSheet.create({});

export default App;
