/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import VideoPlayer from "./components/VideoPlayer";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <VideoPlayer />
        </View>
        <AppNavigator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  videoContainer: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1"
  }
});
