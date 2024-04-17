import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const LOGO = () => {
  return (
    <View style={styles.logo}>
      <View style={[styles.barsHomeIndicator, styles.barsPosition]}>
        <View style={[styles.background, styles.timePosition]} />
        <View style={styles.line} />
      </View>
      <View style={styles.barsStatusBarIphoneL}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={styles.capIcon}
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
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <View style={[styles.barsStatusBarIphoneLChild, styles.barsPosition]} />
      </View>
      <View style={styles.logosnetflix}>
        <View style={styles.logo1}>
          <Image
            style={styles.tvIcon}
            contentFit="cover"
            source={require("../assets/tv.png")}
          />
          <Text style={styles.moviebox}>Reviewz</Text>
        </View>
      </View>
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
  timePosition: {
    left: "0%",
    position: "absolute",
  },
  background: {
    top: "-2.84%",
    bottom: "2.84%",
    right: "0%",
    height: "100%",
    left: "0%",
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
    borderStyle: "solid",
    borderColor: Color.lightThemeSystemSurface,
    borderWidth: 1,
    opacity: 0.35,
    height: "100%",
    left: "0%",
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
    right: "0%",
    position: "absolute",
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
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
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
    height: 737,
  },
  barsStatusBarIphoneL: {
    top: 0,
    right: 0,
    height: 44,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  tvIcon: {
    width: 50,
    height: 50,
  },
  moviebox: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    textAlign: "left",
    marginLeft: 24,
    color: Color.lightThemeSystemSurface,
  },
  logo1: {
    top: 6,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  logosnetflix: {
    top: 332,
    left: 84,
    width: 207,
    height: 56,
    position: "absolute",
    overflow: "hidden",
  },
  logo: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default LOGO;
