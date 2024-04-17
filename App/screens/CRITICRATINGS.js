import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CRITICRATINGS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.criticRatings}>
      <View
        style={[styles.criticRatingsChild, styles.barsHomeIndicatorLayout]}
      />
      <Pressable
        style={[styles.arrowLeftLarge, styles.leftLayout]}
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
        style={[styles.rectangleParent, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashaswini, styles.textLayout]}>Yashaswini</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.critic, styles.moreTypo]}>Critic</Text>
        <Text style={[styles.text, styles.textLayout]}>11/11/2023</Text>
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
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashaswini, styles.textLayout]}>Yashaswini</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.critic, styles.moreTypo]}>Critic</Text>
        <Text style={[styles.text, styles.textLayout]}>11/11/2023</Text>
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
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashaswini, styles.textLayout]}>Yashaswini</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.critic, styles.moreTypo]}>Critic</Text>
        <Text style={[styles.text, styles.textLayout]}>11/11/2023</Text>
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
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashaswini, styles.textLayout]}>Yashaswini</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.critic, styles.moreTypo]}>Critic</Text>
        <Text style={[styles.text, styles.textLayout]}>11/11/2023</Text>
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
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashaswini, styles.textLayout]}>Yashaswini</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.critic, styles.moreTypo]}>Critic</Text>
        <Text style={[styles.text, styles.textLayout]}>11/11/2023</Text>
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
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashaswini, styles.textLayout]}>Yashaswini</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.critic, styles.moreTypo]}>Critic</Text>
        <Text style={[styles.text, styles.textLayout]}>11/11/2023</Text>
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
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <Text style={[styles.starReviews, styles.textFlexBox]}>
        3 Star reviews
      </Text>
      <Pressable
        style={[styles.chevronLeftNormal, styles.leftLayout]}
        onPress={() => navigation.navigate("CRITICRATING")}
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
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.criticRatingsItem} />
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
  leftLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  sFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  rectangleParentLayout: {
    height: 151,
    width: 338,
    left: 17,
    position: "absolute",
  },
  userCircleIconLayout: {
    height: 32,
    overflow: "hidden",
    position: "absolute",
  },
  textLayout: {
    height: 16,
    lineHeight: 16,
  },
  moreLayout: {
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
  },
  moreTypo: {
    fontFamily: FontFamily.robotoThin,
    fontWeight: "200",
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  chevronIconPosition: {
    top: 112,
    overflow: "hidden",
    height: 24,
    width: 24,
    position: "absolute",
  },
  sPosition: {
    top: 0,
    position: "absolute",
  },
  rectangleGroupPosition: {
    left: 12,
    height: 151,
    width: 338,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
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
  criticRatingsChild: {
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
    top: 8,
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
    borderStyle: "solid",
    position: "absolute",
  },
  userCircleIcon: {
    top: 13,
    left: 5,
    width: 36,
  },
  yashaswini: {
    top: 21,
    left: 50,
    width: 113,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xl_9,
    height: 16,
  },
  trappedInTime: {
    top: 51,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 323,
    height: 54,
    left: 8,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  critic: {
    top: 20,
    left: 293,
    fontSize: FontSize.body1Normal_size,
    height: 16,
    lineHeight: 16,
    width: 36,
  },
  text: {
    top: 126,
    left: 261,
    fontSize: FontSize.bodySm1216Default_size,
    width: 64,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  chevronTopCircleIcon: {
    left: 8,
  },
  chevronBottomCircleIcon: {
    left: 38,
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
    left: 298,
    width: 34,
    height: 18,
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
  },
  rectangleParent: {
    top: 134,
  },
  rectangleGroup: {
    top: 887,
  },
  rectangleContainer: {
    top: 736,
  },
  groupPressable: {
    top: 583,
  },
  rectangleParent1: {
    top: 285,
  },
  rectangleParent2: {
    top: 432,
  },
  starReviews: {
    top: 107,
    left: 121,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
  },
  chevronLeftNormal: {
    left: 31,
    top: 103,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.53%",
    top: "6.41%",
    right: "4%",
    bottom: "90.72%",
    width: "7.47%",
    height: "2.87%",
    position: "absolute",
  },
  criticRatingsItem: {
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
  criticRatings: {
    flex: 1,
    height: 811,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default CRITICRATINGS;
