import { View, Text, Button, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "gold",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Button title="Open Modal" onPress={() => setShowModal(true)}></Button>

      <Modal visible={showModal} animationType="slide">
        <Text
          style={{
            fontSize: 50,
            marginTop: 20,
          }}
        >
          Modal is Visible
        </Text>
        <Button title="Close Modal" onPress={() => setShowModal(false)} />
        <AntDesign
          name="close-circle"
          size={50}
          color="red"
          onPress={() => setShowModal(false)}
        />
      </Modal>
    </SafeAreaView>
  );
}
