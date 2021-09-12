import React from 'react';
import { StatusBar } from 'expo-status-bar';

import FadeInView from '../../components/FadeInView/FadeInView';
import { StyledBackground, StyledIntroView } from '../IntroPage/style';
import { Button, Text } from 'react-native';

export default function SettingsPage({navigation}: any) {

    return(
        <StyledIntroView>
            <StyledBackground
            source={require('../../../assets/welcome_screen_bg.gif')} 
            resizeMode='cover'
            >   
                <FadeInView>
                    <Text>Settings</Text>
                </FadeInView>
                <Button title="В меню" onPress={() => navigation.navigate('Intro')} />
            </StyledBackground>
            <StatusBar style="auto" hidden={true} />
        </StyledIntroView> 
    );
};