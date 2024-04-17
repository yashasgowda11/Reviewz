import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const OVERALLRATING = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.overallRating}>
      <View
        style={[styles.overallRatingChild, styles.barsHomeIndicatorPosition]}
      />
      <Text style={[styles.kingdom, styles.timeTypo]}>Kingdom</Text>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
      </Pressable>
      <Text style={[styles.overallStarRating, styles.text26Typo]}>
        Overall Star rating
      </Text>
      <View style={styles.barChart}>
        <View style={[styles.plotArea, styles.areaPosition]}>
          <View style={styles.yAxisContainner}>
            <View style={styles.yAxis10}>
              <View style={styles.container}>
                <View style={[styles.lineContainer, styles.areaPosition]}>
                  <Image
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line1.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line2.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line3.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line4.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line5.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line6.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line7.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line8.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                    style={[styles.lineIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line.png")}
                  />
                  <View style={[styles.tag, styles.tagSpaceBlock]}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>Tag</Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={styles.fixedRightDivider}
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
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={[styles.changeTextTo, styles.changeTypo]}>
                        aaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={[styles.changeTextTo1, styles.changeTypo]}>
                        aaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={[styles.bar4, styles.barPosition]}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={[styles.changeTextTo2, styles.changeTypo]}>
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo3, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo4, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo5, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo6, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={styles.markFlexBox}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={[styles.changeTextTo7, styles.changeTypo]}>
                        aaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={[styles.changeTextTo8, styles.changeTypo]}>
                        asasasas
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
                      <Text style={[styles.changeTextTo9, styles.changeTypo]}>
                        aaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo10, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo11, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo12, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo13, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={styles.markFlexBox}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View
                    style={[styles.barContainer14, styles.barContainerFlexBox]}
                  >
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={[styles.changeTextTo14, styles.changeTypo]}>
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={[styles.changeTextTo15, styles.changeTypo]}>
                        aaaaaaaaaaaaaaaaaaaaaaa
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
                      <Text style={[styles.changeTextTo16, styles.changeTypo]}>
                        aaaaaaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo17, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo18, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo19, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo20, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={styles.markFlexBox}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={[styles.bar4, styles.barPosition]}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={[styles.changeTextTo21, styles.changeTypo]}>
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={[styles.changeTextTo22, styles.changeTypo]}>
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
                      <Text style={[styles.changeTextTo23, styles.changeTypo]}>
                        aaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo24, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo25, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo26, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo27, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={styles.markFlexBox}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={[styles.changeTextTo28, styles.changeTypo]}>
                        aaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={[styles.changeTextTo29, styles.changeTypo]}>
                        aaaaaaaaaaaaaaaa
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
                      <Text style={[styles.changeTextTo30, styles.changeTypo]}>
                        aaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo31, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo32, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo33, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo34, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={[styles.markBar5, styles.markFlexBox]}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={[styles.changeTextTo35, styles.changeTypo]}>
                        a
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={[styles.changeTextTo36, styles.changeTypo]}>
                        aaaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={[styles.changeTextTo37, styles.changeTypo]}>
                        aaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo38, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo39, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo40, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo41, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              <View style={[styles.markBar5, styles.markFlexBox]}>
                <View style={[styles.bar1, styles.barContainerFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#997afc", "#7f4afa"]}
                    >
                      <Text style={[styles.changeTextTo42, styles.changeTypo]}>
                        aaaaaaaaaaaaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#4b92e5", "#3672bb"]}
                    >
                      <Text style={[styles.changeTextTo43, styles.changeTypo]}>
                        aaa
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.barFlexBox}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#da62c4", "#b1489e"]}
                    >
                      <Text style={[styles.changeTextTo44, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo45, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo46, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo47, styles.changeTypo]}>
                        asasasas
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
                <View style={[styles.bar41, styles.barFlexBox]}>
                  <View style={[styles.bar1, styles.barContainerFlexBox]}>
                    <Text style={styles.value20}>9</Text>
                    <LinearGradient
                      style={styles.barPosition}
                      locations={[0, 1]}
                      colors={["#007cc2", "#9565ff"]}
                    >
                      <Text style={[styles.changeTextTo48, styles.changeTypo]}>
                        asasasas
                      </Text>
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
                    style={[styles.lineIcon10, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line9.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>
                        Sales target
                      </Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={[styles.lineIcon10, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line9.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>
                        Sales target
                      </Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={[styles.lineIcon10, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>
                        Sales target
                      </Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={[styles.lineIcon10, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>
                        Sales target
                      </Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={[styles.lineIcon10, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>
                        Sales target
                      </Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={[styles.lineIcon10, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>
                        Sales target
                      </Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                    style={[styles.lineIcon10, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/line10.png")}
                  />
                  <View style={styles.tagSpaceBlock}>
                    <View style={styles.headingButton}>
                      <Text style={[styles.label, styles.labelTypo]}>
                        Sales target
                      </Text>
                      <Image
                        style={[styles.dividerIcon, styles.iconLayout]}
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
                        <Text style={[styles.label, styles.labelTypo]}>
                          Sales Increase
                        </Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout]}
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
                        <Text style={[styles.label, styles.labelTypo]}>
                          Super Big Sale
                        </Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout]}
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
                        <Text style={[styles.label, styles.labelTypo]}>
                          Tag
                        </Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout]}
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
                        <Text style={[styles.label, styles.labelTypo]}>
                          Tag
                        </Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout]}
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
                        <Text style={[styles.label, styles.labelTypo]}>
                          Tag
                        </Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout]}
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
                        <Text style={[styles.label, styles.labelTypo]}>
                          Tag
                        </Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout]}
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
                        <Text style={[styles.label, styles.labelTypo]}>
                          Tag
                        </Text>
                        <Image
                          style={[styles.dividerIcon, styles.iconLayout]}
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
      <Pressable
        style={styles.critics}
        onPress={() => navigation.navigate("CRITICRATING")}
      >
        <Text style={[styles.critics1, styles.critics1Typo]}>{`Critics
`}</Text>
      </Pressable>
      <View style={[styles.overallRatingItem, styles.overallLayout]} />
      <Text style={[styles.viewers, styles.viewersTypo]}>90% Viewers</Text>
      <Text style={[styles.critics2, styles.critics2Position]}>
        70% Critics
      </Text>
      <Image
        style={[styles.ratingComponentIcon, styles.arrowLeftLargeLayout]}
        contentFit="cover"
        source={require("../assets/rating-component.png")}
      />
      <Image
        style={[styles.ratingComponentIcon1, styles.ratingIconLayout]}
        contentFit="cover"
        source={require("../assets/rating-component1.png")}
      />
      <View style={styles.chartContainer}>
        <View style={[styles.totalContainer, styles.fixedRatioFlexBox]}>
          <View style={styles.trendIndicator}>
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
            <Text style={[styles.reviews, styles.labelTypo]}>10%</Text>
          </View>
          <Text style={styles.reviews1}>{`80%
800 Reviews`}</Text>
        </View>
        <Image
          style={[styles.containerIcon, styles.containerIconSpaceBlock]}
          contentFit="cover"
          source={require("../assets/container.png")}
        />
        <View style={styles.containerIconSpaceBlock}>
          <View style={[styles.fixedRatio, styles.fixedRatioFlexBox]}>
            <View style={styles.spine} />
          </View>
          <View style={[styles.fixedRatio, styles.fixedRatioFlexBox]}>
            <View style={styles.spine1} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Pressable
        style={[styles.arrowLeftLarge, styles.arrowLeftLargeLayout]}
        onPress={() => navigation.navigate("CLICKEDMOVIEREVIEWS")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={[styles.overallRating1, styles.timeTypo]}>
        Overall rating
      </Text>
      <View style={styles.ratingComponent}>
        <Image
          style={[styles.ratingComponentChild, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-125.png")}
        />
        <Image
          style={[styles.ratingComponentItem, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-125.png")}
        />
        <Image
          style={[styles.ratingComponentInner, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-143.png")}
        />
        <Image
          style={[styles.starIcon, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-143.png")}
        />
        <Image
          style={[styles.ratingComponentChild1, styles.capIconPosition]}
          contentFit="cover"
          source={require("../assets/star-143.png")}
        />
      </View>
      <View style={[styles.overallRatingInner, styles.overallLayout]} />
      <Pressable
        style={styles.viewers1}
        onPress={() => navigation.navigate("VIEWERRATING")}
      >
        <Text style={[styles.viewers2, styles.critics1Typo]}>Viewers</Text>
      </Pressable>
      <Text
        style={[styles.text26, styles.text26Typo]}
      >{`               1               2                3                 4             5  `}</Text>
      <View style={[styles.lineView, styles.borderBorder]} />
      <View
        style={[styles.barsHomeIndicator, styles.barsHomeIndicatorPosition]}
      >
        <View style={[styles.background, styles.capIconPosition]} />
        <View style={styles.line} />
      </View>
      <View style={[styles.barsStatusBarIphoneL, styles.areaPosition]}>
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
  );
};

const styles = StyleSheet.create({
  barsHomeIndicatorPosition: {
    width: 375,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.lightThemeSystemSurface,
    position: "absolute",
  },
  vectorLayout: {
    width: "7.47%",
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  text26Typo: {
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    position: "absolute",
  },
  areaPosition: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  tagSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.lightThemeSystemTextSubdued,
    borderRadius: Border.br_80xl,
    overflow: "hidden",
  },
  labelTypo: {
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.bodySm1216Default_size,
    textAlign: "left",
    lineHeight: 16,
  },
  iconLayout: {
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
    paddingVertical: 0,
    justifyContent: "center",
    overflow: "hidden",
  },
  axisContainerPosition: {
    top: 0,
    position: "absolute",
  },
  barContainerFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  changeTypo: {
    color: Color.lightThemeChartSingleDefault,
    lineHeight: 10,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
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
  critics1Typo: {
    height: 15,
    lineHeight: 10,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.bodySm1216Default_size,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
  },
  overallLayout: {
    height: 19,
    width: 31,
    position: "absolute",
  },
  viewersTypo: {
    height: 22,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  critics2Position: {
    top: 159,
    position: "absolute",
  },
  arrowLeftLargeLayout: {
    height: 24,
    position: "absolute",
  },
  ratingIconLayout: {
    width: 82,
    left: 154,
  },
  fixedRatioFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  containerIconSpaceBlock: {
    marginLeft: -999,
    flex: 1,
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  ratingChildLayout: {
    borderRadius: Border.br_12xs,
    width: "16.67%",
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  overallRatingChild: {
    top: 44,
    height: 738,
  },
  kingdom: {
    top: 91,
    left: 131,
    fontSize: FontSize.size_6xl,
    lineHeight: 52,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  icon: {
    maxHeight: "100%",
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "90.13%",
    top: "6.03%",
    right: "2.4%",
    bottom: "91.1%",
    height: "2.87%",
  },
  overallStarRating: {
    top: 293,
    fontSize: FontSize.size_xl_9,
    left: 12,
    color: Color.lightThemeSystemSurface,
  },
  lineIcon: {
    maxHeight: "100%",
    overflow: "hidden",
    flex: 1,
  },
  label: {
    color: Color.lightThemeSystemSurface,
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
    fontSize: FontSize.bodySm1216Default_size,
    lineHeight: 16,
  },
  value: {
    backgroundColor: Color.darkThemeSystemSurface,
  },
  fixedRightDivider: {
    width: 16,
    zIndex: 0,
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
    color: Color.darkThemeSystemTextSubdued,
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.bodySm1216Default_size,
    height: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    overflow: "hidden",
    textAlign: "center",
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
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.bodySm1216Default_size,
    height: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    overflow: "hidden",
    textAlign: "center",
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
    height: 16,
    overflow: "hidden",
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
    fontSize: FontSize.bodySm1216Default_size,
    display: "none",
    textAlign: "center",
  },
  changeTextTo: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  bar1: {
    alignSelf: "stretch",
    flex: 1,
  },
  changeTextTo1: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo2: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  bar4: {
    display: "none",
  },
  changeTextTo3: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  bar41: {
    display: "none",
  },
  changeTextTo4: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo5: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo6: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo7: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo8: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo9: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  barContainer9: {
    display: "none",
    alignSelf: "stretch",
  },
  changeTextTo10: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo11: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo12: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo13: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo14: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  barContainer14: {
    alignSelf: "stretch",
  },
  changeTextTo15: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo16: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo17: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo18: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo19: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo20: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo21: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo22: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo23: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo24: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo25: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo26: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo27: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo28: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo29: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo30: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo31: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo32: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo33: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo34: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo35: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo36: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo37: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo38: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo39: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo40: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo41: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  markBar5: {
    display: "none",
  },
  changeTextTo42: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo43: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo44: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo45: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo46: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo47: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  changeTextTo48: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
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
    bottom: 0,
    overflow: "hidden",
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
    bottom: 0,
    overflow: "hidden",
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
    bottom: 0,
    overflow: "hidden",
    left: 0,
  },
  verticalAnnotationArea: {
    paddingLeft: Padding.p_77xl,
    display: "none",
    bottom: 0,
    left: 0,
  },
  annotationsArea: {
    display: "none",
    bottom: 0,
    left: 0,
  },
  barChart: {
    top: 417,
    width: 347,
    height: 206,
    left: 12,
    position: "absolute",
  },
  critics1: {
    width: 50,
  },
  critics: {
    left: 258,
    top: 635,
    position: "absolute",
  },
  overallRatingItem: {
    top: 631,
    backgroundColor: "#3672bb",
    left: 220,
  },
  viewers: {
    left: 244,
    width: 131,
    top: 200,
    position: "absolute",
  },
  critics2: {
    left: 257,
    width: 104,
    height: 22,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  ratingComponentIcon: {
    width: 82,
    left: 154,
    top: 200,
  },
  ratingComponentIcon1: {
    height: 25,
    top: 159,
    position: "absolute",
  },
  icon1: {
    width: 16,
    display: "none",
    height: 16,
    overflow: "hidden",
  },
  reviews: {
    color: Color.darkThemeChartOtherPositive,
    display: "none",
  },
  trendIndicator: {
    width: 42,
    flexDirection: "row",
    height: 16,
  },
  reviews1: {
    fontSize: FontSize.size_smi,
    width: 103,
    height: 48,
    lineHeight: 24,
    marginTop: 4,
    fontFamily: FontFamily.bodySm1216Default,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
  },
  totalContainer: {
    flex: 1,
  },
  containerIcon: {
    alignSelf: "stretch",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  spine: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: 0,
    alignSelf: "stretch",
  },
  fixedRatio: {
    overflow: "hidden",
  },
  spine1: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: 0,
    alignSelf: "stretch",
  },
  chartContainer: {
    top: 144,
    left: 24,
    width: 107,
    height: 107,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon: {
    height: "1.18%",
    top: "2.91%",
    right: "3.73%",
    bottom: "95.91%",
    left: "88.8%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "7.47%",
    position: "absolute",
  },
  icon2: {
    overflow: "hidden",
  },
  arrowLeftLarge: {
    left: 35,
    top: 50,
    width: 24,
  },
  overallRating1: {
    top: 36,
    left: 107,
    fontSize: FontSize.size_10xl_7,
    lineHeight: 52,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  ratingComponentChild: {
    right: "83.33%",
    left: "0%",
    position: "absolute",
  },
  ratingComponentItem: {
    right: "62.5%",
    left: "20.83%",
    position: "absolute",
  },
  ratingComponentInner: {
    right: "41.67%",
    left: "41.67%",
    position: "absolute",
  },
  starIcon: {
    right: "20.83%",
    left: "62.5%",
    position: "absolute",
  },
  ratingComponentChild1: {
    left: "83.33%",
    borderRadius: Border.br_12xs,
    width: "16.67%",
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
  },
  ratingComponent: {
    top: 333,
    left: 34,
    width: 144,
    height: 29,
    position: "absolute",
  },
  overallRatingInner: {
    top: 629,
    left: 86,
    backgroundColor: "#b176e2",
  },
  viewers2: {
    width: 52,
  },
  viewers1: {
    left: 125,
    top: 633,
    position: "absolute",
  },
  text26: {
    top: 599,
    left: 27,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    width: 332,
    height: 14,
  },
  lineView: {
    top: 95,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1,
    width: 376,
    height: 1,
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
    top: 782,
    height: 32,
    overflow: "hidden",
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
    lineHeight: 20,
    left: "0%",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
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
  barsStatusBarIphoneL: {
    height: 44,
    backgroundColor: Color.colorBlack,
    right: 0,
    left: 0,
  },
  overallRating: {
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default OVERALLRATING;
