import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SEARCH = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
      <View style={[styles.barsHomeIndicator, styles.barsPosition]}>
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
      </View>
      <View style={styles.barsStatusBarIphoneL}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
        <View style={[styles.barsStatusBarIphoneLChild, styles.barsPosition]} />
        <View style={[styles.barsStatusBarIphoneLInner, styles.innerLayout]}>
          <View style={[styles.rectangleParent, styles.innerLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-14.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-16.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-15.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-17.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-18.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.barsStatusBarIphoneL}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
        <View style={[styles.barsStatusBarIphoneLChild, styles.barsPosition]} />
        <View style={[styles.barsStatusBarIphoneLInner, styles.innerLayout]}>
          <View style={[styles.rectangleParent, styles.innerLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-14.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-16.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-15.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-17.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-18.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.barsStatusBarIphoneL}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
        <View style={[styles.rectangleView, styles.barsPosition]} />
        <View style={[styles.barsStatusBarIphoneLInner, styles.innerLayout]}>
          <View style={[styles.rectangleParent, styles.innerLayout]}>
            <Pressable
              style={[styles.wrapper, styles.groupChildLayout]}
              onPress={() => navigation.navigate("CLICKEDMOVIEABOUT")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/rectangle-14.png")}
              />
            </Pressable>
            <Image
              style={[styles.groupItem, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-16.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-15.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-17.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-18.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild11, styles.groupChildBg]} />
        </View>
        <View
          style={[
            styles.citationBreakingBadHustlerWrapper,
            styles.citationLayout,
          ]}
        >
          <Pressable
            style={styles.citationBreakingBadContainer}
            onPress={() => navigation.navigate("CLICKEDMOVIEABOUT")}
          >
            <Text
              style={[styles.citationBreakingBadHustler, styles.searchForATypo]}
            >{`Citation
Breaking Bad
Hustler
21 Jump Street
Umbrella Academy `}</Text>
          </Pressable>
        </View>
      </View>
      <Text style={[styles.previouslySearches, styles.timeTypo]}>
        Previously Searches
      </Text>
      <View style={[styles.searchInner, styles.innerLayout]}>
        <View style={[styles.rectangleParent, styles.innerLayout]}>
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
      <View style={[styles.rectangleParent1, styles.groupChild17Layout]}>
        <View style={[styles.groupChild17, styles.groupChild17Layout]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("HOME")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View
          style={[styles.searchForAShowMovieGenrParent, styles.searchLayout]}
        >
          <Text
            style={[styles.searchForA, styles.searchLayout]}
          >{`Search for a show, movie, genre, e.t.c. `}</Text>
          <Image
            style={styles.antDesignsearchOutlinedIcon}
            contentFit="cover"
            source={require("../assets/antdesignsearchoutlined1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barsPosition: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    lineHeight: 20,
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  innerLayout: {
    height: 161,
    position: "absolute",
  },
  groupChildLayout: {
    width: 103,
    height: 161,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 163,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorDarkslategray,
    top: 0,
  },
  citationLayout: {
    height: 157,
    width: 173,
  },
  searchForATypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySm1216Default,
  },
  groupChild17Layout: {
    height: 52,
    width: 375,
    left: 0,
    position: "absolute",
  },
  searchLayout: {
    height: 31,
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
  border: {
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.lightThemeSystemSurface,
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
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
    fontWeight: "600",
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
    height: 736,
    top: 44,
  },
  groupChild: {
    borderRadius: Border.br_11xs,
    left: 0,
  },
  groupItem: {
    left: 220,
    borderRadius: Border.br_11xs,
  },
  groupInner: {
    left: 110,
    borderRadius: Border.br_11xs,
  },
  rectangleIcon: {
    left: 330,
    borderRadius: Border.br_11xs,
  },
  groupChild1: {
    left: 440,
    borderRadius: Border.br_11xs,
  },
  rectangleParent: {
    width: 543,
    top: 0,
    left: 0,
  },
  barsStatusBarIphoneLInner: {
    top: 340,
    left: 12,
    width: 363,
    height: 161,
  },
  barsStatusBarIphoneL: {
    right: 0,
    height: 44,
    top: 0,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    height: 737,
    top: 44,
  },
  icon: {
    borderRadius: Border.br_11xs,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0,
  },
  groupChild11: {
    height: 163,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    top: 0,
  },
  citationBreakingBadHustler: {
    fontSize: FontSize.size_mini_7,
    letterSpacing: 1,
    lineHeight: 30,
    height: 157,
    width: 173,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.bodySm1216Default,
  },
  citationBreakingBadContainer: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  citationBreakingBadHustlerWrapper: {
    top: 6,
    left: 48,
    position: "absolute",
  },
  groupParent: {
    top: 104,
  },
  previouslySearches: {
    top: 300,
    fontSize: FontSize.size_7xl_7,
    fontWeight: "700",
    left: 19,
  },
  searchInner: {
    top: 536,
    left: 6,
    width: 363,
    height: 161,
  },
  groupChild17: {
    backgroundColor: Color.colorDarkslategray,
    top: 0,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "89.6%",
    top: "26.92%",
    right: "2.93%",
    bottom: "34.62%",
    width: "7.47%",
    height: "38.46%",
    position: "absolute",
  },
  searchForA: {
    left: 36,
    fontSize: FontSize.size_base_2,
    lineHeight: 31,
    color: Color.colorSilver,
    width: 320,
    textAlign: "left",
    fontFamily: FontFamily.bodySm1216Default,
    letterSpacing: 0,
    height: 31,
    top: 0,
  },
  antDesignsearchOutlinedIcon: {
    top: 5,
    width: 20,
    height: 20,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  searchForAShowMovieGenrParent: {
    top: 11,
    width: 356,
    left: 19,
  },
  rectangleParent1: {
    top: 44,
  },
  search: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default SEARCH;
