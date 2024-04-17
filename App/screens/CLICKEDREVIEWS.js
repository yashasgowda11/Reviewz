import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CLICKEDREVIEWS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.clickedReviews}>
      <View
        style={[styles.clickedReviewsChild, styles.barsHomeIndicatorLayout]}
      />
      <Pressable
        style={[styles.arrowLeftLarge, styles.leftLayout]}
        onPress={() => navigation.navigate("CLICKEDMOVIEREVIEWS")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.kingdom, styles.sFlexBox]}>Kingdom</Text>
      <Pressable
        style={[styles.chevronLeftNormal, styles.leftLayout]}
        onPress={() => navigation.navigate("CLICKEDMOVIEREVIEWS")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleftnormal.png")}
        />
      </Pressable>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("CLICKEDMOVIEABOUT")}
      >
        <Text style={[styles.back1, styles.back1Typo]}>{`Back `}</Text>
      </Pressable>
      <View style={[styles.clickedReviewsInner, styles.frameGroupLayout]}>
        <View style={styles.framePosition}>
          <Image
            style={[styles.frameChild, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/frame-287.png")}
          />
          <LinearGradient
            style={[styles.frameGroup, styles.frameGroupPosition]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0)"]}
          >
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.m18Typo1]}>2019</Text>
              <View style={styles.m18Wrapper}>
                <Text style={[styles.m18, styles.m18Typo]}>M18</Text>
              </View>
              <Text style={[styles.season, styles.m18Typo1]}>1 Season</Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.netflixParent}>
                <Text style={[styles.netflix, styles.netflixTypo]}>
                  NETFLIX
                </Text>
                <Text style={[styles.original, styles.netflixTypo]}>
                  ORIGINAL
                </Text>
              </View>
              <Image
                style={styles.image35Icon}
                contentFit="cover"
                source={require("../assets/image-35.png")}
              />
            </View>
            <View style={[styles.viralPlagueParent, styles.parentFlexBox]}>
              <Text style={styles.koreanTypo}>Viral Plague</Text>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/ellipse-24.png")}
              />
              <Text style={[styles.korean, styles.koreanTypo]}>Korean</Text>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/ellipse-24.png")}
              />
              <Text style={[styles.korean, styles.koreanTypo]}>
                Period Piece
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={[styles.ratingComponent, styles.userCircleLayout]}>
        <Image
          style={[styles.ratingComponentChild, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/star-12.png")}
        />
        <Image
          style={[styles.ratingComponentItem, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/star-13.png")}
        />
        <Image
          style={[styles.ratingComponentInner, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/star-14.png")}
        />
        <Image
          style={[styles.starIcon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/star-15.png")}
        />
        <Image
          style={[styles.ratingComponentChild1, styles.capIconPosition]}
          contentFit="cover"
          source={require("../assets/star-16.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleParent, styles.groupViewLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.flickpicks, styles.flickpicksTypo]}>
            #FlickPicks
          </Text>
          <Image
            style={[styles.iconTick, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon-tick.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Image
          style={[styles.iconTick1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/-icon-tick1.png")}
        />
        <Text style={[styles.moviemagic, styles.flickpicksTypo]}>
          #MovieMagic
        </Text>
      </View>
      <Pressable
        style={styles.yashaswini}
        onPress={() => navigation.navigate("PROFILEFROMREVIEW")}
      >
        <Text style={[styles.yashaswini1, styles.sFlexBox]}>Yashaswini</Text>
      </Pressable>
      <Text style={[styles.critic, styles.text1Typo]}>Critic</Text>
      <Image
        style={[styles.chevronTopCircleIcon, styles.chevronIconPosition]}
        contentFit="cover"
        source={require("../assets/chevrontopcircle1.png")}
      />
      <Image
        style={[
          styles.chevronBottomCircleIcon,
          styles.barsStatusBarIphoneLLayout,
        ]}
        contentFit="cover"
        source={require("../assets/chevronbottomcircle1.png")}
      />
      <Text style={[styles.starRatings, styles.back1Typo]}>Star Ratings</Text>
      <Text style={styles.trappedInTime}>
        Trapped in time, a pilot must navigate the shadows of history to alter
        the future. 'Chrono Wings' is a thrilling journey where every second
        counts.Trapped in time, a pilot must navigate the shadows of history to
        alter the future. 'Chrono Wings' is a thrilling journey where every
        second counts.
      </Text>
      <Text style={[styles.containsSpoliers, styles.back1Typo]}>
        Contains Spoliers
      </Text>
      <Text style={[styles.upvotes, styles.text1Typo]}>56 upvotes</Text>
      <Text style={[styles.text1, styles.text1Typo]}>11/11/2023</Text>
      <Pressable
        style={[styles.userCircle, styles.userCircleLayout]}
        onPress={() => navigation.navigate("PROFILEFROMREVIEW")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle3.png")}
        />
      </Pressable>
      <Text style={[styles.s, styles.sFlexBox]}>S</Text>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Text style={[styles.boxofficebuzz, styles.flickpicksTypo]}>
          #BoxOfficeBuzz
        </Text>
        <Image
          style={styles.iconTick2}
          contentFit="cover"
          source={require("../assets/-icon-tick2.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={styles.chevronTopNormalIcon}
        contentFit="cover"
        source={require("../assets/chevrontopnormal.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon3, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <View style={styles.clickedReviewsItem} />
      <View style={[styles.barsHomeIndicator, styles.groupChildLayout]}>
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
      </View>
      <View
        style={[styles.barsStatusBarIphoneL, styles.barsStatusBarIphoneLLayout]}
      >
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
    </View>
  );
};

const styles = StyleSheet.create({
  barsHomeIndicatorLayout: {
    width: 375,
    backgroundColor: Color.colorBlack,
  },
  leftLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  sFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  back1Typo: {
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
  },
  frameGroupLayout: {
    height: 132,
    width: 359,
    position: "absolute",
  },
  framePosition: {
    height: 152,
    width: 372,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameGroupPosition: {
    top: 0,
    left: 0,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  m18Typo1: {
    opacity: 0.5,
    fontSize: FontSize.bodySm1216Default_size,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  m18Typo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  netflixTypo: {
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  koreanTypo: {
    letterSpacing: 1,
    fontFamily: FontFamily.openSansBold,
    fontSize: FontSize.bodySm1216Default_size,
    fontWeight: "700",
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  userCircleLayout: {
    height: 52,
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  groupViewLayout: {
    height: 30,
    width: 125,
    position: "absolute",
  },
  groupChildLayout: {
    height: 32,
    position: "absolute",
  },
  flickpicksTypo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    left: 9,
    top: 6,
    fontSize: FontSize.size_mid,
    height: 18,
    textAlign: "left",
    lineHeight: 16,
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  iconPosition: {
    bottom: "32%",
    top: "33.33%",
    height: "34.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectanglePosition: {
    left: 37,
    height: 30,
    position: "absolute",
  },
  groupShadowBox: {
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
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.robotoItalic,
    fontStyle: "italic",
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    lineHeight: 52,
    letterSpacing: 0,
    position: "absolute",
  },
  chevronIconPosition: {
    top: 700,
    overflow: "hidden",
  },
  barsStatusBarIphoneLLayout: {
    height: 44,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
    borderStyle: "solid",
  },
  clickedReviewsChild: {
    top: 44,
    height: 863,
    left: 0,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeftLarge: {
    left: 35,
    top: 50,
  },
  kingdom: {
    top: 36,
    left: 135,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 52,
    fontSize: FontSize.size_10xl_7,
    position: "absolute",
  },
  chevronLeftNormal: {
    left: -3,
    top: 108,
  },
  back1: {
    fontSize: FontSize.size_xl_9,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
  },
  back: {
    left: 21,
    top: 112,
    position: "absolute",
  },
  frameChild: {
    overflow: "hidden",
  },
  text: {
    fontFamily: FontFamily.openSansRegular,
  },
  m18: {
    opacity: 0.5,
    fontSize: FontSize.bodySm1216Default_size,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  m18Wrapper: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorGray_200,
    padding: Padding.p_11xs,
    marginLeft: 8,
    flexDirection: "row",
  },
  season: {
    marginLeft: 8,
    fontFamily: FontFamily.openSansRegular,
  },
  parent: {
    top: 75,
    left: 10,
  },
  netflix: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  original: {
    marginLeft: 3,
    fontFamily: FontFamily.openSansRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_6xs,
  },
  netflixParent: {
    flexDirection: "row",
  },
  image35Icon: {
    width: 117,
    marginTop: 1,
    height: 18,
  },
  frameContainer: {
    top: 40,
    left: 10,
    position: "absolute",
  },
  frameItem: {
    width: 4,
    height: 4,
    marginLeft: 5,
  },
  korean: {
    marginLeft: 5,
  },
  viralPlagueParent: {
    top: 116,
    justifyContent: "center",
    left: 0,
  },
  frameGroup: {
    backgroundColor: Color.lightThemeChartSingleDefault,
    height: 132,
    width: 359,
    position: "absolute",
    overflow: "hidden",
  },
  clickedReviewsInner: {
    top: 138,
    left: 7,
    backgroundColor: Color.lightThemeSystemSurface,
  },
  ratingComponentChild: {
    right: "83.34%",
    borderRadius: Border.br_12xs,
    width: "16.66%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  ratingComponentItem: {
    right: "62.5%",
    left: "20.84%",
    borderRadius: Border.br_12xs,
    width: "16.66%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  ratingComponentInner: {
    right: "41.69%",
    left: "41.66%",
    borderRadius: Border.br_12xs,
    width: "16.66%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  starIcon: {
    right: "20.84%",
    left: "62.5%",
    borderRadius: Border.br_12xs,
    width: "16.66%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  ratingComponentChild1: {
    left: "83.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_12xs,
    width: "16.66%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  ratingComponent: {
    top: 810,
    left: 32,
    width: 296,
  },
  groupChild: {
    width: 127,
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
    height: 32,
    top: 0,
    left: 0,
  },
  flickpicks: {
    width: 89,
  },
  iconTick: {
    width: "11.6%",
    right: "2.32%",
    left: "86.08%",
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  groupView: {
    left: 188,
    top: 619,
  },
  groupItem: {
    width: 142,
  },
  iconTick1: {
    width: "10%",
    right: "5%",
    left: "85%",
  },
  moviemagic: {
    width: 103,
  },
  rectangleGroup: {
    width: 140,
    top: 619,
  },
  yashaswini1: {
    width: 147,
    height: 37,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 52,
    fontSize: FontSize.size_10xl_7,
  },
  yashaswini: {
    left: 89,
    top: 301,
    position: "absolute",
  },
  critic: {
    top: 327,
    left: 139,
    fontSize: FontSize.size_3xl,
  },
  chevronTopCircleIcon: {
    left: 241,
    width: 51,
    height: 45,
    position: "absolute",
  },
  chevronBottomCircleIcon: {
    left: 313,
    width: 49,
    top: 700,
    overflow: "hidden",
  },
  starRatings: {
    top: 773,
    left: 27,
    fontSize: FontSize.size_7xl,
    position: "absolute",
  },
  trappedInTime: {
    top: 449,
    left: 31,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 323,
    height: 145,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  containsSpoliers: {
    top: 403,
    left: 80,
    fontSize: FontSize.size_xl_9,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    position: "absolute",
  },
  upvotes: {
    top: 310,
    left: 319,
    fontSize: FontSize.bodySm1216Default_size,
    fontStyle: "italic",
  },
  text1: {
    top: 333,
    left: 299,
    fontSize: FontSize.bodySm1216Default_size,
    fontStyle: "italic",
  },
  userCircle: {
    left: 17,
    top: 311,
    width: 53,
  },
  s: {
    top: 387,
    left: 33,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorRed_200,
    width: 26,
    height: 48,
    lineHeight: 52,
    position: "absolute",
  },
  groupInner: {
    width: 167,
  },
  boxofficebuzz: {
    width: 125,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    left: 9,
    top: 6,
  },
  iconTick2: {
    width: "8.73%",
    top: "17.33%",
    right: "6.97%",
    bottom: "48%",
    left: "84.3%",
    height: "34.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleContainer: {
    top: 664,
    width: 165,
  },
  vectorIcon: {
    height: "1.48%",
    top: "43.09%",
    right: 294,
    bottom: "55.43%",
    left: 63,
    position: "absolute",
  },
  chevronTopNormalIcon: {
    top: 309,
    left: 275,
    width: 40,
    height: 54,
    overflow: "hidden",
    position: "absolute",
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.53%",
    top: "6.67%",
    right: "4%",
    bottom: "90.86%",
    width: "7.47%",
    height: "2.47%",
    position: "absolute",
  },
  clickedReviewsItem: {
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
    top: 778,
    left: 1,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.colorBlack,
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    opacity: 0.35,
    left: "0%",
    borderColor: Color.lightThemeSystemSurface,
    bottom: "0%",
    top: "0%",
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
    top: 0,
    left: 0,
    backgroundColor: Color.colorBlack,
    height: 44,
  },
  clickedReviews: {
    flex: 1,
    height: 810,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default CLICKEDREVIEWS;
