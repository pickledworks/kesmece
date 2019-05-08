import React from "react";
import {
  // Image,
  // Platform,
  ScrollView,
  StyleSheet,
  Text,
  // TouchableOpacity,
  View
} from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.contentContainerText}>Content here</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  contentContainerText: {
    color: "white"
  }
});
