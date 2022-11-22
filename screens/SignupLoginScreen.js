import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, SafeAreaView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfLiENqmf2rl0GF30m4XD38h3WiUgom8w",
    authDomain: "tuvirtualtour-fdc93.firebaseapp.com",
    databaseURL: "https://tuvirtualtour-fdc93-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tuvirtualtour-fdc93",
    storageBucket: "tuvirtualtour-fdc93.appspot.com",
    messagingSenderId: "962838718117",
    appId: "1:962838718117:web:586d22ebc5ef5ec2b54f4c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const loginStatus = {
    status: false
};

export const emailP = {
    email: null
};

export default class SignupLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
        email: '',
        password: '',
        confirmPassword: '',
        firstname:'',
        lastname: '',
        phone: '',
        username: '',
        showLogin: true,
        idx: 0,
        };
    }

    toggleShowLogin() {
        this.setState({
        showLogin: true
        })
    }

    toggleShowSignup() {
        this.setState({
        showLogin: false
        })
    }

    doLogin() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.email, this.state.password).then( () => {
        console.log("login successful");
        console.log(loginStatus.status);
        loginStatus.status = true;
        console.log(loginStatus.status);
        emailP.email = this.state.email;
        })
        .catch(function(error) {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
        // ...
        })
    }

    doSignup() {
        // https://firebase.google.com/docs/auth/web/password-auth

        // check if the two password fields match
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        if (password === confirmPassword){
            // do signup
            const profileRef = ref(getDatabase(), 'account/');
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.state.email, this.state.password).then( () => {
                Alert.alert("Sign Up Succesfully")
                console.log("created new user successful");
                this.toggleShowLogin(); // show login page
            })
            .catch(function(error) {
                // Handle Errors here.
                console.log(error.code);
                console.log(error.message);
                alert(error.message);
            });
        }
        else {
        alert("Password do not match !!!");
        }
    }

    showSignup() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.group}>
                        <Text style={styles.title}>Email</Text>
                        <TextInput style={styles.input}
                            value={this.state.email}
                            onChangeText={(email) => this.setState({email})}/>
                        </View>
                        <View style={styles.group}>
                        <Text style={styles.title}>Password</Text>
                        <TextInput style={styles.input}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                            />
                        </View>
                        <View style={styles.group}>
                        <Text style={styles.title}>Confirm Password</Text>
                        <TextInput style={styles.input}
                            secureTextEntry={true}
                            value={this.state.confirmPassword}
                            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                            />
                        </View>
                        <View style={styles.group}>
                        <Text style={styles.title}>Username</Text>
                        <TextInput style={styles.input}
                            value={this.state.username}
                            onChangeText={(username) => this.setState({username})}
                            />
                        </View>
                        <View style={styles.group}>
                        <Text style={styles.title}>Firstname</Text>
                        <TextInput style={styles.input}
                            value={this.state.firstname}
                            onChangeText={(firstname) => this.setState({firstname})}
                            />
                        </View>
                        <View style={styles.group}>
                        <Text style={styles.title}>Lastname</Text>
                        <TextInput style={styles.input}
                            value={this.state.lastname}
                            onChangeText={(lastname) => this.setState({lastname})}
                            />
                        </View>
                        <View style={styles.group}>
                        <Text style={styles.title}>Phone</Text>
                        <TextInput style={styles.input}
                            value={this.state.phone}
                            onChangeText={(phone) => this.setState({phone})}
                            />
                        </View>
                        <View style={styles.center}>
                        <View style={styles.group}>
                            <TouchableOpacity onPress={() => {this.toggleShowLogin();}}>
                            <Text style={styles.signupText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.group}>
                            <TouchableOpacity style={styles.button}
                            onPress={() => {this.doSignup()}}>
                            <Text style={styles.buttonText}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    showLogin() {
        return (
        <View>
            <View style={styles.group}>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input}
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}/>
            </View>
            <View style={styles.group}>
            <Text style={styles.title}>Password</Text>
            <TextInput style={styles.input}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
                />
            </View>
            <View style={styles.center}>
            <View style={styles.group}>
                <TouchableOpacity onPress={() => {this.toggleShowSignup();}}>
                <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.group}>
                <TouchableOpacity style={styles.button}
                onPress={() => {this.doLogin()}}>
                <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        );
    }

    render() {
        return (
        <View style={styles.containerLogin}>
                {this.state.showLogin ? this.showLogin() : this.showSignup()}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#ffd13f",
    },
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: "#c3002f"
    },
    group: {
        marginTop: 10
    },
    button: {
        backgroundColor: "#ffd13f",
        padding: 20,
        borderWidth: 1,
        borderColor: '#ffd13f',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 25,
        color: '#c3002f'
    },
    input: {
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#ffd13f",
        color: "#ffd13f"
        //backgroundColor: "#fcecb6", 
    },
    center: {
        alignItems: 'center'
    },
    signupText : {
        fontSize: 18,
        color: "#ffd13f"
    }
});