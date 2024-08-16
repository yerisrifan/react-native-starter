import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text, Switch } from "react-native-paper";
import { globalStyles } from "@/constants/Global";
import { useAppContext, useAppTheme } from "@/context/AppContext";

export default function HomeScreen() {
  const { toggleTheme, isThemeDark } = useAppContext();
  const theme = useAppTheme();
  return (
    <View style={globalStyles.containerCentered}>
      <Text>hello</Text>
      <Switch color={"red"} value={isThemeDark} onValueChange={toggleTheme} />
      <Text style={{ color: theme.colors.primary }}>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
