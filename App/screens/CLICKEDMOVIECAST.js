import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const CLICKEDMOVIECAST = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.clickedmovieCast}>
      <View
        style={[styles.clickedmovieCastChild, styles.barsHomeIndicatorPosition]}
      />
      <View style={[styles.clickedmovieCastInner, styles.groupWrapperLayout]}>
        <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
          <View style={[styles.rectangleParent, styles.groupWrapperPosition]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-141.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-161.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-151.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-171.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-181.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.similarlyRatedMovie, styles.castFlexBox]}>
        Similarly rated movie
      </Text>
      <Pressable
        style={styles.arrowLeftLarge}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={styles.kingdom}>Kingdom</Text>
      <View style={[styles.frameView, styles.frameLayout]}>
        <View style={styles.framePosition}>
          <Image
            style={[styles.frameChild, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/frame-287.png")}
          />
          <LinearGradient
            style={[styles.frameGroup, styles.frameLayout]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0)"]}
          >
            <View style={styles.parent}>
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
            <View style={styles.viralPlagueParent}>
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
      <Pressable
        style={[styles.about, styles.aboutPosition]}
        onPress={() => navigation.navigate("CLICKEDMOVIEABOUT")}
      >
        <Text style={[styles.text1, styles.castFlexBox]}>
          <Text style={styles.about1Typo}>About</Text>
          <Text style={[styles.text2, styles.castTypo]}>{`    `}</Text>
        </Text>
      </Pressable>
      <Text style={[styles.cast, styles.castFlexBox]}>Cast</Text>
      <Pressable
        style={styles.reviews}
        onPress={() => navigation.navigate("CLICKEDMOVIEREVIEWS")}
      >
        <Text style={styles.reviews1}>Reviews</Text>
      </Pressable>
      <View style={styles.groupParent}>
        <View
          style={[styles.antDesignplusOutlinedParent, styles.wrapperLayout]}
        >
          <Image
            style={[styles.antDesignplusOutlinedIcon, styles.aboutPosition]}
            contentFit="cover"
            source={require("../assets/antdesignplusoutlined.png")}
          />
          <Text style={styles.myList}>My List</Text>
        </View>
        <View style={[styles.groupContainer, styles.recommendLayout]}>
          <View style={[styles.recommendWrapper, styles.recommendLayout]}>
            <Text style={[styles.recommend, styles.recommendLayout]}>
              Recommend
            </Text>
          </View>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("REVIEW")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/star-171.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.review, styles.reviewLayout]}>Review</Text>
      <View style={styles.ratingComponent}>
        <Image
          style={[styles.ratingComponentChild, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-121.png")}
        />
        <Image
          style={[styles.ratingComponentItem, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-131.png")}
        />
        <Image
          style={[styles.ratingComponentInner, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-141.png")}
        />
        <Image
          style={[styles.starIcon, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-151.png")}
        />
        <Image
          style={[styles.ratingComponentChild1, styles.capIconPosition]}
          contentFit="cover"
          source={require("../assets/star-161.png")}
        />
      </View>
      <Text style={[styles.reviews2, styles.matchLayout]}>800 reviews</Text>
      <Text style={[styles.match, styles.timeTypo]}>90 % Match</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
      <Text style={[styles.emmaClarkeAsContainer, styles.castFlexBox]}>
        <Text style={styles.emmaClarkeAs}>Emma Clarke as Julia Bennett</Text>
        <Text style={styles.text3}>{`, 
`}</Text>
        <Text
          style={styles.aHardworkingFlorist}
        >{`A hardworking florist who dreams of opening her own shop.
`}</Text>
        <Text style={styles.emmaClarkeAs}>{`Michael Torres as Alex Rivera, 
`}</Text>
        <Text
          style={styles.aHardworkingFlorist}
        >{`A disillusioned musician searching for inspiration.
`}</Text>
        <Text style={styles.emmaClarkeAs}>{`Linda Hsu as Ellie Kim, 
`}</Text>
        <Text
          style={styles.aHardworkingFlorist}
        >{`Julia's best friend and a budding documentary filmmaker.
`}</Text>
        <Text style={styles.emmaClarkeAs}>{`Raj Patel as Samir Gupta, 
`}</Text>
        <Text style={styles.aHardworkingFlorist}>
          A local cafe owner who plays a pivotal role in Julia and Alex's story.
        </Text>
      </Text>
      <View style={[styles.clickedmovieCastItem, styles.borderBorder]} />
      <View style={[styles.barsStatusBarIphoneL, styles.groupWrapperPosition]}>
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
      <View
        style={[styles.barsHomeIndicator, styles.barsHomeIndicatorPosition]}
      >
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
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
  groupWrapperLayout: {
    height: 161,
    position: "absolute",
  },
  groupWrapperPosition: {
    top: 0,
    left: 0,
  },
  groupChildLayout: {
    width: 103,
    borderRadius: Border.br_11xs,
    top: 0,
    height: 161,
    position: "absolute",
  },
  castFlexBox: {
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  frameLayout: {
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
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontWeight: "700",
  },
  aboutPosition: {
    left: 11,
    position: "absolute",
  },
  castTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  wrapperLayout: {
    width: 44,
    position: "absolute",
  },
  recommendLayout: {
    width: 77,
    height: 22,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  reviewLayout: {
    lineHeight: 20,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  ratingChildLayout: {
    borderRadius: Border.br_12xs,
    width: "16.65%",
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    height: "100%",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  matchLayout: {
    height: 20,
    width: 85,
    fontFamily: FontFamily.robotoBoldItalic,
    fontStyle: "italic",
  },
  timeTypo: {
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  clickedmovieCastChild: {
    top: 44,
    height: 818,
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 220,
  },
  groupInner: {
    left: 110,
  },
  rectangleIcon: {
    left: 330,
  },
  groupChild1: {
    left: 440,
  },
  rectangleParent: {
    width: 543,
    height: 161,
    position: "absolute",
  },
  groupWrapper: {
    height: 161,
    position: "absolute",
    width: 363,
  },
  clickedmovieCastInner: {
    top: 695,
    width: 363,
    height: 161,
    left: 4,
  },
  similarlyRatedMovie: {
    top: 661,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.size_xl_9,
    left: 0,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeftLarge: {
    left: 35,
    top: 50,
    height: 24,
    width: 24,
    position: "absolute",
  },
  kingdom: {
    top: 36,
    left: 135,
    fontSize: FontSize.size_10xl_7,
    lineHeight: 52,
    textAlign: "center",
    fontWeight: "600",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
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
    backgroundColor: Color.colorGray_200,
    padding: Padding.p_11xs,
    marginLeft: 8,
    flexDirection: "row",
    borderRadius: Border.br_11xs,
  },
  season: {
    marginLeft: 8,
    fontFamily: FontFamily.openSansRegular,
  },
  parent: {
    top: 75,
    alignItems: "center",
    flexDirection: "row",
    left: 10,
    position: "absolute",
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
    height: 18,
    marginTop: 1,
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
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    backgroundColor: Color.lightThemeChartSingleDefault,
    overflow: "hidden",
    top: 0,
    left: 0,
  },
  frameView: {
    top: 107,
    left: 4,
    backgroundColor: Color.lightThemeSystemSurface,
  },
  about1Typo: {
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    fontSize: FontSize.size_mid,
  },
  text2: {
    fontSize: FontSize.size_xl_9,
    fontWeight: "700",
  },
  text1: {
    lineHeight: 16,
    textAlign: "left",
  },
  about: {
    top: 461,
  },
  cast: {
    top: 462,
    left: 175,
    fontSize: FontSize.size_5xl,
    width: 59,
    height: 15,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "left",
    position: "absolute",
  },
  reviews1: {
    width: 80,
    fontSize: FontSize.size_mid,
    height: 24,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    letterSpacing: 0,
  },
  reviews: {
    left: 86,
    top: 463,
    position: "absolute",
  },
  antDesignplusOutlinedIcon: {
    height: 26,
    overflow: "hidden",
    width: 24,
    left: 11,
    top: 0,
  },
  myList: {
    height: 22,
    fontFamily: FontFamily.bodySm1216Default,
    lineHeight: 20,
    fontSize: FontSize.size_sm_6,
    top: 27,
    width: 44,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  antDesignplusOutlinedParent: {
    height: 49,
    top: 0,
    left: 0,
  },
  recommend: {
    display: "flex",
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.size_sm_6,
    width: 77,
    lineHeight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    top: 0,
    left: 0,
  },
  recommendWrapper: {
    top: 0,
    left: 0,
  },
  groupContainer: {
    left: 211,
    top: 27,
    width: 77,
  },
  vectorIcon: {
    height: "46.59%",
    width: "8.26%",
    top: "6.02%",
    right: "9.44%",
    bottom: "47.39%",
    left: "82.29%",
    position: "absolute",
  },
  wrapper: {
    left: 108,
    top: 3,
    height: 47,
  },
  groupParent: {
    top: 361,
    left: 43,
    width: 288,
    height: 50,
    position: "absolute",
  },
  review: {
    top: 423,
    left: 130,
    width: 83,
    height: 28,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    fontSize: FontSize.size_mid,
  },
  ratingComponentChild: {
    right: "83.35%",
    left: "0%",
    position: "absolute",
  },
  ratingComponentItem: {
    right: "62.54%",
    left: "20.81%",
    position: "absolute",
  },
  ratingComponentInner: {
    right: "41.68%",
    left: "41.68%",
    position: "absolute",
  },
  starIcon: {
    right: "20.86%",
    left: "62.49%",
    position: "absolute",
  },
  ratingComponentChild1: {
    left: "83.35%",
    borderRadius: Border.br_12xs,
    width: "16.65%",
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    height: "100%",
  },
  ratingComponent: {
    top: 282,
    width: 197,
    height: 37,
    left: 0,
    position: "absolute",
  },
  reviews2: {
    top: 315,
    left: 5,
    fontSize: FontSize.body1Normal_size,
    lineHeight: 20,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
    fontWeight: "600",
    width: 85,
    fontFamily: FontFamily.robotoBoldItalic,
    fontStyle: "italic",
  },
  match: {
    top: 259,
    left: 285,
    color: Color.colorLimegreen,
    height: 20,
    width: 85,
    fontFamily: FontFamily.robotoBoldItalic,
    fontStyle: "italic",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.53%",
    top: "5.46%",
    right: "4%",
    bottom: "91.67%",
    width: "7.47%",
    height: "2.87%",
    position: "absolute",
  },
  emmaClarkeAs: {
    fontSize: FontSize.size_sm,
  },
  text3: {
    fontSize: FontSize.size_2xs_8,
  },
  aHardworkingFlorist: {
    fontSize: FontSize.size_5xs,
  },
  emmaClarkeAsContainer: {
    top: 495,
    left: 13,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 357,
    height: 154,
    position: "absolute",
  },
  clickedmovieCastItem: {
    top: 95,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    left: 0,
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderColor: Color.lightThemeSystemSurface,
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    top: "0%",
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
    left: "0%",
    color: Color.lightThemeSystemSurface,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
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
    top: 781,
    height: 32,
    overflow: "hidden",
  },
  clickedmovieCast: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default CLICKEDMOVIECAST;
