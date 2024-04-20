import React from 'react';
import { View, Text, FlatList} from 'react-native';
const MoviesList=({title,moviesList,renderMovie,moviesData})=>{
    return(
        <View >
      <Text style={{color:"white",fontSize:23,paddingTop:20,paddingBottom:20}}>{title}</Text>
      <FlatList
        data={moviesData.filter(movie => moviesList.includes(movie.id))}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
    )
}
export {MoviesList}