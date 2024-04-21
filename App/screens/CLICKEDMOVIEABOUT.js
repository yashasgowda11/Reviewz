import React,{useState} from 'react';
import { View, Text,ScrollView ,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { imagePaths, moviesData } from '../data';
import StarRating from '../components/StarRating';
import Rating from '../components/Rating';
import MyScreen from '../components/MovieAboutTab';
import { MoviesList } from '../components/MoviesList';
import MovieCard from "../components/MovieCard"
const ClickedMovieAbout = ({ route }) => {
  const { movie } = route.params; 
  const [selectedMovie, setSelectedMovie] = useState(null);
  const imageURI = imagePaths[movie.item.imageUrl];
  const navigation = useNavigation();

  console.log(movie)
  const handleBackPress = () => {
    navigation.navigate('HOME');
  };
  const handleMoviePress = (movie) => {
    setSelectedMovie(movie);
    navigation.navigate('CLICKEDMOVIEABOUT', { movie });
  };
  const renderMovie = ({ item,extradata }) => {
    return <MovieCard movie={item} onPress={handleMoviePress} circular={extradata.circular}/>;
  };
  const circularExtradata={circular:false}
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={{backgroundColor:"black"}}>
    <View style={styles.header}>
    <TouchableOpacity onPress={handleBackPress} style={styles.headerItem}>
          <Icon name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
      <Text style={[styles.headerText, styles.centerText]}>{movie.item.title}</Text>
      <TouchableOpacity onPress={handleBackPress} style={styles.headerItem}>
          <Icon name="home" size={30} color="white" />
      </TouchableOpacity>
      </View>
       <Image style={{width:"100%",height:250 }} source={imageURI} />
       <Text style={{color:"green",textAlign:"right",fontWeight: "bold"}}>90 % Match</Text>
       <StarRating rating={movie.item.overallRating}/>
       <Text style={{color:"white",textAlign:"left",paddingBottom:40}}>{movie.item.reviews.length} reviews</Text>
       <Rating />
       <MyScreen movie={movie}/>
       <MoviesList title="Similarly Rated Movies" moviesList={[1,2,3,4,5]} renderMovie={(item) => renderMovie({ item,extradata:circularExtradata  })} moviesData={moviesData} />
       </View>
       </ScrollView>
       
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
    paddingTop:60
  },
  headerItem: {
    marginRight: 10, 
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  centerText: {
    flexGrow: 1, 
    textAlign: 'center', 
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%', 
    alignItems: 'center',
  },
  item: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  }
});


export default ClickedMovieAbout;