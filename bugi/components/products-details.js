import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { navigation } from '@react-navigation/stack';
const ProductsDetails = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          item
        </Text>
        <Text>
          picture
        </Text>
        <Text>
          description
        </Text>
        <Text>
          quantity
        </Text>
      <Button title="increase"/>
      <Button title="decrease"/>
      </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductsDetails;