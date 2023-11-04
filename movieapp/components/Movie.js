import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const Movie = () => {
  const [searchText, setSearchText] = useState("");
  //   input change function
  const handleInputChange = (inputText) => {
    setSearchText(inputText);
  };

  //   handle button click
  const handleSearchBtn = () => [console.log(searchText)];
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="find a movie"
        value={searchText}
        onChangeText={handleInputChange}
      />
      <View style={styles.searchBtn}>
        <Button title="Search Movie" onPress={handleSearchBtn} />
      </View>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    width: "75%",
    height: "100",
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  searchBtn: {
    padding: 10,
    width: "50%",
    marginTop: 20,
  },
});
