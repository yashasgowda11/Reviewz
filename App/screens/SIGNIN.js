import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const SIGNIN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn1}>
      <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
      <Pressable
        style={[styles.signIn1Child, styles.signLayout]}
        onPress={() => navigation.navigate("SIGNIN1")}
      />
      <Text
        style={[styles.emailOrPhone, styles.orTypo]}
      >{`Email or phone number `}</Text>
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      <View style={[styles.signIn1Item, styles.signLayout]} />
      <View style={styles.logosnetflix}>
        <View style={styles.logo}>
          <Image
            style={styles.tvIcon}
            contentFit="cover"
            source={require("../assets/tv.png")}
          />
          <Text style={styles.moviebox}>Reviewz</Text>
        </View>
      </View>
      <Pressable
        style={[styles.continueWithFacebookLeft, styles.continueSpaceBlock]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.facebookLogoIcon, styles.logoIconLayout]}
          contentFit="cover"
          source={require("../assets/facebook-logo.png")}
        />
        <Text style={styles.continueWithFacebook}>Continue with Facebook</Text>
      </Pressable>
      <Pressable
        style={[
          styles.continueWithGoogleLeftAl,
          styles.barsHomeIndicatorShadowBox,
        ]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={styles.logoIconLayout}
          contentFit="cover"
          source={require("../assets/google-logo.png")}
        />
        <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
          Continue with Google
        </Text>
      </Pressable>
      <Pressable
        style={[styles.continueWithAppleLeftAli, styles.continueSpaceBlock]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.facebookLogoIcon, styles.logoIconLayout]}
          contentFit="cover"
          source={require("../assets/apple-logo.png")}
        />
        <Text style={[styles.continueWithApple, styles.continueTypo]}>
          Continue with Apple
        </Text>
      </Pressable>
      <Pressable
        style={styles.createOne}
        onPress={() => navigation.navigate("SIGNUP")}
      >
        <Text style={[styles.createOne1, styles.signInTypo]}>Create One</Text>
      </Pressable>
      <View
        style={[styles.barsHomeIndicator, styles.barsHomeIndicatorShadowBox]}
      >
        <View style={[styles.background, styles.timePosition]} />
        <View style={styles.line} />
      </View>
      <View style={[styles.barsStatusBarIphoneL, styles.barsPosition]}>
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
        <View style={[styles.barsStatusBarIphoneL1, styles.barsPosition]}>
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.lightThemeSystemSurface,
  },
  signLayout: {
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  orTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  continueSpaceBlock: {
    padding: Padding.p_mini,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  logoIconLayout: {
    height: 24,
    width: 24,
  },
  barsHomeIndicatorShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  continueTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    marginLeft: 15,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  timePosition: {
    left: "0%",
    position: "absolute",
  },
  barsPosition: {
    height: 44,
    top: 0,
    position: "absolute",
  },
  signIn: {
    top: 186,
    fontSize: FontSize.size_36xl,
    width: 190,
    height: 71,
    left: 23,
    position: "absolute",
  },
  signIn1Child: {
    top: 298,
    backgroundColor: Color.colorDimgray_100,
    width: 328,
    height: 57,
    left: 23,
  },
  emailOrPhone: {
    top: 315,
    left: 54,
  },
  or: {
    top: 370,
    left: 162,
  },
  signIn1Item: {
    top: 462,
    left: 115,
    width: 218,
    height: 65,
  },
  tvIcon: {
    width: 50,
    height: 50,
  },
  moviebox: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontFamily: FontFamily.dMSansBold,
    marginLeft: 24,
    fontWeight: "700",
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
  },
  logo: {
    top: 6,
    left: 20,
    alignItems: "center",
    flexDirection: "row",
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
  facebookLogoIcon: {
    overflow: "hidden",
  },
  continueWithFacebook: {
    fontFamily: FontFamily.interBold,
    marginLeft: 15,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
  },
  continueWithFacebookLeft: {
    top: 408,
    left: 32,
    backgroundColor: "#1877f2",
    position: "absolute",
  },
  continueWithGoogle: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  continueWithGoogleLeftAl: {
    top: 477,
    left: 52,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: Color.lightThemeSystemSurface,
    padding: Padding.p_mini,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  continueWithApple: {
    color: Color.lightThemeSystemSurface,
  },
  continueWithAppleLeftAli: {
    top: 547,
    left: 65,
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  createOne1: {
    fontSize: 32,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  createOne: {
    left: 93,
    top: 632,
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
    backgroundColor: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  barsHomeIndicator: {
    top: 776,
    left: -6,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 375,
    height: 32,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
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
    backgroundColor: Color.lightThemeSystemSurface,
    position: "absolute",
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
  barsStatusBarIphoneL1: {
    right: 0,
    left: 0,
    backgroundColor: Color.colorBlack,
  },
  barsStatusBarIphoneL: {
    right: -2,
    left: 2,
  },
  signIn1: {
    flex: 1,
    height: 805,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorBlack,
  },
});

export default SIGNIN;
