import React from 'react';
import { Button, SafeAreaView, Text, TextInput } from 'react-native';

export default function ManualBarcodeScreen({ navigation }) {
  const [barcode, setBarcode] = React.useState("");

  const searchBarcode = () => {
    console.log('barcode', barcode)
    navigation.navigate('ResultScreen');
    // TODO: Call backend function and show results on ResultScreen
  }

  return (
    <SafeAreaView>
      <Text>Enter Barcode</Text>
      <TextInput
        onChangeText={setBarcode}
        placeholder="00000000000"
      />
      <Button
        title="Search Barcode"
        onPress={searchBarcode}
      />
    </SafeAreaView>
  );
}
