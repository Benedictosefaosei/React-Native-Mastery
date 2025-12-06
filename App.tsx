import { Text, TextInput, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import AppLogoImage from "./src/components/AppLogoImage";

export default function App() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TextInput
        style={{
          width: "80%",
          height: 40,
          borderWidth: 1,
          borderColor: "grey",
        }}
        placeholder="Enter your name"
        multiline={true}
        secureTextEntry={true}
        keyboardType="default"
        editable
        value={text}
        onChangeText={setText}
      ></TextInput>
      <AppLogoImage />
    </SafeAreaView>
  );
}
