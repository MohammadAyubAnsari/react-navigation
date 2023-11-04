import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const Movie = () => {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState();
  //   input change function
  const handleInputChange = (inputText) => {
    setSearchText(inputText);
  };

  //   handle button click
  const handleSearchBtn = async () => {
    console.log(searchText);
    let res =
      await fetch(`http://www.omdbapi.com/?apikey=a1c5ced4&s=${searchText}

    `);
    let movieData = await res.json();
    console.log(movieData.Search);
    setMovieList(movieData.Search);
  };

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
