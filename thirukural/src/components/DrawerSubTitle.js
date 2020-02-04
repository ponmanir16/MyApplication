import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const DrawerSubTitle = ({title})=>{
    return <View style = {styles.container}>
    <Text style={styles.txtStyle}>{title}</Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        margin:5,
        flex:1,
        height:50,
        alignItems:'flex-start',
        justifyContent:'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
    },
    txtStyle:{
        fontSize:24,
    },
});

export default DrawerSubTitle;