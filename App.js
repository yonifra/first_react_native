import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import CardsDeck from './components/CardsDeck';
import RefreshButton from './components/RefreshButton';

import React from 'react';

class App extends React.Component {
  state = {
    cards: [],
    numOfCards: 2,
  };

  getDeck = async (numOfCards) => {
    console.log('fetching cards from server...');
    const newDeck = await fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=${numOfCards}&jokers_enabled=true`,
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });

    return newDeck.cards;
  };

  componentDidMount = async () => {
    const cards = await this.getDeck(this.state.numOfCards);
    this.setState({
      cards,
    });
  };

  handleOnClick = async () => {
    console.log('onClick() called...');
    const cards = await this.getDeck(this.state.numOfCards);
    this.setState({
      cards,
    });
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>
            Here are some boxes of different colors
          </Text>
          <CardsDeck cards={this.state.cards} />
          <Button title="Fetch cards" onPress={this.handleOnClick} />
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
