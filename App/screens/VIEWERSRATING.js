import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const VIEWERSRATING = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewersRating}>
      <View
        style={[styles.viewersRatingChild, styles.barsHomeIndicatorLayout]}
      />
      <Pressable
        style={styles.arrowLeftLarge}
        onPress={() => navigation.navigate("CLICKEDMOVIEREVIEWS")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.kingdom, styles.timeTypo]}>Kingdom</Text>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.textTypo]}>Yashas</Text>
        <Text style={[styles.trappedInTime, styles.moreTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupParentLayout]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.textTypo]}>Yashas</Text>
        <Text style={[styles.trappedInTime, styles.moreTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.textTypo]}>Yashas</Text>
        <Text style={[styles.trappedInTime, styles.moreTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.textTypo]}>Puneeth</Text>
        <Text style={[styles.trappedInTime, styles.moreTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.textTypo]}>Puneeth</Text>
        <Text style={[styles.trappedInTime, styles.moreTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupParentLayout]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.textTypo]}>Puneeth</Text>
        <Text style={[styles.trappedInTime, styles.moreTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <Text style={[styles.starReviews, styles.textTypo]}>3 Star reviews</Text>
      <Pressable
        style={[styles.chevronLeftNormal, styles.chevronIconPosition]}
        onPress={() => navigation.navigate("VIEWERRATING")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
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
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.viewersRatingItem} />
      <View style={[styles.barsStatusBarIphoneL, styles.borderBorder]}>
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.barsHomeIndicator, styles.userCircleIconLayout]}>
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
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  groupParentLayout: {
    height: 142,
    width: 338,
    left: 17,
    position: "absolute",
  },
  userCircleIconLayout: {
    height: 32,
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    position: "absolute",
  },
  moreTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
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
    position: "absolute",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  viewersRatingChild: {
    height: 3365,
    top: 44,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
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
    lineHeight: 52,
    top: 44,
  },
  groupChildShadowBox: {
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
    top: -1,
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
    borderStyle: "solid",
    position: "absolute",
  },
  userCircleIcon: {
    top: 4,
    left: 5,
    width: 36,
  },
  yashas: {
    top: 12,
    left: 50,
    fontSize: FontSize.size_xl_9,
    fontWeight: "700",
    lineHeight: 16,
  },
  trappedInTime: {
    top: 42,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 323,
    left: 8,
  },
  text: {
    top: 117,
    left: 261,
    fontSize: FontSize.bodySm1216Default_size,
  },
  chevronTopCircleIcon: {
    left: 8,
    overflow: "hidden",
  },
  chevronBottomCircleIcon: {
    left: 38,
    overflow: "hidden",
  },
  more: {
    top: 82,
    left: 298,
    fontWeight: "200",
    fontFamily: FontFamily.robotoThin,
    width: 34,
  },
  rectangleParent: {
    top: 293,
  },
  rectangleGroup: {
    top: 143,
  },
  rectangleContainer: {
    top: 442,
  },
  groupView: {
    top: 890,
  },
  rectangleParent1: {
    top: 740,
  },
  groupPressable: {
    top: 591,
  },
  starReviews: {
    top: 107,
    left: 121,
    fontSize: FontSize.size_xl_9,
    fontWeight: "700",
    lineHeight: 16,
  },
  chevronLeftNormal: {
    left: 31,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.27%",
    top: "7.03%",
    right: "4.27%",
    bottom: "90.1%",
    width: "7.47%",
    height: "2.87%",
    position: "absolute",
  },
  viewersRatingItem: {
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
    top: 0,
    right: 0,
    borderColor: Color.colorBlack,
    height: 44,
    borderWidth: 1,
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
  viewersRating: {
    flex: 1,
    height: 811,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default VIEWERSRATING;
