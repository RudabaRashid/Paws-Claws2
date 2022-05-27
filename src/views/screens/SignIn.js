import React from 'react';
import { Button, Text, View, } from 'react-native';

import 'react-native-gesture-handler';
import {SafeAreaView, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../const/colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';




const SignIn =({navigation}) =>{
    return (

        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Image
                style={{width: 240, height: 240, alignSelf: 'center'}}
                source={require('../../assets/logo.png')}
              />
        {/* <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 32, color: COLORS.extra}}>
            PAWS AND CLAWS
          </Text>
        </View> */}

        <View style={{marginTop: 1}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', textAlign: 'center', color: COLORS.dark}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', textAlign: 'center', color: COLORS.light}}>
            Sign in to continue
          </Text>
        </View>
        
        <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={{marginTop: 15, position: 'absolute'}}
            />
            <TextInput placeholder="Email" style={{color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,}} />
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={{marginTop: 15, position: 'absolute'}}
            />
            <TextInput
              placeholder="Password"
              style={{
                color: COLORS.light,
                paddingLeft: 30,
                borderBottomWidth: 1,
                borderColor: COLORS.light,
                borderBottomWidth: 0.5,
                flex: 1,
                fontSize: 18,
              }}
              secureTextEntry
            />
          </View>
          <View style={{
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}onPress={()=>navigation.navigate("HomeScreen")}>
              Sign In
            </Text>
          </View>

          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{height: 1, width: 30, backgroundColor: '#a5a5a5'}}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={{height: 1, width: 30, backgroundColor: '#a5a5a5'}}></View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={{width: 20, height: 20, marginLeft: 5}}
                source={require('../../assets/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={{
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={{width: 20, height: 20, marginLeft: 5}}
                source={require('../../assets/google.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.dark, fontWeight: 'bold'}} 
            onPress={()=>navigation.navigate("SignUp")}>
              Sign up
            </Text>
          </TouchableOpacity>




        </View>


        
            </ScrollView>


{/*        my code 
            <View>
        <Text>SignInPage</Text>
        <Button title="SignIn" onPress={()=>navigation.navigate("HomeScreen")}></Button>
        <Button title="SignUp" onPress={()=>navigation.navigate("SignUp")}></Button>
            </View>*/}
        </SafeAreaView>

        











    );
};






export default SignIn;

