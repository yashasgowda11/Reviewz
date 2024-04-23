import * as React from "react";
import { StyleSheet, View,  Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { imagePaths } from '../data';
import StarRating from "../components/StarRating";

const CLICKEDREVIEWS = ({route}) => {
  const { review, title, image } = route.params;
  const imageURI = imagePaths[image];
  const navigation = useNavigation();

  const handleLeftPress = () => {
    navigation.goBack()
  }

  const handleHomePress = () => {
    navigation.navigate("HOME")
  }
  const handleProfilePress=(name,type)=>{
    navigation.navigate('MYPROFILE',{name,type});
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLeftPress} style={styles.headerItem}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity onPress={handleHomePress} style={styles.headerItem}>
          <Icon name="home" size={30} color="white" />
        </TouchableOpacity> 
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.contentContainer}>
          <Image style={{ width: "100%", height: 250 }} source={imageURI} />
          <View style={styles.reviewHeader}>
          <TouchableOpacity onPress={()=>handleProfilePress(review.name,review.type)} style={styles.headerItem}>
            <Icon name="user" size={50} color="white" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
            <TouchableOpacity onPress={()=>handleProfilePress(review.name,review.type)} style={styles.headerItem}>
              <Text style={styles.headerText}>{review.name}</Text>
              </TouchableOpacity>
              <Text style={styles.headerText}>{review.type}</Text>
            </View>
            <View style={styles.voteContainer}>
              <Icon name="chevron-up" size={30} color="white" />
              <Text style={styles.headerText}>{review.upVotes} upvotes</Text>
            </View>
          </View>
          <View style={styles.reviewHeader} >
            {review.spoilerTag && 
              <Image
                source={require("../assets/S.jpeg")}
                style={{ height: 30, width: 30, marginLeft: 10, marginRight: 10 }} 
              /> 
            }
            {review.spoilerTag && <Text style={{ color: "white", fontSize: 20, paddingLeft: 30 }}>Contains Spoilers</Text>}
          </View>
          <Text style={{ color: "white", fontSize: 15, paddingTop: 20, paddingBottom: 20 }}>{review.review}</Text>
          <View style={styles.reviewHeader}>
            <Icon style={{ paddingLeft: 20, paddingRight: 20 }} name="arrow-circle-up" size={30} color="white" />
            <Icon name="arrow-circle-down" size={30} color="white" />
          </View>
          
          <View style={styles.tagsContainer}>
  {review.tags?.map((tag, index) => (
    <View key={index} style={styles.tag}>
      <Text style={styles.tagText}>#{tag} ✔️</Text>
    </View>
  ))}
</View>
<Text style={{ color: "white", fontSize: 30, paddingTop: 20, paddingBottom: 30 }}>Star Rating</Text>
          <StarRating rating={review.rating} />
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:40
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  textContainer: {
    marginLeft: 10,
  },
  voteContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default CLICKEDREVIEWS;
