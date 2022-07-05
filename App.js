import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './src/views/navigators/DrawerNavigator';
import DetailsScreen from './src/views/screens/DetailsScreen';
import SignIn from './src/views/screens/SignIn';
import HomeScreen from './src/views/screens/HomeScreen';
import SignUp from './src/views/screens/SignUp';
import UserProfile from './src/views/screens/UserProfile';
import SplashScreen from './src/views/screens/SplashScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
