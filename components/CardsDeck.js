import React from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';

const getDeck = async () => {
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

const componentDidMount = async () => {
  const cards = await getDeck();
  this.setState({
    cards: cards,
  });
};

const CardsDeck = () => {
  const cards = [
    {
      code: '9H',
      image: 'https://deckofcardsapi.com/static/img/9H.png',
      images: {
        png: 'https://deckofcardsapi.com/static/img/9H.png',
        svg: 'https://deckofcardsapi.com/static/img/9H.svg',
      },
      suit: 'HEARTS',
      value: '9',
    },
    {
      code: '4S',
      image: 'https://deckofcardsapi.com/static/img/4S.png',
      images: {
        png: 'https://deckofcardsapi.com/static/img/4S.png',
        svg: 'https://deckofcardsapi.com/static/img/4S.svg',
      },
      suit: 'SPADES',
      value: '4',
    },
  ];

  return (
    <FlatList
      data={cards}
      renderItem={({ item }) => (
        <Image
          style={styles.cardImage}
          source={{
            uri: item.image,
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: 145,
    height: 205,
  },
});

export default CardsDeck;
