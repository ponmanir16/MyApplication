import React,{useState} from 'react';
import {View,StyleSheet, Button,Text,Dimensions,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { getDistance } from 'geolib';
const{width,height} = Dimensions.get('window');
const GeoLoc = props => {
    let userLocationMarker = null
    let pramatiLoc = {
           latitude:12.957786299999999,
           longitude:80.2446721,
           latitudeDelta: 0.015*0.05,
           longitudeDelta: 0.0121*0.05,
    }
    const[userLoc,setUserLoc] = useState(null)
    if (userLoc){
      userLocationMarker = <MapView.Marker coordinate={userLoc} />;
    }
    
    const getUserLocation = () =>{
        console.log("get Location")
        Geolocation.getCurrentPosition(info => {
         fbDatabaseStore("Location/Pramati/Ponmani", info)
          let dist = getDistance({latitude: info.coords.latitude,
          longitude: info.coords.longitude},
          {latitude: 12.957786299999999,longitude: 80.2446721})
            //{latitude: 12.958747,longitude: 80.244935}
           // {latitude: 12.958289,longitude: 80.244462} pramati
           if(dist > 75){
             alert('You are Not at Pramati dist is '+dist);
           }
           else{
             console.log(dist)
             alert('Welocome to Pramati dist is '+dist);
           setUserLoc({...userLoc ,
           latitude:info.coords.latitude,
           longitude:info.coords.longitude,
           latitudeDelta: 0.015*0.05,
           longitudeDelta: 0.0121*0.05,
          })
        }
        })
    }
    const fbDatabaseStore = (path, loc) =>{
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
    const pinColor='#000000'
    return (
      <View style = {styles.container} accessible={true}>
        <Text style = {styles.titleStyle}>Attendence</Text>
        <TouchableOpacity style={styles.btnStyle} onPress = {getUserLocation}>
          <Text style={styles.btnTextStyle}>GetLocation</Text>
        </TouchableOpacity>
        {/* <Button title = 'GetLocation' onPress = {()=> getUserLocation()}/> */}
        <MapView
        style={ styles.map }
        initialRegion={{
          latitude: 12.957786299999999,
          longitude: 80.2446721,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region = {userLoc}>
          {userLocationMarker}
         <MapView.Marker  coordinate={pramatiLoc}/>
         <MapView.Circle
        center={{
          latitude: 12.957786299999999,
          longitude: 80.2446721,
        }}
        radius={20}
        strokeWidth={2}
        strokeColor="#3399ff"
        fillColor="#80bfff"
      />
          </MapView>
      </View>
      
    );

}

export default GeoLoc;

const styles = StyleSheet.create({
  container: {
   backgroundColor:'white',
  },
  map: {
    width : '95%',
    height : '100%',
    margin : 10,
  },
  btnStyle:{
    backgroundColor: "blue",
    margin:10,
    height:40,
    alignItems:'center',
    justifyContent:'center',
  },
  btnTextStyle:{
    color:'white',
  },
  titleStyle:{
    color:'blue',
    fontSize: 24,
    margin:10,
    alignSelf:'center',
  }
});
