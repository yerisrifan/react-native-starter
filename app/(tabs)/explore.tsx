import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "@/constants/Global";

export default function Explore() {
  return (
    <View style={globalStyles.containerCentered}>
      <Text>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
