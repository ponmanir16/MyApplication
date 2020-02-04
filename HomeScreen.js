import * as React from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to MapScreen"
            onPress={() => this.props.navigation.navigate('geo')}
          />
          <Button title = "Go to CountScrenn"
          onPress={() => this.props.navigation.navigate('countScr')}/>
          <Button title = "Go to ColorScreen"
          onPress = {()=> this.props.navigation.navigate('colorScr')}/>
          <Button title = "Go to SquareScreen"
          onPress = {()=> this.props.navigation.navigate('squareScr')}/>
          <Button title = "Go to TextScreen"
          onPress = {()=> this.props.navigation.navigate('textScr')}/>
          <Button title = "Go to BoxScreen"
          onPress = {()=> this.props.navigation.navigate('boxScr')}/>
          <Button title = "Go to loginScreen"
          onPress = {()=> this.props.navigation.navigate('loginScr')}/>
          <Button title = "Go to BusinessScreen"
          onPress = {()=> this.props.navigation.navigate('searchScr')}/>
          <Button title = "Go to FadeScreen"
          onPress = {()=> this.props.navigation.navigate('fadeScr')}/>
          <Button title = "Go to Infinte"
          onPress = {()=> this.props.navigation.navigate('infiniteScr')}/>
          <Button title = "Go to MultiAnimation"
          onPress = {()=> this.props.navigation.navigate('mycompScr')}/>
        </View>
      );
    }
  }

  export default HomeScreen;