import React from 'react';
import {Text , View , StyleSheet , SafeAreaView} from 'react-native';

const ThiruFullScreen =(probs)=>{
    const { navigation } = probs;
    const data = navigation.getParam('data', 'NO-ID')  
    return <View>
        <SafeAreaView>
        <Text style={styles.txt1Style}>{data.chapter}</Text>
        <Text style={styles.txt2Style}>{data.kural[0]}</Text>
        <Text style={styles.txt3Style}>{data.kural[1]}</Text>
        <Text style={styles.txt4Style}>{data.meaning.ta_mu_va}</Text>
        <Text style={styles.txt5Style}>{data.meaning.ta_salamon}</Text>
        <Text style={styles.txt6Style}>{data.meaning.en}</Text>
        </SafeAreaView>
    </View>
};

const styles = StyleSheet.create({
    txt1Style:{
        fontSize: 20,
        margin: 10,
        textAlign:'center'
    },
    txt2Style:{
        fontSize: 20,
        marginHorizontal: 10,
        marginTop:10,
        marginBottom:5,
    },
    txt3Style:{
        fontSize: 20,
        marginHorizontal: 10,
        marginBottom:10,
    },
    txt4Style:{
        fontSize: 20,
        margin: 10,
    },
    txt5Style:{
        fontSize: 20,
        margin: 10,
    },
    txt6Style:{
        fontSize: 20,
        margin: 10,
    },
});

export default ThiruFullScreen;