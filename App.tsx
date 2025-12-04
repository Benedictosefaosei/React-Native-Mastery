import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Title</Text>

      <Text style={styles.subTitleText}>
        Lorem ipsum dolor sit amet,{" "}
        <Text
          style={styles.redText}
          onPress={() => Alert.alert("Text Pressed")}
        >
          PRESS HERE
        </Text>{" "}
        consectetur adipisicing elit. Explicabo, possimus! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Nobis labore eveniet neque at non
        quae, quis, dolores facilis ducimus doloribus voluptas ipsam ea dolor
        deleniti praesentium sapiente dolore. Sed, incidunt!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  subTitleText: {
    fontSize: 20,
    textAlign: "justify",
  },
  redText: {
    color: "red",
    textDecorationLine: "underline",
  },
});
