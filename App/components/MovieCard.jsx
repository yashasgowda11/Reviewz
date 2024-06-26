import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { imagePaths } from '../data';
const MovieCard = ({ movie, onPress, circular }) => {
  const imageURI = imagePaths[movie.item.imageUrl];
  const cardStyle = circular ? styles.circularCard : styles.card;
  
  return (
    <TouchableOpacity onPress={() => onPress(movie)}>
      <View style={cardStyle}>
        <Image style={styles.image} source={imageURI} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  circularCard: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 75,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default MovieCard;
