import React, { useRef } from "react";
import { View, Dimensions, TextInput as TextInputForRef } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
/*
 *Create a Login page that accept usename and password
 *Navigate User to the MenuScreen after success login
 *API end point :
 *Required parameters :
 *Return data:
 */
const Index = () => {
  const EmailRef: React.RefObject<TextInputForRef> = React.createRef();
  const PasswordRef: React.RefObject<TextInputForRef> = React.createRef();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isEmailHasError, setEmailError] = React.useState(false);
  const [isPasswordHasError, setPasswordError] = React.useState(false);
  const size = Dimensions.get("screen");
  function validateEmail() {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email);
    if (result) {
      //move selection to another password
      setEmailError(false);
      PasswordRef.current?.focus();
    } else {
      //assign true to erro
      //show error message
      setEmailError(true);
    }
  }
  function changePassword(password: string) {
    setEmail(password);
  }
  return (
    <View
      style={{
        flexDirection: "column",
        height: size.height,
        justifyContent: "center",
        padding: 26,
      }}
    >
      <TextInput
        label="Email"
        mode="outlined"
        ref={EmailRef}
        secureTextEntry={false}
        value={email}
        error={isEmailHasError}
        keyboardType="email-address"
        onEndEditing={() => console.log("End")}
        onBlur={validateEmail}
        onChangeText={(email) => setEmail(email)}
      />
      <HelperText type="error" visible={isEmailHasError}>
        Invaid Email.
      </HelperText>
      <TextInput
        label="Password"
        mode="outlined"
        ref={PasswordRef}
        secureTextEntry={true}
        value={password}
        error={isPasswordHasError}
        keyboardType="default"
        onChangeText={(password) => changePassword(password)}
      />
      <HelperText type="error" visible={isPasswordHasError}>
        Invaid Password.
      </HelperText>
      <Button
        icon="login"
        mode="outlined"
        onPress={() => console.log("Pressed")}
      >
        Login
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  textInput: {},
  button: {},
});
export default Index;
