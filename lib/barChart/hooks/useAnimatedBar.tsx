import {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

export type AnimationType = 'spring' | 'timing';

interface AnimationConfig {
  type: AnimationType;
  initialValue?: number;
  // Spring config
  friction?: number;
  tension?: number;
  // Timing config
  duration?: number;
  easing?: (value: number) => number;
}

const DEFAULT_CONFIG = {
  spring: {
    friction: 6,
    tension: 40,
  },
  timing: {
    duration: 500,
    easing: Easing.ease,
  },
};

export const useBarAnimation = (
  finalValue: number,
  config: AnimationConfig,
) => {
  const animatedValue = useRef(
    new Animated.Value(config.initialValue ?? 0),
  ).current;
  console.log(config.friction, config.tension);
  useEffect(() => {
    let animation;

    switch (config.type) {
      case 'spring':
        animation = Animated.spring(animatedValue, {
          toValue: finalValue,
          useNativeDriver: true,
          friction: config.friction ?? DEFAULT_CONFIG.spring.friction,
          tension: config.tension ?? DEFAULT_CONFIG.spring.tension,
        });
        break;

      case 'timing':
        animation = Animated.timing(animatedValue, {
          toValue: finalValue,
          useNativeDriver: true,
          duration: config.duration ?? DEFAULT_CONFIG.timing.duration,
          easing: config.easing ?? DEFAULT_CONFIG.timing.easing,
        });
        break;
    }

    animation.start();

    return () => {
      animation.stop();
    };
  }, [finalValue, config, animatedValue]);

  return animatedValue;
};
