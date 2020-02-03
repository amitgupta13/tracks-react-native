import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation: { navigate } }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button title="Go To SignIn Screen" onPress={() => navigate("Signin")} />
      <Button title="Go To Main Flow" onPress={() => navigate("mainFlow")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
