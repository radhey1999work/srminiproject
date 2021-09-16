import React from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import { getCalories } from '../Backend/calories';

export default function ManualBarcodeScreen({ navigation }) {
  const [barcode, setBarcode] = React.useState("");

  const searchBarcode = () => {
    const calories = getCalories(barcode);
    navigation.navigate('ResultScreen', { calories });
  }

  return (
    <SafeAreaView
      style={styles.view}
    >
      <Text
        style={styles.buttonLabel}
      >Enter the Barcode</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setBarcode}
        placeholder="00000000000"
      />
      <TouchableOpacity
        onPress={searchBarcode}
        style={styles.searchButton}
      >
        <Text style={styles.buttonText}>Search Barcode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 12
  },
  buttonLabel: {
    color: "#006400",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  buttonText: {
    color: "#98FB98",
    fontWeight: "500"
  },
  textInput: {
    borderColor: "#006400",
    borderRadius: 10,
    borderWidth: 1,
    margin: 1,
    padding: 10
  },
  searchButton: {
    alignItems: "center",
    backgroundColor: "#006400",
    margin: 15,
    padding: 10,
    borderRadius: 15
  }
});
