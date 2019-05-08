import React from "react";
import { View, Text, StyleSheet } from "react-native";
import YouTube from "react-native-youtube";

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <YouTube
        videoId="sbLZrlTnUB4" // The YouTube video ID
        play={true} // control playback of video with true/false
        fullscreen={true} // control whether the video should play in fullscreen or inline
        loop={true} // control whether the video should loop when ended
        onReady={e => console.log("im ready")}
        // onChangeState={e => this.setState({ status: e.state })}
        // onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => console.error(e.error)}
        style={{ flex: 1, height: 700 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200
  }
});

export default VideoPlayer;
