import * as React from "react";
import { StyleSheet, View,  Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { moviesData } from "../data"
const MYPROFILE=({route})=>{
  const { name,type } = route.params;
    const navigation = useNavigation();
    const handleLeftPress = () => {
        navigation.goBack()
      }

// Initialize variables to store stats
let totalUpvotes = 0;
let totalReviews = 0;

// Iterate through each movie
moviesData.forEach(movie => {
    // Iterate through each review in the movie
    movie.reviews.forEach(review => {
        // Check if the review is by the target reviewer
        if (review.name === name) {
            // Add upvotes and increment total reviews
            totalUpvotes += review.upVotes;
            totalReviews++;
        }
    });
});

    
    return(
      
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={handleLeftPress} style={styles.headerItem}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Profile</Text>
        <TouchableOpacity  style={styles.headerItem}>
          <Icon name="home" size={30} color="white" />
        </TouchableOpacity> 
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Icon style={{paddingTop:30}} name="user-circle-o" size={100} color="white" />
      <Text style={{paddingTop:20,paddingBottom:20,color:"white",fontSize:50}}>{name}</Text>
      <Text style={{paddingBottom:20,color:"white",fontSize:50}}>{type}</Text>
      <Text style={{paddingBottom:20,color:"white",fontSize:30}}><Icon name="chevron-up" size={30} color="white" />{totalUpvotes} upvotes</Text>
      <Text style={{paddingBottom:20,color:"white",fontSize:30}}>{totalReviews} reviews</Text>
      
      </View>
      
      </View>
        
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:40
  },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingVertical: 10,
        paddingTop:20
      },
      headerItem: {
        paddingHorizontal: 10,
      },
      headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },

})

export default MYPROFILE;