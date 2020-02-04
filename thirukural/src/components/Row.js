import React from 'react';
import {View, StyleSheet, Text,SafeAreaView,TouchableOpacity} from 'react-native';

const Row = ({textKuralLine1,textKuralLine2 ,index, callBackFun})=>{
    console.log(index);
    //curried function
    const onHeadingPressed = key => event => {
           callBackFun(key);
         }
    return <View style={styles.rowStyle}>
        <TouchableOpacity key = {index} onPress = {onHeadingPressed(index)}>
          <Text style={styles.txtStyle}>{textKuralLine1}</Text>
          <Text style={styles.txtStyle}>{textKuralLine2}</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    rowStyle:{
        // backgroundColor : 'blue',
        margin: 10,
        borderBottomColor: 'blue',
        borderBottomWidth: 0.5,
    },
    txtStyle:{
        fontSize : 18,
        color:'black'
    }
});

export default Row;