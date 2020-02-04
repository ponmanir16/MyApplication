import React,{useState} from 'react';
import {Button,View,StyleSheet,TextInput,Text} from 'react-native';

const TextScreen = ()=>{
    const[name, setName] = useState('')

    return <View>
        <Text>Enter the Text</Text>
        <TextInput style = {styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value = {name}
        onChangeText = {newValue => setName(newValue)}/>   

        {name.length > 3 ? <Text>My name is {name}</Text> : null}

    </View>
};

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderWidth:1,
        borderColor:'black',
    }
});

export default TextScreen;