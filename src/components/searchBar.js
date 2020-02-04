import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onChangeTerm, onTermSubmit})=>{
    
    return <View style = {styles.backgroundStyle}>
        <Icon name='search' size={30} style={styles.iconStyle}/>
        <TextInput style = {styles.inputStyle} 
        placeholder='search'
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        // onChangeText = {newTerm => onChangeTerm(newTerm)}
        onChangeText = {onChangeTerm}
        onEndEditing = {onTermSubmit}/>
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal:15,
        borderRadius: 5,
        flexDirection:'row',
    },
    inputStyle:{
        flex:1,
        fontSize:18,
    },
    iconStyle:{
        alignSelf:'center',
    }
});

export default SearchBar;