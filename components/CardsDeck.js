import React from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';

const CardsDeck = (props) => {
  return (
    <FlatList
      data={props.cards}
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
    width: 146,
    height: 205,
    margin: 3,
  },
});

export default CardsDeck;
