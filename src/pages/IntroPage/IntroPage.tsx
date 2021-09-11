import React, { useRef, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { MainHeading, StyledBackground, StyledIntroView } from './style';
import FadeInView from '../../components/FadeInView/FadeInView';

export default function IntroPage() {
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
            </StyledBackground>
            <StatusBar style="auto" hidden={true} />
        </StyledIntroView>
    );
};