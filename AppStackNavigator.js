import { createAppContainer } from 'react-navigation';
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

const RootStack = createStackNavigator({
    Home: HomeScreen,
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
  },{
    initialRouteName:'Home',
    defaultNavigationOptions:{
      title:'React Native'
    }
  });
  
  const AppContainer = createAppContainer(RootStack); 

 export default AppContainer;