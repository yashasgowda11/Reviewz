import React, { useMemo } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({
  popularOnNetflix,
  rectangleIconTop,
  onRectanglePressablePress,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangleIconTop),
    };
  }, [rectangleIconTop]);

  return (
    <View style={[styles.popularOnNetflixParent, groupViewStyle]}>
      <Text style={styles.popularOnNetflix}>{popularOnNetflix}</Text>
      <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
        <View style={[styles.rectangleParent, styles.groupWrapperPosition]}>
          <Pressable
            style={[styles.wrapper, styles.groupLayout]}
            onPress={onRectanglePressablePress}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/rectangle-14.png")}
            />
          </Pressable>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-16.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-15.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-17.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-18.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupWrapperPosition: {
    height: 161,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 103,
    height: 161,
    top: 0,
    position: "absolute",
  },
  popularOnNetflix: {
    left: 4,
    fontSize: FontSize.size_xl_9,
    letterSpacing: 0,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.lightThemeSystemSurface,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_11xs,
  },
  wrapper: {
    left: 0,
    width: 103,
  },
  groupChild: {
    left: 220,
    borderRadius: Border.br_11xs,
  },
  groupItem: {
    left: 110,
    borderRadius: Border.br_11xs,
  },
  groupInner: {
    left: 330,
    borderRadius: Border.br_11xs,
  },
  rectangleIcon: {
    left: 440,
    borderRadius: Border.br_11xs,
  },
  rectangleParent: {
    width: 543,
    top: 0,
  },
  groupWrapper: {
    top: 30,
    width: 363,
  },
  popularOnNetflixParent: {
    top: 698,
    left: 2,
    height: 191,
    width: 363,
    position: "absolute",
  },
});

export default GroupComponent;
