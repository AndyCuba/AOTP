import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { MainHeading, StyledBackground, StyledView } from './globalStyle';

export default function App() {
  //StatusBar is hidden in app.json
  return (
    <StyledView >
      <StyledBackground 
        source={require('./assets/welcome_screen_bg.gif')} 
        resizeMode='cover'
      >
        <MainHeading>Привет</MainHeading>

        </StyledBackground>
      <StatusBar style="auto" hidden={true} />
    </StyledView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
