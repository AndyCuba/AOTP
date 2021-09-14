import { ReactChild, ReactChildren } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

interface ChildrenProps {
  children: ReactChild | ReactChildren;
}

export default function FadeInView({children}: ChildrenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
        fadeAnim, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true, 
        }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View                 // Special animatable View
      style={{
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {children}
    </Animated.View>
  );
};