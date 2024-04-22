// Todo:

// Add stars and data
// up and down arrow votes change
// align the items


import React from 'react';
import { View,Image, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const ReviewsScreen = ({ movie }) => {
    const navigation = useNavigation();
  const reviews = movie.item.reviews || []; 
  const handleProfilePress=(name)=>{
    navigation.navigate('MYPROFILE',{name});
  }
  const handleReviewPress = (review) => {
    navigation.navigate('CLICKEDREVIEWS', { review,"title":movie.item.title,"image":movie.item.imageUrl });
  };
  const renderReviewCard = ({ item }) => {
    console.log("item",item)
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
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>ReviewsScreen</Text>
      <FlatList
        data={reviews}
        renderItem={renderReviewCard}
        keyExtractor={(item, index) => index.toString()} 
        showsVerticalScrollIndicator={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
    reviewCard: {
      backgroundColor: '#333',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10, 
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
        marginLeft: 5, // Add some spacing between the first two items
      },
      reviewHeaderTextRight: {
        marginRight: 5, // Add some spacing between the last two items
      },
    reviewContent: {
      color: 'white',
      marginBottom: 5,
    },
    reviewFooter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    arrowContainer: {
      flexDirection: 'row',
      marginRight: 10
    },
    reviewDateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
    },
    reviewText: {
      color: 'white',
      marginRight: 5,
    },
    dateText: {
      color: 'white',
    },
  });

  

export default ReviewsScreen;
