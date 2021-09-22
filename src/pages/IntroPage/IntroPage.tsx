import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { 
    MainHeading, 
    StyledBackground, 
    StyledIntroView,
    StyledLink, 
    StyledLinkText 
} from './style';
import FadeInView from '../../components/FadeInView/FadeInView';
import LinkAnimation from '../../components/LinkAnimation/LinkAnimation';

export default function IntroPage() {
  
    //StatusBar is hidden in app.json
    return (
        <StyledIntroView>
            <StyledBackground
            source={require('../../../assets/welcome_screen_bg.gif')} 
            resizeMode='cover'
            >   
                <FadeInView>
                    <MainHeading>ASHES OF THE PAST</MainHeading>
                </FadeInView>
                <LinkAnimation>
                    <StyledLink to="/Story">
                        <StyledLinkText>Игра</StyledLinkText>
                    </StyledLink>
                </LinkAnimation>
                <LinkAnimation>
                    <StyledLink to="/Settings">
                        <StyledLinkText>Настройки</StyledLinkText>
                    </StyledLink>
                </LinkAnimation>
            </StyledBackground>
            <StatusBar style="auto" hidden={true} />
        </StyledIntroView>
    );
};