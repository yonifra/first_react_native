import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColorBox from './components/ColorBox';
import CardsDeck from './components/CardsDeck';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>
            Here are some boxes of different colors
          </Text>
          <ColorBox colorName="Cyan" colorHex="#2aa198" />
          <ColorBox colorName="Red" colorHex="#c62828" />
          <ColorBox colorName="Blue" colorHex="#2979ff" />
          <ColorBox colorName="Yellow" colorHex="#fff176" />
          <CardsDeck />
        </View>
      </SafeAreaView>
    );
  }
}

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
