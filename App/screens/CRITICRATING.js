import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const CRITICRATING = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.criticRating}>
      <View
        style={[styles.criticRatingChild, styles.criticRatingChildLayout]}
      />
      <View style={styles.barChart}>
        <View style={[styles.plotArea, styles.areaPosition]}>
          <View style={styles.yAxisContainner}>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>90</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line1.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider1.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider1.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>80</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line2.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider2.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider2.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>70</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider2.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line3.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider3.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider3.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>60</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider3.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line4.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider4.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider4.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>50</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider4.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line5.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider5.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider5.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>40</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider5.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line6.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider6.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider6.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>30</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider6.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line7.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider7.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider7.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>20</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider7.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line8.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider8.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider8.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>10</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider8.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon, styles.leftIconPosition]}
                    contentFit="cover"
                    source={require("../assets/left-divider9.png")}
                  />
                  <View style={[styles.value, styles.valueSpaceBlock]}>
                    <Text style={styles.text}>0</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider, styles.fixedLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.xAxisContainer}>
            <View style={styles.container10}>
              <View style={[styles.xAxisArea, styles.axisContainerPosition]}>
                <View style={[styles.xAxis1, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.yt} numberOfLines={1}>
                      Mon
                    </Text>
                  </View>
                </View>
                <View style={[styles.xAxis1, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.yt} numberOfLines={1}>
                      Tue
                    </Text>
                  </View>
                </View>
                <View style={[styles.xAxis1, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.yt} numberOfLines={1}>
                      Wed
                    </Text>
                  </View>
                </View>
                <View style={[styles.xAxis1, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.yt} numberOfLines={1}>
                      Thu
                    </Text>
                  </View>
                </View>
                <View style={[styles.xAxis1, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.yt} numberOfLines={1}>
                      Fri
                    </Text>
                  </View>
                </View>
                <View style={[styles.xAxis1, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.yt} numberOfLines={1}>
                      Sat
                    </Text>
                  </View>
                </View>
                <View style={[styles.xAxis1, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.yt} numberOfLines={1}>
                      Sun
                    </Text>
                  </View>
                </View>
                <View style={[styles.xAxis8, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.text16} numberOfLines={1}>
                      Sun
                    </Text>
                  </View>
                </View>
                <View style={[styles.xAxis8, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.text16} numberOfLines={1}>
                      Sun
                    </Text>
                  </View>
                </View>
                <View style={[styles.xAxis8, styles.barContainerFlexBox]}>
                  <View style={styles.value10}>
                    <Text style={styles.text16} numberOfLines={1}>
                      Sun
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.emptyDoNotTouch, styles.areaPosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.plotArea, styles.areaPosition]}>
          <View style={styles.container11}>
            <View style={styles.markArea}>
              <View style={styles.markFlexBox}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={styles.changeTypo}>aaaaaaaaaaaaaaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={styles.changeTypo}>aaaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={[styles.bar4, styles.barPosition]}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={styles.changeTypo}>
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={styles.markFlexBox}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={styles.changeTypo}>aaaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer9, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={styles.changeTypo}>aaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={styles.markFlexBox}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={styles.changeTypo}>
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <Pressable
                  style={styles.barFlexBox}
                  onPress={() => navigation.navigate("CRITICRATINGS")}
                >
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={styles.changeTypo}>
                        aaaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </Pressable>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer9, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={styles.changeTypo}>
                        aaaaaaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={styles.markFlexBox}>
                <View style={[styles.barContainer, styles.barContainerFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={[styles.bar4, styles.barPosition]}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={styles.changeTypo}>
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={styles.changeTypo}>
                        aaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer9, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={styles.changeTypo}>aaaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={styles.markFlexBox}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={styles.changeTypo}>aaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={styles.changeTypo}>aaaaaaaaaaaaaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer9, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={styles.changeTypo}>aaaaaaaaaaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={[styles.markBar5, styles.markFlexBox]}>
                <View style={[styles.barContainer, styles.barContainerFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={styles.changeTypo}>a</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={styles.changeTypo}>aaaaaaaaaaaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={styles.changeTypo}>aaaaaaaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={[styles.markBar5, styles.markFlexBox]}>
                <View style={[styles.barContainer, styles.barContainerFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={styles.changeTypo}>aaaaaaaaaaaaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={styles.changeTypo}>aaa</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View
                    style={[styles.barContainer, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={styles.changeTypo}>asasasas</Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.emptyDoNotTouch1, styles.yAxisContainerPosition]}
            />
          </View>
        </View>
        <View style={[styles.annotationsArea, styles.areaPosition]}>
          <View style={[styles.horizontalAnnotationArea, styles.areaPosition]}>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View
                  style={[styles.lineContainer10, styles.lineContainerPosition]}
                >
                  <Image
                    style={[styles.lineIcon10, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line9.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Sales target</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider9.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/left-divider10.png")}
                  />
                  <View style={styles.valueSpaceBlock}>
                    <Text style={styles.text19}>74</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider9.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View
                  style={[styles.lineContainer10, styles.lineContainerPosition]}
                >
                  <Image
                    style={[styles.lineIcon10, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line9.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Sales target</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider9.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.yAxisContainer, styles.yAxisContainerPosition]}
                >
                  <Image
                    style={[styles.leftDividerIcon10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/left-divider10.png")}
                  />
                  <View style={styles.valueSpaceBlock}>
                    <Text style={styles.text19}>16</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider9.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.axisLine3}>
              <View style={styles.container}>
                <View
                  style={[styles.lineContainer12, styles.lineContainerPosition]}
                >
                  <Image
                    style={[styles.lineIcon10, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Sales target</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider9.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.yAxisContainer12,
                    styles.axisContainerPosition,
                  ]}
                >
                  <Image
                    style={[styles.leftDividerIcon10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/left-divider11.png")}
                  />
                  <View style={styles.valueSpaceBlock}>
                    <Text style={styles.text19}>64</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider9.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.axisLine3}>
              <View style={styles.container}>
                <View
                  style={[styles.lineContainer12, styles.lineContainerPosition]}
                >
                  <Image
                    style={[styles.lineIcon10, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Sales target</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider9.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.yAxisContainer12,
                    styles.axisContainerPosition,
                  ]}
                >
                  <Image
                    style={[styles.leftDividerIcon10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/left-divider11.png")}
                  />
                  <View style={styles.valueSpaceBlock}>
                    <Text style={styles.text19}>64</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider9.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.axisLine3}>
              <View style={styles.container}>
                <View
                  style={[styles.lineContainer12, styles.lineContainerPosition]}
                >
                  <Image
                    style={[styles.lineIcon10, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Sales target</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider9.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.yAxisContainer12,
                    styles.axisContainerPosition,
                  ]}
                >
                  <Image
                    style={[styles.leftDividerIcon10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/left-divider11.png")}
                  />
                  <View style={styles.valueSpaceBlock}>
                    <Text style={styles.text19}>64</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider9.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.axisLine3}>
              <View style={styles.container}>
                <View
                  style={[styles.lineContainer12, styles.lineContainerPosition]}
                >
                  <Image
                    style={[styles.lineIcon10, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Sales target</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider9.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.yAxisContainer12,
                    styles.axisContainerPosition,
                  ]}
                >
                  <Image
                    style={[styles.leftDividerIcon10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/left-divider11.png")}
                  />
                  <View style={styles.valueSpaceBlock}>
                    <Text style={styles.text19}>64</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider9.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.axisLine3}>
              <View style={styles.container}>
                <View
                  style={[styles.lineContainer12, styles.lineContainerPosition]}
                >
                  <Image
                    style={[styles.lineIcon10, styles.iconLayout2]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={styles.label}>Sales target</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/divider9.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.yAxisContainer12,
                    styles.axisContainerPosition,
                  ]}
                >
                  <Image
                    style={[styles.leftDividerIcon10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/left-divider11.png")}
                  />
                  <View style={styles.valueSpaceBlock}>
                    <Text style={styles.text19}>64</Text>
                  </View>
                  <Image
                    style={[styles.fixedRightDivider10, styles.dividerLayout]}
                    contentFit="cover"
                    source={require("../assets/fixed-right-divider9.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.verticalAnnotationArea, styles.areaPosition]}>
            <View style={styles.container11}>
              <View style={[styles.emptyDoNotTouch2, styles.areaPosition]} />
              <View
                style={[styles.pointContainer, styles.axisContainerPosition]}
              >
                <View style={styles.pointLine1}>
                  <View style={styles.contentContainer}>
                    <View style={[styles.tag17, styles.tagSpaceBlock]}>
                      <View style={styles.headingButton}>
                        <Text style={styles.label}>Sales Increase</Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout1]}
                          contentFit="cover"
                          source={require("../assets/divider10.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.lineIcon17}
                    contentFit="cover"
                    source={require("../assets/line11.png")}
                  />
                </View>
                <View style={styles.pointLine1}>
                  <View style={styles.contentContainer}>
                    <View style={[styles.tag17, styles.tagSpaceBlock]}>
                      <View style={styles.headingButton}>
                        <Text style={styles.label}>Super Big Sale</Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout1]}
                          contentFit="cover"
                          source={require("../assets/divider11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.lineIcon17}
                    contentFit="cover"
                    source={require("../assets/line12.png")}
                  />
                </View>
                <View style={styles.pointLine3}>
                  <View style={styles.contentContainer}>
                    <View style={[styles.tag17, styles.tagSpaceBlock]}>
                      <View style={styles.headingButton}>
                        <Text style={styles.label}>Tag</Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout1]}
                          contentFit="cover"
                          source={require("../assets/divider12.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.lineIcon17}
                    contentFit="cover"
                    source={require("../assets/line13.png")}
                  />
                </View>
                <View style={styles.pointLine3}>
                  <View style={styles.contentContainer}>
                    <View style={[styles.tag17, styles.tagSpaceBlock]}>
                      <View style={styles.headingButton}>
                        <Text style={styles.label}>Tag</Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout1]}
                          contentFit="cover"
                          source={require("../assets/divider12.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.lineIcon17}
                    contentFit="cover"
                    source={require("../assets/line13.png")}
                  />
                </View>
                <View style={styles.pointLine3}>
                  <View style={styles.contentContainer}>
                    <View style={[styles.tag17, styles.tagSpaceBlock]}>
                      <View style={styles.headingButton}>
                        <Text style={styles.label}>Tag</Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout1]}
                          contentFit="cover"
                          source={require("../assets/divider12.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.lineIcon17}
                    contentFit="cover"
                    source={require("../assets/line13.png")}
                  />
                </View>
                <View style={styles.pointLine3}>
                  <View style={styles.contentContainer}>
                    <View style={[styles.tag17, styles.tagSpaceBlock]}>
                      <View style={styles.headingButton}>
                        <Text style={styles.label}>Tag</Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout1]}
                          contentFit="cover"
                          source={require("../assets/divider12.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.lineIcon17}
                    contentFit="cover"
                    source={require("../assets/line13.png")}
                  />
                </View>
                <View style={styles.pointLine3}>
                  <View style={styles.contentContainer}>
                    <View style={[styles.tag17, styles.tagSpaceBlock]}>
                      <View style={styles.headingButton}>
                        <Text style={styles.label}>Tag</Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout1]}
                          contentFit="cover"
                          source={require("../assets/divider12.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.lineIcon17}
                    contentFit="cover"
                    source={require("../assets/line13.png")}
                  />
                </View>
              </View>
              <View
                style={[styles.emptyDoNotTouch3, styles.axisContainerPosition]}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.textTypo]}>Yashas</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout1]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text26, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <View style={styles.stars}>
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
            source={require("../assets/star3.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <Text style={[styles.more, styles.moreLayout]}>...more</Text>
      </View>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        />
      </Pressable>
      <Text
        style={[styles.text27, styles.textTypo]}
      >{`               1               2                3                 4             5  `}</Text>
      <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.textTypo]}>Sujan</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout1]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text26, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <View style={styles.stars}>
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
            source={require("../assets/star3.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <Text style={[styles.more, styles.moreLayout]}>...more</Text>
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.puneeth, styles.textTypo]}>Puneeth</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout1]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text26, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <View style={styles.stars}>
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
            source={require("../assets/star3.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <Text style={[styles.more, styles.moreLayout]}>...more</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.userCircleIcon, styles.userCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.textTypo]}>Yashas</Text>
        <Text style={[styles.trappedInTime, styles.moreLayout1]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text26, styles.textTypo]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <View style={styles.stars}>
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
            source={require("../assets/star3.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <Text style={[styles.more, styles.moreLayout]}>...more</Text>
      </Pressable>
      <Text style={[styles.viewerReviews, styles.textTypo]}>
        Viewer Reviews
      </Text>
      <View style={styles.progressIndicatior}>
        <View style={styles.indicator} />
      </View>
      <Text style={[styles.starRating, styles.textTypo]}>Star rating</Text>
      <Pressable
        style={[styles.arrowLeftLarge, styles.chevronIconLayout]}
        onPress={() => navigation.navigate("CLICKEDMOVIEREVIEWS")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.criticRating1, styles.kingdomTypo]}>
        Critic rating
      </Text>
      <View style={styles.ratingComponent}>
        <Image
          style={[styles.ratingComponentChild, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-127.png")}
        />
        <Image
          style={[styles.ratingComponentItem, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-133.png")}
        />
        <Image
          style={[styles.ratingComponentInner, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-144.png")}
        />
        <Image
          style={[styles.ratingComponentChild1, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-155.png")}
        />
        <Image
          style={[styles.ratingComponentChild2, styles.capIconPosition]}
          contentFit="cover"
          source={require("../assets/star-163.png")}
        />
      </View>
      <Text style={[styles.reviews, styles.timeTypo]}>350 reviews</Text>
      <Text style={[styles.text31, styles.moreLayout]}>70%</Text>
      <Text style={[styles.kingdom, styles.kingdomTypo]}>Kingdom</Text>
      <Pressable
        style={[styles.vector1, styles.vectorLayout]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector18.png")}
        />
      </Pressable>
      <View style={styles.criticRatingItem} />
      <View style={[styles.barsHomeIndicator, styles.userCircleIconLayout]}>
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
      </View>
      <View style={[styles.barsStatusBarIphoneL, styles.areaPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
  );
};

const styles = StyleSheet.create({
  criticRatingChildLayout: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
  },
  areaPosition: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout2: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  tagSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.lightThemeSystemTextSubdued,
    borderRadius: Border.br_80xl,
    overflow: "hidden",
  },
  iconLayout1: {
    opacity: 0.4,
    overflow: "hidden",
    maxWidth: "100%",
  },
  yAxisContainerPosition: {
    right: 303,
    top: 0,
    left: 0,
    position: "absolute",
  },
  leftIconPosition: {
    zIndex: 2,
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
  valueSpaceBlock: {
    zIndex: 1,
    paddingHorizontal: Padding.p_11xs,
    justifyContent: "center",
    paddingVertical: 0,
    overflow: "hidden",
  },
  fixedLayout: {
    width: 16,
    zIndex: 0,
  },
  axisContainerPosition: {
    top: 0,
    position: "absolute",
  },
  barContainerFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  barPosition: {
    backgroundColor: Color.lightThemeChartSingleDefault,
    borderTopRightRadius: Border.br_11xs,
    borderTopLeftRadius: Border.br_11xs,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  barFlexBox: {
    marginLeft: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  markFlexBox: {
    paddingHorizontal: Padding.p_base,
    alignItems: "flex-end",
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  lineContainerPosition: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    height: 16,
    right: 0,
    top: 0,
    position: "absolute",
  },
  dividerLayout: {
    opacity: 0,
    height: 16,
  },
  userCircleIconLayout: {
    height: 32,
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    lineHeight: 16,
  },
  moreLayout1: {
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    color: Color.lightThemeSystemSurface,
  },
  chevronIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  starIconLayout: {
    width: 9,
    height: 9,
  },
  moreLayout: {
    height: 18,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  vectorLayout: {
    width: "7.47%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  rectangleGroupPosition: {
    left: 16,
    height: 142,
    width: 338,
    position: "absolute",
  },
  kingdomTypo: {
    fontWeight: "600",
    lineHeight: 52,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  ratingChildLayout: {
    borderRadius: Border.br_12xs,
    width: "16.67%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  timeTypo: {
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  criticRatingChild: {
    top: 44,
    height: 1158,
    position: "absolute",
  },
  lineIcon: {
    maxHeight: "100%",
    overflow: "hidden",
    flex: 1,
  },
  label: {
    textAlign: "left",
    fontFamily: FontFamily.bodySm1216Default,
    lineHeight: 16,
    color: Color.lightThemeSystemSurface,
    fontSize: FontSize.bodySm1216Default_size,
  },
  dividerIcon: {
    height: 0,
    display: "none",
    alignSelf: "stretch",
    width: "100%",
  },
  headingButton: {
    alignItems: "center",
  },
  tag: {
    display: "none",
  },
  lineContainer: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    left: 44,
    height: 16,
  },
  leftDividerIcon: {
    height: 16,
  },
  text: {
    textAlign: "right",
    color: Color.darkThemeSystemTextSubdued,
    fontFamily: FontFamily.bodySm1216Default,
    lineHeight: 16,
    fontSize: FontSize.bodySm1216Default_size,
  },
  value: {
    backgroundColor: Color.darkThemeSystemSurface,
  },
  fixedRightDivider: {
    height: 16,
  },
  yAxisContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    zIndex: 0,
    height: 16,
    alignSelf: "stretch",
  },
  yAxis10: {
    alignSelf: "stretch",
  },
  yAxisContainner: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
  },
  yt: {
    textAlign: "center",
    color: Color.darkThemeSystemTextSubdued,
    fontFamily: FontFamily.bodySm1216Default,
    lineHeight: 16,
    fontSize: FontSize.bodySm1216Default_size,
    overflow: "hidden",
    height: 16,
    alignSelf: "stretch",
  },
  value10: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
  xAxis1: {
    flex: 1,
  },
  text16: {
    color: Color.lightThemeSystemTextSubdued,
    textAlign: "center",
    fontFamily: FontFamily.bodySm1216Default,
    lineHeight: 16,
    fontSize: FontSize.bodySm1216Default_size,
    overflow: "hidden",
    height: 16,
    alignSelf: "stretch",
  },
  xAxis8: {
    display: "none",
    flex: 1,
  },
  xAxisArea: {
    right: -2429,
    left: 347,
    display: "none",
    flexDirection: "row",
  },
  emptyDoNotTouch: {
    overflow: "hidden",
    height: 16,
    left: 0,
  },
  container10: {
    height: 16,
    alignSelf: "stretch",
  },
  xAxisContainer: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  plotArea: {
    bottom: 0,
    left: 0,
  },
  value20: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 12,
    color: Color.lightThemeSystemTextSubdued,
    textAlign: "center",
    fontSize: FontSize.bodySm1216Default_size,
    display: "none",
  },
  changeTypo: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    color: Color.lightThemeChartSingleDefault,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  barContainer: {
    alignSelf: "stretch",
    flex: 1,
  },
  bar1: {
    display: "none",
    alignSelf: "stretch",
    flex: 1,
  },
  bar4: {
    display: "none",
  },
  bar41: {
    display: "none",
  },
  barContainer9: {
    display: "none",
    alignSelf: "stretch",
  },
  markBar5: {
    display: "none",
  },
  markArea: {
    paddingBottom: Padding.p_13xl,
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
    left: 44,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  emptyDoNotTouch1: {
    overflow: "hidden",
    bottom: 0,
  },
  container11: {
    alignSelf: "stretch",
    flex: 1,
  },
  lineIcon10: {
    height: 0,
    overflow: "hidden",
    flex: 1,
  },
  lineContainer10: {
    left: 44,
  },
  leftDividerIcon10: {
    zIndex: 2,
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
  text19: {
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    color: Color.lightThemeSystemTextSubdued,
    textAlign: "right",
    fontFamily: FontFamily.bodySm1216Default,
  },
  fixedRightDivider10: {
    width: 16,
    zIndex: 0,
  },
  lineContainer12: {
    left: 51,
  },
  yAxisContainer12: {
    right: 349,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
  },
  axisLine3: {
    display: "none",
    alignSelf: "stretch",
  },
  horizontalAnnotationArea: {
    paddingTop: Padding.p_45xl,
    paddingBottom: Padding.p_73xl,
    justifyContent: "space-between",
    bottom: 0,
    left: 0,
  },
  emptyDoNotTouch2: {
    left: 220,
    overflow: "hidden",
    bottom: 0,
  },
  tag17: {
    position: "absolute",
  },
  contentContainer: {
    width: 0,
    height: 0,
    backgroundColor: Color.lightThemeSystemSurface,
  },
  lineIcon17: {
    marginTop: 4,
    width: 0,
    maxHeight: "100%",
    flex: 1,
  },
  pointLine1: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  pointLine3: {
    display: "none",
    alignItems: "center",
    alignSelf: "stretch",
  },
  pointContainer: {
    right: 31,
    left: 32,
    paddingLeft: Padding.p_37xl,
    paddingRight: Padding.p_61xl,
    paddingBottom: Padding.p_12xl,
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
  },
  emptyDoNotTouch3: {
    right: 219,
    overflow: "hidden",
    bottom: 0,
    left: 0,
  },
  verticalAnnotationArea: {
    paddingLeft: Padding.p_77xl,
    bottom: 0,
    left: 0,
  },
  annotationsArea: {
    display: "none",
    bottom: 0,
    left: 0,
  },
  barChart: {
    top: 221,
    left: 13,
    width: 347,
    height: 206,
    position: "absolute",
  },
  groupShadowBox: {
    height: 144,
    width: 340,
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
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
    top: -1,
    borderStyle: "solid",
    position: "absolute",
  },
  userCircleIcon: {
    top: 4,
    left: 5,
    width: 36,
  },
  yashas: {
    width: 68,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_xl_9,
    fontWeight: "700",
    left: 50,
    top: 12,
    color: Color.lightThemeSystemSurface,
    height: 16,
  },
  trappedInTime: {
    top: 42,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 323,
    height: 54,
    left: 8,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  text26: {
    top: 117,
    left: 261,
    width: 64,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
    color: Color.lightThemeSystemSurface,
    fontSize: FontSize.bodySm1216Default_size,
    fontWeight: "700",
    height: 16,
  },
  chevronTopCircleIcon: {
    top: 103,
    width: 24,
    overflow: "hidden",
    left: 8,
  },
  chevronBottomCircleIcon: {
    left: 38,
    top: 103,
    width: 24,
    overflow: "hidden",
  },
  starIcon1: {
    marginLeft: 3,
  },
  stars: {
    top: 108,
    left: 265,
    height: 9,
    flexDirection: "row",
    position: "absolute",
  },
  more: {
    top: 82,
    left: 298,
    fontWeight: "200",
    fontFamily: FontFamily.robotoThin,
    width: 34,
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    color: Color.lightThemeSystemSurface,
  },
  rectangleParent: {
    top: 651,
    left: 18,
    height: 142,
    width: 338,
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vector: {
    left: "90.13%",
    top: "4.08%",
    right: "2.4%",
    bottom: "93.98%",
    height: "1.95%",
  },
  text27: {
    top: 403,
    left: 24,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    width: 332,
    height: 14,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    top: 961,
  },
  puneeth: {
    width: 91,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_xl_9,
    fontWeight: "700",
    left: 50,
    top: 12,
    color: Color.lightThemeSystemSurface,
    height: 16,
  },
  rectangleContainer: {
    top: 804,
  },
  groupPressable: {
    top: 498,
  },
  viewerReviews: {
    top: 467,
    left: 11,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_xl_9,
    fontWeight: "700",
    color: Color.lightThemeSystemSurface,
  },
  indicator: {
    backgroundColor: "#2dacf3",
    borderRadius: Border.br_45xl,
    alignSelf: "stretch",
    flex: 1,
  },
  progressIndicatior: {
    top: 438,
    left: 39,
    backgroundColor: Color.colorSilver,
    width: 232,
    height: 8,
    paddingRight: Padding.p_58xl,
    borderRadius: Border.br_45xl,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  starRating: {
    top: 151,
    left: 26,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_xl_9,
    fontWeight: "700",
    color: Color.lightThemeSystemSurface,
  },
  icon1: {
    overflow: "hidden",
  },
  arrowLeftLarge: {
    left: 35,
    top: 50,
  },
  criticRating1: {
    top: 36,
    left: 118,
    fontSize: FontSize.size_10xl_7,
  },
  ratingComponentChild: {
    right: "83.33%",
    left: "0%",
    position: "absolute",
  },
  ratingComponentItem: {
    right: "62.47%",
    left: "20.86%",
    position: "absolute",
  },
  ratingComponentInner: {
    right: "41.67%",
    left: "41.67%",
    position: "absolute",
  },
  ratingComponentChild1: {
    right: "20.8%",
    left: "62.53%",
    position: "absolute",
  },
  ratingComponentChild2: {
    left: "83.33%",
    borderRadius: Border.br_12xs,
    width: "16.67%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  ratingComponent: {
    top: 144,
    left: 163,
    width: 162,
    height: 29,
    position: "absolute",
  },
  reviews: {
    top: 173,
    left: 206,
    fontSize: FontSize.body1Normal_size,
    fontStyle: "italic",
    fontFamily: FontFamily.robotoBoldItalic,
    width: 85,
    height: 20,
  },
  text31: {
    top: 433,
    left: 280,
    color: "#4285f4",
    width: 45,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xl_9,
  },
  kingdom: {
    top: 91,
    left: 131,
    fontSize: FontSize.size_6xl,
  },
  vector1: {
    left: "88.53%",
    top: "6.35%",
    right: "4%",
    bottom: "90.31%",
    height: "3.34%",
  },
  criticRatingItem: {
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
    top: 782,
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderWidth: 1,
    borderColor: Color.lightThemeSystemSurface,
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
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
    left: "0%",
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
    height: 44,
    backgroundColor: Color.colorBlack,
    right: 0,
    left: 0,
  },
  criticRating: {
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default CRITICRATING;
