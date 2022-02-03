import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Hello world!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button style={styles.btn}
        onPress={() => setOutputText('The text changed')}
        title="Click me!"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  btn: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 4,
    borderRadius: 4,
    padding: 15
  }
});
