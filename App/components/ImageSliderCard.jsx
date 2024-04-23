import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";


const MySlider = () => {
  const [position, setPosition] = useState(1);

  const images = [
    require('../assets/rectangle-142.png'),
    require('../assets/rectangle-144.png'),
    require('../assets/rectangle-146.png'),
    require('../assets/rectangle-148.png'),
    require('../assets/rectangle-145.png'),
    require('../assets/rectangle-151.png'),
  ];

  return (
    <View style={styles.container}>
      <SliderBox images={images}  sliderBoxHeight={400}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MySlider;
