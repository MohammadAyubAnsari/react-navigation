import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const Home = ({ navigation }) => {
  const [post, setPost] = useState({ id: 1, title: "post one" });
  // GO to profile page
  const handleButtonClick = () => {
    navigation.navigate("Profile", { post });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Comp</Text>
      <Button title="Profile Page" onPress={handleButtonClick} />
    </View>
  );
};

export default Home;
