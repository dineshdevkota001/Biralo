import React, { useState } from "react";
import { getJWToken, saveJWToken } from "../utils/token";
import { StyleSheet, View } from "react-native";
import { Card, Button, Subheading, TextInput } from "react-native-paper";
import { post } from "../utils/http";
const tokenID = "token";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const loginValidationSchema = yup.object().shape({
  username: yup.string().max(64).required("this field is required"),
  email: yup.string().email(),
  password: yup.string().min(8).max(64).required("this field is required"),
});

const loginDefaultValues = {
  email: "dineshdevkota001@gmail.com",
  username: "dineshdevkota001",
  password: "yaynotyay",
};

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async () => {
    // const loginToken = await post("/account/create", { email, password, username });
    console.log({ email, password, username });
    // saveJWToken(tokenID, loginToken);
  };
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <Card.Title title="Sign Up" />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            label="Username"
            value={username}
            mode="outlined"
            onChangeText={(username) => setUsername(username)}
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
            value={password}
            mode="outlined"
            onChangeText={(password) => setPassword(password)}
          />
        </Card.Content>
        <Card.Actions>
          <Button icon="signup" mode="contained" onPress={handleSignUp}>
            SignUp
          </Button>
        </Card.Actions>
      </Card>
      <Button icon="account" onPress={() => console.log("pressed")}>
        Login Instead
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardStyle: {
    width: 400,
    minHeight: 300,
  },
});
