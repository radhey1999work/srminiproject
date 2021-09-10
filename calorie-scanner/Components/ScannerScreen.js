import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';

export default class CameraScreen extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      hasPermission: null,
      cameraType: Camera.Constants.Type.back,
      barcode: ""
    };
  }

  async componentDidMount()
  {
    this.getPermissionAsync();
    this.setState({ barcode: "" });
  }

  getPermissionAsync = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    console.log('status', status);
    this.setState({ hasPermission: status == 'granted' });
  }

  searchBarcode = (barcode) => {
    this.setState({ barcode });
    console.log('barcode', barcode)
    this.props.navigation.navigate('ResultScreen');
    // TODO: Call backend function and show results on ResultScreen
  }

  render() {
    const { hasPermission, cameraType } = this.state;
    const screenHeight = Dimensions.get('window').height;

    if (hasPermission === null) {
      console.log('permission null');
      return <Text>This app needs access to your camera. Reload the app if you gave the app permission to use the camera.</Text>;
    }

    if (hasPermission === false) {
      return <Text>This app needs access to your camera. Reload the app if you gave the app permission to use the camera.</Text>;
    }

    return (
      <Camera
        type={cameraType}
        style={{height: screenHeight}}
        ref={ref => {this.camera = ref}}
        onBarCodeScanned={(res) => this.state.barcode ? null : this.searchBarcode(res.data)}
      />
    );
  }
}
