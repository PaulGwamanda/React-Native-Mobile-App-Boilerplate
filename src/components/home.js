import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Button, View, ImageBackground, Image} from 'react-native';

class Home extends Component {
    // render the view
    render() {
      return (
        // <ImageBackground 
        // source={{ uri: './assets/splash.png'}} 
        // imageStyle={{resizeMode: 'cover'}}
        // style={{background: 'pink'}}
        // >
          <View style={ styles.container } >
            <Button 
              title={'Butt on3'}
              onPress={
                () => this.props.navigation.navigate('Page2')
              }
            />
          </View>
        // </ImageBackground>
      );
    }
  }
AppRegistry.registerComponent('Home', () => App);
export default Home;