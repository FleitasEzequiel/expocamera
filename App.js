import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

function Panel(props){
  return(<View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
    <Text style={{fontSize:40,textAlign:"center"}}>Usted tiene una sesión iniciada</Text>
    <TouchableOpacity style={{padding:20, marginTop:20}} onPress={() => props.fx(false)}>
      <Text>Cerrar Sesión</Text>
    </TouchableOpacity>
  </View>)
}

function InicioSesion(props){
  console.log("props", props)
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={'front'}>
        <View style={styles.buttonContainer}>
          <View style={styles.oval}>
            <Text style={styles.text}>Colocá tu cara en el centro </Text>
          </View>
        </View>
        <View style={{flex:0.2, justifyContent:"center"}}>
      <TouchableOpacity style={styles.button} onPress={() => props.fx(true)}>
        <Text style={{flex:0.2, fontSize:18, color:"white", fontWeight:"bold",textAlign:"center",textAlignVertical:"center"}}>Iniciar Sesión</Text>
      </TouchableOpacity>
        </View>
      </CameraView>
      </View>
  )
}

export default function App() {
  const [facing, setFacing] = useState('back');
  const [ inicio, setInicio] = useState(false);
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
    !inicio ? <InicioSesion fx={setInicio}/> : <Panel fx={setInicio}/>
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
    backgroundColor:"black"
    // alignSelf:"center",
    // borderRadius:150
  },
  buttonContainer: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    // flex: 1,
    backgroundColor:"blue",
    width:"40%",
    flex:0.3,
    alignSelf:"center",
    // display:"flex",
    // justifyContent:"center",
    // "alignItems":"center",
    // alignSelf:" center"
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf:"center"
  },
});
