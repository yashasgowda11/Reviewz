import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const MYPROFILE = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.myProfile1, styles.iconLayout1]}>
      <View style={[styles.barsHomeIndicator, styles.childPosition]}>
        <View style={[styles.background, styles.timePosition]} />
        <View style={styles.line} />
      </View>
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
        <View
          style={[styles.barsStatusBarIphoneLChild, styles.childPosition]}
        />
        <Text style={[styles.yashaswini, styles.myProfileTypo]}>
          Yashaswini
        </Text>
        <Image
          style={styles.bxbxsPencilIcon}
          contentFit="cover"
          source={require("../assets/bxbxspencil.png")}
        />
      </View>
      <Text style={[styles.myProfile, styles.myProfileTypo]}>My Profile</Text>
      <Text style={[styles.upvotes, styles.upvotesTypo]}>5680 upvotes</Text>
      <Text style={[styles.reviews, styles.upvotesTypo]}>{`250 Reviews `}</Text>
      <Pressable
        style={[styles.arrowLeftLarge, styles.doneAllIconLayout]}
        onPress={() => navigation.navigate("DASHBOARD1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Image
        style={styles.userCircleIcon}
        contentFit="cover"
        source={require("../assets/usercircle.png")}
      />
      <Image
        style={[styles.doneAllIcon, styles.doneAllIconLayout]}
        contentFit="cover"
        source={require("../assets/done-all.png")}
      />
      <View style={[styles.myProfile1Child, styles.borderBorder]} />
      <Pressable
        style={styles.login1}
        onPress={() => navigation.navigate("Onboarding1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/login-1.png")}
        />
      </Pressable>
      <Image
        style={styles.chevronTopNormalIcon}
        contentFit="cover"
        source={require("../assets/chevrontopnormal.png")}
      />
      <View style={[styles.myProfile1Inner, styles.myProfile1InnerLayout]}>
        <View style={[styles.rectangleParent, styles.myProfile1InnerLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <View style={styles.groupParent}>
            <View
              style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
            >
              <View style={styles.groupItem} />
              <View
                style={[styles.rectangleContainer, styles.groupInnerLayout]}
              >
                <View style={[styles.groupInner, styles.groupInnerLayout]} />
                <Text style={[styles.copyLink, styles.copyLinkPosition]}>
                  Copy Link
                </Text>
              </View>
            </View>
            <View style={styles.termsConditionsParent}>
              <Text
                style={[styles.termsConditions, styles.moreTypo]}
              >{`Terms & Conditions`}</Text>
              <View
                style={[
                  styles.tellFriendsAboutReviewzParent,
                  styles.rectangleGroupPosition,
                ]}
              >
                <Text style={[styles.tellFriendsAbout, styles.criticFlexBox]}>
                  Tell friends about Reviewz
                </Text>
                <Text style={[styles.critic, styles.criticFlexBox]}>
                  Critic
                </Text>
                <Image
                  style={[styles.groupIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/group-71.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.groupView, styles.groupViewLayout]}>
            <View style={[styles.rectangleView, styles.copyLinkPosition]} />
            <Image
              style={[styles.gmailLogo1Icon, styles.groupViewLayout]}
              contentFit="cover"
              source={require("../assets/gmaillogo-1.png")}
            />
          </View>
          <View
            style={[styles.bxbxDotsVerticalRoundedParent, styles.bxbxLayout]}
          >
            <Image
              style={[styles.bxbxDotsVerticalRoundedIcon, styles.bxbxLayout]}
              contentFit="cover"
              source={require("../assets/bxbxdotsverticalrounded.png")}
            />
            <Text style={[styles.more, styles.moreTypo]}>More</Text>
          </View>
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-93.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-92.png")}
          />
        </View>
      </View>
      <Text style={[styles.discoverWhatsWorth, styles.criticFlexBox]}>
        Discover what's worth watching with Reviewz: your go-to guide in the
        vast world of cinema. Join us, share your insights, and shape the movie
        trends!
      </Text>
      <View style={[styles.myProfile1Item, styles.lineViewLayout]} />
      <Image
        style={[styles.lineIcon, styles.linePosition]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <View style={[styles.lineView, styles.linePosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  childPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  timePosition: {
    left: "0%",
    width: "100%",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  myProfileTypo: {
    lineHeight: 52,
    fontSize: FontSize.size_10xl_7,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  upvotesTypo: {
    fontFamily: FontFamily.robotoItalic,
    fontStyle: "italic",
    fontSize: FontSize.bodySm1216Default_size,
    lineHeight: 52,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  doneAllIconLayout: {
    height: 24,
    position: "absolute",
  },
  myProfile1InnerLayout: {
    height: 409,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangleGroupPosition: {
    left: 1,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 96,
    height: 37,
    top: 0,
    position: "absolute",
  },
  copyLinkPosition: {
    top: 1,
    position: "absolute",
  },
  moreTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  criticFlexBox: {
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  groupViewLayout: {
    height: 36,
    width: 47,
    position: "absolute",
  },
  bxbxLayout: {
    width: 37,
    position: "absolute",
  },
  groupChildLayout: {
    height: 34,
    width: 36,
    top: 349,
    position: "absolute",
  },
  lineViewLayout: {
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorGray_100,
    height: 42,
    borderStyle: "solid",
  },
  linePosition: {
    top: 592,
    position: "absolute",
  },
  background: {
    top: "-2.84%",
    bottom: "2.84%",
    right: "0%",
    height: "100%",
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
    backgroundColor: Color.colorBlack,
    overflow: "hidden",
  },
  border: {
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    borderRadius: 3,
    borderColor: Color.lightThemeSystemSurface,
    borderWidth: 1,
    opacity: 0.35,
    bottom: "0%",
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
    right: "0%",
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
    color: Color.lightThemeSystemSurface,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
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
    top: 44,
    height: 737,
    backgroundColor: Color.colorBlack,
  },
  yashaswini: {
    top: 191,
    left: 114,
  },
  bxbxsPencilIcon: {
    top: 103,
    left: 236,
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  barsStatusBarIphoneL: {
    right: 0,
    height: 44,
    top: 0,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  myProfile: {
    top: 38,
    left: 126,
  },
  upvotes: {
    top: 259,
    left: 176,
  },
  reviews: {
    top: 289,
    left: 165,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeftLarge: {
    left: 35,
    top: 50,
    width: 24,
  },
  userCircleIcon: {
    top: 99,
    left: 141,
    width: 93,
    height: 95,
    position: "absolute",
    overflow: "hidden",
  },
  doneAllIcon: {
    top: 161,
    left: 233,
    width: 19,
    overflow: "hidden",
  },
  myProfile1Child: {
    top: 95,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    left: 0,
  },
  login1: {
    left: 324,
    top: 41,
    width: 39,
    height: 42,
    position: "absolute",
  },
  chevronTopNormalIcon: {
    top: 258,
    left: 138,
    width: 40,
    height: 54,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 162,
    backgroundColor: "#1a1a1a",
    height: 247,
  },
  groupItem: {
    width: 247,
    height: 37,
    top: 0,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_11xs,
    left: 0,
    backgroundColor: Color.lightThemeSystemSurface,
  },
  copyLink: {
    left: 12,
    fontSize: 17,
    lineHeight: 35,
    color: Color.colorBlack,
    width: 73,
    height: 35,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  rectangleContainer: {
    left: 254,
  },
  rectangleGroup: {
    top: 287,
    width: 350,
    height: 37,
  },
  termsConditions: {
    top: 267,
    textDecoration: "underline",
    color: Color.colorSilver,
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  tellFriendsAbout: {
    top: 186,
    left: 33,
    fontWeight: "700",
    lineHeight: 15,
    fontSize: FontSize.size_lgi_6,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
  },
  critic: {
    left: 150,
    fontWeight: "700",
    lineHeight: 15,
    fontSize: FontSize.size_lgi_6,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    top: 0,
  },
  groupIcon: {
    height: "12.14%",
    width: "9.06%",
    top: "87.86%",
    right: "90.94%",
    bottom: "0%",
    left: "0%",
  },
  tellFriendsAboutReviewzParent: {
    width: 265,
    height: 206,
    top: 0,
  },
  termsConditionsParent: {
    width: 266,
    height: 285,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    width: 351,
    height: 324,
    left: 15,
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    left: 6,
    borderRadius: 8,
    width: 34,
    height: 32,
    backgroundColor: Color.lightThemeSystemSurface,
  },
  gmailLogo1Icon: {
    top: 0,
    left: 0,
  },
  groupView: {
    left: 208,
    top: 349,
    height: 36,
    width: 47,
  },
  bxbxDotsVerticalRoundedIcon: {
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    height: 37,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  more: {
    top: 26,
    left: 2,
    fontSize: FontSize.size_mini_7,
    lineHeight: 30,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  bxbxDotsVerticalRoundedParent: {
    top: 335,
    left: 309,
    height: 56,
  },
  groupChild1: {
    left: 30,
  },
  groupChild2: {
    left: 122,
  },
  rectangleParent: {
    top: 0,
  },
  myProfile1Inner: {
    top: 244,
  },
  discoverWhatsWorth: {
    top: 453,
    width: 323,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    left: 15,
  },
  myProfile1Item: {
    top: 591,
    left: 94,
    position: "absolute",
  },
  lineIcon: {
    left: 282,
    width: 0,
    height: 41,
  },
  lineView: {
    left: 187,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorGray_100,
    height: 42,
    borderStyle: "solid",
  },
  myProfile1: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default MYPROFILE;
