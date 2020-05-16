import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RefreshButton = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get {props.numOfCards} more...</Text>
    </View>
  );
};

export default RefreshButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'white',
  },
  container: {
    backgroundColor: 'gray',
  },
});
