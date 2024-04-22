// MyScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './Tabs';
import ReviewsScreen from './ReviewsScreen';
const AboutScreen = ({movie}) => {
  return (
    <>
    <Text  style={{color:"white",fontSize:18,paddingBottom:10}}>{movie.item.MovieGenre}</Text>
    <Text  style={{color:"white"}} >{movie.item.description}</Text>
    </>
  );
};



const CastScreen = ({ movie }) => {
  return (
    <>
      {movie.item.cast.map(item => (
        <View key={item.id}>
          <Text style={{color:"white",paddingTop:10,fontSize:18}}>{item.OriginalName} as {item.NameInMovie}</Text>
          <Text style={{color:"white",paddingBottom:10}}>{item.characterDescription}</Text>
        </View>
      ))}
    </>
  );
};

const Stack = createStackNavigator();

const MyScreen = ({movie}) => {
  const [selectedTab, setSelectedTab] = useState('About');
  console.log(selectedTab,movie)
  return (
    <View style={styles.container}>

      <MyTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab} 
      />

      {selectedTab === 'About' && <AboutScreen movie={movie}/>}
      {selectedTab === 'Reviews' && <ReviewsScreen movie={movie} />}
      {selectedTab === 'Cast' && <CastScreen movie={movie} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
});

export default MyScreen;
