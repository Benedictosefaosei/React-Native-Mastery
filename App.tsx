import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(10);

  const IncreaseVal = () => setState((prevState) => prevState + 1);

  const DecreaseVal = () => setState((prevState) => prevState - 1);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Increase" onPress={IncreaseVal}></Button>
      <Text>{state}</Text>
      <Button title="Decrease" onPress={DecreaseVal}></Button>
    </View>
  );
}
