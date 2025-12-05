import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Phone_Width = Dimensions.get("screen").width;
const Phone_Height = Dimensions.get("screen").height;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text>Hello Benedict</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  container2: {
    width: Phone_Width / 2,
    height: Phone_Height / 2,
    backgroundColor: "tomato", // different color
    borderWidth: 3,
    borderColor: "black",
  },
});
