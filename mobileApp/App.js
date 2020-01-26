import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  return (
    <View style={styles.container}>
      <Text>Who at the Mike and Ophelia Lazardis Quantum Nano-center rn?? sbsb</Text>
      <TouchableOpacity onPress={openImagePickerAsync}
        style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Swing a Nude?</Text>
      </TouchableOpacity>
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
