import React, { Component } from 'react';
import { Platform } from "react-native";
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/Ionicons";

import { Button, StyleSheet, Text, View, Imag, Stylesheet, ImageBackground, TouchableHighlight} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    header: null
  };
    render() {
      return (
        <ImageBackground 
        source={require( './assets/bg.jpg')} 
        imageStyle='cover'
        style={{width: '100%', height: '100%'}}>

          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.box7}>
                  <Text style={[styles.textWhiteInBox, styles.TextHeadingSmall]}>{'Standard Bank'}</Text>
                  <Text style={[styles.textWhiteInBox, styles.TextHeading]}>{'Reporting to society'.toUpperCase()}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <TouchableHighlight
                onPress = { () => this.props.navigation.navigate("reportToSociety") }
                style={[styles.box, styles.box1]} 
                underlayColor= "#0C578C">
                  <Text style={styles.textWhiteInBox}>{'Why a report to society'.toUpperCase()}</Text>
              </TouchableHighlight>
              <View style={[styles.box, styles.box2]}>
                <Text style={styles.textWhiteInBox}>{'SEE'.toUpperCase()}</Text>
                <Text style={styles.textWhiteInBox}>{'Impact'.toUpperCase()}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.box, styles.box3]}>
                  <Text style={styles.textWhiteInBox}>{'About'.toUpperCase()}</Text>
                </View>
                <View style={[styles.box, styles.box4]}>
                  <Text style={styles.textWhiteInBox}>{'Environmental and social governance index'.toUpperCase()}</Text>
                </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.box, styles.box5]}>
                  <Text style={styles.textWhiteInBox}>{'Letter from our CEO'.toUpperCase()}</Text>
                </View>
                <View style={[styles.box, styles.box6]}>
                  <Text style={styles.textWhiteInBox}>{'Archive'.toUpperCase()}</Text>
                </View>
            </View>
            <View style={styles.row}>
              <TouchableHighlight onPress = { () => this.props.navigation.navigate("Newsroom")} underlayColor= "#0C578C">
                <View style={styles.circle}>
                <Icon
                  name={Platform.OS === "ios" ? "ios-globe" : "ios-globe"}
                  color="white"
                  size={25}
                />
                </View>
                <Text style={styles.circleText}>
                    Newsroom
                </Text>
              </TouchableHighlight>

              <View>
              <View style={styles.circle}>
                <Icon
                  name={Platform.OS === "ios" ? "ios-chatbubbles" : "ios-chatbubbles"}
                  color="white"
                  size={25}
                />
                </View>
                <Text style={styles.circleText}>
                    Let's talk
                </Text>
              </View>

              <View>
              <View style={styles.circle}>
                <Icon
                  name={Platform.OS === "ios" ? "ios-mail" : "ios-mail"}
                  color="white"
                  size={25}
                />
                </View>
                <Text style={styles.circleText}>
                    Contact us
                </Text>
              </View>
            </View> 
          </View>
        </ImageBackground>
      );
    }
  }

  class reportToSociety extends Component {
    render () {
      return (
        <View>
          <Button title="Button">
  
          </Button>
        </View>
      );
    }
  }
  class Newsrooom extends Component {
    static navigationOptions = {
      title: "Let's talk",
    };
    render() {
      return (
        <View style={ styles.container }> 
          <Button 
            title="Go to Page 4"
            onPress = {() => this.props.navigation.navigate('Page4')}
          />
        </View> 
      );
    }
  }
  class LetsTalk extends Component {
    static navigationOptions = {
      title: 'Contact  us',
    };
    render() {
      return (
        <View style={ styles.container }> 
          <Button 
            title="Go to Page 5"
            onPress = {() => this.props.navigation.navigate('Page5')}
          />
        </View> 
      );
    }
  }
  class ContactUs extends Component {
    static navigationOptions = {
      title: 'Page 5',
    };
    render() {
      return (
        <View style={ styles.container }> 
          <Button 
            title="Return Home"
            onPress = {() => this.props.navigation.navigate('Home')}
          />
        </View> 
      );
    }
  }

export const App = createStackNavigator(
  {
    Home : Home,
    reportToSociety : reportToSociety,
  },
  {
    initialRouteName : 'Home',
  },
);
  
  
  export default App;
// styles for the drawer navigation
// class Menu extends Component {
//   static navgiationOptions = {
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image 
//         source={require('./assets/menu-icon.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button 
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     )
//   }
// }

// create drawer navigation
// const MyApp = createDrawerNavigator({
//   Home: {
//     screen: Home,
//   },
//   Menu: {
//     screen: Menu
//   }
// })





// const BottomNav = createBottomTabNavigator ({
//   Home : Home,
//   Page2 : Page2,
//   Page3 : Page3,
//   Page4 : Page4,
//   Page5 : Page5,
// })


// export default createBottomTabNavigator({
//   Home : Home,
//   Page2 : Page2,
//   Page3 : Page3,
//   Page4 : Page4,
//   More : 'Page5'
// },
// {
//   navigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, horizontal, tintColor }) => {
//       const { routeName } = navigation.state;
//       let iconName; 
//        if (routeName === 'Home') {
//         iconName = "ios-home";
//       } else if (routeName === 'Page2') {
//         iconName = "ios-mail";
//       } else if (routeName === 'Page3') {
//         iconName = "ios-chatbubbles";
//       } else if (routeName === 'Page4') {
//         iconName = "ios-mail";
//       } else if (routeName === 'Page5') {
//         iconName = "ios-mail";
//       } else if (routeName === 'More') {
//         iconName = "ios-menu";
//       }

//       // You can return any component that you like here! We usually use an
//       // icon component from react-native-vector-icons
//       return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
//     },
//   }),
//   tabBarOptions: {
//     activeTintColor: 'black',
//     inactiveTintColor: 'grey',
//     showIcon: true
//     },
//   }
// )

// create the stylesheets
const styles = StyleSheet.create({
    sbgBackground: {
      flex: 1,
      flexDirection: 'row',
    },
    container : {
      flex : 1,
      alignItems : 'center',
      justifyContent: 'center',
    },
    textColor : {
      color: "black",
      fontSize: 8
    },
    textWhiteInBox : {
      color: "white",
      textTransform: "uppercase",
      textAlign: "center",
      fontSize: 10,
    },
    TextHeading : {
      fontSize: 16
    },
    TextHeadingSmall : {
      fontSize: 12
    },
    icon: {
      width: 21,
      height: 21,
    },
    backgroundImage: {
        backgroundColor: 'blue',
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    box: {
      width: '40%', 
      height: '80%', 
      backgroundColor: 'rgba(10, 34, 64, 0.75)',
      borderWidth: 1,
      borderColor: 'white',
      marginRight: 10,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    circle: {
      width: 50, 
      height: 50,
      borderRadius: 100/2,
      backgroundColor: 'rgba(126, 192, 238, 0.75)',
      borderWidth: 2,
      borderColor: 'white',
      marginRight: 10,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    circleText : {
      color: 'white',
      fontSize: 10,
      textAlign: "center",
    },
    box7: {
      height: 0,
      alignSelf: 'flex-start',
      marginTop: 70,
      justifyContent: 'center',
    }
  }
);