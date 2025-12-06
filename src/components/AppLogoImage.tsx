import { Image, StyleSheet, View, Text } from "react-native";

const AppLogoImage = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        }}
        style={styles.image}
      />
      <Text>Trying to see if it will work</Text>
    </View>
  );
};

export default AppLogoImage;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "yellow",
  },
});
