import React,{useState} from 'react'
import {View,StyleSheet,Button,Text} from 'react-native'

const CountScreen = () =>{
    /*//Wont do this because it doesn't change the component instead of using UseState
    let count = 0;*/
    // count and setcount is User Defined name
    const [count,setCount] = useState(0)
    return <View>
        <Button title='Increment' onPress = {
            ()=>{ 
               /* //Wont do this because it doesn't change the component instead of using UseState
                count++
                console.log(count) */
                setCount(count+1)
            }
        }/>
        <Button title='Decrement' onPress = {
            ()=>{
               /* //Wont do this because it doesn't change the component instead of using UseState
                count--
                console.log(count) */
                setCount(count-1)
            }
        }/>
        <Text>count : {count}</Text>
        </View>
}

const styles = StyleSheet.create({});
export default CountScreen;