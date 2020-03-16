import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { navigation } from "@react-navigation/stack";
const ProductsDetails = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Button title="Continue shopping" onPress={() => navigate("QRScanner")} />
      <Button title="Cart" onPress={() => navigate("Cart")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProductsDetails;
