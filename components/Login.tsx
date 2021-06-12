import React, { useState } from "react";
import { getJWToken, saveJWToken } from "../utils/token";
import { StyleSheet, View } from "react-native";
import { Card, Button, Subheading, TextInput } from "react-native-paper";
import { post } from "../utils/http";
const tokenID = "token";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const loginValidationSchema = yup.object().shape({
  username: yup.string().max(64).required("this field is required"),
  password: yup.string().min(8).max(64).required("this field is required"),
});

const loginDefaultValues = {
  username: "dinesh001",
  password: "Xb99WtxZmPrz4gf",
};

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: loginDefaultValues,
    resolver: yupResolver(loginValidationSchema),
  });

  const handleLogin = async (data) => {
    const loginToken = await post("/auth/login", data);
    saveJWToken(tokenID, loginToken.token.session);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <Card.Title title="Login" />
        <Card.Content>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="outlined"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="username"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                secureTextEntry={true}
                mode="outlined"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="password"
            defaultValue=""
          />
          {/* <TextInput
            label="Username"
            value={username}
            mode="outlined"
            onChangeText={(username) => setUsername(username)}
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
            mode="outlined"
            value={password}
            onChangeText={(password) => setPassword(password)}
          /> */}
        </Card.Content>
        <Card.Actions>
          <Button icon="login" mode="contained" onPress={handleSubmit(handleLogin)}>
            Login
          </Button>
        </Card.Actions>
      </Card>
      {/* <Button icon="account" onPress={() => console.log("is not supported")}>
        SignUp instead
      </Button> */}
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
    minHeight: 200,
  },
});
