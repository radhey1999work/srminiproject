import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function ResultScreen({ navigation, route })
{
  const { calories } = route.params;
  const resultText = `The product has ${calories} calories.`

  if (!calories) {
    resultText = 'An error occurred while processing the barcode.';
  }

  return (
    <Text style={styles.text}>{resultText}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#006400",
    fontSize: 25,
    fontWeight: "500",
    marginTop: 30,
    textAlign: "center"
  }
});
