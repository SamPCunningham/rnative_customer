import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Applicaion for Cutomer and Product</Text>
      <Text>Ready to take your Customer Information</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: "gray", borderWidth: 1 }}
      />
      <Image style={styles.tinyLogo} source={require("../assets/Illum.png")} />
      <Button
        title="Customer List"
        onPress={() => navigation.navigate("Customer")}
      />
      <Text />
      <Button title="Product" onPress={() => navigation.navigate("Product")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CAF7CD",
    alignItems: "center",
    justifyContent: "center",
  },
});
