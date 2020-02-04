import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import Row from "../components/Row";
const ThiruScreen = (probs) => {
    const { navigation } = probs;
    const index = navigation.getParam('index', 'NO-ID')  
    var data_filter = global.jsonThirukural.kurals.filter(
        element => element.chapter == global.jsonThirukural.chapters[index]);
    const goThiruFullScreen = (index)=>{
        probs.navigation.navigate('ThiruFul',{data : data_filter[index]});
    };
    return <View style={{flex:1}}>
        <SafeAreaView  style={styles.container}>
            <Text style={styles.txtTitleStyle}>{global.jsonThirukural.chapters[index]}</Text>
            <FlatList keyExtractor={item => item}
                data={data_filter}
                renderItem={({ item ,index}) => {
                    return (<Row textKuralLine1={item.kural[0]} textKuralLine2={item.kural[1]} 
                    index ={index}
                    callBackFun = {()=>{goThiruFullScreen(index)}}
                    />);
                }}/>
        </SafeAreaView>
    </View>
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'black',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
    },
    txtTitleStyle: {
        fontSize: 24,
        textAlign: 'center',
    }
});

export default ThiruScreen;