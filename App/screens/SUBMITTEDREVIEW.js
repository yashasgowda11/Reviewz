import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SUBMITTEDREVIEW = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.submittedReview}>
      <View
        style={[styles.submittedReviewChild, styles.barsHomeIndicatorLayout]}
      />
      <Text style={[styles.reviewSubmitted, styles.sFlexBox]}>
        Review Submitted
      </Text>
      <Text style={[styles.containsSpoliers, styles.inTheHeartFlexBox]}>
        Contains Spoliers
      </Text>
      <Text style={[styles.s, styles.sFlexBox]}>S</Text>
      <View style={[styles.rectangleParent, styles.boxofficebuzzLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.flickpicks, styles.flickpicksTypo]}>
          #FlickPicks
        </Text>
        <Image
          style={[styles.iconTick, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-tick3.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.moviemagic, styles.moviemagicLayout]}>
          #MovieMagic
        </Text>
        <Image
          style={[styles.iconTick1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-tick4.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.boxofficebuzz, styles.flickpicksTypo]}>
          #BoxOfficeBuzz
        </Text>
        <Image
          style={[styles.iconTick2, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-tick5.png")}
        />
      </View>
      <Image
        style={[styles.iconProcessCompletedSymbol, styles.timeStylePosition]}
        contentFit="cover"
        source={require("../assets/-icon-process-completed-symbolic.png")}
      />
      <Image
        style={[styles.submittedReviewItem, styles.moviemagicLayout]}
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
          source={require("../assets/vector14.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.arrowLeftLarge, styles.rectanglePosition]}
        onPress={() => navigation.navigate("CLICKEDMOVIEABOUT")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.submitted, styles.kingdomTypo]}>Submitted</Text>
      <View style={styles.ratingComponent}>
        <Image
          style={[styles.ratingComponentChild, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-124.png")}
        />
        <Image
          style={[styles.ratingComponentItem, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-124.png")}
        />
        <Image
          style={[styles.ratingComponentInner, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-124.png")}
        />
        <Image
          style={[styles.starIcon, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-153.png")}
        />
        <Image
          style={[styles.ratingComponentChild1, styles.capIconPosition]}
          contentFit="cover"
          source={require("../assets/star-153.png")}
        />
      </View>
      <Text style={[styles.kingdom, styles.kingdomPosition]}>Kingdom</Text>
      <Text
        style={[styles.actionDrama, styles.kingdomPosition]}
      >{`Action | Drama
2023
1hr 23min`}</Text>
      <View style={styles.submittedReviewInner} />
      <Pressable
        style={styles.playButton}
        onPress={() => navigation.navigate("REVIEW")}
      >
        <Image
          style={styles.chevronRightIcon}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </Pressable>
      <Text style={[styles.inTheHeart, styles.rectanglePosition]}>
        In the heart of New York, amidst the chaos of the holiday season, two
        strangers with contrasting lives find their fates intertwined after a
        rare solar eclipse visible over 34th Street. As they navigate unexpected
        challenges and discover the magic of connection, they realize the city
        has more to offer than its bustling streets and towering skyscrapers.
        Eclipse Over 34th Street is a heartwarming tale of serendipity, love,
        and the little moments that become life's biggest gifts.As they navigate
        unexpected challenges and discover the magic of connection, they realize
        the city has more to offer than its bustling streets and towering
        skyscrapers. Eclipse Over 34th Street is a heartwarming tale of
        serendipity, love, and the little moments that become life's biggest
        gifts.
      </Text>
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
        <View style={[styles.timeStyle, styles.timeStylePosition]}>
          <Text style={[styles.time, styles.sFlexBox]}>9:41</Text>
        </View>
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
    position: "absolute",
  },
  inTheHeartFlexBox: {
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
  },
  boxofficebuzzLayout: {
    width: 125,
    position: "absolute",
  },
  groupLayout: {
    height: 32,
    position: "absolute",
  },
  flickpicksTypo: {
    height: 18,
    fontFamily: FontFamily.robotoLight,
    fontSize: FontSize.size_mid,
    left: 9,
    top: 6,
    fontWeight: "300",
    textAlign: "left",
    lineHeight: 16,
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectanglePosition: {
    left: 35,
    position: "absolute",
  },
  moviemagicLayout: {
    width: 103,
    position: "absolute",
  },
  timeStylePosition: {
    left: "5.6%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  kingdomTypo: {
    fontSize: FontSize.size_10xl_7,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 52,
    letterSpacing: 0,
  },
  ratingChildLayout: {
    borderRadius: Border.br_12xs,
    width: "16.67%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  kingdomPosition: {
    left: 146,
    position: "absolute",
  },
  editTypo: {
    fontWeight: "300",
    textAlign: "left",
  },
  submittedReviewChild: {
    top: 44,
    height: 726,
    position: "absolute",
  },
  reviewSubmitted: {
    top: 116,
    left: 85,
    fontSize: FontSize.size_5xl,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 52,
  },
  containsSpoliers: {
    top: 738,
    left: 69,
    fontSize: FontSize.size_xl_9,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  s: {
    top: 722,
    left: 22,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorRed_200,
    width: 26,
    height: 48,
    lineHeight: 52,
    textAlign: "center",
    letterSpacing: 0,
  },
  groupChild: {
    width: 127,
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
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xl,
    left: -1,
    top: -1,
    height: 32,
    borderStyle: "solid",
  },
  flickpicks: {
    width: 89,
    position: "absolute",
  },
  iconTick: {
    width: "11.6%",
    right: "3.92%",
    left: "84.48%",
    bottom: "32.33%",
    top: "33.33%",
    maxWidth: "100%",
    height: "34.33%",
    position: "absolute",
  },
  rectangleParent: {
    left: 186,
    height: 30,
    top: 632,
  },
  groupItem: {
    width: 142,
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
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xl,
    left: -1,
    top: -1,
    height: 32,
    borderStyle: "solid",
  },
  moviemagic: {
    height: 18,
    fontFamily: FontFamily.robotoLight,
    fontSize: FontSize.size_mid,
    left: 9,
    top: 6,
    fontWeight: "300",
    textAlign: "left",
    lineHeight: 16,
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
  },
  iconTick1: {
    width: "10%",
    right: "6.43%",
    left: "83.57%",
    bottom: "32.33%",
    top: "33.33%",
    maxWidth: "100%",
    height: "34.33%",
    position: "absolute",
  },
  rectangleGroup: {
    width: 140,
    height: 30,
    top: 632,
  },
  groupInner: {
    width: 167,
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
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xl,
    left: -1,
    top: -1,
    height: 32,
    borderStyle: "solid",
  },
  boxofficebuzz: {
    width: 125,
    position: "absolute",
  },
  iconTick2: {
    width: "8.73%",
    top: "15.67%",
    right: "8.18%",
    bottom: "50%",
    left: "83.09%",
    height: "34.33%",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleContainer: {
    top: 677,
    width: 165,
    height: 30,
  },
  iconProcessCompletedSymbol: {
    height: "4.31%",
    width: "12%",
    top: "15.66%",
    right: "82.4%",
    bottom: "80.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  submittedReviewItem: {
    top: 212,
    left: 21,
    borderRadius: Border.br_11xs,
    height: 161,
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "88.27%",
    top: "6.64%",
    right: "4.27%",
    bottom: "91.14%",
    width: "7.47%",
    height: "2.22%",
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  arrowLeftLarge: {
    top: 50,
    width: 24,
    height: 24,
  },
  submitted: {
    top: 36,
    left: 126,
    fontWeight: "600",
    fontSize: FontSize.size_10xl_7,
    position: "absolute",
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
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ratingComponent: {
    top: 334,
    left: 143,
    width: 144,
    height: 30,
    position: "absolute",
  },
  kingdom: {
    top: 204,
    fontSize: FontSize.size_10xl_7,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 52,
    letterSpacing: 0,
    fontWeight: "700",
  },
  actionDrama: {
    top: 257,
    fontSize: FontSize.body1Normal_size,
    fontFamily: FontFamily.interLight,
    color: Color.colorSilver,
    width: 210,
    height: 85,
    fontWeight: "300",
    textAlign: "left",
  },
  submittedReviewInner: {
    top: 95,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  chevronRightIcon: {
    width: 22,
    height: 22,
    display: "none",
    overflow: "hidden",
  },
  edit: {
    fontSize: 13,
    fontFamily: FontFamily.openSansLight,
    marginLeft: 3.6,
    color: Color.lightThemeSystemSurface,
  },
  playButton: {
    top: 125,
    left: 311,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 57,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 7,
    position: "absolute",
  },
  inTheHeart: {
    top: 394,
    fontSize: FontSize.size_2xs_8,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 314,
    height: 211,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
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
    top: 767,
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    overflow: "hidden",
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
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
  },
  barsStatusBarIphoneL: {
    top: 0,
    right: 0,
    height: 44,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  submittedReview: {
    flex: 1,
    height: 798,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default SUBMITTEDREVIEW;
