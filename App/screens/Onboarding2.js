import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding2}>
      <View style={styles.iphoneXBarsStatusDef}>
        <View style={styles.action}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <View style={[styles.container, styles.containerPosition]}>
          <Image
            style={[styles.batteryIcon, styles.containerPosition]}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
          <Image
            style={styles.combinedShapeIcon}
            contentFit="cover"
            source={require("../assets/combined-shape2.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi3.png")}
          />
        </View>
      </View>
      <View style={styles.theFinalCutInFilmCritiqueWrapper}>
        <Text style={[styles.theFinalCut, styles.reviewzTypo]}>
          The Final Cut in Film Critique.
        </Text>
      </View>
      <Image
        style={[styles.img17441Icon, styles.img17441IconPosition]}
        contentFit="cover"
        source={require("../assets/img-1744-1.png")}
      />
      <View style={styles.helpParent}>
        <Text style={[styles.help, styles.helpTypo]}>Help</Text>
        <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
      </View>
      <Text style={[styles.reviewz, styles.reviewzTypo]}>Reviewz</Text>
      <Pressable
        style={[styles.button, styles.linePosition]}
        onPress={() => navigation.navigate("SIGNIN")}
      >
        <Text style={[styles.signIn, styles.helpTypo]}>SIGN IN</Text>
      </Pressable>
      <View style={[styles.barsHomeIndicator, styles.img17441IconPosition]}>
        <View style={[styles.background, styles.iconLayout]} />
        <View style={[styles.line, styles.linePosition]} />
      </View>
      <View style={styles.onboarding2Inner}>
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
          <Image
            style={[styles.frame, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-192.png")}
          />
          <Pressable
            style={[styles.frame, styles.frameLayout]}
            onPress={() => navigation.navigate("Onboarding3")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-20.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.onboarding2Child} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerPosition: {
    top: "50%",
    height: 10,
    position: "absolute",
  },
  reviewzTypo: {
    fontWeight: "700",
    color: Color.lightThemeSystemSurface,
  },
  img17441IconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  helpTypo: {
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  linePosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  frameLayout: {
    height: 6,
    width: 6,
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
    marginTop: -7.25,
    height: 18,
    width: 54,
    left: 18,
    top: "50%",
    position: "absolute",
  },
  batteryIcon: {
    marginTop: -5.2,
    width: 22,
    height: 10,
    right: 0,
    top: "50%",
  },
  combinedShapeIcon: {
    width: 15,
    height: 10,
  },
  wiFiIcon: {
    width: 14,
    height: 10,
  },
  container: {
    marginTop: -4.45,
    right: 13,
    width: 61,
    height: 10,
  },
  iphoneXBarsStatusDef: {
    top: 0,
    height: 40,
    left: 0,
    right: 0,
    position: "absolute",
  },
  theFinalCut: {
    fontSize: FontSize.size_8xl_2,
    lineHeight: 32,
    fontFamily: FontFamily.openSansBold,
    width: 254,
    height: 66,
    textAlign: "center",
  },
  theFinalCutInFilmCritiqueWrapper: {
    top: 441,
    left: 53,
    paddingHorizontal: 15,
    paddingVertical: 0,
    alignItems: "center",
    position: "absolute",
  },
  img17441Icon: {
    top: 86,
    height: 284,
  },
  help: {
    lineHeight: 16,
    fontSize: FontSize.size_mini_5,
    fontFamily: FontFamily.openSansRegular,
  },
  privacy: {
    marginLeft: 14.5,
    lineHeight: 16,
    fontSize: FontSize.size_mini_5,
    fontFamily: FontFamily.openSansRegular,
  },
  helpParent: {
    top: 55,
    left: 265,
    flexDirection: "row",
    position: "absolute",
  },
  reviewz: {
    top: 51,
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontFamily: FontFamily.dMSansBold,
    textAlign: "left",
    left: 18,
    fontWeight: "700",
    position: "absolute",
  },
  signIn: {
    fontSize: FontSize.body1Normal_size,
    lineHeight: 19,
  },
  button: {
    marginLeft: -176.5,
    bottom: 43,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.netflixRed,
    width: 355,
    height: 44,
    justifyContent: "center",
    paddingHorizontal: Padding.p_121xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
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
  onboarding2Inner: {
    top: 672,
    left: 159,
    padding: 7,
    position: "absolute",
  },
  onboarding2Child: {
    top: 412,
    left: -5,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  onboarding2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorBlack,
  },
});

export default Onboarding2;
