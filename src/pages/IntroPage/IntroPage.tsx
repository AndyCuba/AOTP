import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../components/Navigation/Navigation';
import { MainHeading, StyledBackground, StyledIntroView, StyledLink } from './style';
import FadeInView from '../../components/FadeInView/FadeInView';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Intro'
>;

type Props = {
    navigation: ProfileScreenNavigationProp,
};

export default function IntroPage({navigation}: Props) {
    let [fontsLoaded] = useFonts({
        'Karantina-Regular': require('../../../assets/fonts/Karantina-Regular.ttf'),
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    //StatusBar is hidden in app.json
    return (
        <StyledIntroView>
            <StyledBackground
            source={require('../../../assets/welcome_screen_bg.gif')} 
            resizeMode='cover'
            >   
                <FadeInView>
                    <MainHeading fontFamily={'Karantina-Regular'}>ASHES OF THE PAST</MainHeading>
                </FadeInView>
                <Button title="Настройки" onPress={() => navigation.navigate('Settings')} />
            </StyledBackground>
            <StatusBar style="auto" hidden={true} />
        </StyledIntroView>
    );
};