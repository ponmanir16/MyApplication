import React from 'react';
import {View,TouchableOpacity,Text,SafeAreaView} from 'react-native';

export default class CurriedFun extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        languageData: ["English","Hindi","Tamil","Telugu","Gujarati","Marathi","Panjabi"],
      };
    }

   //Curried function
   onPressHandler = key => event => {
      alert(key, event)
   }

    render() {
        return (
            <SafeAreaView >
                {this.state.languageData.map( (item,index) => {

                    //Invoke the curried function with the index as the argument for the key paremeter,
                    //which returns another function which is set as the onPress event handler
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress = {this.onPressHandler(index)}
                        >
                            <Text >{item}</Text>
                        </TouchableOpacity>
                    )}
                )}
            </SafeAreaView>
        )
    }
}