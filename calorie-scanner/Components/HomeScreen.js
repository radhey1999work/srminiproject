import * as React from 'react';
import { View, Button } from 'react-native';


export default function HomeScreen({ navigation })
{
  return (
    <View>
      <Button
        title = "Scan the Barcode"
        onPress = {() => navigation.navigate('ScannerScreen')}
      />
      <Button
        title = "Type in the Barcode"
        onPress = {() => navigation.navigate('ManualBarcodeScreen')}
      />
    </View>
  );
}
