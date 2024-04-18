import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const EACHRATINGREVIEWS = () => {
  const navigation = useNavigation();
  const route = useRoute();  // This hook returns the route object which has a params property
  const { numStars } = route.params ?? {};  // Destructure to get customParam, defaulting to an empty object if params is undefined

  return (
    <View style={styles.eachRatingReviews}>
      <View
        style={[styles.eachRatingReviewsChild, styles.barsHomeIndicatorLayout]}
      />
      <Pressable
        style={styles.arrowLeftLarge}
        onPress={() => navigation.navigate("CLICKEDMOVIEREVIEWS")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.kingdom, styles.sFlexBox]}>Kingdom</Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashaswini, styles.yashasTypo]}>Yashaswini</Text>
        <Text style={[styles.trappedInTime, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={styles.critic}>Critic</Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconPosition2]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconPosition1]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.yashasTypo]}>Yashas</Text>
        <Text style={[styles.trappedInTime, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconPosition2]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconPosition1]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon2, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas1, styles.yashasTypo]}>Yashas</Text>
        <Text style={[styles.trappedInTime2, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon2, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon2, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more2, styles.moreTypo]}>...more</Text>
      </View>
      <View style={[styles.groupView, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon2, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas1, styles.yashasTypo]}>Puneeth</Text>
        <Text style={[styles.trappedInTime2, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon2, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon2, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more2, styles.moreTypo]}>...more</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon2, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas1, styles.yashasTypo]}>Puneeth</Text>
        <Text style={[styles.trappedInTime2, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon2, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon2, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more2, styles.moreTypo]}>...more</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon2, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas1, styles.yashasTypo]}>Puneeth</Text>
        <Text style={[styles.trappedInTime2, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon2, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon2, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more2, styles.moreTypo]}>...more</Text>
      </View>
      <Text style={[styles.starReviews, styles.yashasTypo]}>
        {numStars} Star reviews
      </Text>
      <Pressable
        style={[styles.chevronLeftNormal, styles.chevronIconPosition]}
        onPress={() => navigation.navigate("CLICKEDMOVIEREVIEWS")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/chevronleftnormal.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <View style={styles.eachRatingReviewsItem} />
      <View style={[styles.barsStatusBarIphoneL, styles.sPosition]}>
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
          <Text style={[styles.time, styles.sFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.barsHomeIndicator, styles.userIconLayout]}>
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barsHomeIndicatorLayout: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
  },
  sFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  rectangleLayout: {
    height: 151,
    width: 338,
    left: 17,
    position: "absolute",
  },
  userIconLayout: {
    height: 32,
    overflow: "hidden",
    position: "absolute",
  },
  yashasTypo: {
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    position: "absolute",
  },
  trappedTypo: {
    width: 323,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    left: 8,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.bodySm1216Default_size,
    left: 261,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    position: "absolute",
  },
  chevronIconPosition2: {
    top: 112,
    height: 24,
    width: 24,
    position: "absolute",
  },
  chevronIconPosition1: {
    left: 38,
    overflow: "hidden",
  },
  sPosition: {
    top: 0,
    position: "absolute",
  },
  moreTypo: {
    width: 34,
    left: 298,
    fontFamily: FontFamily.robotoThin,
    fontWeight: "200",
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 142,
    width: 338,
    left: 17,
    position: "absolute",
  },
  chevronIconPosition: {
    top: 103,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  eachRatingReviewsChild: {
    height: 3365,
    top: 44,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  arrowLeftLarge: {
    left: 36,
    top: 56,
    height: 24,
    width: 24,
    position: "absolute",
  },
  kingdom: {
    left: 129,
    fontSize: FontSize.size_10xl_7,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    lineHeight: 52,
    top: 44,
  },
  groupShadowBox: {
    height: 144,
    width: 340,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xl,
    left: -1,
    top: 8,
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
    borderStyle: "solid",
    position: "absolute",
  },
  userCircleIcon: {
    top: 13,
    width: 36,
    left: 5,
    height: 32,
  },
  yashaswini: {
    width: 113,
    height: 16,
    left: 50,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
    top: 21,
  },
  trappedInTime: {
    top: 51,
    height: 54,
  },
  critic: {
    top: 20,
    left: 293,
    fontSize: FontSize.body1Normal_size,
    fontFamily: FontFamily.robotoThin,
    fontWeight: "200",
    height: 16,
    textAlign: "left",
    lineHeight: 16,
    width: 36,
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    top: 126,
    width: 64,
    height: 16,
  },
  chevronTopCircleIcon: {
    left: 8,
    overflow: "hidden",
  },
  chevronBottomCircleIcon: {
    top: 112,
    height: 24,
    width: 24,
    position: "absolute",
  },
  s: {
    left: 247,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorRed_200,
    width: 26,
    height: 48,
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 52,
    top: 0,
  },
  more: {
    top: 91,
    height: 18,
  },
  rectangleParent: {
    top: 134,
  },
  yashas: {
    width: 68,
    height: 16,
    left: 50,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
    top: 21,
  },
  rectangleGroup: {
    top: 432,
  },
  groupChildShadowBox: {
    top: -1,
    height: 144,
    width: 340,
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xl,
    left: -1,
    position: "absolute",
  },
  userCircleIcon2: {
    top: 4,
    width: 36,
    left: 5,
    height: 32,
  },
  yashas1: {
    top: 12,
    left: 50,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
  },
  trappedInTime2: {
    top: 42,
  },
  text2: {
    top: 117,
  },
  chevronTopCircleIcon2: {
    left: 8,
    overflow: "hidden",
  },
  chevronBottomCircleIcon2: {
    left: 38,
    overflow: "hidden",
  },
  more2: {
    top: 82,
  },
  rectangleContainer: {
    top: 293,
  },
  groupView: {
    top: 890,
  },
  rectangleParent1: {
    top: 740,
  },
  rectangleParent2: {
    top: 591,
  },
  starReviews: {
    top: 107,
    left: 121,
  },
  chevronLeftNormal: {
    left: 31,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.8%",
    top: "7.52%",
    right: "3.73%",
    bottom: "90.01%",
    width: "7.47%",
    height: "2.47%",
    position: "absolute",
  },
  eachRatingReviewsItem: {
    top: 97,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  border: {
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    opacity: 0.35,
    left: "0%",
    borderColor: Color.lightThemeSystemSurface,
    borderWidth: 1,
    height: "100%",
    position: "absolute",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
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
    left: "0%",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
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
  barsStatusBarIphoneL: {
    right: 0,
    borderColor: Color.colorBlack,
    height: 44,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    backgroundColor: Color.colorBlack,
    left: 0,
  },
  background: {
    top: "-2.84%",
    bottom: "2.84%",
    left: "0%",
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
    position: "absolute",
    backgroundColor: Color.lightThemeSystemSurface,
  },
  barsHomeIndicator: {
    top: 780,
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
  },
  eachRatingReviews: {
    flex: 1,
    height: 811,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default EACHRATINGREVIEWS;
