import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () =>{

    return <View style = {styles.viewStyle}>
        <Text style = {styles.textStyle}>Hello World</Text>
        <Text style = {styles.textStyle}>Hello World</Text>
        <Text style = {styles.textStyle}>Hello World</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        height:200,
        justifyContent:'center'
    },
    textStyle:{
        borderWidth: 4,
        borderColor: 'red',
    }
});

export default BoxScreen;