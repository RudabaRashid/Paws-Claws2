import React from 'react';
import { Button, Text, View, } from 'react-native';


import {
  Dimensions,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




const SplashScreen =({navigation}) =>{
    return (
        <View>
        <Text>Splash Screen</Text>
        <Button title="Splash Screen" onPress={()=>navigation.navigate("SignIn")}></Button>
    </View>
    );
};


export default SplashScreen;

