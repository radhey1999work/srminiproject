import React from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

export default function ManualBarcodeScreen({ navigation }) {
  const [barcode, setBarcode] = React.useState("");

  const searchBarcode = () => {
    console.log('barcode', barcode)
    navigation.navigate('ResultScreen');
    // TODO: Call backend function and show results on ResultScreen
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  buttonText: {
    fontWeight: "500"
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    margin: 1,
    padding: 10
  },
  searchButton: {
    alignItems: "center",
    backgroundColor: "#32CD32",
    margin: 15,
    padding: 10,
    borderRadius: 15
  }
});
