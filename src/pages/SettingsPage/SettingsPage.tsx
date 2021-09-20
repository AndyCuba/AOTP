import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Button, Switch } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../components/Navigation/Navigation';
import FadeInView from '../../components/FadeInView/FadeInView';
import { StyledSettingsView, StyledSettingsWrapper } from './style';
import AppText from '../../components/AppText/AppText';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { musicSelector } from '../../redux/reducers/musicReducer/musicSelectors';
import { toggleMusic } from '../../redux/reducers/musicReducer/musicReducer';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

type Props = {
    navigation: ProfileScreenNavigationProp,
};

export default function SettingsPage({navigation}: Props) {
    const dispatch = useAppDispatch();
    const isMusicPlaying = useAppSelector(musicSelector);

    const handleMusicChange = () => {
        dispatch(toggleMusic());
    };

    return(
        <StyledSettingsView paddingTop={Constants.statusBarHeight}>
            <StatusBar style="auto" hidden={true} />
            {/* <FadeInView> */}
                <StyledSettingsWrapper>
                    <AppText>Settings</AppText>
                    <AppText>Music:</AppText>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f4f3f4" }}
                        thumbColor={isMusicPlaying ? "#46b000" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        value={isMusicPlaying}
                        onValueChange={handleMusicChange} />
                    <Button title="В меню" onPress={() => navigation.navigate('Intro')} />
                </StyledSettingsWrapper>
            {/* </FadeInView> */}
        </StyledSettingsView> 
    );
};