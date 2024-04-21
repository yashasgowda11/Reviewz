import React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from "@react-navigation/native";

const Rating = () => {
    const navigation = useNavigation();
  return (
    <>
    <View style={styles.container}>
      {/* First Item */}
      <View style={styles.item}>
        <Icon name="plus" size={20} color="white" />
        <Text style={styles.text}>My List</Text>
      </View>

      {/* Second Item */}
      <View style={styles.item}>
        <Icon name="star" size={60} color="white" />
        <Text style={styles.text}>Review</Text>
      </View>

      {/* Third Item */}
      <View style={styles.item}>
        <Icon name="send" size={30} color="white" />
        <Text style={styles.text}>Recommend</Text>
      </View>
    </View>
    {/* <View >
      
          <Text style={styles.text}>About</Text>
        
        <Pressable
          style={[styles.item, styles.myList]}
          onPress={() => navigation.navigate('REVIEWS')}
        >
          <Text style={styles.text}>Reviews</Text>
        </Pressable>
        <Pressable
          style={[styles.item, styles.myReviews]}
          onPress={() => navigation.navigate('CLICKEDMOVIECAST')}
        >
          <Text style={styles.text}>Cast</Text>
        </Pressable>
    </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  item: {
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    color:"white"
  },
});

export default Rating;
