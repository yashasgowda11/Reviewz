import React from 'react';
import { View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ rating,size }) => {
  if (!size){
    size=50
  }
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Icon name="star" size={size} color="yellow" key={i} style={styles.star} /> );
      } else {
        stars.push(<Icon name="star-o" size={size} color="yellow" key={i} style={styles.star} />);
      }
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      {renderStars()}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
     
    },
    star: {
      borderColor: 'black',
      borderWidth: 1,
      marginHorizontal: 2,
      marginLeft: 5,
    },
  });

export default StarRating;
