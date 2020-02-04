import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView,FlatList} from 'react-native';
import HeaderRow from '../components/HeaderRow';
import ThiruScreen from './ThiruScreen';
import DrawerSubTitle from '../components/DrawerSubTitle';

 const ArathuPal = probs =>{
    // static navigationOptions = {
    //   drawerLabel: 'Home',
    // //   drawerIcon: ({ tintColor }) => (
    // //     <Image
    // //       source={require('./assets/bg.jpg')}
    // //       style={[styles.icon, { tintColor: tintColor }]}
    // //     />
    // //   ),
    // };
    const goThiruScreen =(index)=>{
        probs.navigation.navigate('Thiru',{index : index});
    };
    return <View>
        <SafeAreaView>
            <FlatList keyExtractor = {item => item}
            data = {global.jsonThirukural.chapters}
            renderItem = {({item,index})=>{
                if(index>=0 && index<=37)
                {
                return(<HeaderRow title={item} index = {index} callBackFun = {()=>{goThiruScreen(index)}}/>);
                }
            }}/>
            
        </SafeAreaView>
    </View>
 };

 const styles = StyleSheet.create({
    
 });

ArathuPal.navigationOptions = {
    drawerLabel:  <DrawerSubTitle title = 'அறத்துப்பால்'/>,
 };

export default ArathuPal;

