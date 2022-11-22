import * as React from 'react';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator, createAppContainer} from 'react-navigation'; 
import { createMaterialBottomTabNavigator } from
    "react-navigation-material-bottom-tabs";


// Screens
import HomeScreen from '../screens/HomeScreen.js';
import QuizScreen from '../screens/QuizScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import StreetViewScreen from '../screens/StreetViewScreen.js';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: "Map",
                tabBarIcon: (tabInfo) => (
                <Ionicons
                    name="map"
                    size={tabInfo.focused ? 26 : 20}
                    color={tabInfo.tintColor}
                />
                ),
            },
        },
        StreetView: {
            screen: StreetViewScreen,
            navigationOptions: {
                tabBarLabel: "StreetView",
                tabBarIcon: (tabInfo) => (
                <MaterialIcons
                    name="streetview"
                    size={tabInfo.focused ? 26 : 20}
                    color={tabInfo.tintColor}
                />
                ),
            },
        },
        Quiz: {
            screen: QuizScreen,
            navigationOptions: {
                tabBarLabel: "Quiz",
                tabBarIcon: (tabInfo) => (
                <MaterialIcons
                    name="videogame-asset"
                    size={tabInfo.focused ? 26 : 20}
                    color={tabInfo.tintColor}
                />
                ),
            },
        },
        Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: (tabInfo) => (
            <Ionicons
                name="md-person-circle-outline"
                size={tabInfo.focused ? 26 : 20}
                color={tabInfo.tintColor}
            />
            ),
        },
        },
    },
    {
        initialRouteName: "Home",
        barStyle: { backgroundColor: "#c3002f" },
    }
);
    
const Navigator = createAppContainer(TabNavigator);

export default Navigator;
