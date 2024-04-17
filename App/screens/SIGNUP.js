import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SIGNUP = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <Text style={[styles.signUp, styles.signFlexBox]}>Sign Up</Text>
      <Image
        style={[styles.signupChild, styles.signupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={styles.signupItem}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Image
        style={[styles.signupInner, styles.signupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.signupChild1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[styles.signupChild1, styles.signupChild1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("HOME")}
      />
      <Text style={[styles.fullName, styles.fullNameTypo]}>Full Name</Text>
      <Text
        style={[styles.emailOrPhone, styles.emailOrPhonePosition]}
      >{`Email or phone number `}</Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.confirmPassword, styles.passwordTypo]}>
        Confirm Password
      </Text>
      <Text style={[styles.displayName, styles.passwordTypo]}>
        Display Name
      </Text>
      <Text style={[styles.signUp1, styles.signFlexBox]}>Sign UP</Text>
      <View style={styles.logosnetflix}>
        <View style={styles.logo}>
          <Image
            style={styles.tvIcon}
            contentFit="cover"
            source={require("../assets/tv.png")}
          />
          <Text style={[styles.moviebox, styles.signFlexBox]}>Reviewz</Text>
        </View>
      </View>
      <View style={styles.barsHomeIndicator}>
        <View style={[styles.background, styles.timePosition]} />
        <View style={[styles.line, styles.lineBg]} />
      </View>
      <Pressable
        style={[styles.arrowLeftLarge, styles.emailOrPhonePosition]}
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
  signFlexBox: {
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
  },
  signupLayout: {
    width: 328,
    borderRadius: Border.br_sm,
    left: 21,
    position: "absolute",
  },
  signupChild1Layout: {
    height: 54,
    left: 19,
    width: 328,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  fullNameTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
  },
  emailOrPhonePosition: {
    left: 23,
    position: "absolute",
  },
  passwordTypo: {
    left: 26,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    position: "absolute",
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
  signUp: {
    top: 116,
    fontSize: FontSize.size_36xl,
    width: 241,
    height: 71,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
    left: 21,
  },
  signupChild: {
    top: 238,
    height: 49,
  },
  signupItem: {
    top: 332,
    height: 53,
    left: 19,
    width: 328,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  signupInner: {
    top: 428,
    height: 48,
  },
  rectangleIcon: {
    top: 525,
  },
  signupChild1: {
    top: 626,
  },
  rectanglePressable: {
    top: 707,
    left: 69,
    backgroundColor: Color.colorRed_100,
    width: 218,
    height: 65,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  fullName: {
    top: 206,
    left: 30,
    position: "absolute",
  },
  emailOrPhone: {
    top: 395,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
  },
  password: {
    top: 493,
  },
  confirmPassword: {
    top: 589,
  },
  displayName: {
    top: 299,
  },
  signUp1: {
    top: 727,
    left: 140,
    fontSize: FontSize.size_xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
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
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    left: "0%",
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
  signup: {
    flex: 1,
    height: 805,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorBlack,
  },
});

export default SIGNUP;
