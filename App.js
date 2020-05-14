import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColorBox from './components/ColorBox';

import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Red" colorHex="#c62828" />
        <ColorBox colorName="Blue" colorHex="#2979ff" />
        <ColorBox colorName="Yellow" colorHex="#fff176" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 45,
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
