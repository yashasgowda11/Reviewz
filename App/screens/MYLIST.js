import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const MYLIST = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myList}>
      <View style={[styles.myListChild, styles.myListChildPosition]} />
      <View style={[styles.myListInner, styles.groupInnerLayout]}>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <Pressable
            style={[styles.wrapper, styles.groupLayout]}
            onPress={() => navigation.navigate("CLICKEDMOVIEABOUT")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/rectangle-1410.png")}
            />
          </Pressable>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1610.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1510.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupInnerLayout]}>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1411.png")}
          />
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1611.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1511.png")}
          />
        </View>
      </View>
      <View style={[styles.myListInner1, styles.groupInnerLayout]}>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1412.png")}
          />
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1612.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1512.png")}
          />
        </View>
      </View>
      <View style={[styles.myListInner2, styles.groupInnerLayout]}>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1413.png")}
          />
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1613.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1513.png")}
          />
        </View>
      </View>
      <View style={[styles.myListInner3, styles.groupInnerLayout]}>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1414.png")}
          />
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1614.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1514.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.arrowLeftLarge}
        onPress={() => navigation.navigate("DASHBOARD1")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.myList1, styles.timeTypo]}>My List</Text>
      <View style={styles.myListItem} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <View style={[styles.barsStatusBarIphoneL, styles.borderBorder]}>
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
      <View style={[styles.barsHomeIndicator, styles.myListChildPosition]}>
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myListChildPosition: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 161,
    position: "absolute",
  },
  groupLayout: {
    width: 110,
    top: 0,
    height: 161,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
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
    position: "absolute",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  myListChild: {
    height: 3365,
    top: 44,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_11xs,
    width: "100%",
  },
  wrapper: {
    left: 0,
  },
  groupChild: {
    left: 241,
    borderRadius: Border.br_11xs,
  },
  groupItem: {
    left: 120,
    width: 111,
    borderRadius: Border.br_11xs,
    top: 0,
  },
  rectangleParent: {
    top: 0,
    width: 351,
    height: 161,
    left: 0,
  },
  myListInner: {
    top: 108,
    width: 351,
    height: 161,
    left: 12,
  },
  groupInner: {
    borderRadius: Border.br_11xs,
    left: 0,
  },
  groupView: {
    top: 448,
    width: 351,
    height: 161,
    left: 12,
  },
  myListInner1: {
    top: 278,
    width: 351,
    height: 161,
    left: 12,
  },
  myListInner2: {
    top: 618,
    width: 351,
    height: 161,
    left: 12,
  },
  myListInner3: {
    top: 788,
    width: 351,
    height: 161,
    left: 12,
  },
  icon1: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  arrowLeftLarge: {
    left: 36,
    top: 56,
    width: 24,
    height: 24,
    position: "absolute",
  },
  myList1: {
    left: 135,
    fontSize: FontSize.size_10xl_7,
    lineHeight: 52,
    top: 44,
  },
  myListItem: {
    top: 97,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.53%",
    top: "6.91%",
    right: "4%",
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
    borderColor: Color.lightThemeSystemSurface,
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
    right: 0,
    borderColor: Color.colorBlack,
    height: 44,
    top: 0,
    backgroundColor: Color.colorBlack,
    borderWidth: 1,
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
    top: 784,
    height: 32,
    overflow: "hidden",
  },
  myList: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default MYLIST;
