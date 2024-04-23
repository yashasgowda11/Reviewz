import React, { useState } from 'react';
import { View, Text,ScrollView,FlatList,Image, TouchableOpacity, StyleSheet } from 'react-native';
 import { moviesData } from '../data';
import { MoviesList } from '../components/MoviesList';
import { useNavigation } from '@react-navigation/native';
import MovieCard from '../components/MovieCard';
import Icon from 'react-native-vector-icons/FontAwesome';



const StarReviews = ({route}) => {
    const { movie,key } = route.params; 
    console.log(movie)
  const navigation = useNavigation();
  const handleBackPress=()=>{
    navigation.goBack()
  }
    const renderReviewCard = ({ item }) => {
      const handleReviewPress = (review) => {
        navigation.navigate('CLICKEDREVIEWS', { review,"title":movie.item.title,"image":movie.item.imageUrl });
      };
      // const handleProfilePress=(name)=>{
      //   navigation.navigate('MYPROFILE',{name});
    //}
      return (
          <>
          <TouchableOpacity onPress={()=>handleReviewPress(item)}>
        <View style={styles.reviewCard}>
         <View style={styles.reviewHeader}>
         <TouchableOpacity onPress={()=>handleProfilePress(item.name)} style={styles.headerItem}>
          <Icon name="user" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.reviewHeaderText}>{item.name}</Text>
         
          {item.spoilerTag && <Image
            source={require("../assets/S.jpeg")}
            style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10 }} 
          />}
          <Text style={styles.reviewHeaderText}>{item.type}</Text>
        </View>
    
          
          <Text style={styles.reviewContent}>
            {item.review.length > 50 ? `${item.review.substring(0, 50)}...more` : item.review}
          </Text>
          
          <View style={styles.reviewFooter}>
            <View style={styles.arrowContainer}>
              <Icon name="arrow-circle-up" size={20} color="white" />
              <Icon name="arrow-circle-down" size={20} color="white" />
            </View>
            <View style={styles.reviewDateContainer}>
              {/* ToDO:
              Add stars and date */}
              {/* <Text style={styles.reviewText}>{item.review}</Text> */}
              {/* <Text style={styles.dateText}>{item.date}</Text> */}
            </View>
          </View>
        </View>
        </TouchableOpacity>
        
        </>
      );
    };
    
  
  return(
    <View style={{flex: 1, backgroundColor: "black"}}>
    <ScrollView contentContainerStyle={[styles.scrollViewContent, {flexGrow: 1}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.headerItem}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={[styles.headerText, styles.centerText]}>{movie.item.title}</Text>
        <TouchableOpacity onPress={handleBackPress} style={styles.headerItem}>
          <Icon name="home" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 20, paddingTop: 20, paddingBottom: 20, textAlign: "center", color: "white", fontWeight: "bold"}}>
        {key} star reviews
      </Text>
      <FlatList
        data={movie.item.reviews.filter(review => review.rating == key)}
        renderItem={renderReviewCard}
        keyExtractor={(item, index) => index.toString()} 
        showsVerticalScrollIndicator={false} 
      />
    </ScrollView>
  </View>
  )

}
const styles = StyleSheet.create({
  reviewCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10, 
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:40
  },
  reviewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    reviewHeaderText: {
      color: 'white',
    },
    reviewHeaderTextLeft: {
      marginLeft: 5, 
    },
    reviewHeaderTextRight: {
      marginRight: 5, 
    },
  reviewContent: {
    color: 'white',
    marginBottom: 5,
  },
  reviewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'black',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      paddingVertical: 10,
    },
    headerItem: {
      paddingHorizontal: 10,
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    scrollViewContent: {
      flexGrow: 1,
      paddingTop: 50,
    },
    container: {
      flex: 1,
      marginTop: 50,
    },
    card: {
      width: 150,
      height: 200,
      marginHorizontal: 10,
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    descriptionContainer: {
      padding: 10,
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#cccccc',
    },
    description: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
   
  export default StarReviews;