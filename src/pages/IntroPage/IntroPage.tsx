import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Button, Text } from 'react-native';

import { MainHeading, StyledBackground, StyledIntroView, StyledLink } from './style';
import FadeInView from '../../components/FadeInView/FadeInView';

export default function IntroPage({navigation}: any) {
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