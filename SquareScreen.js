import React,{useState,useReducer} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import ColorCounter from './components/ColorCounter';
const COUNT_INCREAMENT = 15;
const reducer = (state,action)=>{
      //state === {red: number, green:number, blue: number};
      //action === {colorTochange:'red' || 'green' || 'blue', amount: 15 || -15}
      switch (action.colorTochange){
          case 'red':
              return (state.red + action.amount > 255 || state.red + action.amount <0) ? 
               state : {...state, red: state.red + action.amount};
          case 'green':
              return (state.green + action.amount > 255 || state.green + action.amount <0) ? 
              state : {...state, green: state.green + action.amount};
          case 'blue':
              return (state.blue + action.amount > 255 || state.blue + action.amount <0) ? 
              state : {...state, blue: state.blue + action.amount};
          default:
              return state;
      }
};
const SquareScreen = () =>{
   /* const[red, setRed] = useState(0);
    const[green, setGreen] = useState(0);
    const[blue, setBlue] = useState(0);
    
    const setColor = (color,change)=>{
        //color === 'Red','Green','Blue'
        //change === 15,-15
        console.log(color)
        switch(color){
            case 'Red':
                (red+change)>255 || (red+change)<0 ? null : setRed(red+change);
                return;
            case 'Green':
                (green+change)>255 || (green+change)<0 ? null : setGreen(green+change);
                return;
            case 'Blue':
                (blue+change)>255 || (blue+change)<0 ? null : setBlue(blue+change);
                return;
        }
    };*/
    const[state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0})
    return <View>
        <ColorCounter color = "Red"
        onIncrease = {()=> {
            // setColor('Red',COUNT_INCREAMENT)
            dispatch({colorTochange: 'red', amount: COUNT_INCREAMENT})
        }}
        onDecrease = {()=> {
            // setColor('Red',-1*COUNT_INCREAMENT)
            dispatch({colorTochange: 'red', amount: -1*COUNT_INCREAMENT})
        }}
        />
        <ColorCounter color = "Green"
        onIncrease = {()=> {
            // setColor('Green',COUNT_INCREAMENT)
            dispatch({colorTochange: 'green', amount: COUNT_INCREAMENT})
        }}
        onDecrease = {()=> {
            // setColor('Green',-1*COUNT_INCREAMENT)
            dispatch({colorTochange:"green", amount: -1*COUNT_INCREAMENT})
        }}
        />
        <ColorCounter color = "Blue"
        onIncrease = {()=> {
            // setColor('Blue',COUNT_INCREAMENT)
            dispatch({colorTochange:"blue", amount: COUNT_INCREAMENT})
        }}
        onDecrease = {()=> {
            // setColor('Blue',-1*COUNT_INCREAMENT)
            dispatch({colorTochange:"blue", amount: -1*COUNT_INCREAMENT})
        }}
        />
        <View style={{ width:150, height:150, backgroundColor: 'rgb('+state.red+','+state.green+','+state.blue+')' }}/>
    </View>;
};

const styles = StyleSheet.create({});

export default SquareScreen;