import { Alert, StyleSheet, Text, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const onButtonPressed = () => Alert.alert("Button Pressed");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        This is {Platform.OS === "android" ? "Android" : "IoS"} device
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "grey" : "aqua",
    justifyContent: "center",
    alignItems: "center",
  },
});
