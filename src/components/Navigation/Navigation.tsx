import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationState } from '@react-navigation/native'

import IntroPage from '../../pages/IntroPage/IntroPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';
import AvatarSelectionPage from '../../pages/AvatarSelectionPage/AvatarSelectionPage';

export type RootStackParamList = {
    Intro: undefined,
    Settings: undefined,
    Avatar: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
    const [screenId, setScreenId] = useState(0);

    const handleRouteChange = (state: any) => {
        setScreenId(state.index);
    };

    return(
        <NavigationContainer onStateChange={handleRouteChange}>
            <Stack.Navigator 
                screenOptions={{ 
                    headerShown: false, 
                    animation: "slide_from_right", 
                    presentation: "transparentModal",
                }} 
            >
                <Stack.Screen name="Intro" component={IntroPage}  />
                <Stack.Screen name="Settings" component={SettingsPage} />
                <Stack.Screen name="Avatar" component={AvatarSelectionPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};