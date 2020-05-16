import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CardsDeck from './components/CardsDeck';
import RefreshButton from './components/RefreshButton';

import React from 'react';

class App extends React.Component {
  state = {
    cards: [],
    numOfCards: 2,
  };

  getDeck = async (numOfCards) => {
    const newDeck = await fetch(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=' + numOfCards,
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

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>
            Here are some boxes of different colors
          </Text>
          <CardsDeck cards={this.state.cards} />
          <RefreshButton numOfCards={this.state.numOfCards} />
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
