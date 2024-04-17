import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const CLICKEDMOVIEMYLISTCLICKED = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.clickedmovieMylistClicked}>
      <View style={styles.barsStatusBarIphoneL}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
        <View style={[styles.barsStatusBarIphoneLChild, styles.barsPosition]} />
      </View>
      <View
        style={[
          styles.clickedmovieMylistClickedInner,
          styles.groupWrapperLayout,
        ]}
      >
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
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
      <Text style={[styles.similarlyRatedMovie, styles.cast1Typo1]}>
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
      <View
        style={[styles.clickedmovieMylistClickedChild, styles.borderBorder]}
      />
      <Text style={[styles.kingdom, styles.timeFlexBox]}>Kingdom</Text>
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
            <View style={[styles.viralPlagueParent, styles.recommendFlexBox]}>
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
      <Text style={styles.about}>
        <Text style={[styles.about1, styles.about1Typo]}>About</Text>
        <Text style={styles.text1}>{`    `}</Text>
      </Text>
      <View style={styles.groupParent}>
        <View style={[styles.myListWrapper, styles.listLayout]}>
          <Text style={[styles.myList, styles.myListTypo]}>My List</Text>
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
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/star-17.png")}
        />
      </View>
      <Text style={[styles.review, styles.cast1Typo]}>Review</Text>
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
          style={[styles.ratingComponentChild1, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-151.png")}
        />
        <Image
          style={[styles.ratingComponentChild2, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-161.png")}
        />
      </View>
      <Text style={[styles.reviews, styles.matchTypo]}>800 reviews</Text>
      <Text style={[styles.match, styles.matchTypo]}>90 % Match</Text>
      <Text
        style={[styles.dramaAction, styles.inTheHeartPosition]}
      >{`Drama & Action`}</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <Pressable
        style={styles.cast}
        onPress={() => navigation.navigate("CLICKEDMOVIECAST")}
      >
        <Text style={[styles.cast1, styles.cast1Typo]}>Cast</Text>
      </Pressable>
      <Pressable
        style={styles.reviews1}
        onPress={() => navigation.navigate("CLICKEDMOVIEREVIEWS")}
      >
        <Text style={[styles.reviews2, styles.cast1Typo]}>Reviews</Text>
      </Pressable>
      <Text style={[styles.inTheHeart, styles.inTheHeartPosition]}>
        In the heart of New York, amidst the chaos of the holiday season, two
        strangers with contrasting lives find their fates intertwined after a
        rare solar eclipse visible over 34th Street. As they navigate unexpected
        challenges and discover the magic of connection, they realize the city
        has more to offer than its bustling streets and towering skyscrapers.
        Eclipse Over 34th Street is a heartwarming tale of serendipity, love,
        and the little moments that become life's biggest gifts.
      </Text>
      <Image
        style={[styles.iconTick, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-tick6.png")}
      />
      <View style={[styles.barsHomeIndicator, styles.barsPosition]}>
        <View style={[styles.background, styles.iconLayout1]} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  barsPosition: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  groupWrapperLayout: {
    height: 161,
    position: "absolute",
  },
  groupChildLayout: {
    width: 103,
    borderRadius: Border.br_11xs,
    height: 161,
    top: 0,
    position: "absolute",
  },
  cast1Typo1: {
    textAlign: "left",
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
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
    left: 0,
    top: 0,
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
  recommendFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  koreanTypo: {
    letterSpacing: 1,
    fontFamily: FontFamily.openSansBold,
    fontSize: FontSize.bodySm1216Default_size,
    fontWeight: "700",
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  about1Typo: {
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
  },
  listLayout: {
    height: 22,
    width: 44,
    position: "absolute",
  },
  myListTypo: {
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.size_sm_6,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    lineHeight: 20,
    letterSpacing: 0,
    left: 0,
    top: 0,
  },
  recommendLayout: {
    width: 77,
    height: 22,
    position: "absolute",
  },
  cast1Typo: {
    fontSize: FontSize.size_mid,
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
  },
  ratingChildLayout: {
    borderRadius: Border.br_12xs,
    width: "16.65%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  matchTypo: {
    height: 20,
    width: 85,
    fontFamily: FontFamily.robotoBoldItalic,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  inTheHeartPosition: {
    lineHeight: 18,
    left: 7,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
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
    borderStyle: "solid",
    top: "0%",
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
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
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
  barsStatusBarIphoneLChild: {
    top: 44,
    height: 830,
  },
  barsStatusBarIphoneL: {
    right: 0,
    height: 44,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
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
    left: 0,
    top: 0,
  },
  groupWrapper: {
    width: 363,
    height: 161,
    left: 0,
    top: 0,
  },
  clickedmovieMylistClickedInner: {
    top: 699,
    width: 363,
    height: 161,
    left: 4,
  },
  similarlyRatedMovie: {
    top: 672,
    fontSize: FontSize.size_xl_9,
    lineHeight: 16,
    left: 5,
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeftLarge: {
    left: 35,
    top: 50,
    width: 24,
    height: 24,
    position: "absolute",
  },
  clickedmovieMylistClickedChild: {
    top: 95,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    left: 0,
  },
  kingdom: {
    top: 36,
    left: 135,
    fontSize: FontSize.size_10xl_7,
    lineHeight: 52,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
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
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    backgroundColor: Color.lightThemeChartSingleDefault,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  frameView: {
    top: 107,
    left: 4,
    backgroundColor: Color.lightThemeSystemSurface,
  },
  about1: {
    fontSize: FontSize.size_5xl,
  },
  text1: {
    fontWeight: "700",
    fontSize: FontSize.size_xl_9,
    fontFamily: FontFamily.robotoBold,
  },
  about: {
    top: 460,
    left: 7,
    textAlign: "left",
    lineHeight: 16,
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  myList: {
    height: 22,
    width: 44,
    position: "absolute",
  },
  myListWrapper: {
    top: 24,
    left: 0,
  },
  recommend: {
    display: "flex",
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.size_sm_6,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    lineHeight: 20,
    letterSpacing: 0,
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  recommendWrapper: {
    left: 0,
    top: 0,
  },
  groupContainer: {
    left: 211,
    top: 24,
  },
  vectorIcon: {
    height: "49.57%",
    width: "8.26%",
    right: "9.44%",
    bottom: "50.43%",
    left: "82.29%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  starIcon: {
    left: 108,
    width: 44,
    height: 47,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    top: 364,
    left: 43,
    width: 288,
    height: 47,
    position: "absolute",
  },
  review: {
    top: 423,
    left: 130,
    width: 83,
    height: 28,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    textAlign: "center",
    position: "absolute",
    lineHeight: 20,
  },
  ratingComponentChild: {
    right: "83.35%",
    left: "0%",
  },
  ratingComponentItem: {
    right: "62.54%",
    left: "20.81%",
  },
  ratingComponentInner: {
    right: "41.68%",
    left: "41.68%",
  },
  ratingComponentChild1: {
    right: "20.86%",
    left: "62.49%",
  },
  ratingComponentChild2: {
    left: "83.35%",
    right: "0%",
  },
  ratingComponent: {
    top: 282,
    width: 197,
    height: 37,
    left: 0,
    position: "absolute",
  },
  reviews: {
    top: 315,
    fontSize: FontSize.body1Normal_size,
    left: 5,
    width: 85,
    fontFamily: FontFamily.robotoBoldItalic,
    fontStyle: "italic",
    color: Color.lightThemeSystemSurface,
  },
  match: {
    top: 259,
    left: 285,
    color: Color.colorLimegreen,
    fontSize: FontSize.size_mini,
  },
  dramaAction: {
    top: 499,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88%",
    top: "5.6%",
    right: "4.53%",
    bottom: "91.53%",
    width: "7.47%",
    height: "2.87%",
    position: "absolute",
  },
  cast1: {
    width: 47,
    height: 15,
    textAlign: "left",
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  cast: {
    left: 185,
    top: 461,
    position: "absolute",
  },
  reviews2: {
    width: 80,
    height: 24,
    textAlign: "left",
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  reviews1: {
    left: 98,
    top: 462,
    position: "absolute",
  },
  inTheHeart: {
    top: 526,
    fontSize: FontSize.size_2xs_8,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 357,
    height: 154,
  },
  iconTick: {
    height: "2.76%",
    width: "8.27%",
    top: "45.07%",
    right: "77.87%",
    bottom: "52.17%",
    left: "13.87%",
    position: "absolute",
  },
  background: {
    top: "-2.84%",
    bottom: "2.84%",
    right: "0%",
    left: "0%",
    position: "absolute",
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
  clickedmovieMylistClicked: {
    flex: 1,
    height: 812,
    display: "none",
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default CLICKEDMOVIEMYLISTCLICKED;
