import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tabItem, selectedTab === 'About' && styles.selectedTab]}
        onPress={() => setSelectedTab('About')}
      >
        <Text style={styles.tabText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tabItem, selectedTab === 'Reviews' && styles.selectedTab]}
        onPress={() => setSelectedTab('Reviews')}
      >
        <Text style={styles.tabText}>Reviews</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tabItem, selectedTab === 'Cast' && styles.selectedTab]}
        onPress={() => setSelectedTab('Cast')}
      >
        <Text style={styles.tabText}>Cast</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    borderWidth: 0,
  },
  selectedTab: {
    backgroundColor: 'gray', 
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MyTabs;
