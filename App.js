
/*import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
export default function App(){
    return(
         <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}} >
        <Stack.Screen>
        <View styles ={{height: 100,width: 100,backgroundColor:'orange'}}>
            <Text>Hello World</Text>

        </View>
        </Stack.Screen>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container : {
            flex :1,
            backgroundColor:'#fff',
            alignItems: 'center',
            justifyContent:'center',
    },
});*/


import { useState} from 'react';
import{ view, ScrollView,SafeAreaView, Dimensions} from 'react-native';
import {Stack,useRouter} from 'expo-router';

import{COLORS,icons,images,SIZES} from '../constants';

import{Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';
import { View } from 'react-native-web';



const Home = () =>{

    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}} >
       
           <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl ={icons.menu} Dimension="60%"/>
                     ),

                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl ={icons.profile} Dimension="100%"/>
                         ),
    
        
                
            }}
            /> 

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex:1,
                    padding:SIZES.medium
                }}>

                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                  </View>

            </ScrollView>
        </SafeAreaView>
     )
}

export default Home;