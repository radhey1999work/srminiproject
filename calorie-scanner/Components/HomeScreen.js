import * as React from 'react';
import { View, Button } from 'react-native';


export default function HomeScreen({ navigation })
{
  return (
    <View>
      <Button
        title = "Scan the Barcode"
        onPress = {() => navigation.navigate('ScannerScreen')}
        accessibilityLabel="Scan the barcode"
      />
      <Button
        title = "Type in the Barcode"
        onPress = {() => navigation.navigate('ManualBarcodeScreen')}
        accessibilityLabel="Enter in the barcode via the keyboard"
      />
    </View>
  );
}
