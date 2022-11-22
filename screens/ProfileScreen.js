import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database';
import {emailP} from '../screens/SignupLoginScreen';

const firebaseConfig = {
    apiKey: "AIzaSyCfLiENqmf2rl0GF30m4XD38h3WiUgom8w",
    authDomain: "tuvirtualtour-fdc93.firebaseapp.com",
    databaseURL: "https://tuvirtualtour-fdc93-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tuvirtualtour-fdc93",
    storageBucket: "tuvirtualtour-fdc93.appspot.com",
    messagingSenderId: "962838718117",
    appId: "1:962838718117:web:586d22ebc5ef5ec2b54f4c"
};

export default function Profile() {
  const profileRef = ref(getDatabase(), 'account/');
  const [profileData, setProfileData] = useState(null);
  const [email, setEmail] = useState(null);
  const [profileIndex, setProfileIndex] = useState('');
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(0);
  const [point, setPoint] = useState(0);
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState('');
  _readDB();

  function _readDB(){
    get(profileRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setProfileData(userData);
        for (let i = 0; i < 4; i++){
          if (emailP.email === userData[i].email) {
            //setProfileIndex(i);
            setFirstName(userData[i].firstname);
            setLastName(userData[i].lastname);
            setPhone(userData[i].phone);
            setUsername(userData[i].username);
            setEmail(userData[i].email);
          }
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error);
    });
  }

    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
            <Image style={styles.tinyLogo}
              source={require('../images/user.png')}/>

                <Text style={styles.name}>{username}</Text>
                <Text style={styles.userInfo}>Name: {firstName} {lastName}</Text>
                <Text style={styles.userInfo}>Email: {email}</Text>
                <Text style={styles.userInfo}>Phone Number: {phone}</Text>
                <Text style={styles.userInfo}>Point: {point}</Text>
                
            </View>
          </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  tinyLogo: {
    height: 100,
    width: 100
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
    marginTop: 5,
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
    marginTop: 5,
  }
});
