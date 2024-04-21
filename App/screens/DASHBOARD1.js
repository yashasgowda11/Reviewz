import * as React from "react";
import { StyleSheet, View, Text, Pressable,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

const DASHBOARD1 = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('HOME');
  };
  return (
    <>
    <View style={styles.header}>
    <TouchableOpacity onPress={handleBackPress} style={styles.headerItem}>
          <Icon name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
      <Text style={[styles.headerText, styles.centerText]}>Dashboard</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.content}>
        <Pressable
          style={[styles.item, styles.myProfile]}
          onPress={() => navigation.navigate('MYPROFILE')}
        >
          <Text style={styles.text}>My Profile</Text>
        </Pressable>
        <Pressable
          style={[styles.item, styles.myList]}
          onPress={() => navigation.navigate('MYLIST')}
        >
          <Text style={styles.text}>My List</Text>
        </Pressable>
        <Pressable
          style={[styles.item, styles.myReviews]}
          onPress={() => navigation.navigate('MYREVIEWS')}
        >
          <Text style={styles.text}>My Reviews</Text>
        </Pressable>
        <Pressable
          style={[styles.item, styles.account]}
          onPress={() => navigation.navigate('ACCOUNT')}
        >
          <Text style={styles.text}>Account</Text>
        </Pressable>
        <Pressable
          style={[styles.item, styles.help]}
          onPress={() => navigation.navigate('HELP')}
        >
          <Text style={styles.text}>Help & Policies</Text>
        </Pressable>
        <Pressable
          style={[styles.item, styles.signOut]}
          onPress={() => navigation.navigate('SIGNOUT')}
        >
          <Text style={styles.text}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
        </>   
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

export default DASHBOARD1;
