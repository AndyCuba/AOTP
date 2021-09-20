import React from 'react';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import styled from 'styled-components/native';

import BackgroundMusic from './src/components/BackgroundMusic/BackgroundMusic';
import Navigation from './src/components/Navigation/Navigation';
import store from './src/redux/store';

const StyledAppWrapper = styled(View)`
  flex: 1;
`;

export default function App() {
  let [fontsLoaded] = useFonts({
    'Karantina-Regular': require('./assets/fonts/Karantina-Regular.ttf'),
    'Underdog': require('./assets/fonts/Underdog-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#FFFFFF" />;
  };

  return(
    <Provider store={store}>
      <StyledAppWrapper>
        <Navigation />
        <BackgroundMusic />
      </StyledAppWrapper>
    </Provider>
  );
};

