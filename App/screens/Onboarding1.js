import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding0, styles.onboarding0Bg]}>
      <View style={styles.iphoneXBarsStatusDef}>
        <View style={styles.action}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <View style={[styles.container, styles.containerPosition]}>
          <Image
            style={[styles.batteryIcon, styles.containerPosition]}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={styles.combinedShapeIcon}
            contentFit="cover"
            source={require("../assets/combined-shape1.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
        </View>
      </View>
      <View style={styles.indicators}>
        <Image
          style={styles.wrapperLayout}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ellipse-19.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Onboarding2")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ellipse-19.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Onboarding3")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ellipse-19.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.button, styles.textFlexBox]}
        onPress={() => navigation.navigate("SIGNIN")}
      >
        <Text style={styles.signIn}>SIGN IN</Text>
      </Pressable>
      <View style={[styles.text, styles.textLayout]} />
      <Text style={[styles.whereMoviesMeet, styles.reviewzTypo]}>
        Where Movies Meet Their Match!
      </Text>
      <Image
        style={[
          styles.onboardingIllustrationIcon,
          styles.barsHomeIndicatorPosition,
        ]}
        contentFit="cover"
        source={require("../assets/onboarding-illustration.png")}
      />
      <Text style={[styles.reviewz, styles.reviewzTypo]}>Reviewz</Text>
      <View style={styles.helpParent}>
        <Text style={styles.helpTypo}>Help</Text>
        <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
      </View>
      <View
        style={[styles.barsHomeIndicator, styles.barsHomeIndicatorPosition]}
      >
        <View style={[styles.background, styles.iconLayout]} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding0Bg: {
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
  containerPosition: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 7,
    width: 7,
  },
  textFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  textLayout: {
    height: 89,
    width: 330,
  },
  reviewzTypo: {
    fontWeight: "700",
    color: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  barsHomeIndicatorPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  helpTypo: {
    lineHeight: 16,
    fontSize: FontSize.size_mini_5,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    width: 54,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  action: {
    marginTop: -8,
    height: 18,
    width: 54,
    top: "50%",
    left: 20,
    position: "absolute",
  },
  batteryIcon: {
    marginTop: -5.75,
    width: 25,
    right: 0,
    height: 12,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    marginTop: -4.8,
    right: 15,
    width: 67,
  },
  iphoneXBarsStatusDef: {
    top: 0,
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
  },
  wrapper: {
    marginLeft: 8,
  },
  indicators: {
    top: 683,
    left: 161,
    flexDirection: "row",
    position: "absolute",
  },
  signIn: {
    fontSize: FontSize.body1Normal_size,
    lineHeight: 19,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  button: {
    marginLeft: -177.5,
    bottom: 44,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.netflixRed,
    width: 355,
    justifyContent: "center",
    paddingHorizontal: Padding.p_121xl,
    paddingVertical: Padding.p_xs,
    left: "50%",
    flexDirection: "row",
    height: 44,
  },
  text: {
    top: 383,
    left: 89,
    alignItems: "center",
    position: "absolute",
  },
  whereMoviesMeet: {
    top: 440,
    left: 22,
    fontSize: FontSize.size_11xl,
    letterSpacing: 1,
    lineHeight: 40,
    fontFamily: FontFamily.openSansBold,
    height: 89,
    width: 330,
    textAlign: "center",
  },
  onboardingIllustrationIcon: {
    top: 97,
    height: 268,
  },
  reviewz: {
    top: 55,
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontFamily: FontFamily.dMSansBold,
    textAlign: "left",
    left: 20,
    fontWeight: "700",
  },
  privacy: {
    marginLeft: 14.5,
  },
  helpParent: {
    top: 62,
    left: 269,
    flexDirection: "row",
    position: "absolute",
  },
  background: {
    top: "-2.84%",
    right: "0%",
    bottom: "2.84%",
    left: "0%",
    position: "absolute",
  },
  line: {
    marginLeft: -60.7,
    bottom: 9,
    borderRadius: 91,
    backgroundColor: Color.lightThemeSystemSurface,
    width: 121,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  barsHomeIndicator: {
    top: 781,
    height: 32,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
    width: 375,
  },
  onboarding0: {
    flex: 1,
    height: 812,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default Onboarding1;
