import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { navigation } from "@react-navigation/stack";
import axios from "axios";


const ProductsDetails = ({ navigation: { navigate } }) => {
  axios.get(`http://bugi-api.herokuapp.com/api/product-details`)
  .then((response) => {
    console.log("here")
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      <Button
      title="Continue shopping"
      onPress={
          () => navigate('QRScanner')}/>
      <Button
      title="Cart"
      onPress={
          () => navigate('QRScanner')}/>
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
