import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const DASHBOARD = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard2}>
      <View style={[styles.barsHomeIndicator, styles.barsPosition]}>
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
        <View style={[styles.barsStatusBarIphoneLChild, styles.barsPosition]} />
      </View>
      <View style={[styles.dashboard2Child, styles.borderBorder]} />
      <Pressable
        style={styles.arrowLeftLarge}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.dashboard, styles.dashboardLayout]}>Dashboard</Text>
      <View style={[styles.myProfileParent, styles.profileLayout]}>
        <Text style={[styles.myProfile, styles.profileLayout]}>My Profile</Text>
        <Text style={[styles.account, styles.myListTypo]}>Account</Text>
        <Text style={[styles.myReviews, styles.myListTypo]}>My Reviews</Text>
        <Text style={[styles.myList, styles.myListTypo]}>My List</Text>
      </View>
      <Text
        style={[styles.helpPoicies, styles.myListTypo]}
      >{`Help & Poicies`}</Text>
      <Text style={[styles.signOut, styles.myListTypo]}>Sign Out</Text>
      <Image
        style={styles.tvIcon}
        contentFit="cover"
        source={require("../assets/tv1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barsPosition: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  borderPosition: {
    left: "0%",
    height: "100%",
  },
  myProfilePosition: {
    top: 0,
    left: 0,
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  dashboardLayout: {
    lineHeight: 52,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
  },
  profileLayout: {
    width: 199,
    position: "absolute",
  },
  myListTypo: {
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.size_5xl_7,
    lineHeight: 52,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
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
    letterSpacing: 0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
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
    top: 44,
    height: 738,
  },
  barsStatusBarIphoneL: {
    right: 0,
    height: 44,
    backgroundColor: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  dashboard2Child: {
    top: 97,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    left: 0,
    borderStyle: "solid",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftLarge: {
    left: 36,
    top: 58,
    width: 24,
    height: 24,
    position: "absolute",
  },
  dashboard: {
    top: 41,
    left: 129,
    fontSize: FontSize.size_10xl_7,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 52,
    position: "absolute",
  },
  myProfile: {
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    height: 53,
    lineHeight: 52,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    top: 0,
    left: 0,
  },
  account: {
    top: 159,
    left: 47,
    width: 89,
    height: 53,
  },
  myReviews: {
    top: 106,
    left: 15,
    width: 153,
    height: 53,
  },
  myList: {
    top: 53,
    left: 52,
    width: 78,
    height: 53,
  },
  myProfileParent: {
    top: 241,
    left: 95,
    height: 212,
  },
  helpPoicies: {
    top: 453,
    left: 110,
  },
  signOut: {
    top: 506,
    left: 142,
  },
  tvIcon: {
    top: 47,
    left: 324,
    width: 39,
    height: 40,
    position: "absolute",
  },
  dashboard2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default DASHBOARD;
