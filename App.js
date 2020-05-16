import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColorBox from './components/ColorBox';
import CardsDeck from './components/CardsDeck';

import React from 'react';

class App extends React.Component {
  state = {
    cards: [],
    //   {
    //     code: '9H',
    //     image: 'https://deckofcardsapi.com/static/img/9H.png',
    //     images: {
    //       png: 'https://deckofcardsapi.com/static/img/9H.png',
    //       svg: 'https://deckofcardsapi.com/static/img/9H.svg',
    //     },
    //     suit: 'HEARTS',
    //     value: '9',
    //   },
    //   {
    //     code: '4S',
    //     image: 'https://deckofcardsapi.com/static/img/5S.png',
    //     images: {
    //       png: 'https://deckofcardsapi.com/static/img/4S.png',
    //       svg: 'https://deckofcardsapi.com/static/img/4S.svg',
    //     },
    //     suit: 'SPADES',
    //     value: '4',
    //   },
    // ],
  };

  getDeck = async () => {
    const newDeck = await fetch(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=2',
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
    const cards = await this.getDeck();
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
          <ColorBox colorName="Cyan" colorHex="#2aa198" />
          <ColorBox colorName="Red" colorHex="#c62828" />
          <ColorBox colorName="Blue" colorHex="#2979ff" />
          <ColorBox colorName="Yellow" colorHex="#fff176" />
          <CardsDeck cards={this.state.cards} />
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
