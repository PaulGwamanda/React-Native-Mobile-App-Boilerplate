export default createBottomTabNavigator({
    Page2 : {screen: Page2},
    Page3 : Page3,
    Page4 : Page4,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Page2') {
          iconName = "ios-globe";
        } else if (routeName === 'Page3') {
          iconName = "ios-chatbubbles";
        } else if (routeName === 'Page4') {
          iconName = "ios-mail";
        }
  
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      showIcon: true
      },
    }
  )
  