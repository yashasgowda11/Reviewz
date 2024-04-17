import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MYREVIEWS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myReviews}>
      <View style={[styles.myReviewsChild, styles.myReviewsChildPosition]} />
      <Pressable
        style={styles.arrowLeftLarge}
        onPress={() => navigation.navigate("DASHBOARD1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.myReviews1, styles.sFlexBox]}>My Reviews</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.forever, styles.foreverTypo]}>21 Forever</Text>
        <Text style={[styles.trappedInTime, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.forever, styles.foreverTypo]}>21 Forever</Text>
        <Text style={[styles.trappedInTime, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
        <Text style={[styles.upvotes, styles.upvotesTypo]}>5680 upvotes</Text>
        <Image
          style={[styles.chevronTopNormalIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopnormal.png")}
        />
      </Pressable>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.forever2, styles.foreverTypo]}>21 Forever</Text>
        <Text style={[styles.trappedInTime2, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>11/11/2023</Text>
        <View style={[styles.stars, styles.starsFlexBox]}>
          <Image
            style={styles.starIconLayout}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <Text style={[styles.more2, styles.moreTypo]}>...more</Text>
        <Text style={[styles.upvotes1, styles.upvotesTypo]}>5680 upvotes</Text>
        <Image
          style={[styles.chevronTopNormalIcon1, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopnormal.png")}
        />
      </View>
      <View style={[styles.groupView, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.forever2, styles.foreverTypo]}>21 Forever</Text>
        <Text style={[styles.trappedInTime2, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>11/11/2023</Text>
        <View style={[styles.stars, styles.starsFlexBox]}>
          <Image
            style={styles.starIconLayout}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <Text style={[styles.more2, styles.moreTypo]}>...more</Text>
        <Text style={[styles.upvotes1, styles.upvotesTypo]}>5680 upvotes</Text>
        <Image
          style={[styles.chevronTopNormalIcon1, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopnormal.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.forever, styles.foreverTypo]}>21 Forever</Text>
        <Text style={[styles.trappedInTime, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <View style={[styles.stars2, styles.starsFlexBox]}>
          <Image
            style={styles.starIconLayout}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
        <Text style={[styles.upvotes, styles.upvotesTypo]}>5680 upvotes</Text>
        <Image
          style={[styles.chevronTopNormalIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopnormal.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.forever, styles.foreverTypo]}>21 Forever</Text>
        <Text style={[styles.trappedInTime, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text, styles.textTypo]}>11/11/2023</Text>
        <Text style={[styles.s, styles.sPosition]}>S</Text>
        <View style={[styles.stars2, styles.starsFlexBox]}>
          <Image
            style={styles.starIconLayout}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
        <Text style={[styles.upvotes, styles.upvotesTypo]}>5680 upvotes</Text>
        <Image
          style={[styles.chevronTopNormalIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopnormal.png")}
        />
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.forever2, styles.foreverTypo]}>21 Forever</Text>
        <Text style={[styles.trappedInTime2, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>11/11/2023</Text>
        <View style={[styles.stars, styles.starsFlexBox]}>
          <Image
            style={styles.starIconLayout}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <Text style={[styles.more2, styles.moreTypo]}>...more</Text>
        <Text style={[styles.upvotes1, styles.upvotesTypo]}>5680 upvotes</Text>
        <Image
          style={[styles.chevronTopNormalIcon1, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopnormal.png")}
        />
      </View>
      <Text style={[styles.recentReviews, styles.reviewsTypo]}>
        Recent Reviews
      </Text>
      <Text style={[styles.mostUpvotes, styles.reviewsTypo]}>Most Upvotes</Text>
      <Text style={[styles.olderReviews, styles.reviewsTypo]}>
        Older Reviews
      </Text>
      <View style={[styles.stars5, styles.starsFlexBox]}>
        <Image
          style={styles.starIconLayout}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star1.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star2.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star2.png")}
        />
      </View>
      <View style={styles.myReviewsItem} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
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
      <View style={[styles.barsHomeIndicator, styles.myReviewsChildPosition]}>
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myReviewsChildPosition: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  sFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  foreverTypo: {
    height: 16,
    width: 106,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
    left: 13,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    position: "absolute",
  },
  trappedTypo: {
    height: 54,
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
    width: 64,
    fontSize: FontSize.bodySm1216Default_size,
    left: 261,
    height: 16,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    position: "absolute",
  },
  sPosition: {
    top: 0,
    position: "absolute",
  },
  moreTypo: {
    height: 18,
    width: 34,
    fontFamily: FontFamily.robotoThin,
    fontWeight: "200",
    left: 298,
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 151,
    width: 338,
    position: "absolute",
  },
  upvotesTypo: {
    fontFamily: FontFamily.robotoItalic,
    fontStyle: "italic",
    left: 39,
    fontSize: FontSize.bodySm1216Default_size,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    lineHeight: 52,
    letterSpacing: 0,
    position: "absolute",
  },
  chevronIconLayout: {
    width: 40,
    left: 1,
    height: 54,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleLayout: {
    height: 145,
    width: 338,
    left: 17,
    position: "absolute",
  },
  starsFlexBox: {
    flexDirection: "row",
    height: 9,
    position: "absolute",
  },
  starIconLayout: {
    width: 9,
    height: 9,
  },
  reviewsTypo: {
    left: 12,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
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
  myReviewsChild: {
    height: 3365,
    top: 44,
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeftLarge: {
    left: 36,
    top: 56,
    width: 24,
    height: 24,
    position: "absolute",
  },
  myReviews1: {
    left: 110,
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
    top: 5,
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
    borderStyle: "solid",
    position: "absolute",
  },
  forever: {
    top: 18,
  },
  trappedInTime: {
    top: 48,
  },
  text: {
    top: 123,
  },
  s: {
    left: 301,
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
    top: 88,
  },
  rectangleParent: {
    height: 148,
    width: 338,
    left: 17,
    top: 128,
    position: "absolute",
  },
  upvotes: {
    top: 98,
  },
  chevronTopNormalIcon: {
    top: 97,
  },
  rectangleGroup: {
    left: 17,
    height: 151,
    top: 128,
  },
  groupShadowBox: {
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
  forever2: {
    top: 12,
  },
  trappedInTime2: {
    top: 42,
  },
  text2: {
    top: 117,
  },
  starIcon1: {
    marginLeft: 3,
  },
  stars: {
    top: 16,
    left: 235,
    flexDirection: "row",
    height: 9,
  },
  more2: {
    top: 82,
  },
  upvotes1: {
    top: 92,
  },
  chevronTopNormalIcon1: {
    top: 91,
  },
  rectangleContainer: {
    top: 460,
  },
  groupView: {
    top: 611,
  },
  stars2: {
    top: 22,
    left: 235,
    flexDirection: "row",
    height: 9,
  },
  rectangleParent1: {
    top: 756,
    left: 19,
  },
  rectangleParent2: {
    top: 937,
    left: 17,
    height: 151,
  },
  rectangleParent3: {
    top: 282,
  },
  recentReviews: {
    top: 109,
  },
  mostUpvotes: {
    top: 436,
  },
  olderReviews: {
    top: 916,
  },
  stars5: {
    top: 148,
    left: 256,
  },
  myReviewsItem: {
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    top: 97,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "89.07%",
    top: "6.91%",
    right: "3.47%",
    bottom: "90.22%",
    width: "7.47%",
    height: "2.87%",
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
    height: 32,
    overflow: "hidden",
  },
  myReviews: {
    flex: 1,
    height: 811,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default MYREVIEWS;
