import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { getDatabase, ref, get } from 'firebase/database';
import SearchBox from "../Component/search-box";
console.disableYellowBox = true;

const Home = ({navigation}) => {
    const mapRef = useRef(null);
    const locationRef = ref(getDatabase(), 'location/');
    const [locationData, setLocationData] = useState('');

    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        location: null,
    });

    const tuRegion = {
        latitude: 14.07433,
        longitude: 100.60226,
        latitudeDelta: 0.025,
        longitudeDelta: 0.031,
    };

    const goToTU = () => {
        //complete this animation in 3 seconds
        mapRef.current.animateToRegion(tuRegion, 3 * 1000);
    };

    function _readDB(){
        get(locationRef).then((snapshot) => {
            if (snapshot.exists()) {
            const userData = snapshot.val();
            setLocationData(userData);
            } else {
            console.log("No data available");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    _readDB();
    return (
        <SafeAreaView style={{flex:1, marginTop: 35, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={{
                        latitude: 14.07433,
                        longitude: 100.60226,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onRegionChangeComplete={(region) => setRegion(region)}
                >
                    <SearchBox styles = {{flex: 'flex-start'}}/>

                    {/* ศกร */}
                    <Marker coordinate={{
                        latitude: 14.071718370120387,
                        longitude: 100.60303975622438,
                        }}
                        title= "Krom Luang Naradhiwas Rajanagarinda Learning Centre"
                        description="ศกร.ประกอบด้วยสื่อและเทคโนโลยีสารสนเทศสำหรับการศึกษา ห้องสำหรับการทำงานหรือประชุม รวมทั้งบริการอื่นที่เกี่ยวข้องกับการศึกษา                               เวลาทำการ: 09:00 - 07:00  สายรถ EV: 1A, 1B, 2, 3"
                    />

                    {/* คณะ */}
                    <Marker coordinate={{
                        latitude: 14.069015874345588,
                        longitude: 100.60750061283184,
                        }} 
                        pinColor={'#71298D'}
                        title="Sirindhorn International Institute of Technology"
                        description="สถาบันการศึกษาด้านวิศวกรรม เทคโนโลยี และการจัดการหลักสูตรนานาชาติแห่งแรกของประเทศไทย    เวลาทำการ: 08.30-16.30  สายรถ EV: 1A, 1B, 5 "
                    />

                    {/* กิติยาคาร */}
                    <Marker coordinate={{
                        latitude: 14.07127401763853,
                        longitude: 100.60855736661883,
                        }} 
                        pinColor={'#4169E1'}
                        title="Kittiyakarn Auditorium"
                        description="อาคารแห่งความยุติธรรม อาคารขนาดความจุ 3,500 ที่นั่ง พร้อมสิ่งอำนวยความสะดวกครบครัน สำหรับจัดงานประชุม และกิจกรรมต่าง ๆ                                       เวลาทำการ: ติดต่อเพื่อขอใช้สถานที่  สายรถ EV: 2, 5"
                    />

                    {/* Green */}
                    <Marker coordinate={{
                        latitude: 14.073570546356697,
                        longitude: 100.60126378160838,
                        }} 
                        pinColor={'#003314'}
                        title="Green Canteen"
                        description="โรงอาหารกลางที่ใหญ่ที่สุดในมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต ได้รับการสนันสนุนโดยซีพี ฟู๊ดเวิร์ล           เวลาทำการ: 07:00 - 17:30  สาย EV: 1A, 1B, 2, 3"
                    />

                    {/* JC */}
                    <Marker coordinate={{
                        latitude: 14.069371343396089,
                        longitude: 100.60475601758226,
                        }} 
                        pinColor={'#003314'}
                        title="SC1/JC Canteen"
                        description="โรงอาหาร 2 ชั้นที่เป็นที่รู้จักกันในชื่อโรงอาหาร JC ตั้งอยู่ตรงกันข้ามกับคณะวารสารศาสตร์ และสื่อสารมวลชน ติดกับโรงอาหารกลุ่มสังคมศาสตร์ 1                              เวลาทำการ: 07:00-16:00  สายรถ EV: 1A, 1B, 5"
                    />  

                    {/* SC */}
                    <Marker coordinate={{
                        latitude: 14.06971997740824,
                        longitude: 100.60490085686165,
                        }} 
                        pinColor={'#003314'}
                        title="SC2 Canteen"
                        description="โรงอาหาร 2 ชั้น ตั้งอยู่บริเวณหลังอาคารเรียนรวมสังคมศาสตร์ เป็นแหล่งรับประทานอาหารหลักของคณะกลุ่มสังคมศาสตร์ และคณะข้างเคียง                        เวลาทำการ: 07:30-16:30  สายรถ EV: 1A, 1B, 5"
                    />  

                    {/* Engineer Canteen */}
                    <Marker coordinate={{
                        latitude: 14.069662697359796,
                        longitude: 100.6071324454885,
                        }} 
                        pinColor={'#003314'}
                        title="Faculty of Engineering Canteen"
                        description="โรงอาหารขนาดเล็ก ตั้งอยู่ระหว่างคณะวิศวกรรมศาสตร์ และสถาบันเทคโนโลยีนานาชาติสิรินธร                    เวลาทำการ: 08:00 - 14:00  สายรถ EV: 1A, 1B, 5"
                    />

                    {/* Thewson */}
                    <Marker coordinate={{
                        latitude: 14.076523957032778,
                        longitude: 100.5958086490617,
                        }} 
                        pinColor={'#003314'}
                        title="Thewson Dome Food Center"
                        description="โรงอาหารขนาดกลางของกลุ่มหอพักเอเชียนเกมส์ เป็นแหล่งรับประทานอาหารหลักของนักศึกษาที่พักอยู่ในบริเวณนั้น และคนทำงานที่สัญจรไปมา                          เวลาทำการ: 10:00 - 18:00  สายรถ EV: 1A, 1B, 2, 3"
                    />

                    {/* Puey */}
                    <Marker coordinate={{
                        latitude: 14.071366114518286,
                        longitude: 100.60289689878493,
                        }} 
                        title="Puey Ungphakorn Library"
                        description="ห้องสมุดแห่งหนึ่งสังกัดหอสมุดแห่งมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต ประกอบไปด้วยพื้นที่อ่านหนังสือจำนวนมาก และบริการต่างๆ อย่างครบครัน              เวลาทำการ: 09:00 - 21:00  สายรถ EV: 1A, 1B, 2, 3"
                    />

                    {/* Thammasat Public Library */}
                    <Marker coordinate={{
                        latitude: 14.070929004580787,
                        longitude: 100.6112975773044,
                        }} 
                        title="Thammasat Public Library"
                        description="ห้องสมุดใหม่ล่าสุดของมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต ตั้งอยู่ชั้นสองอาคารอุทยานการเรียนรู้ป๋วย 100 ปี เวลาทำการ: 08:30 - 16:00  สายรถ EV: 2, 5"
                    />  

                    {/* Nongyao Chaiseri Library */}
                    <Marker coordinate={{
                        latitude: 14.0724928199,
                        longitude: 100.613040963,
                        }} 
                        title="Nongyao Chaiseri Library"
                        description="ห้องสมุดกลุ่มวิทยาศาสตร์ หรือที่รู้จักกันว่า หอสมุดแห่งนวัตกรรมและความยั่งยืน ตั้งอยู่ชั้น 7-8 ของอาคารปิย-ชาติ                                                                        เวลาทำการ: 08:30 - 20:00  สายรถ EV: 2, 5"
                    />  
                </MapView>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {goToTU()}}>
                    <Text style={styles.textColor}>Go to TU</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    text: {
        fontSize: 18,
        color: "#c3002f",
        marginVertical: 5,
        backgroundColor: "#ffd13f",
        borderRadius: 10,
        justifyContent: "center",
    },
    button: {
        width: 100,
        height: 30,
        margin: 10,
        justifyContent: 'center',
        backgroundColor: "#ffd13f",
        color: "#00F",
        borderRadius: 100,
        paddingHorizontal: 20
    },
    submitB: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 10,
        color: "#c3002f",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        color: '#c3002f'
    }
});