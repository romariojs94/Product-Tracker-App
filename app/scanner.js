import { View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import { Link } from 'expo-router';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';

export default function Scanner() {

  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  return (
    <View style={styles.container}>
      <Text>Scanner Camera</Text>
      <Link href="/" style={styles.link}>Voltar para a página inicial</Link>
        <CameraView style={styles.camera} facing={facing} barcodeScannerSettings={{
          barCodeTypes: ['qr'],
        }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
      </CameraView>
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
link: {
  color: 'red',
  marginTop: 20,
  textDecorationLine: 'underline',
},
message: {
  textAlign: 'center',
  paddingBottom: 10,
},
camera: {
  flex: 1,
},
buttonContainer: {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: 'transparent',
  margin: 64,
},
button: {
  flex: 1,
  alignSelf: 'flex-end',
  alignItems: 'center',
},
text: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
},
});