import React,{useState} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import SearchBar from '../components/searchBar';

const searchScreen = ()=>{
    const[term,setTerm] = useState('');
    return <View style={{backgroundColor:'white'}}>
        <SearchBar term={term} 
        onChangeTerm={(newTerm)=> setTerm(newTerm)} 
        onTermSubmit={()=>console.log('term was submitted')}/>
        <Text>searchScreen</Text>
        <Text>{term}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default searchScreen;