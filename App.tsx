import { Text, Button, Modal, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={{
        uri: "https://media.istockphoto.com/id/846599284/photo/santa-claus-doing-a-wheelie-on-a-motorised-esky-cooler-on-the-beach.jpg?s=612x612&w=0&k=20&c=iWQ0hz5g9sxZlHhMCRWyUN1b7mh8PqtozyVQ85IWaLk=",
      }}
    ></ImageBackground>
  );
}
