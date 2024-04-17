import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding3, styles.onboarding3Bg]}>
      <Image
        style={[styles.image29Icon, styles.image29IconPosition]}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
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
            source={require("../assets/wifi4.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("SIGNIN")}
      >
        <Text style={styles.signIn}>SIGN IN</Text>
      </Pressable>
      <View style={[styles.lightsCameraReviewzWrapper, styles.buttonFlexBox]}>
        <Text style={[styles.lightsCameraReviewz, styles.reviewzTypo]}>
          Lights, Camera, Reviewz!
        </Text>
      </View>
      <Text style={[styles.reviewz, styles.reviewzTypo]}>Reviewz</Text>
      <View style={styles.helpParent}>
        <Text style={styles.helpTypo}>Help</Text>
        <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
      </View>
      <View style={[styles.barsHomeIndicator, styles.image29IconPosition]}>
        <View style={[styles.background, styles.iconLayout]} />
        <View style={styles.line} />
      </View>
      <View style={styles.onboarding3Inner}>
        <View style={styles.ellipseParent}>
          <Pressable
            style={styles.frameLayout}
            onPress={() => navigation.navigate("Onboarding1")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-17.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.frame, styles.frameLayout]}
            onPress={() => navigation.navigate("Onboarding")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-182.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.frame, styles.frameLayout]}
            onPress={() => navigation.navigate("Onboarding2")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-191.png")}
            />
          </Pressable>
          <Image
            style={[styles.frame, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-201.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding3Bg: {
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
  image29IconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  containerPosition: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  buttonFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  reviewzTypo: {
    fontWeight: "700",
    color: Color.lightThemeSystemSurface,
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
  frameLayout: {
    height: 6,
    width: 6,
  },
  image29Icon: {
    height: 816,
    top: 0,
    width: 375,
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
    height: 44,
    right: 0,
    left: 0,
    top: 0,
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
    bottom: 42,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.netflixRed,
    width: 355,
    justifyContent: "center",
    paddingHorizontal: Padding.p_121xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    left: "50%",
    height: 44,
  },
  lightsCameraReviewz: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 1,
    lineHeight: 40,
    fontFamily: FontFamily.openSansBold,
    width: 288,
    textAlign: "center",
  },
  lightsCameraReviewzWrapper: {
    top: 276,
    left: 32,
  },
  reviewz: {
    top: 52,
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontFamily: FontFamily.dMSansBold,
    textAlign: "left",
    left: 20,
    fontWeight: "700",
    position: "absolute",
  },
  privacy: {
    marginLeft: 14.5,
  },
  helpParent: {
    top: 55,
    left: 265,
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
  frame: {
    marginLeft: 7.2,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  onboarding3Inner: {
    top: 665,
    left: 158,
    padding: 7,
    position: "absolute",
  },
  onboarding3: {
    flex: 1,
    height: 805,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default Onboarding3;
