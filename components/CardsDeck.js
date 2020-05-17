import React from 'react';
import { StyleSheet, FlatList, Image, View } from 'react-native';
import Draggable from 'react-native-draggable';

const CardsDeck = (props) => {
  // if (props.cards.length === 0) {
  //   return <View />;
  // }

  // console.log(props.cards);

  return (
    // <View>
    //   <Draggable
    //     imageSource={props.cards[0].image}
    //     renderSize={80}
    //     x={200}
    //     y={300}
    //     onLongPress={() => console.log('long press')}
    //     onShortPressRelease={() => console.log('press drag')}
    //     onPressIn={() => console.log('in press')}
    //     onPressOut={() => console.log('out press')}
    //   />
    // </View>
    <FlatList
      data={props.cards}
      renderItem={({ item }) => (
        <Image
          style={[styles.cardImage]}
          source={{
            uri: item.image,
          }}
        />
      )}
      keyExtractor={(item, index) => item.code + index}
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
