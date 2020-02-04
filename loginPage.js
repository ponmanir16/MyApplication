import React,{useState, useReducer} from 'react';
import {View,TextInput,Text,StyleSheet,Dimensions, Button,Image,TouchableOpacity} from 'react-native';
import firebase from 'firebase';

const {width,height} = Dimensions.get('window');

const LoginPage = probs =>{
    const[mail,setMail] = useState('');
    const[pass,setPass] = useState('');
    const loginPressed = ()=>{
        var ref = firebase.database().ref();
        var logJson = null
        ref.on("value", function(snapshot) {
            logJson = snapshot
        
        }, function (error) {
            console.log("Error: " + error.code);
            });
            console.log(pass);
            if(logJson && logJson.val().Location.name === mail && logJson.val().Location.password.toString() === pass)
            {
            probs.navigation.navigate('geo')
            }
            else{
                alert('Login Failed')
            }
    };

    return <View style = {styles.viewStyle}>
        <Image source={require('./assets/pramati.png')} style = {styles.imgStyle}/>
        <TextInput style = {styles.inputStyle} 
                   placeholder='Email Id'
                   autoCapitalize='none'
                   onChangeText = {text=>setMail(text)}/>
        <TextInput style = {styles.inputStyle} 
                   placeholder='PassWord'
                   secureTextEntry={true}
                   onChangeText = {text=> setPass(text)}/>
        <TouchableOpacity style = {styles.btnStyle} onPress={loginPressed}>
            <Text style= {styles.btnTextStyle}>Login</Text>
        </TouchableOpacity>
        {/* <Button style = {styles.btnStyle} title='Login' onPress = {()=> loginPressed()}/> */}
    </View>
};

const styles = StyleSheet.create({
    viewStyle:{
        justifyContent:'flex-start',
        alignItems:'stretch',
        height: height,
        backgroundColor: 'white',
    },
    inputStyle : {
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        margin: 10,
        fontSize: 18,
    },
    btnStyle:{
        height: 50,
        margin:10,
        color: 'white',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextStyle:{
        color: 'white',
    },
    imgStyle:{
        marginTop: 60,
        alignSelf: 'center',
        marginBottom: 40,
    }
});

export default LoginPage;