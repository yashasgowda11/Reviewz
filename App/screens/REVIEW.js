import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const REVIEW = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.review}>
      <View style={[styles.reviewChild, styles.reviewChildLayout]} />
      <View style={[styles.checkbox, styles.checkboxFlexBox]}>
        <View style={[styles.radioWrapper, styles.checkboxFlexBox]}>
          <Image
            style={styles.controllerIconLayout}
            contentFit="cover"
            source={require("../assets/controller.png")}
          />
          <Text style={styles.label}>Toggle label</Text>
        </View>
      </View>
      <View style={styles.reviewItem} />
      <Image
        style={styles.reviewInner}
        contentFit="cover"
        source={require("../assets/rectangle-161.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("SUBMITTEDREVIEW")}
      />
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      <Text style={[styles.spoilerFilter, styles.submitTypo]}>
        <Text style={styles.s}>S</Text>
        <Text style={styles.poilerFilter}>poiler Filter</Text>
      </Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.flickpicks, styles.flickpicksTypo]}>
          #FlickPicks
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.moviemagic, styles.flickpicksTypo]}>
          #MovieMagic
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.boxofficebuzz, styles.flickpicksTypo]}>
          #BoxOfficeBuzz
        </Text>
      </View>
      <Pressable
        style={[styles.arrowLeftLarge, styles.controllerIconLayout]}
        onPress={() => navigation.navigate("CLICKEDMOVIEABOUT")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.review1, styles.timeTypo]}>Review</Text>
      <Text style={[styles.writeReview, styles.kingdomTypo]}>Write Review</Text>
      <View style={styles.ratingComponent}>
        <Image
          style={[styles.ratingComponentChild, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-123.png")}
        />
        <Image
          style={[styles.ratingComponentItem, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-123.png")}
        />
        <Image
          style={[styles.ratingComponentInner, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-123.png")}
        />
        <Image
          style={[styles.starIcon, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-123.png")}
        />
        <Image
          style={[styles.ratingComponentChild1, styles.capIconPosition]}
          contentFit="cover"
          source={require("../assets/star-123.png")}
        />
      </View>
      <Text style={[styles.kingdom, styles.kingdomTypo]}>Kingdom</Text>
      <Text style={[styles.starRating, styles.timeTypo]}>Star Rating</Text>
      <Text style={[styles.writeYourReview, styles.actionDramaClr]}>
        Write your review here.
      </Text>
      <Text style={[styles.actionDrama, styles.actionDramaClr]}>{`Action | Drama
2023
1hr 23min`}</Text>
      <View style={styles.lineView} />
      <View style={[styles.barsHomeIndicator, styles.groupLayout]}>
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
      </View>
      <View style={styles.barsStatusBarIphoneL}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  reviewChildLayout: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
  },
  checkboxFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  submitTypo: {
    fontWeight: "800",
    position: "absolute",
  },
  rectangleLayout: {
    height: 30,
    position: "absolute",
  },
  groupLayout: {
    height: 32,
    position: "absolute",
  },
  flickpicksTypo: {
    height: 18,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_mid,
    top: 6,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  controllerIconLayout: {
    height: 24,
    width: 24,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  timeTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    color: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  kingdomTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    color: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  ratingChildLayout: {
    borderRadius: Border.br_12xs,
    width: "16.67%",
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  actionDramaClr: {
    color: Color.colorSilver,
    textAlign: "left",
    position: "absolute",
  },
  reviewChild: {
    top: 44,
    height: 729,
    position: "absolute",
  },
  label: {
    lineHeight: 24,
    fontFamily: FontFamily.body1Normal,
    width: 125,
    display: "none",
    marginLeft: 8,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.body1Normal_size,
  },
  radioWrapper: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    padding: Padding.p_5xs,
  },
  checkbox: {
    top: 714,
    left: 18,
    position: "absolute",
  },
  reviewItem: {
    top: 452,
    width: 340,
    height: 144,
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    left: 17,
    position: "absolute",
  },
  reviewInner: {
    top: 109,
    left: 21,
    borderRadius: Border.br_11xs,
    width: 103,
    height: 161,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.53%",
    top: "6.34%",
    right: "4%",
    bottom: "91.44%",
    width: "7.47%",
    height: "2.21%",
    position: "absolute",
  },
  rectanglePressable: {
    top: 701,
    left: 251,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorRed_100,
    width: 91,
    height: 58,
    position: "absolute",
  },
  submit: {
    top: 717,
    left: 261,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interExtraBold,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.lightThemeSystemSurface,
    textAlign: "left",
  },
  s: {
    fontSize: FontSize.size_7xl,
    color: Color.colorRed_200,
  },
  poilerFilter: {
    fontSize: FontSize.size_3xl,
    color: Color.lightThemeSystemSurface,
  },
  spoilerFilter: {
    top: 706,
    left: 49,
    fontFamily: FontFamily.robotoBlack,
    width: 166,
    height: 48,
    textAlign: "center",
    lineHeight: 52,
    letterSpacing: 0,
  },
  groupChild: {
    width: 102,
    left: -1,
    top: -1,
    height: 32,
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
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_300,
  },
  flickpicks: {
    left: 8,
    width: 86,
    color: Color.lightThemeSystemSurface,
  },
  rectangleParent: {
    left: 150,
    width: 100,
    top: 622,
    height: 30,
  },
  groupItem: {
    width: 124,
    left: -1,
    top: -1,
    height: 32,
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
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightThemeSystemSurface,
  },
  moviemagic: {
    left: 12,
    width: 106,
    color: Color.colorBlack,
  },
  rectangleGroup: {
    width: 122,
    top: 622,
    height: 30,
    left: 18,
  },
  groupInner: {
    width: 135,
    left: -1,
    top: -1,
    height: 32,
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
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_300,
  },
  boxofficebuzz: {
    left: 9,
    width: 123,
    color: Color.lightThemeSystemSurface,
  },
  rectangleContainer: {
    top: 664,
    width: 133,
    left: 18,
  },
  icon1: {
    overflow: "hidden",
  },
  arrowLeftLarge: {
    left: 35,
    top: 50,
    position: "absolute",
  },
  review1: {
    top: 36,
    fontSize: FontSize.size_10xl_7,
    left: 146,
    lineHeight: 52,
  },
  writeReview: {
    top: 417,
    left: 13,
    fontSize: FontSize.size_5xl,
    lineHeight: 16,
    fontWeight: "700",
    textAlign: "left",
  },
  ratingComponentChild: {
    right: "83.33%",
    left: "0%",
    position: "absolute",
  },
  ratingComponentItem: {
    right: "62.5%",
    left: "20.83%",
    position: "absolute",
  },
  ratingComponentInner: {
    right: "41.67%",
    left: "41.67%",
    position: "absolute",
  },
  starIcon: {
    right: "20.83%",
    left: "62.5%",
    position: "absolute",
  },
  ratingComponentChild1: {
    left: "83.33%",
    borderRadius: Border.br_12xs,
    width: "16.67%",
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  ratingComponent: {
    top: 352,
    left: 67,
    width: 240,
    height: 37,
    position: "absolute",
  },
  kingdom: {
    top: 101,
    fontSize: FontSize.size_10xl_7,
    left: 146,
    lineHeight: 52,
    textAlign: "center",
  },
  starRating: {
    top: 303,
    fontSize: FontSize.size_5xl,
    lineHeight: 52,
    left: 17,
    fontWeight: "600",
  },
  writeYourReview: {
    top: 461,
    left: 32,
    fontSize: FontSize.size_base_2,
    lineHeight: 31,
    fontFamily: FontFamily.bodySm1216Default,
    width: 260,
    height: 34,
    letterSpacing: 0,
  },
  actionDrama: {
    top: 154,
    fontFamily: FontFamily.interLight,
    width: 210,
    height: 85,
    left: 146,
    color: Color.colorSilver,
    fontWeight: "300",
    fontSize: FontSize.body1Normal_size,
  },
  lineView: {
    top: 95,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
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
    top: 773,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
    borderStyle: "solid",
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
    height: 44,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  review: {
    flex: 1,
    height: 804,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default REVIEW;
