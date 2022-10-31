import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import HomePage from './screens/HomePage';



const App = () => {
  return (
    <View style={styles.container}>
      <HomePage/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
