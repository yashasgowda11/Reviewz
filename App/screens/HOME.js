import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const HOME = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homePosition]} />
      <Image
        style={styles.homeItem}
        contentFit="cover"
        source={require("../assets/rectangle-26.png")}
      />
      <Text style={[styles.bagira, styles.timeTypo]}>Bagira</Text>
      <View style={styles.homeParent}>
        <Text style={[styles.home1, styles.home1Layout]}>Home</Text>
        <Pressable
          style={styles.forYou}
          onPress={() => navigation.navigate("FORYOU")}
        >
          <Text style={[styles.forYou1, styles.home1Layout]}>For You</Text>
        </Pressable>
      </View>
      <Text style={[styles.popular, styles.timeTypo]}>Popular</Text>
      <GroupComponent
        popularOnNetflix="Popular on Netflix"
        onRectanglePressablePress={() =>
          navigation.navigate("CLICKEDMOVIEABOUT")
        }
      />
      <View style={styles.groupParent}>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={[styles.groupWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.rectangleParent, styles.frameWrapperLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-141.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-161.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-151.png")}
              />
              <Image
                style={[styles.rectangleIcon, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-171.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-181.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.top10InIndiaTodayParent, styles.parentLayout]}>
          <Text style={styles.top10InTypo}>Top 10 in India Today</Text>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.rectangleParent, styles.frameWrapperLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-142.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-162.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-152.png")}
              />
              <Image
                style={[styles.rectangleIcon, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-172.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-182.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.myListParent, styles.parentLayout]}>
          <Text style={styles.top10InTypo}>My List</Text>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.rectangleParent, styles.frameWrapperLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-143.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-163.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-153.png")}
              />
              <Image
                style={[styles.rectangleIcon, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-173.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-183.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.africanMoviesParent, styles.parentLayout]}>
          <Text style={styles.top10InTypo}>African Movies</Text>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.rectangleParent, styles.frameWrapperLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-144.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-164.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-154.png")}
              />
              <Image
                style={[styles.rectangleIcon, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-174.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-184.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.netflixOriginalsParent}>
          <Text style={[styles.netflixOriginals, styles.top10InTypo]}>
            Netflix Originals
          </Text>
          <View style={[styles.groupWrapper1, styles.groupWrapper1Position]}>
            <View
              style={[styles.rectangleParent1, styles.groupWrapper1Position]}
            >
              <Image
                style={[styles.groupChild17, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-145.png")}
              />
              <Image
                style={[styles.groupChild18, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-165.png")}
              />
              <Image
                style={[styles.groupChild19, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-175.png")}
              />
              <Image
                style={[styles.groupChild20, styles.viewPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-155.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.nollywoodMoviesTvParent, styles.parentLayout]}>
          <Text style={styles.top10InTypo}>{`Nollywood Movies & TV`}</Text>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.rectangleParent, styles.frameWrapperLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-146.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-166.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-156.png")}
              />
              <Image
                style={[styles.rectangleIcon, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-176.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-185.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.newReleasesParent, styles.parentLayout]}>
          <Text style={styles.top10InTypo}>New Releases</Text>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.rectangleParent, styles.frameWrapperLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-147.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-167.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-157.png")}
              />
              <Image
                style={[styles.rectangleIcon, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-177.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-186.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameWrapperLayout]}>
          <View style={[styles.groupWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.rectangleParent, styles.frameWrapperLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-148.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-168.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-158.png")}
              />
              <Image
                style={[styles.rectangleIcon, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-178.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-187.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.usTvShowsParent, styles.parentLayout]}>
          <Text style={styles.top10InTypo}>US TV Shows</Text>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.rectangleParent, styles.frameWrapperLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-149.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-169.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-159.png")}
              />
              <Image
                style={[styles.rectangleIcon, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-179.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-188.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.homeInner}
        contentFit="cover"
        source={require("../assets/frame-2.png")}
      />
      <Pressable
        style={styles.antDesignsearchOutlined}
        onPress={() => navigation.navigate("SEARCH")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/antdesignsearchoutlined.png")}
        />
      </Pressable>
      <Pressable
        style={styles.densitySmall}
        onPress={() => navigation.navigate("DASHBOARD1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/density-small.png")}
        />
      </Pressable>
      <View style={[styles.view, styles.viewPosition]}>
        <Image
          style={styles.itemLayout}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Image
          style={[styles.item, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <Image
          style={[styles.item, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <Image
          style={[styles.item, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
      </View>
      <View style={[styles.lineView, styles.borderBorder]} />
      <View style={styles.barsPosition}>
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
        <View style={[styles.barsStatusBarIphoneL1, styles.barsPosition]}>
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
      </View>
      <View style={[styles.barsHomeIndicator, styles.homePosition]}>
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  home1Layout: {
    lineHeight: 30,
    letterSpacing: 1,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  frameWrapperLayout: {
    height: 161,
    position: "absolute",
  },
  groupChildLayout1: {
    width: 103,
    borderRadius: Border.br_11xs,
    height: 161,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 191,
    width: 363,
    position: "absolute",
  },
  groupPosition: {
    top: 30,
    width: 363,
  },
  top10InTypo: {
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
    left: 4,
    top: 0,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  groupWrapper1Position: {
    height: 251,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    width: 154,
    height: 251,
    borderRadius: Border.br_11xs,
    top: 0,
  },
  viewPosition: {
    left: 161,
    position: "absolute",
  },
  itemLayout: {
    height: 7,
    width: 7,
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  barsPosition: {
    height: 44,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  homeChild: {
    top: 44,
    height: 3365,
  },
  homeItem: {
    left: -19,
    width: 424,
    height: 415,
    top: 94,
    position: "absolute",
  },
  bagira: {
    top: 109,
    fontWeight: "700",
    fontSize: FontSize.size_7xl_7,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 20,
    letterSpacing: 0,
    left: 12,
  },
  home1: {
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    top: 0,
    left: 0,
    position: "absolute",
  },
  forYou1: {
    fontSize: FontSize.size_mid_2,
    fontFamily: FontFamily.bodySm1216Default,
  },
  forYou: {
    left: 93,
    top: 0,
    position: "absolute",
  },
  homeParent: {
    top: 54,
    left: 113,
    width: 156,
    height: 31,
    position: "absolute",
  },
  popular: {
    top: 516,
    left: 25,
    fontWeight: "700",
    fontSize: FontSize.size_7xl_7,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 20,
    letterSpacing: 0,
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
    top: 0,
    left: 0,
  },
  groupWrapper: {
    width: 363,
    top: 0,
    left: 0,
  },
  frameWrapper: {
    width: 363,
    left: 2,
    top: 0,
  },
  groupContainer: {
    height: 161,
    position: "absolute",
    left: 0,
  },
  top10InIndiaTodayParent: {
    top: 183,
    left: 2,
  },
  myListParent: {
    top: 396,
    left: 2,
  },
  africanMoviesParent: {
    top: 609,
    left: 2,
  },
  netflixOriginals: {
    width: 163,
  },
  groupChild17: {
    left: 0,
    position: "absolute",
  },
  groupChild18: {
    left: 321,
    position: "absolute",
  },
  groupChild19: {
    left: 481,
    position: "absolute",
  },
  groupChild20: {
    width: 154,
    height: 251,
    borderRadius: Border.br_11xs,
    top: 0,
  },
  rectangleParent1: {
    width: 635,
    top: 0,
  },
  groupWrapper1: {
    top: 30,
    width: 363,
  },
  netflixOriginalsParent: {
    top: 1035,
    height: 281,
    width: 363,
    left: 2,
    position: "absolute",
  },
  nollywoodMoviesTvParent: {
    top: 822,
    left: 2,
  },
  newReleasesParent: {
    top: 1350,
    left: 0,
  },
  frameContainer: {
    top: 1607,
    width: 363,
    left: 0,
  },
  usTvShowsParent: {
    top: 1802,
    left: 0,
  },
  groupParent: {
    top: 956,
    width: 365,
    height: 1993,
    left: 0,
    position: "absolute",
  },
  homeInner: {
    top: 559,
    height: 102,
    width: 363,
    left: 12,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  antDesignsearchOutlined: {
    left: 333,
    top: 56,
    width: 28,
    height: 24,
    position: "absolute",
  },
  densitySmall: {
    left: 11,
    top: 55,
    width: 37,
    height: 29,
    position: "absolute",
  },
  item: {
    marginLeft: 8,
  },
  view: {
    top: 444,
    flexDirection: "row",
  },
  lineView: {
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    top: 94,
    left: 0,
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
    left: "0%",
    height: "100%",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
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
    fontWeight: "600",
    left: "0%",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 20,
    letterSpacing: 0,
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
  barsStatusBarIphoneL1: {
    backgroundColor: Color.colorBlack,
    height: 44,
    right: 0,
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
  home: {
    flex: 1,
    height: 811,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default HOME;
