import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/auth/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/Dashboard/ProfileMenu'
import ScholarshipDetails from './components/Dashboard/ScholarshipDetails';

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Dashboard from './components/Dashboard/Dashboard';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnZvDgX1byC0RPvke6Ftog_yIAvqwSxFk",
  authDomain: "scholarsheets-b98e7.firebaseapp.com",
  projectId: "scholarsheets-b98e7",
  storageBucket: "scholarsheets-b98e7.appspot.com",
  messagingSenderId: "144838855961",
  appId: "1:144838855961:web:7ab38061f0f5a095848988",
  measurementId: "G-ZD0SHM136B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Stack = createStackNavigator();

export class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loaded: false,
        loggedin: false
      };
  
      this.componentDidMount = this.componentDidMount.bind(this);
    }
  
    componentDidMount() {
      const auth = getAuth();
      auth.onAuthStateChanged((user) => {
        if (!user) {
          this.setState({
            loaded: true,
            loggedin: false
          })
        } else {
          this.setState({
            loaded: true,
            loggedin: true
          })
        }
      })
    }

    render() {
      const { loaded, loggedin } = this.state;

      if(loaded) {
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
              <Stack.Screen
                name="Landing"
                component={Landing}
                options={{ headerShown: false }}
              ></Stack.Screen>
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              ></Stack.Screen>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              ></Stack.Screen>
              <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
              ></Stack.Screen>

              <Stack.Screen name='ProfileMenu' component={Profile} options={{headerShown: false}} />
              <Stack.Screen
                        name="ScholarshipDetails" 
                        component={ScholarshipDetails}
                        options={{ headerShown: false }} 
                    ></Stack.Screen>

                    
            </Stack.Navigator>
          </NavigationContainer>
        );
      }

      return (
        <>
          
        </>
      )
  
        

  }
} 

export default App
  