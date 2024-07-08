import React, { Component } from "react";
import {   StyleSheet, Text, View,  } from "react-native";
import SideBar from "./../../components/sideNavigation/SideBar";
import { LinearGradient } from 'expo-linear-gradient';

import HomeTable from "./HomeTable";

export default function Home() {
  return (
    <View className="w-full h-full bg-gray-900 flex flex-row">
      <SideBar />

      <LinearGradient
      // Button Linear Gradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.background}
    >
      <View className="w-3/4">
      <HomeTable />
      </View>

      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});


