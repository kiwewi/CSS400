import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView, Alert } from "react-native";

import CheckBox from '../Component/CheckBox';


const firebaseConfig = {
    apiKey: "AIzaSyCfLiENqmf2rl0GF30m4XD38h3WiUgom8w",
    authDomain: "tuvirtualtour-fdc93.firebaseapp.com",
    databaseURL: "https://tuvirtualtour-fdc93-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tuvirtualtour-fdc93",
    storageBucket: "tuvirtualtour-fdc93.appspot.com",
    messagingSenderId: "962838718117",
    appId: "1:962838718117:web:586d22ebc5ef5ec2b54f4c"
};

export var showPoint = QuizScreen.count;

export default function QuizScreen() {
    const [count, setCount] = useState(0);

    // Q1
    const [toggleCheckBoxQ1O1, setToggleCheckBoxQ1O1] = useState(false)
    const [toggleCheckBoxQ1O2, setToggleCheckBoxQ1O2] = useState(false)
    const [toggleCheckBoxQ1O3, setToggleCheckBoxQ1O3] = useState(false)
    const [toggleCheckBoxQ1O4, setToggleCheckBoxQ1O4] = useState(false)

    // Q2
    const [toggleCheckBoxQ2O1, setToggleCheckBoxQ2O1] = useState(false)
    const [toggleCheckBoxQ2O2, setToggleCheckBoxQ2O2] = useState(false)
    const [toggleCheckBoxQ2O3, setToggleCheckBoxQ2O3] = useState(false)
    const [toggleCheckBoxQ2O4, setToggleCheckBoxQ2O4] = useState(false)

    //Q3
    const [toggleCheckBoxQ3O1, setToggleCheckBoxQ3O1] = useState(false)
    const [toggleCheckBoxQ3O2, setToggleCheckBoxQ3O2] = useState(false)
    const [toggleCheckBoxQ3O3, setToggleCheckBoxQ3O3] = useState(false)
    const [toggleCheckBoxQ3O4, setToggleCheckBoxQ3O4] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                {/* Q1 */}
                <View style={styles.container}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Mini Quiz!</Text>
                    </View>
                    <View style={styles.questions}>
                        <Text style={styles.questionText}>Question 1: How many EV route that pass SC1/JC Canteen?</Text>
                    </View>

                    <View style={styles.buttonQ1}>
                        <CheckBox
                            onPress={() => setToggleCheckBoxQ1O1(!toggleCheckBoxQ1O1)}
                            title='1'
                            isChecked={toggleCheckBoxQ1O1}
                        />
                    </View>
                    
                    <View style={styles.buttonQ1}>
                    <CheckBox
                            onPress={() => setToggleCheckBoxQ1O2(!toggleCheckBoxQ1O2)}
                            title='2'
                            isChecked={toggleCheckBoxQ1O2}
                        />
                    </View>

                    {/* correct ans */}
                    <View style={styles.buttonQ1}>
                        <CheckBox
                            onPress={() => {setToggleCheckBoxQ1O3(!toggleCheckBoxQ1O3); setCount(count+1);}}
                            title='3'
                            isChecked={toggleCheckBoxQ1O3}
                        />
                    </View>

                    <View style={styles.buttonQ1}>
                        <CheckBox
                            onPress={() => setToggleCheckBoxQ1O4(!toggleCheckBoxQ1O4)}
                            title='4'
                            isChecked={toggleCheckBoxQ1O4}
                        />
                    </View>
                </View>

                {/* Q2 */}
                <View style={styles.container}>
                    <View style={styles.questions}>
                        <Text style={styles.questionText}>Question 2: Which location has the most Ev route pass by?</Text>
                    </View>

                    {/* correct ans */}
                    <View style={styles.buttonQ2}>
                        <CheckBox
                            onPress={() => {setToggleCheckBoxQ2O1(!toggleCheckBoxQ2O1); setCount(count+1);}}
                            title='Green Canteen'
                            isChecked={toggleCheckBoxQ2O1}
                        />
                    </View>

                    <View style={styles.buttonQ2}>
                        <CheckBox
                            onPress={() => setToggleCheckBoxQ2O2(!toggleCheckBoxQ2O2)}
                            title='SC2 Canteen'
                            isChecked={toggleCheckBoxQ2O2}
                        />
                    </View>

                    <View style={styles.buttonQ2}>
                        <CheckBox
                            onPress={() => setToggleCheckBoxQ2O3(!toggleCheckBoxQ2O3)}
                            title='Kittiyakhan Audithorium'
                            isChecked={toggleCheckBoxQ2O3}
                        />
                    </View>

                    <View style={styles.buttonQ2}>
                        <CheckBox
                            onPress={() => setToggleCheckBoxQ2O4(!toggleCheckBoxQ2O4)}
                            title='Thammasat Public Library'
                            isChecked={toggleCheckBoxQ2O4}
                        />
                    </View>
                </View>

                {/* Q3 */}
                <View style={styles.container}>
                    <View style={styles.questions}>
                        <Text style={styles.questionText}>Question 3: What is opening hour of Puay Ungphakorn Library?</Text>
                    </View>

                    <View style={styles.buttonQ3}>
                        <CheckBox
                            onPress={() => setToggleCheckBoxQ3O1(!toggleCheckBoxQ3O1)}
                            title='07:00 - 17:30'
                            isChecked={toggleCheckBoxQ3O1}
                        />
                    </View>

                    <View style={styles.buttonQ3}>
                        <CheckBox
                            onPress={() => setToggleCheckBoxQ3O2(!toggleCheckBoxQ3O2)}
                            title='08:30 - 16:00'
                            isChecked={toggleCheckBoxQ3O2}
                        />
                    </View>

                    <View style={styles.buttonQ3}>
                        <CheckBox
                            onPress={() => setToggleCheckBoxQ3O3(!toggleCheckBoxQ3O3)}
                            title='09:00 - 07:00'
                            isChecked={toggleCheckBoxQ3O3}
                        />
                    </View>

                    {/* correct ans */}
                    <View style={styles.buttonQ3}>
                        <CheckBox
                            onPress={() => {setToggleCheckBoxQ3O4(!toggleCheckBoxQ3O4); setCount(count+1);}}
                            title='09:00 - 21:00'
                            isChecked={toggleCheckBoxQ3O4}
                        />
                    </View>                
                    <TouchableOpacity styles={{alignItems: 'center', justifyContent: 'center'}} onPress={ () => {console.log(count); Alert.alert("You got "+ count+ " point(s)!")}}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleBox: {
        alignItems: "center",
        backgroundColor: "#FFD13F",
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: "center",
        width: 150,
        height: 50
    },  
    buttonQ1: {
        alignItems: "center",
        backgroundColor: "#C3002F",
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        underlayColor: "#DDDDDD",
        width: 100
    },
    buttonQ2: {
        alignItems: "center",
        backgroundColor: "#C3002F",
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        underlayColor: "#DDDDDD",
        width: 250
    },
    buttonQ3: {
        alignItems: "center",
        backgroundColor: "#C3002F",
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        underlayColor: "#DDDDDD",
        width: 180
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#006600",
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        underlayColor: "#DDDDDD",
        width: 100
    },
    text: {
        color: 'white',
    },
    title: {
        color: 'black',
        fontSize: 25,
    },
    questionText: {
        color: 'black',
        fontSize: 20,
    },
    questions: {
        alignItems: "center",
        backgroundColor: "#FFD13F",
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: "center",
        height: 100
    },  
    checkbox: {
        flex: 1,
        alignContent: "center",
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
});
