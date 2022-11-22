import React from 'react';
import { View, LogBox } from "react-native";
import SignupLogin, {loginStatus} from './screens/SignupLoginScreen';
import MainContainer from './navigation/MainContainer';
LogBox.ignoreLogs(["Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45."]);
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);
LogBox.ignoreLogs(["EventEmitter.removeListener('change', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`."]);
LogBox.ignoreLogs(["EventEmitter.removeListener('keyboardWillHide', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`."]);

export default function App() {
  console.log(loginStatus.status)
  
  return (
    <View style={{flex:1}}>
      { !loginStatus.status ? <SignupLogin /> : <MainContainer />}
    </View>
  );
}