import React, { useState } from 'react';
import { View, Text,ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
 import { moviesData } from '../data';
import { MoviesList } from '../components/MoviesList';
import { useNavigation } from '@react-navigation/native';
import MovieCard from '../components/MovieCard';
import Icon from 'react-native-vector-icons/FontAwesome';

import MySlider from '../components/ImageSliderCard';

const Home = () => {
  const navigation = useNavigation();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [data,setData]=useState(moviesData)
  const handleMoviePress = (movie) => {
    setSelectedMovie(movie);
    navigation.navigate('CLICKEDMOVIEABOUT', { movie });
  };
 
  const renderMovie = ({ item,extradata }) => {
    return <MovieCard movie={item} onPress={handleMoviePress} circular={extradata.circular}/>;
  };
  const handleHomePress = () => {
    navigation.navigate('HOME');
  };

  const handleForYouPress = () => {
    navigation.navigate('FORYOU');
  };

  const handleSearchPress = () => {
    navigation.navigate('SEARCH');
  };

  const handleDrawerPress = () => {
    navigation.navigate('DASHBOARD1');
  };

const circularExtradata={circular:true}
const normalExtradata={circular:false}
  return (
    <>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.header}>
    <TouchableOpacity onPress={handleDrawerPress} style={styles.headerItem}>
          <Icon name="list" size={30} color="white" />
      </TouchableOpacity>
    <TouchableOpacity onPress={handleHomePress} style={styles.headerItem}>
        <Text style={styles.headerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForYouPress} style={styles.headerItem}>
        <Text style={styles.headerText}>For You</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSearchPress} style={styles.headerItem}>
          <Icon name="search" size={30} color="white" />
      </TouchableOpacity>
      </View>
      <View><MySlider /></View>
    <View style={{backgroundColor:"black"}}>
      <MoviesList title="Popular" moviesList={[1,2,3,4,5]} renderMovie={(item) => renderMovie({ item,extradata:circularExtradata  })} moviesData={moviesData} />
    </View>
    <View style={{backgroundColor:"black"}} >
    <MoviesList title="Popular on Netflix" moviesList={[6,7,8,9,10]} renderMovie={(item) => renderMovie({ item,extradata:normalExtradata  })} moviesData={moviesData} />
    </View>
    <View style={{backgroundColor:"black"}}>
    <MoviesList title="Top 10 in India Today" moviesList={[3,4,5,9]} renderMovie={(item) => renderMovie({ item,extradata:normalExtradata  })} moviesData={moviesData} />
    </View>
    <View style={{backgroundColor:"black"}}>
    <MoviesList title="My List" moviesList={[10,7,3,4]} renderMovie={(item) => renderMovie({ item,extradata:normalExtradata  })} moviesData={moviesData} />
    </View>
    <View style={{backgroundColor:"black"}}>
    <MoviesList title="African Movies" moviesList={[9,10,1,2]} renderMovie={(item) => renderMovie({ item,extradata:normalExtradata  })} moviesData={moviesData} />
    </View>
    </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
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
 
export default Home;