import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView,FlatList} from 'react-native';
import HeaderRow from '../components/HeaderRow';
import ThiruScreen from './ThiruScreen';
import DrawerSubTitle from '../components/DrawerSubTitle';

 const PorulPal = probs =>{
    // static navigationOptions = {
    //   drawerLabel: 'Home',
    // //   drawerIcon: ({ tintColor }) => (
    // //     <Image
    // //       source={require('./assets/bg.jpg')}
    // //       style={[styles.icon, { tintColor: tintColor }]}
    // //     />
    // //   ),
    // };
    const filteredData = global.jsonThirukural.chapters.filter(function(num,index){
        return (index>=38 && index<=107)
    });
    const goThiruScreen =(index)=>{
        probs.navigation.navigate('Thiru',{index : index});
    };
    return <View>
        <SafeAreaView>
            <FlatList keyExtractor = {item => item}
            // data = {global.jsonThirukural.chapters}
            data = {filteredData}
            renderItem = {({item,index})=>{
                return(<HeaderRow title={item} index = {index} callBackFun = {()=>{goThiruScreen(index)}}/>);  
            }}/>
            
        </SafeAreaView>
    </View>
 };

 const styles = StyleSheet.create({
    
 });

 PorulPal.navigationOptions = {
    drawerLabel:  <DrawerSubTitle title = 'பொருட்பால்'/>,
 };

export default PorulPal;