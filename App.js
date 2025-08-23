import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function App() {
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
        <Text style={styles.message}>Queremos usar tu cámara</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={'front'}>
          <Text> a </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.oval}>
            <Text style={styles.text}>Poné tu jeta acá </Text>
          </View>
          {/* <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            {/* <Text style={styles.text}>Flip Camera</Text> */}
          {/* </TouchableOpacity> }*/} 
      <TouchableOpacity style={styles.button}>
        <Text>Hola</Text>
      </TouchableOpacity>
        </View>
      </CameraView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  oval:{
    // backgroundColor:"red",
    borderColor:"red",
    borderWidth:3,
    display:"flex",
    // width:"30vw 
    height:"60%",
    width:"100%",
    borderRadius:"50%",
    alignSelf:"center",
    justifyContent:"center",
  },
  camera: {
    flex: 1,
    // alignSelf:"center",
    // borderRadius:150
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    // flex: 1,
    backgroundColor:"blue",
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf:"center"
  },
});
