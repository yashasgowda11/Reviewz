import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PROFILEFROMREVIEW = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileFromReview}>
      <View
        style={[
          styles.profileFromReviewChild,
          styles.barsHomeIndicatorPosition,
        ]}
      />
      <Text style={[styles.yashaswini, styles.timeTypo]}>Yashaswini</Text>
      <Text style={styles.critic}>Critic</Text>
      <View style={[styles.profileFromReviewInner, styles.groupViewLayout]}>
        <View style={[styles.rectangleParent, styles.groupInnerPosition]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1412.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1612.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupInnerPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-1512.png")}
          />
        </View>
      </View>
      <Text style={[styles.upvotes, styles.upvotesTypo]}>5680 upvotes</Text>
      <Text style={[styles.reviews, styles.upvotesTypo]}>{`250 Reviews `}</Text>
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
      <Image
        style={styles.userCircleIcon}
        contentFit="cover"
        source={require("../assets/usercircle2.png")}
      />
      <Image
        style={styles.chevronTopNormalIcon}
        contentFit="cover"
        source={require("../assets/chevrontopnormal.png")}
      />
      <Text style={[styles.kingdom, styles.timeTypo]}>Kingdom</Text>
      <Image
        style={[styles.doneAllIcon, styles.leftLayout]}
        contentFit="cover"
        source={require("../assets/done-all1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.moviesReviewed, styles.reviewedTypo]}>
        Movies Reviewed
      </Text>
      <Text style={[styles.tvShowsReviewed, styles.tvShowsReviewedPosition]}>
        TV Shows Reviewed
      </Text>
      <Pressable
        style={[styles.chevronLeftNormal, styles.leftLayout]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/chevronleftnormal.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.backToReviewContainer, styles.tvShowsReviewedPosition]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <Text style={styles.reviewedTypo}>Back to review</Text>
      </Pressable>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleParent, styles.groupInnerPosition]}>
          <Pressable
            style={[styles.wrapper, styles.groupLayout]}
            onPress={() => navigation.navigate("CLICKEDREVIEWS")}
          >
            <Image
              style={styles.icon2}
              contentFit="cover"
              source={require("../assets/rectangle-1410.png")}
            />
          </Pressable>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1610.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupInnerPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-1510.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <View style={styles.profileFromReviewItem} />
      <View
        style={[styles.barsHomeIndicator, styles.barsHomeIndicatorPosition]}
      >
        <View style={[styles.background, styles.timePosition]} />
        <View style={styles.line} />
      </View>
      <View style={[styles.barsStatusBarIphoneL, styles.groupInnerPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={[styles.capIcon, styles.iconLayout]}
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
  );
};

const styles = StyleSheet.create({
  barsHomeIndicatorPosition: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  groupViewLayout: {
    width: 351,
    height: 161,
  },
  groupInnerPosition: {
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 110,
    top: 0,
    height: 161,
    position: "absolute",
  },
  upvotesTypo: {
    fontSize: FontSize.bodySm1216Default_size,
    fontFamily: FontFamily.robotoItalic,
    fontStyle: "italic",
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    lineHeight: 52,
    letterSpacing: 0,
    position: "absolute",
  },
  leftLayout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  reviewedTypo: {
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
  },
  tvShowsReviewedPosition: {
    left: 21,
    position: "absolute",
  },
  timePosition: {
    left: "0%",
    position: "absolute",
  },
  profileFromReviewChild: {
    top: 44,
    height: 737,
  },
  yashaswini: {
    top: 147,
    left: 169,
    lineHeight: 52,
    fontSize: FontSize.size_10xl_7,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  critic: {
    top: 251,
    left: 69,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.robotoItalic,
    fontStyle: "italic",
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    lineHeight: 52,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_11xs,
    left: 0,
  },
  groupItem: {
    left: 241,
    borderRadius: Border.br_11xs,
  },
  groupInner: {
    left: 120,
    width: 111,
    borderRadius: Border.br_11xs,
    height: 161,
  },
  rectangleParent: {
    height: 161,
    width: 351,
    left: 0,
  },
  profileFromReviewInner: {
    top: 608,
    left: 14,
    height: 161,
    position: "absolute",
  },
  upvotes: {
    top: 179,
    left: 228,
  },
  reviews: {
    top: 209,
    left: 219,
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  arrowLeftLarge: {
    left: 35,
    top: 50,
    width: 24,
    height: 24,
  },
  userCircleIcon: {
    top: 146,
    left: 37,
    width: 113,
    height: 112,
    overflow: "hidden",
    position: "absolute",
  },
  chevronTopNormalIcon: {
    top: 178,
    left: 190,
    width: 40,
    height: 54,
    overflow: "hidden",
    position: "absolute",
  },
  kingdom: {
    top: 36,
    left: 135,
    lineHeight: 52,
    fontSize: FontSize.size_10xl_7,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  doneAllIcon: {
    top: 225,
    left: 131,
    width: 19,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "1.65%",
    width: "4.91%",
    top: "28.08%",
    right: "55.36%",
    bottom: "70.27%",
    left: "39.73%",
    position: "absolute",
  },
  moviesReviewed: {
    top: 315,
    left: 18,
    position: "absolute",
  },
  tvShowsReviewed: {
    top: 559,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
  },
  chevronLeftNormal: {
    left: -3,
    top: 108,
    width: 24,
    height: 24,
  },
  backToReviewContainer: {
    top: 112,
  },
  icon2: {
    height: "100%",
    borderRadius: Border.br_11xs,
    width: "100%",
  },
  wrapper: {
    left: 0,
  },
  groupView: {
    top: 361,
    left: 12,
    height: 161,
    position: "absolute",
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.8%",
    top: "6.04%",
    right: "3.73%",
    bottom: "91.5%",
    width: "7.47%",
    height: "2.46%",
    position: "absolute",
  },
  profileFromReviewItem: {
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
    position: "absolute",
    backgroundColor: Color.lightThemeSystemSurface,
  },
  barsHomeIndicator: {
    top: 781,
    height: 32,
    overflow: "hidden",
  },
  border: {
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: Color.lightThemeSystemSurface,
    borderWidth: 1,
    opacity: 0.35,
    borderStyle: "solid",
    height: "100%",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    right: "0%",
    position: "absolute",
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
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
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
    right: 0,
    height: 44,
    backgroundColor: Color.colorBlack,
    top: 0,
    left: 0,
  },
  profileFromReview: {
    flex: 1,
    height: 813,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default PROFILEFROMREVIEW;
