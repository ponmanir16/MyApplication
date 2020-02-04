import React from 'react';
import {Image,Button,StyleSheet,View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import  GeoLoc from './GeoLoc';
import HomeScreen from './HomeScreen';
import CountScreen from './CountScreen';
import ColorScreen from './ColorScreen';
import SquareScreen from './SquareScreen';
import TextScreen from './TextScreen';
import BoxScreen from './BoxScreen';
import LoginPage from './loginPage';
import searchScreen from './src/screens/searchScreen';
import Fade from './Fade';
import Infinite from './Infinite';
import MyComponent from './MyComponent';
import Scale from './Scale';
import Anim from './Anim';
import ThiruScreen from './thirukural/src/screens/ThiruScreen';
import Row from './thirukural/src/components/Row';
import HeadingScreen from './thirukural/src/screens/HeadingScreen';
import CurriedFun from './CurriedFun';
import ThiruFullScreen from './thirukural/src/screens/ThiruFullScreen';
import ArathuPal from './thirukural/src/screens/ArathuPal';
import PorulPal from './thirukural/src/screens/PorulPal';
import KamathuPal from './thirukural/src/screens/KamathuPal';
import DrawerSubTitle from './thirukural/src/components/DrawerSubTitle';

// class MyHomeScreen extends React.Component {
//     static navigationOptions = {
//       drawerLabel: 'Home',
//       drawerIcon: ({ tintColor }) => (
//         <Image
//           source={require('./assets/bg.jpg')}
//           style={[styles.icon, { tintColor: tintColor }]}
//         />
//       ),
//     };
  
//     render() {
//       return (
//           <View>
//               <Button
//           onPress={() => this.props.navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//           </View>
        
//       );
//     }
//   }
  
//   class MyNotificationsScreen extends React.Component {
//     static navigationOptions = {
//       drawerLabel: 'Notifications',
//       drawerIcon: ({ tintColor }) => (
//         <Image
//           source={require('./assets/bg.jpg')}
//           style={[styles.icon, { tintColor: tintColor }]}
//         />
//       ),
//     };
  
//     render() {
//       return (
//           <View>
// <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Go back home"
//         />
//           </View>
        
//       );
//     }
//   }
  
//   const styles = StyleSheet.create({
//     icon: {
//       width: 24,
//       height: 24,
//     },
//   });
  
const RootStack = createStackNavigator({
  Thiru: ThiruScreen,
  ThiruFul: ThiruFullScreen,
  header: HeadingScreen,
 }
,{
  initialRouteName:'header',
  defaultNavigationOptions:{
    title:'திருக்குறள்'
  }
});
RootStack.navigationOptions = {
  drawerLabel: <DrawerSubTitle title = 'தலைப்பு'/>,
};
const ArramStack = createStackNavigator({
  Thiru: ThiruScreen,
  ThiruFul: ThiruFullScreen,
  header: ArathuPal,
 }
,{
  initialRouteName:'header',
  defaultNavigationOptions:{
    title:'அறத்துப்பால்'
  }
});
ArramStack.navigationOptions = {
  drawerLabel: <DrawerSubTitle title = 'அறத்துப்பால்'/>,
};
const PorulStack = createStackNavigator({
  Thiru: ThiruScreen,
  ThiruFul: ThiruFullScreen,
  header: PorulPal,
 }
,{
  initialRouteName:'header',
  defaultNavigationOptions:{
    title:'பொருட்பால்'
  }
});
PorulStack.navigationOptions = {
  drawerLabel: <DrawerSubTitle title = 'பொருட்பால்'/>,
};
const KamamStack = createStackNavigator({
  Thiru: ThiruScreen,
  ThiruFul: ThiruFullScreen,
  header: KamathuPal,
 }
,{
  initialRouteName:'header',
  defaultNavigationOptions:{
    title:'காமத்துப்பால்'
  }
});
KamamStack.navigationOptions = {
  drawerLabel: <DrawerSubTitle title = 'காமத்துப்பால்'/>,
};
  const MyDrawerNavigator = createDrawerNavigator({
    // curr:CurriedFun,
    // hi:Row,
    // Thiru: ThiruScreen,
    // header: HeadingScreen,
    // ThiruFul: ThiruFullScreen,
      header: RootStack,
    aramScr: ArramStack,
    porulScr:PorulStack,
    kamamScr: KamamStack,
   /* Home: HomeScreen,
    geo: GeoLoc,
    countScr: CountScreen,
    colorScr: ColorScreen,
    squareScr: SquareScreen,
    textScr: TextScreen,
    boxScr: BoxScreen,
    loginScr: LoginPage,
    searchScr: searchScreen,
    fadeScr: Fade,
    infiniteScr: Infinite,
    mycompScr: MyComponent,
    scaleScr: Scale,
    animScr: Anim*/
  });
  
  const AppDrawNavigator = createAppContainer(MyDrawerNavigator);

  export default AppDrawNavigator;