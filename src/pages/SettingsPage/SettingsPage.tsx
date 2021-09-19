import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Button, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../components/Navigation/Navigation';
import FadeInView from '../../components/FadeInView/FadeInView';
import { StyledSettingsView } from './style';
import AppText from '../../components/AppText/AppText';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

type Props = {
    navigation: ProfileScreenNavigationProp,
};

export default function SettingsPage({navigation}: Props) {

    return(
        <StyledSettingsView paddingTop={Constants.statusBarHeight}>
            <FadeInView>
                <AppText>Settings</AppText>
            </FadeInView>
            <Button title="В меню" onPress={() => navigation.navigate('Intro')} />
            <StatusBar style="auto" hidden={true} />
        </StyledSettingsView> 
    );
};