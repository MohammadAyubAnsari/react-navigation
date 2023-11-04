import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.heading}>Welcome to Movie App</Text>
      <View style={styles.movieBtn}>
        <Button
          color="green"
          title="Explore movies"
          onPress={() => navigation.navigate("Movie")}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  movieBtn: {
    width: "75%",
    marginTop: 28,
  },
});
