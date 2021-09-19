import React from 'react';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import BackgroundMusic from './src/components/BackgroundMusic/BackgroundMusic';
import Navigation from './src/components/Navigation/Navigation';

const StyledAppWrapper = styled(View)`
  flex: 1;
`;

export default function App() {
  let [fontsLoaded] = useFonts({
    'Karantina-Regular': require('./assets/fonts/Karantina-Regular.ttf'),
    'Underdog': require('.//assets/fonts/Underdog-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#FFFFFF" />;
  };

  return(
    <StyledAppWrapper>
      <Navigation />
      <BackgroundMusic />
    </StyledAppWrapper>
  );
};

