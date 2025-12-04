import { Alert, StyleSheet, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const onButtonPressed = () => Alert.alert("Button Pressed");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"brown"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
  },
});
