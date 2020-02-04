/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import firebase from 'firebase'
import Geolocation from '@react-native-community/geolocation';
import GeoLoc from './GeoLoc'
import AppContainer from './AppStackNavigator'
import AppDrawNavigator from './AppDrawNavigator'
import Infinite from './Infinite'

class App extends React.Component {

  constructor(probs) {
    super(probs)
    this.state = {
      userLocation: null,
      isReady: false,
    }
  }

 

  getUserLocationHandler() {
    console.log('getUserLocationHandler called')
    Geolocation.getCurrentPosition(info => {
      console.log(info)
      this.fbDatabaseStore("Location/Ponmani", info)
      this.setState({
        userLocation: {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      })
    })

  }
  fbDatabaseStore(path, loc) {
    // alert(path)
    firebase.database().ref(path).set(
      {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude
      }
    ).then(() => {
      console.log('Inserted')
    }).catch((error) => {
      console.log(error)
    }
    )
  }

  getMoviesFromApiAsync() {
    return fetch('https://raw.githubusercontent.com/fizerkhan/thirukural/master/data/thirukural.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        global.jsonThirukural = responseJson;
        this.setState({
          isReady: true,
        })
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDDuVV3m09ADmlK6niz0O5ddVnWtsyLP4U",
      authDomain: "geolocation-98661.firebaseapp.com",
      databaseURL: "https://geolocation-98661.firebaseio.com",
      projectId: "geolocation-98661",
      storageBucket: "geolocation-98661.appspot.com",
      messagingSenderId: "371742908989",
      appId: "1:371742908989:web:574b97144eef158f344054",
      measurementId: "G-9X346TTJQ2"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    // firebase.analytics();
    console.log(firebase);
    
    this.getMoviesFromApiAsync()
  }

  render() {
    
    // return <AppContainer />
     if(this.state.isReady)
     {
    return <AppDrawNavigator/>
     }
     else{
      return <Infinite/>
     }
  
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9FA8DA'
  },
  btn: {
    width: 50,
    height: 40,
  },
});

export default App;


/*import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);*/