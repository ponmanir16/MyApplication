import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';

const HeaderRow = ({ title, index, callBackFun }) => {
    //curried function
    const onHeadingPressed = key => event => {
        callBackFun(key);
    }
    return <View style={styles.containerStyle}>
        <TouchableOpacity key={index} style={styles.btnStyle} onPress={onHeadingPressed(index)}>
            <Text style={styles.txtStyle}>{(index+1)+'. '+title}</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    containerStyle: {
        margin: 10,
        borderBottomColor: 'blue',
        borderBottomWidth: 0.5,
    },
    txtStyle: {
        fontSize: 24,
        color: 'black',
    },
    btnStyle: {
        // backgroundColor: 'blue',
    }
});

export default HeaderRow;