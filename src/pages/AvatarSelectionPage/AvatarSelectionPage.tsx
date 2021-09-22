import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useAppDispatch } from '../../hooks/reduxHooks';
import Constants from 'expo-constants';

import { StyledAvatarView } from './style';

export default function AvatarSelectionPage() {
    const dispatch = useAppDispatch();

    return(
        <StyledAvatarView paddingTop={Constants.statusBarHeight}>
            <StatusBar style="auto" hidden={true} />
        </StyledAvatarView> 
    );
};