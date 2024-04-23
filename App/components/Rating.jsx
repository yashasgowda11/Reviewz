import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from "@react-navigation/native";

const Rating = () => {
    const navigation = useNavigation();
    const handleReviewPress=()=>{
      navigation.navigate("REVIEW")
    }
  return (
    <>
    <View style={styles.container}>
      <View style={styles.item}>
        <Icon name="plus" size={20} color="white" />
        <Text style={styles.text}>My List</Text>
      </View>
      <TouchableOpacity onPress={handleReviewPress} style={styles.headerItem}>
      <View style={styles.item}>
        <Icon name="star" size={60} color="white" />
        <Text style={styles.text}>Review</Text>
      </View>
      </TouchableOpacity>
      <View style={styles.item}>
        <Icon name="send" size={30} color="white" />
        <Text style={styles.text}>Recommend</Text>
      </View>
    </View>
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
