import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CLICKEDMOVIEREVIEWS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.clickedmovieReviews}>
      <View
        style={[
          styles.clickedmovieReviewsChild,
          styles.barsHomeIndicatorPosition,
        ]}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <Image
          style={[styles.userCircleIcon, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.puneeth, styles.reviewsFlexBox]}>Puneeth</Text>
        <Text style={[styles.trappedInTime, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={styles.critic}>Critic</Text>
        <Text style={[styles.text, styles.textTypo1]}>11/11/2023</Text>
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
        <Text style={styles.s}>S</Text>
        <View style={[styles.stars, styles.starsLayout]}>
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
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <Image
          style={[styles.userCircleIcon1, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashas, styles.reviewsFlexBox]}>Yashas</Text>
        <Text style={[styles.trappedInTime1, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={[styles.text1, styles.textTypo1]}>11/11/2023</Text>
        <Image
          style={[styles.chevronTopCircleIcon1, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevrontopcircle.png")}
        />
        <Image
          style={[styles.chevronBottomCircleIcon1, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronbottomcircle.png")}
        />
        <View style={[styles.stars1, styles.starsLayout]}>
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
        <Text style={[styles.more1, styles.moreTypo]}>...more</Text>
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("CLICKEDREVIEWS")}
      >
        <View style={[styles.groupInner, styles.groupLayout1]} />
        <Image
          style={[styles.userCircleIcon, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
        />
        <Text style={[styles.yashaswini, styles.reviewsFlexBox]}>
          Yashaswini
        </Text>
        <Text style={[styles.trappedInTime, styles.trappedTypo]}>
          Trapped in time, a pilot must navigate the shadows of history to alter
          the future. 'Chrono Wings' is a thrilling journey where every second
          counts.
        </Text>
        <Text style={styles.critic}>Critic</Text>
        <Text style={[styles.text, styles.textTypo1]}>11/11/2023</Text>
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
        <Text style={styles.s}>S</Text>
        <View style={[styles.stars, styles.starsLayout]}>
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
        <Text style={[styles.more, styles.moreTypo]}>...more</Text>
      </Pressable>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
      </Pressable>
      <View style={[styles.groupView, styles.rectangleParentLayout]}>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <Text style={[styles.flickpicks40, styles.flickpicks40Typo]}>
          #FlickPicks 40
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <Text style={[styles.moviemagic30, styles.flickpicks40Typo]}>
          #MovieMagic 30
        </Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        <Text style={[styles.boxofficebuzz36, styles.flickpicks40Typo]}>
          #BoxOfficeBuzz 36
        </Text>
      </View>
      <Pressable
        style={[styles.arrowLeftLarge, styles.chevronIconLayout]}
        onPress={() => navigation.navigate("DASHBOARD1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowleftlarge.png")}
        />
      </Pressable>
      <Text style={styles.kingdom}>Kingdom</Text>
      <View style={[styles.clickedmovieReviewsInner, styles.frameGroupLayout]}>
        <View style={styles.framePosition}>
          <Image
            style={[styles.frameChild, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/frame-287.png")}
          />
          <LinearGradient
            style={[styles.frameGroup, styles.frameGroupLayout]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0)"]}
          >
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text3, styles.m18Typo1]}>2019</Text>
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
      <View style={styles.groupParent}>
        <View
          style={[styles.antDesignplusOutlinedParent, styles.myListLayout1]}
        >
          <Image
            style={styles.antDesignplusOutlinedIcon}
            contentFit="cover"
            source={require("../assets/antdesignplusoutlined.png")}
          />
          <Text style={[styles.myList, styles.myListLayout]}>My List</Text>
        </View>
        <View style={[styles.groupWrapper, styles.recommendWrapperLayout]}>
          <View
            style={[styles.recommendWrapper, styles.recommendWrapperLayout]}
          >
            <Text style={[styles.recommend, styles.recommendWrapperLayout]}>
              Recommend
            </Text>
          </View>
        </View>
        <Image
          style={[styles.groupChild3, styles.myListLayout1]}
          contentFit="cover"
          source={require("../assets/star-17.png")}
        />
      </View>
      <Text style={[styles.review, styles.myListLayout]}>Review</Text>
      <View style={styles.ratingComponent}>
        <Image
          style={[styles.ratingComponentChild, styles.ratingChildLayout1]}
          contentFit="cover"
          source={require("../assets/star-121.png")}
        />
        <Image
          style={[styles.ratingComponentItem, styles.ratingChildLayout1]}
          contentFit="cover"
          source={require("../assets/star-131.png")}
        />
        <Image
          style={[styles.ratingComponentInner, styles.ratingChildLayout1]}
          contentFit="cover"
          source={require("../assets/star-141.png")}
        />
        <Image
          style={[styles.ratingComponentChild1, styles.ratingChildLayout1]}
          contentFit="cover"
          source={require("../assets/star-151.png")}
        />
        <Image
          style={[styles.ratingComponentChild2, styles.ratingChildLayout1]}
          contentFit="cover"
          source={require("../assets/star-161.png")}
        />
      </View>
      <Pressable
        style={[styles.ratingComponent1, styles.ratingLayout]}
        onPress={() => navigation.navigate("VIEWERRATING")}
      >
        <Image
          style={[styles.ratingComponentChild3, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-122.png")}
        />
        <Image
          style={[styles.ratingComponentChild4, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-132.png")}
        />
        <Image
          style={[styles.ratingComponentChild5, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-142.png")}
        />
        <Image
          style={[styles.ratingComponentChild6, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-152.png")}
        />
        <Image
          style={[styles.ratingComponentChild7, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-162.png")}
        />
      </Pressable>
      <View style={[styles.ratingComponent2, styles.ratingLayout]}>
        <Image
          style={[styles.ratingComponentChild3, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-122.png")}
        />
        <Image
          style={[styles.ratingComponentChild4, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-132.png")}
        />
        <Image
          style={[styles.ratingComponentChild5, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-142.png")}
        />
        <Image
          style={[styles.ratingComponentChild6, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-152.png")}
        />
        <Image
          style={[styles.ratingComponentChild7, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-162.png")}
        />
      </View>
      <Pressable
        style={[styles.ratingComponent3, styles.ratingLayout]}
        onPress={() => navigation.navigate("CRITICRATING")}
      >
        <Image
          style={[styles.ratingComponentChild3, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-122.png")}
        />
        <Image
          style={[styles.ratingComponentChild4, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-132.png")}
        />
        <Image
          style={[styles.ratingComponentChild5, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-142.png")}
        />
        <Image
          style={[styles.ratingComponentChild6, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-152.png")}
        />
        <Image
          style={[styles.ratingComponentChild7, styles.ratingChildLayout]}
          contentFit="cover"
          source={require("../assets/star-162.png")}
        />
      </Pressable>
      <Text style={[styles.reviews, styles.matchLayout]}>800 reviews</Text>
      <Text style={[styles.match, styles.timeTypo]}>90 % Match</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Text style={[styles.popularReviews, styles.reviewsFlexBox]}>
        Popular Reviews
      </Text>
      <Text style={[styles.overallRating, styles.reviewsFlexBox]}>
        Overall Rating
      </Text>
      <Pressable
        style={[styles.chartContainer, styles.parentFlexBox]}
        onPress={() => navigation.navigate("OVERALLRATING")}
      >
        <View style={[styles.totalContainer, styles.recommendFlexBox]}>
          <View style={styles.trendIndicator}>
            <Image
              style={styles.icon2}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
            <Text style={styles.reviews1}>10%</Text>
          </View>
          <Text style={[styles.reviews2, styles.reviews2Layout]}>{`80%
800 Reviews`}</Text>
        </View>
        <Image
          style={[styles.containerIcon, styles.containerIconSpaceBlock]}
          contentFit="cover"
          source={require("../assets/container.png")}
        />
        <View style={styles.containerIconSpaceBlock}>
          <View style={[styles.fixedRatio, styles.recommendFlexBox]}>
            <View style={styles.spineTransform} />
          </View>
          <View style={[styles.fixedRatio, styles.recommendFlexBox]}>
            <View style={styles.spineTransform} />
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.viewers, styles.viewersPosition]}
        onPress={() => navigation.navigate("VIEWERRATING")}
      >
        <Text style={[styles.viewers1, styles.viewers1Layout]}>Viewers</Text>
      </Pressable>
      <Pressable
        style={[styles.critics, styles.viewersPosition]}
        onPress={() => navigation.navigate("CRITICRATING")}
      >
        <Text style={[styles.critics1, styles.reviews2Layout]}>Critics</Text>
      </Pressable>
      <Text style={[styles.text4, styles.textTypo]}>70%</Text>
      <Text style={[styles.text5, styles.textTypo]}>90%</Text>
      <View style={styles.starsParent}>
        <View style={[styles.stars3, styles.starsLayout]}>
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
            source={require("../assets/star.png")}
          />
        </View>
        <Pressable
          style={[styles.stars4, styles.starsLayout]}
          onPress={() => navigation.navigate("EACHRATINGREVIEWS")}
        >
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
            source={require("../assets/star2.png")}
          />
        </Pressable>
        <View style={[styles.stars5, styles.starsLayout]}>
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
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <View style={[styles.stars6, styles.starsLayout]}>
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
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
        <View style={[styles.stars7, styles.starsLayout]}>
          <Image
            style={styles.starIconLayout}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <Image
            style={[styles.starIcon1, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.clickedmovieReviewsItem, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-109.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-109.png")}
      />
      <View style={[styles.group, styles.groupLayout]}>
        <Text style={[styles.text6, styles.textLayout]}>40</Text>
        <Text style={[styles.text7, styles.textLayout]}>30</Text>
        <Text style={[styles.text8, styles.textLayout]}>25</Text>
        <Text style={[styles.text9, styles.textLayout]}>0</Text>
        <Text style={[styles.text10, styles.textLayout]}>0</Text>
      </View>
      <View style={[styles.container, styles.groupLayout]}>
        <Text style={[styles.text6, styles.textLayout]}>100</Text>
        <Text style={[styles.text7, styles.textLayout]}>60</Text>
        <Text style={[styles.text8, styles.textLayout]}>40</Text>
        <Text style={[styles.text9, styles.textLayout]}>5</Text>
        <Text style={[styles.text10, styles.textLayout]}>3</Text>
      </View>
      <Text style={[styles.similarlyRatedMovie, styles.reviewsFlexBox]}>
        Similarly rated movie
      </Text>
      <View style={[styles.clickedmovieReviewsInner1, styles.groupChildLayout]}>
        <View style={[styles.groupContainer, styles.groupChildLayout]}>
          <View style={[styles.rectangleParent3, styles.groupChildLayout]}>
            <Image
              style={[styles.rectangleIcon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-141.png")}
            />
            <Image
              style={[styles.groupChild4, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-161.png")}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-151.png")}
            />
            <Image
              style={[styles.groupChild6, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-171.png")}
            />
            <Image
              style={[styles.groupChild7, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-181.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.about, styles.castPosition]}
        onPress={() => navigation.navigate("CLICKEDMOVIEABOUT")}
      >
        <Text style={[styles.text16, styles.reviewsFlexBox]}>
          <Text style={[styles.about1, styles.reviewTypo]}>About</Text>
          <Text style={[styles.text17, styles.yashasTypo]}>{`    `}</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.cast, styles.castPosition]}
        onPress={() => navigation.navigate("CLICKEDMOVIECAST")}
      >
        <Text style={[styles.cast1, styles.textLayout]}>Cast</Text>
      </Pressable>
      <Text style={[styles.reviews3, styles.viewers1Layout]}>Reviews</Text>
      <Pressable
        style={[styles.vector1, styles.vectorLayout]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
      <View style={styles.lineView} />
      <View
        style={[styles.barsHomeIndicator, styles.barsHomeIndicatorPosition]}
      >
        <View style={[styles.background, styles.iconLayout1]} />
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
  rectangleLayout: {
    height: 151,
    width: 338,
    left: 18,
    position: "absolute",
  },
  groupLayout1: {
    height: 144,
    width: 340,
  },
  userIconLayout: {
    width: 36,
    left: 5,
    overflow: "hidden",
    height: 32,
    position: "absolute",
  },
  reviewsFlexBox: {
    textAlign: "left",
    lineHeight: 16,
    letterSpacing: 0,
  },
  trappedTypo: {
    height: 54,
    width: 323,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    left: 8,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo1: {
    width: 64,
    fontSize: FontSize.bodySm1216Default_size,
    left: 261,
    height: 16,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  chevronIconLayout: {
    height: 24,
    position: "absolute",
  },
  starsLayout: {
    height: 9,
    flexDirection: "row",
    position: "absolute",
  },
  starIconLayout: {
    width: 9,
    height: 9,
  },
  moreTypo: {
    width: 34,
    left: 298,
    height: 18,
    fontFamily: FontFamily.robotoThin,
    fontWeight: "200",
    lineHeight: 18,
    fontSize: FontSize.size_2xs_8,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildShadowBox: {
    top: -1,
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
    left: -1,
    position: "absolute",
  },
  chevronIconPosition: {
    top: 103,
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  vectorLayout: {
    width: "7.47%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleParentLayout: {
    height: 30,
    position: "absolute",
  },
  flickpicks40Typo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    top: 6,
    fontSize: FontSize.size_mid,
    height: 18,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
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
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  m18Typo1: {
    opacity: 0.5,
    textAlign: "center",
    fontSize: FontSize.bodySm1216Default_size,
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
    textAlign: "center",
    fontSize: FontSize.bodySm1216Default_size,
    color: Color.lightThemeSystemSurface,
    fontWeight: "700",
  },
  myListLayout1: {
    width: 44,
    position: "absolute",
  },
  myListLayout: {
    lineHeight: 20,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
  },
  recommendWrapperLayout: {
    width: 77,
    height: 22,
    position: "absolute",
  },
  ratingChildLayout1: {
    borderRadius: Border.br_12xs,
    width: "16.65%",
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  ratingLayout: {
    width: 109,
    height: 30,
    position: "absolute",
  },
  ratingChildLayout: {
    width: "16.7%",
    borderRadius: Border.br_12xs,
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
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
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  reviews2Layout: {
    lineHeight: 24,
    textAlign: "center",
  },
  containerIconSpaceBlock: {
    marginLeft: -999,
    flex: 1,
  },
  viewersPosition: {
    top: 1121,
    position: "absolute",
  },
  viewers1Layout: {
    width: 92,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
  },
  textTypo: {
    height: 19,
    width: 30,
    lineHeight: 24,
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  groupIconLayout: {
    height: 120,
    width: 26,
    position: "absolute",
  },
  groupLayout: {
    height: 109,
    width: 22,
    top: 1227,
    position: "absolute",
  },
  textLayout: {
    height: 15,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
  },
  groupChildLayout: {
    height: 161,
    position: "absolute",
  },
  castPosition: {
    top: 466,
    position: "absolute",
  },
  reviewTypo: {
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    fontSize: FontSize.size_mid,
  },
  yashasTypo: {
    fontSize: FontSize.size_xl_9,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  clickedmovieReviewsChild: {
    top: 44,
    height: 1643,
  },
  groupChild: {
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
    top: 8,
    width: 340,
    borderStyle: "solid",
    position: "absolute",
  },
  userCircleIcon: {
    top: 13,
    overflow: "hidden",
    height: 32,
  },
  puneeth: {
    width: 81,
    height: 16,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl_9,
    left: 50,
    lineHeight: 16,
    position: "absolute",
    top: 21,
  },
  trappedInTime: {
    top: 51,
  },
  critic: {
    top: 20,
    left: 293,
    fontFamily: FontFamily.robotoThin,
    fontWeight: "200",
    fontSize: FontSize.body1Normal_size,
    height: 16,
    textAlign: "left",
    color: Color.lightThemeSystemSurface,
    lineHeight: 16,
    letterSpacing: 0,
    width: 36,
    position: "absolute",
  },
  text: {
    top: 126,
  },
  chevronTopCircleIcon: {
    width: 24,
    top: 112,
    height: 24,
    overflow: "hidden",
    left: 8,
  },
  chevronBottomCircleIcon: {
    left: 38,
    width: 24,
    top: 112,
    height: 24,
    overflow: "hidden",
  },
  s: {
    left: 247,
    color: Color.colorRed_200,
    height: 48,
    width: 26,
    textAlign: "center",
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    lineHeight: 52,
    fontSize: FontSize.size_xl,
    top: 0,
    letterSpacing: 0,
    position: "absolute",
  },
  starIcon1: {
    marginLeft: 3,
  },
  stars: {
    flexDirection: "row",
    left: 265,
    height: 9,
    top: 117,
  },
  more: {
    top: 91,
    height: 18,
  },
  rectangleParent: {
    top: 835,
  },
  groupItem: {
    height: 144,
    width: 340,
  },
  userCircleIcon1: {
    top: 4,
    overflow: "hidden",
    height: 32,
  },
  yashas: {
    top: 12,
    width: 68,
    height: 16,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl_9,
    left: 50,
    lineHeight: 16,
    position: "absolute",
  },
  trappedInTime1: {
    top: 42,
  },
  text1: {
    top: 117,
  },
  chevronTopCircleIcon1: {
    left: 8,
  },
  chevronBottomCircleIcon1: {
    left: 38,
  },
  stars1: {
    top: 108,
    flexDirection: "row",
    left: 265,
    height: 9,
  },
  more1: {
    top: 82,
    height: 18,
  },
  rectangleGroup: {
    top: 693,
    height: 142,
    width: 338,
    left: 18,
    position: "absolute",
  },
  groupInner: {
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
    top: 8,
    width: 340,
    borderStyle: "solid",
    position: "absolute",
  },
  yashaswini: {
    width: 112,
    height: 16,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl_9,
    left: 50,
    lineHeight: 16,
    position: "absolute",
    top: 21,
  },
  rectangleContainer: {
    top: 533,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.8%",
    top: "2.9%",
    right: "3.73%",
    bottom: "95.91%",
    height: "1.19%",
  },
  rectangleView: {
    width: 152,
    height: 32,
  },
  flickpicks40: {
    left: 22,
    width: 111,
  },
  groupView: {
    left: 198,
    width: 150,
    top: 1366,
    height: 30,
  },
  groupChild1: {
    width: 181,
    height: 32,
  },
  moviemagic30: {
    left: 27,
    width: 134,
  },
  rectangleParent1: {
    width: 179,
    left: 10,
    top: 1366,
    height: 30,
  },
  groupChild2: {
    width: 167,
    height: 32,
  },
  boxofficebuzz36: {
    left: 9,
    width: 149,
  },
  rectangleParent2: {
    top: 1411,
    left: 107,
    width: 165,
  },
  icon1: {
    overflow: "hidden",
  },
  arrowLeftLarge: {
    left: 35,
    top: 50,
    width: 24,
  },
  kingdom: {
    top: 36,
    left: 135,
    fontSize: FontSize.size_10xl_7,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 52,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    letterSpacing: 0,
    position: "absolute",
  },
  frameChild: {
    overflow: "hidden",
  },
  text3: {
    fontFamily: FontFamily.openSansRegular,
  },
  m18: {
    opacity: 0.5,
    textAlign: "center",
    fontSize: FontSize.bodySm1216Default_size,
    color: Color.lightThemeSystemSurface,
  },
  m18Wrapper: {
    backgroundColor: Color.colorGray_200,
    padding: Padding.p_11xs,
    marginLeft: 8,
    borderRadius: Border.br_11xs,
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
    fontFamily: FontFamily.openSansRegular,
    marginLeft: 3,
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
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    backgroundColor: Color.lightThemeChartSingleDefault,
    top: 0,
    overflow: "hidden",
    left: 0,
  },
  clickedmovieReviewsInner: {
    top: 107,
    left: 4,
    backgroundColor: Color.lightThemeSystemSurface,
  },
  antDesignplusOutlinedIcon: {
    height: 26,
    left: 11,
    top: 0,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  myList: {
    height: 22,
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.size_sm_6,
    lineHeight: 20,
    left: 0,
    top: 27,
    width: 44,
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
    lineHeight: 20,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    fontSize: FontSize.size_sm_6,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
  },
  recommendWrapper: {
    top: 0,
    left: 0,
  },
  groupWrapper: {
    left: 211,
    top: 27,
  },
  groupChild3: {
    top: 3,
    left: 108,
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
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    position: "absolute",
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
  ratingComponentChild3: {
    right: "83.3%",
    left: "0%",
  },
  ratingComponentChild4: {
    right: "62.48%",
    left: "20.83%",
  },
  ratingComponentChild5: {
    right: "41.65%",
    left: "41.65%",
  },
  ratingComponentChild6: {
    right: "20.83%",
    left: "62.48%",
  },
  ratingComponentChild7: {
    left: "83.3%",
    right: "0%",
  },
  ratingComponent1: {
    left: 248,
    top: 1084,
    width: 109,
  },
  ratingComponent2: {
    top: 1178,
    left: 133,
  },
  ratingComponent3: {
    top: 1084,
    width: 109,
    left: 11,
  },
  reviews: {
    top: 315,
    lineHeight: 20,
    textAlign: "center",
    color: Color.lightThemeSystemSurface,
    letterSpacing: 0,
    fontWeight: "600",
    fontSize: FontSize.body1Normal_size,
    width: 85,
    fontFamily: FontFamily.robotoBoldItalic,
    fontStyle: "italic",
    left: 5,
    position: "absolute",
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
  vectorIcon: {
    height: "2.59%",
    width: "6.4%",
    top: "44.99%",
    right: "19.47%",
    bottom: "52.42%",
    left: "74.13%",
    position: "absolute",
  },
  popularReviews: {
    top: 508,
    left: 12,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl_9,
    position: "absolute",
  },
  overallRating: {
    top: 1016,
    left: 12,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl_9,
    position: "absolute",
  },
  icon2: {
    width: 16,
    display: "none",
    height: 16,
    overflow: "hidden",
  },
  reviews1: {
    color: Color.darkThemeChartOtherPositive,
    display: "none",
    fontFamily: FontFamily.bodySm1216Default,
    fontSize: FontSize.bodySm1216Default_size,
    textAlign: "left",
    lineHeight: 16,
  },
  trendIndicator: {
    width: 42,
    flexDirection: "row",
    height: 16,
  },
  reviews2: {
    marginTop: 4,
    width: 103,
    fontSize: FontSize.size_smi,
    lineHeight: 24,
    fontFamily: FontFamily.bodySm1216Default,
    height: 48,
    color: Color.lightThemeSystemSurface,
  },
  totalContainer: {
    alignSelf: "stretch",
    flex: 1,
  },
  containerIcon: {
    alignSelf: "stretch",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  spineTransform: {
    transform: [
      {
        rotate: "-30deg",
      },
    ],
    height: 0,
    alignSelf: "stretch",
  },
  fixedRatio: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  chartContainer: {
    top: 1065,
    left: 134,
    width: 107,
    height: 107,
  },
  viewers1: {
    lineHeight: 24,
    textAlign: "center",
    height: 22,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  viewers: {
    left: 254,
  },
  critics1: {
    width: 67,
    height: 22,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
  },
  critics: {
    left: 30,
  },
  text4: {
    top: 1145,
    left: 46,
  },
  text5: {
    top: 1140,
    left: 288,
  },
  stars3: {
    left: 1,
    flexDirection: "row",
    top: 0,
  },
  stars4: {
    top: 24,
    left: 2,
    flexDirection: "row",
  },
  stars5: {
    top: 48,
    flexDirection: "row",
    left: 0,
  },
  stars6: {
    top: 72,
    flexDirection: "row",
    left: 0,
  },
  stars7: {
    top: 96,
    left: 1,
    flexDirection: "row",
  },
  starsParent: {
    top: 1234,
    left: 160,
    width: 59,
    height: 105,
    position: "absolute",
  },
  clickedmovieReviewsItem: {
    left: 90,
    top: 1227,
    height: 120,
  },
  groupIcon: {
    top: 1226,
    height: 120,
    left: 261,
  },
  text6: {
    width: 19,
    fontSize: FontSize.size_3xs,
    height: 15,
    lineHeight: 24,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  text7: {
    top: 22,
    width: 19,
    fontSize: FontSize.size_3xs,
    height: 15,
    lineHeight: 24,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
    left: 2,
  },
  text8: {
    top: 45,
    width: 19,
    fontSize: FontSize.size_3xs,
    height: 15,
    lineHeight: 24,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
    left: 1,
  },
  text9: {
    top: 70,
    width: 19,
    fontSize: FontSize.size_3xs,
    height: 15,
    lineHeight: 24,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
    left: 1,
  },
  text10: {
    top: 94,
    left: 3,
    width: 19,
    fontSize: FontSize.size_3xs,
    height: 15,
    lineHeight: 24,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  group: {
    left: 125,
  },
  container: {
    left: 230,
  },
  similarlyRatedMovie: {
    top: 1476,
    left: 12,
    color: Color.lightThemeSystemSurface,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl_9,
    position: "absolute",
  },
  rectangleIcon: {
    width: 103,
    borderRadius: Border.br_11xs,
    top: 0,
    left: 0,
  },
  groupChild4: {
    left: 220,
    width: 103,
    borderRadius: Border.br_11xs,
    top: 0,
  },
  groupChild5: {
    left: 110,
    width: 103,
    borderRadius: Border.br_11xs,
    top: 0,
  },
  groupChild6: {
    left: 330,
    width: 103,
    borderRadius: Border.br_11xs,
    top: 0,
  },
  groupChild7: {
    left: 440,
    width: 103,
    borderRadius: Border.br_11xs,
    top: 0,
  },
  rectangleParent3: {
    width: 543,
    top: 0,
    left: 0,
  },
  groupContainer: {
    width: 363,
    height: 161,
    top: 0,
    left: 0,
  },
  clickedmovieReviewsInner1: {
    top: 1507,
    left: 7,
    width: 363,
    height: 161,
  },
  about1: {
    fontSize: FontSize.size_mid,
  },
  text17: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  text16: {
    color: Color.lightThemeSystemSurface,
  },
  about: {
    left: 12,
  },
  cast1: {
    width: 47,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    lineHeight: 16,
    letterSpacing: 0,
    fontWeight: "700",
  },
  cast: {
    left: 187,
  },
  reviews3: {
    top: 465,
    left: 76,
    fontSize: FontSize.size_5xl,
    height: 24,
    position: "absolute",
    textAlign: "left",
    lineHeight: 16,
    letterSpacing: 0,
    fontWeight: "700",
  },
  vector1: {
    left: "88.53%",
    top: "5.47%",
    right: "4%",
    bottom: "91.65%",
    height: "2.88%",
  },
  lineView: {
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
    top: 780,
    overflow: "hidden",
    height: 32,
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
    left: "0%",
    color: Color.lightThemeSystemSurface,
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
    top: 0,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  clickedmovieReviews: {
    height: 810,
    width: "100%",
    flex: 1,
    backgroundColor: Color.lightThemeSystemSurface,
  },
});

export default CLICKEDMOVIEREVIEWS;
