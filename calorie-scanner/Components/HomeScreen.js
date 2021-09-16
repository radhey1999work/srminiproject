import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function HomeScreen({ navigation })
{
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress = {() => navigation.navigate('ScannerScreen')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Scan Barcode</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = {() => navigation.navigate('ManualBarcodeScreen')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Type in the Barcode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 12
  },
  buttonText: {
    color: "#98FB98",
    fontWeight: "500"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#006400",
    marginTop: 15,
    padding: 10,
    borderRadius: 15
  }
});
