import React,{useState}from 'react';
import {Button,Text,View,StyleSheet,FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors,setColors] = useState([])
    console.log(colors)
return <View>
    <Button title='Add a Color' onPress={()=>{
        setColors([...colors,randomColor()])
    }}/>
    
    <FlatList 
       keyExtractor = {item => item}
       data = {colors}
       renderItem = {({item})=>{
           return(
        <View style = {{width : 100, height : 100, backgroundColor : item }} />);
       }}
    />
</View>
}
const randomColor = () =>{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    console.log('rgb('+red+','+green+','+blue+')')
    // return 'rgb(${red},${green},${blue})';//Oops its not working ...consider it in future
    return 'rgb('+red+','+green+','+blue+')'
}
const styles = StyleSheet.create({});

export default ColorScreen;