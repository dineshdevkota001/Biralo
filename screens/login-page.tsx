import React, { useState } from "react";
import { getJWToken, saveJWToken } from "../utils/token";
import { StyleSheet, Text, View, TextInput } from "react-native";
import LoginScreen from "react-native-login-screen";
import { post } from "../utils/http";
import { Login } from "../components/Login";
const tokenID = "loginToken";
export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const loginToken = await post("/auth/login", { username, password });
    console.log(loginToken);
    saveJWToken(tokenID, loginToken);
  };
  const handleSignUp = async () => {
    console.log({
      email: username,
      password: password,
      username: username.split("@")[0],
    });
    const loginToken = await post("/account/create", {
      email: username,
      password: password,
      username: username.split("@")[0],
    });
    // saveJWToken(tokenID, loginToken);
  };
  return (
    <Login />
    // <View style={styles.container}>
    //   <Text>Login to continue</Text>
    //   <LoginScreen
    //     usernameOnChangeText={(username) => setUsername(username)}
    //     onPressSettings={() => alert("Settings Button is pressed")}
    //     passwordOnChangeText={(password) => setPassword(password)}
    //     onPressLogin={handleLogin}
    //     onPressSignup={handleSignUp}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
