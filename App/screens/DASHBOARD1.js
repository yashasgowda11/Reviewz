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
        <Text style={styles.headerText}>Dashboard</Text>
      
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
    // <View style={styles.dashboard1}>
    //   <View style={styles.barsHomeIndicator}>
    //     <View style={[styles.background, styles.borderPosition]} />
    //     <View style={styles.line} />
    //   </View>
    //   <View style={[styles.barsStatusBarIphoneL, styles.myProfilePosition]}>
    //     <View style={styles.battery}>
    //       <View style={[styles.border, styles.borderBorder]} />
    //       <Image
    //         style={[styles.capIcon, styles.capIconPosition]}
    //         contentFit="cover"
    //         source={require("../assets/cap.png")}
    //       />
    //       <View style={styles.capacity} />
    //     </View>
    //     <Image
    //       style={styles.wifiIcon}
    //       contentFit="cover"
    //       source={require("../assets/wifi.png")}
    //     />
    //     <Image
    //       style={styles.cellularConnectionIcon}
    //       contentFit="cover"
    //       source={require("../assets/cellular-connection.png")}
    //     />
    //     <View style={styles.timeStyle}>
    //       <Text style={styles.time}>9:41</Text>
    //     </View>
    //     <View style={styles.barsStatusBarIphoneLChild} />
    //   </View>
    //   <Image
    //     style={styles.tvIcon}
    //     contentFit="cover"
    //     source={require("../assets/tv1.png")}
    //   />
    //   <View style={[styles.dashboard1Child, styles.borderBorder]} />
    //   <Text
    //     style={[styles.helpPoicies, styles.signOut1Typo]}
    //   >{`Help & Poicies`}</Text>
    //   <Pressable
    //     style={styles.signOut}
    //     onPress={() => navigation.navigate("Onboarding1")}
    //   >
    //     <Text style={styles.signOut1Typo}>Sign Out</Text>
    //   </Pressable>
    //   <Pressable
    //     style={[styles.arrowLeftLarge, styles.accountPosition]}
    //     onPress={() => navigation.navigate("HOME")}
    //   >
    //     <Image
    //       style={styles.icon}
    //       contentFit="cover"
    //       source={require("../assets/arrowleftlarge.png")}
    //     />
    //   </Pressable>
    //   <View style={styles.myProfileParent}>
    //     <Pressable
    //       style={[styles.myProfile, styles.myProfilePosition]}
    //       onPress={() => navigation.navigate("MYPROFILE")}
    //     >
    //       <Text style={[styles.myProfile1, styles.accountTypo]}>
    //         My Profile
    //       </Text>
    //     </Pressable>
    //     <Text style={[styles.account, styles.accountTypo]}>Account</Text>
    //     <Pressable
    //       style={styles.myReviews}
    //       onPress={() => navigation.navigate("MYREVIEWS")}
    //     >
    //       <Text style={[styles.myReviews1, styles.accountTypo]}>
    //         My Reviews
    //       </Text>
    //     </Pressable>
    //     <Pressable
    //       style={styles.myList}
    //       onPress={() => navigation.navigate("MYLIST")}
    //     >
    //       <Text style={[styles.myList1, styles.accountTypo]}>My List</Text>
    //     </Pressable>
    //   </View>
    //   <Text style={styles.dashboard}>Dashboard</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingTop: 60
  },
  headerItem: {
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%', // Adjust as needed
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
