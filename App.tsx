import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const onButtonPressed = () => Alert.alert("Button Pressed");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "brown",
        }}
      >
        <Text style={styles.title}>Title</Text>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        />

        <TouchableOpacity onPress={onButtonPressed}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            blurRadius={4}
          />
        </TouchableOpacity>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        />

        <TouchableOpacity onPress={onButtonPressed}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            blurRadius={4}
          />
        </TouchableOpacity>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        />

        <TouchableOpacity onPress={onButtonPressed}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            blurRadius={4}
          />
        </TouchableOpacity>

        <Button title="Press on me" onPress={onButtonPressed} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    width: 200,
    height: 200,
  },
  image2: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
