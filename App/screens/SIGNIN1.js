import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SIGNIN1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn2}>
      <Text style={[styles.signIn, styles.signInFlexBox]}>Sign In</Text>
      <View style={[styles.signIn2Child, styles.signLayout]} />
      <View style={[styles.signIn2Item, styles.signLayout]} />
      <Pressable
        style={styles.signIn2Inner}
        onPress={() => navigation.navigate("HOME")}
      />
      <Text
        style={[styles.emailOrPhone, styles.paswordTypo]}
      >{`Email or phone number `}</Text>
      <Text style={[styles.pasword, styles.paswordTypo]}>Pasword</Text>
      <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign In</Text>
      <View style={styles.logosnetflix}>
        <View style={styles.logo}>
          <Image
            style={styles.tvIcon}
            contentFit="cover"
            source={require("../assets/tv.png")}
          />
          <Text style={[styles.moviebox, styles.signInFlexBox]}>Reviewz</Text>
        </View>
      </View>
      <Text style={[styles.forgotPassoword, styles.timeTypo]}>
        Forgot Passoword
      </Text>
      <View style={styles.barsHomeIndicator}>
        <View style={[styles.background, styles.timePosition]} />
        <View style={[styles.line, styles.lineBg]} />
      </View>
      <Pressable
        style={styles.arrowLeftLarge}
        onPress={() => navigation.navigate("SIGNIN")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <View style={styles.barsPosition}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.lineBg]} />
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
        <View style={[styles.barsStatusBarIphoneL1, styles.barsPosition]}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.timePosition]} />
            <Image
              style={styles.capIcon}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.lineBg]} />
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInFlexBox: {
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
  },
  signLayout: {
    width: 328,
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_sm,
    left: 23,
    position: "absolute",
  },
  paswordTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    left: 54,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  signIn1Typo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  timeTypo: {
    fontSize: FontSize.size_mini,
    color: Color.lightThemeSystemSurface,
  },
  timePosition: {
    left: "0%",
    position: "absolute",
  },
  lineBg: {
    backgroundColor: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  barsPosition: {
    height: 44,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  signIn: {
    top: 186,
    fontSize: FontSize.size_36xl,
    width: 190,
    height: 71,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    left: 23,
    position: "absolute",
  },
  signIn2Child: {
    top: 298,
    height: 57,
  },
  signIn2Item: {
    top: 365,
    height: 53,
  },
  signIn2Inner: {
    top: 486,
    left: 78,
    backgroundColor: Color.colorRed_100,
    width: 218,
    height: 65,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  emailOrPhone: {
    top: 315,
  },
  pasword: {
    top: 378,
  },
  signIn1: {
    top: 506,
    left: 152,
    fontSize: FontSize.size_xl,
    color: Color.lightThemeSystemSurface,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
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
    marginLeft: 24,
  },
  logo: {
    top: 6,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  logosnetflix: {
    top: 49,
    left: 84,
    width: 207,
    height: 56,
    position: "absolute",
    overflow: "hidden",
  },
  forgotPassoword: {
    top: 434,
    left: 37,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  background: {
    top: "-2.84%",
    bottom: "2.84%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  line: {
    marginLeft: -60.7,
    bottom: 9,
    left: "50%",
    borderRadius: 91,
    width: 121,
    height: 5,
  },
  barsHomeIndicator: {
    top: 773,
    left: -16,
    width: 375,
    height: 32,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftLarge: {
    top: 68,
    width: 24,
    height: 24,
    left: 23,
    position: "absolute",
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
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    fontSize: FontSize.size_mini,
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
  barsStatusBarIphoneL1: {
    backgroundColor: Color.colorBlack,
  },
  signIn2: {
    flex: 1,
    height: 805,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorBlack,
  },
});

export default SIGNIN1;
