// Todo:

// Add stars and data
// up and down arrow votes change
// align the items


import React from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import StarRating from './StarRating';
import { WebView } from 'react-native-webview';

const ReviewsScreen = ({ movie }) => {
  const navigation = useNavigation();
  const reviews = movie.item.reviews || [];
  const handleProfilePress = (name) => {
    navigation.navigate('MYPROFILE', { name });
  }
  const handleReviewPress = (review) => {
    navigation.navigate('CLICKEDREVIEWS', { review, "title": movie.item.title, "image": movie.item.imageUrl });
  };

  percentageValue = 78; // Example percentage value


  const renderReviewCard = ({ item }) => {
    return (
      <>
        <TouchableOpacity onPress={() => handleReviewPress(item)}>
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <TouchableOpacity onPress={() => handleProfilePress(item.name)} style={styles.headerItem}>
                <Icon name="user" size={20} color="white" />
              </TouchableOpacity>
              <Text style={styles.reviewHeaderText}>{item.name}</Text>

              {item.spoilerTag && <Image
                source={require("../assets/S.jpeg")}
                style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10 }}
              />}
              <Text style={styles.reviewHeaderText}>{item.type}</Text>
            </View>


            <Text style={styles.reviewContent}>
              {item.review.length > 50 ? `${item.review.substring(0, 50)}...more` : item.review}
            </Text>

            <View style={styles.reviewFooter}>
              <View style={styles.arrowContainer}>
                <Icon name="arrow-circle-up" size={20} color="white" />
                <Icon name="arrow-circle-down" size={20} color="white" />
              </View>
              <View style={styles.reviewDateContainer}>
                {/* ToDO:
            Add stars and date */}
                {/* <Text style={styles.reviewText}>{item.review}</Text> */}
                {/* <Text style={styles.dateText}>{item.date}</Text> */}
              </View>
            </View>
          </View>
        </TouchableOpacity>

      </>
    );
  };


  dict = { 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0], 5: [0, 0] }
  movie.item.reviews?.map(item => {
    if (item.type == "critic") {
      dict[item.rating][0] = dict[item.rating][0] + 1
    }
    else {
      dict[item.rating][1] = dict[item.rating][1] + 1
    }
  })
  const tagsDict = {};
  movie.item.reviews.forEach(review => {
    review.tags?.forEach(tag => {
      tagsDict[tag] = (tagsDict[tag] || 0) + 1;
    });
  });

  let weightedSumCritic = 0;
  let weightedSumViewer = 0;
  let totalCriticCount = 0;
  let totalViewerCount = 0;

  for (let [star, [criticCount, viewerCount]] of Object.entries(dict)) {
    // Calculate the weighted sum for critics and viewers separately
    weightedSumCritic += star * criticCount;
    weightedSumViewer += star * viewerCount;

    // Calculate the total count for critics and viewers separately
    totalCriticCount += criticCount;
    totalViewerCount += viewerCount;
  }

  // Calculate weighted averages for critics, viewers, and overall
  let criticAverage = 0;
  let viewerAverage = 0;
  let overallAverage = 0;

  if (totalCriticCount > 0) {
    criticAverage = (weightedSumCritic / (totalCriticCount * 5)) * 100;
  }

  if (totalViewerCount > 0) {
    viewerAverage = (weightedSumViewer / (totalViewerCount * 5)) * 100;
  }

  let totalReviewsCount = totalCriticCount + totalViewerCount;
  let weightedSum = weightedSumCritic + weightedSumViewer;

  if (totalReviewsCount > 0) {
    overallAverage = (weightedSum / (totalReviewsCount * 5)) * 100;
  }

  // Round to two decimal places
  let criticPercentage = Math.round(criticAverage * 100) / 100;
  let viewerPercentage = Math.round(viewerAverage * 100) / 100;
  let overallPercentage = Math.round(overallAverage * 100) / 100;

  const chartHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0e0e0e; 
        color: #fff; /* White text color */
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
      }
      .bar-container {
        width: 80%;
        height: 40px; 
        background-color: #1c1c1e; 
        border-radius: 20px; 
        box-shadow: 0 2px 4px rgba(0,0,0,0.2); 
        overflow: hidden;
        position: relative;
        transition: all 0.5s ease; 
      }
      .bar {
        width: 0%; 
        height: 100%;
        line-height: 40px; 
        background-color: #21d07a; 
        border-radius: 20px; 
        text-align: center;
        transition: width 2s ease-in-out; 
      }
      .bar span {
        display: inline-block;
        width: 100%;
        color: #fff; 
        z-index: 2;
        position: relative;
      }
    </style>
  </head>
  <body>
    <div class="bar-container">
      <div class="bar" style="width: ${overallPercentage}%;"><span>${overallPercentage}%</span></div>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', (event) => {
        setTimeout(() => {
          document.querySelector('.bar').style.width = '${overallPercentage}%';
        }, 100);
      });
    </script>
  </body>
  </html>
  `;

  const criticChartHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0e0e0e; 
        color: #fff; /* White text color */
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
      }
      .bar-container {
        width: 80%;
        height: 40px; 
        background-color: #1c1c1e; 
        border-radius: 20px; 
        box-shadow: 0 2px 4px rgba(0,0,0,0.2); 
        overflow: hidden;
        position: relative;
        transition: all 0.5s ease; 
      }
      .bar {
        width: 0%; 
        height: 100%;
        line-height: 40px; 
        background-color: #21d07a; 
        border-radius: 20px; 
        text-align: center;
        transition: width 2s ease-in-out; 
      }
      .bar span {
        display: inline-block;
        width: 100%;
        color: #fff; 
        z-index: 2;
        position: relative;
      }
    </style>
  </head>
  <body>
    <div class="bar-container">
      <div class="bar" style="width: ${criticPercentage}%;"><span>${criticPercentage}%</span></div>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', (event) => {
        setTimeout(() => {
          document.querySelector('.bar').style.width = '${criticPercentage}%';
        }, 100);
      });
    </script>
  </body>
  </html>
  `;

  const viewerChartHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0e0e0e; 
        color: #fff; /* White text color */
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
      }
      .bar-container {
        width: 80%;
        height: 40px; 
        background-color: #1c1c1e; 
        border-radius: 20px; 
        box-shadow: 0 2px 4px rgba(0,0,0,0.2); 
        overflow: hidden;
        position: relative;
        transition: all 0.5s ease; 
      }
      .bar {
        width: 0%; 
        height: 100%;
        line-height: 40px; 
        background-color: #21d07a; 
        border-radius: 20px; 
        text-align: center;
        transition: width 2s ease-in-out; 
      }
      .bar span {
        display: inline-block;
        width: 100%;
        color: #fff; 
        z-index: 2;
        position: relative;
      }
    </style>
  </head>
  <body>
    <div class="bar-container">
      <div class="bar" style="width: ${viewerPercentage}%;"><span>${viewerPercentage}%</span></div>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', (event) => {
        setTimeout(() => {
          document.querySelector('.bar').style.width = '${viewerPercentage}%';
        }, 100);
      });
    </script>
  </body>
  </html>
  `;

  let foo = totalCriticCount / (totalCriticCount + totalViewerCount) * 100

  const pieChartHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0e0e0e;
      color: #fff;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    .pie-chart {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-image: conic-gradient(
        #3498db 0% ${foo}%,
        #9b59b6 ${foo}% 0
      );
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      text-align: center;
    }
    .pie-chart span {
      background-color: #0e0e0e;
      border-radius: 50%;
      width: 160px;
      height: 160px;
      line-height: 160px;
      display: block;
    }
  </style>
  <title>Pie Chart</title>
</head>
<body>
  <div class="pie-chart">
    <span>Critic: ${totalCriticCount} Viewer: ${totalViewerCount}</span>
  </div>
</body>
</html>
`;



  console.log(tagsDict)
  const handleReviewPressByStars = (movie, key) => {
    navigation.navigate("STARREVIEWS", { movie, key })
  }
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 30, paddingBottom: 20, paddingTop: 20 }}>Popular Reviews</Text>
      <FlatList
        data={reviews.slice(0, 3)}
        renderItem={renderReviewCard}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <Text style={{ color: "white", textAlign: "left", paddingBottom: 40, fontSize: 35 }}>Overall Rating</Text>
      <View style={styles.chartContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ html: chartHTML }}
          style={styles.chart}
        />
      </View>
      <Text style={{ color: "white", textAlign: "left", paddingBottom: 40, fontSize: 35 }}>Critic Rating</Text>
      <View style={styles.chartContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ html: criticChartHTML }}
          style={styles.chart}
        />
      </View>
      <Text style={{ color: "white", textAlign: "left", paddingBottom: 40, fontSize: 35 }}>Viewer Rating</Text>
      <View style={styles.chartContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ html: viewerChartHTML }}
          style={styles.chart}
        />
      </View>
      <Text style={{ color: "white", textAlign: "left", paddingBottom: 40, fontSize: 35 }}>Distribution of Reviews</Text>
      <View style={styles.chartContainerPie}>
        <WebView
          originWhitelist={['*']}
          source={{ html: pieChartHTML }}
          style={styles.chart}
        />
      </View>
      {Object.entries(dict).map(([key, value]) => (
        <View key={key}>
          <TouchableOpacity onPress={() => handleReviewPressByStars(movie, key)} style={styles.headerItem}>
            <View style={styles.reviewHeader}>

              <Text style={{ color: "white", paddingLeft: 10, paddingRight: 20 }}>{value[0]}</Text>
              <Icon style={{ paddingRight: 10 }} name="users" size={30} color="white" />
              <StarRating rating={key} size={20} />
              <Icon style={{ color: "white", paddingLeft: 10, paddingRight: 20 }} name="users" size={30} color="white" />
              <Text style={{ color: "white" }}>{value[1]}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
      <Text style={{ color: "white", paddingTop: 20 }}>Click on the Star Rating to view reviews for each rating</Text>
      <View style={styles.tagsContainer}>
        {Object.entries(tagsDict).map(([key, value]) => (
          <View key={key}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>#{key} {value}</Text>
            </View>
          </View>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartContainer: {
    height: 100,
    width: '100%'
  },
  chartContainerPie: {
    height: 300,
    width: '100%'
  },
  chart: {
    flex: 1
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: 'white',
  },
  reviewCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewHeaderText: {
    color: 'white',
  },
  reviewHeaderTextLeft: {
    marginLeft: 5,
  },
  reviewHeaderTextRight: {
    marginRight: 5,
  },
  reviewContent: {
    color: 'white',
    marginBottom: 5,
  },
  reviewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowContainer: {
    flexDirection: 'row',
    marginRight: 10
  },
  reviewDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  reviewText: {
    color: 'white',
    marginRight: 5,
  },
  dateText: {
    color: 'white',
  },
});



export default ReviewsScreen;
