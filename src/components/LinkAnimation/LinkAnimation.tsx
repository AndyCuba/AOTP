import { ReactChild, ReactChildren } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

interface ChildrenProps {
  children: ReactChild | ReactChildren;
}

export default function LinkAnimation({children}: ChildrenProps) {
  const bounce = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
  
  const scaleDown = Animated.timing(
    bounce, {
        toValue: 0.8,
        duration: 125,
        useNativeDriver: true,
        easing: Easing.back(2),
    }
  );

  const scaleUp = Animated.timing(
    bounce, {
        toValue: 1,
        duration: 125,
        useNativeDriver: true,
        easing: Easing.back(2),
    }
  );

  const handleTouch = () => {
    Animated.sequence([scaleDown, scaleUp]).start();
  };

  return (
    <Animated.View                 // Special animatable View
      style={{
        transform: [{ scale: bounce }],         // Bind opacity to animated value
      }}
      onTouchEnd={handleTouch}
    >
      {children}
    </Animated.View>
  );
};