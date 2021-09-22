import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import { 
    StyledBackground, 
    StyledHeading, 
    StyledMusicSwitch, 
    StyledSettingsView, 
    StyledSettingsWrapper, 
    StyledSwitch } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { musicSelector } from '../../redux/reducers/musicReducer/musicSelectors';
import { toggleMusic } from '../../redux/reducers/musicReducer/musicReducer';
import { StyledLink, StyledLinkText } from '../IntroPage/style';

export default function SettingsPage() {
    const dispatch = useAppDispatch();
    const isMusicPlaying = useAppSelector(musicSelector);

    const handleMusicChange = () => {
        dispatch(toggleMusic());
    };

    return(
        <StyledSettingsView paddingTop={Constants.statusBarHeight}>
            <StatusBar style="auto" hidden={true} />
                <StyledSettingsWrapper>
                    <StyledBackground 
                        source={require('../../../assets/settings_bg.jpeg')} 
                        resizeMode='cover'
                        borderRadius={10}
                    >
                        <StyledHeading>Настройки</StyledHeading>
                        <StyledMusicSwitch>
                            <StyledLinkText>Музыка:</StyledLinkText>
                            <StyledSwitch
                                trackColor={{ false: "#767577", true: "#f4f3f4" }}
                                thumbColor={isMusicPlaying ? "#46b000" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                value={isMusicPlaying}
                                onValueChange={handleMusicChange}
                            />
                        </StyledMusicSwitch>
                        <StyledLink to="/Intro">
                            <StyledLinkText>В меню</StyledLinkText>
                        </StyledLink>
                    </StyledBackground>
                </StyledSettingsWrapper>
        </StyledSettingsView> 
    );
};