import { View, Text, Button } from "react-native";
import React from "react";

const Profile = ({ navigation, route }) => {
  const { post } = route.params;
  //   // GO to home page
  //   const handleButtonClick = () => {
  //     navigation.navigate("Home");
  //   };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Comp</Text>
      <Text>Post ID: {post.id}</Text>
      <Text>Post Title: {post.title}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;
