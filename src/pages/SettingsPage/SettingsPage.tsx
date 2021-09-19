import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../components/Navigation/Navigation';
import FadeInView from '../../components/FadeInView/FadeInView';
import { StyledBackground, StyledIntroView } from '../IntroPage/style';
import { Button, Text } from 'react-native';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

type Props = {
    navigation: ProfileScreenNavigationProp,
};

export default function SettingsPage({navigation}: Props) {

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