import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'teal',
    marginTop: 45,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default App;
