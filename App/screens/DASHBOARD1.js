import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const DASHBOARD1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard1}>
      <View style={styles.barsHomeIndicator}>
        <View style={[styles.background, styles.borderPosition]} />
        <View style={styles.line} />
      </View>
      <View style={[styles.barsStatusBarIphoneL, styles.myProfilePosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <View style={styles.barsStatusBarIphoneLChild} />
      </View>
      <Image
        style={styles.tvIcon}
        contentFit="cover"
        source={require("../assets/tv1.png")}
      />
      <View style={[styles.dashboard1Child, styles.borderBorder]} />
      <Text
        style={[styles.helpPoicies, styles.signOut1Typo]}
      >{`Help & Poicies`}</Text>
      <Pressable
        style={styles.signOut}
        onPress={() => navigation.navigate("Onboarding1")}
      >
        <Text style={styles.signOut1Typo}>Sign Out</Text>
      </Pressable>
      <Pressable
        style={[styles.arrowLeftLarge, styles.accountPosition]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <View style={styles.myProfileParent}>
        <Pressable
          style={[styles.myProfile, styles.myProfilePosition]}
          onPress={() => navigation.navigate("MYPROFILE")}
        >
          <Text style={[styles.myProfile1, styles.accountTypo]}>
            My Profile
          </Text>
        </Pressable>
        <Text style={[styles.account, styles.accountTypo]}>Account</Text>
        <Pressable
          style={styles.myReviews}
          onPress={() => navigation.navigate("MYREVIEWS")}
        >
          <Text style={[styles.myReviews1, styles.accountTypo]}>
            My Reviews
          </Text>
        </Pressable>
        <Pressable
          style={styles.myList}
          onPress={() => navigation.navigate("MYLIST")}
        >
          <Text style={[styles.myList1, styles.accountTypo]}>My List</Text>
        </Pressable>
      </View>
      <Text style={styles.dashboard}>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    left: "0%",
    height: "100%",
  },
  myProfilePosition: {
    top: 0,
    position: "absolute",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  signOut1Typo: {
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.size_5xl_7,
    lineHeight: 52,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
  },
  accountPosition: {
    left: 32,
    position: "absolute",
  },
  accountTypo: {
    height: 53,
    fontFamily: FontFamily.bodySm1216Default,
    lineHeight: 52,
    fontSize: FontSize.size_5xl_7,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
  },
  background: {
    top: "-2.84%",
    bottom: "2.84%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  line: {
    marginLeft: -60.7,
    bottom: 9,
    left: "50%",
    borderRadius: 91,
    width: 121,
    height: 5,
    position: "absolute",
    backgroundColor: Color.lightThemeSystemSurface,
  },
  barsHomeIndicator: {
    top: 781,
    height: 32,
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: Color.lightThemeSystemSurface,
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
    height: "100%",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
    overflow: "hidden",
  },
  capacity: {
    height: "64.6%",
    width: "74.07%",
    top: "17.7%",
    right: "17.7%",
    bottom: "17.7%",
    left: "8.23%",
    borderRadius: 1,
    position: "absolute",
    backgroundColor: Color.lightThemeSystemSurface,
  },
  battery: {
    height: "25.68%",
    width: "6.48%",
    top: "39.32%",
    right: "3.84%",
    bottom: "35%",
    left: "89.68%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -4.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  barsStatusBarIphoneLChild: {
    height: 737,
    top: 44,
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    right: 0,
    height: 44,
    backgroundColor: Color.colorBlack,
    top: 0,
    left: 0,
  },
  tvIcon: {
    top: 48,
    left: 324,
    width: 39,
    height: 40,
    position: "absolute",
  },
  dashboard1Child: {
    top: 97,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    left: 0,
  },
  helpPoicies: {
    top: 447,
    left: 116,
    fontSize: FontSize.size_5xl_7,
    position: "absolute",
  },
  signOut: {
    left: 141,
    top: 500,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftLarge: {
    top: 56,
    width: 24,
    height: 24,
  },
  myProfile1: {
    width: 108,
  },
  myProfile: {
    left: 22,
  },
  account: {
    top: 159,
    width: 89,
    left: 32,
    position: "absolute",
  },
  myReviews1: {
    width: 153,
  },
  myReviews: {
    top: 106,
    left: 0,
    position: "absolute",
  },
  myList1: {
    width: 78,
  },
  myList: {
    left: 37,
    top: 53,
    position: "absolute",
  },
  myProfileParent: {
    top: 235,
    left: 111,
    height: 212,
    width: 153,
    position: "absolute",
  },
  dashboard: {
    fontSize: FontSize.size_10xl_7,
    lineHeight: 52,
    left: 116,
    top: 44,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  dashboard1: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default DASHBOARD1;
